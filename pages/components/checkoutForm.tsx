import axios from 'axios';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Form, Button, Modal } from 'react-bootstrap';
import {useElements, useStripe, Elements, CardElement} from '@stripe/react-stripe-js';
import {DangerFlash} from './flashMessage';
import { useState, useEffect } from 'react';
import { clearItems } from '../actions/cart';

const CardContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 20rem;
    margin-bottom: 1rem;

    & .StripeElement {
        width: 100%;
    }
    
`

const CheckoutForm = ({show, updateShowCheckout, handleCheckoutFlash, total, reduxClearItems}) => {
    let [checkoutError, updateCheckoutError] = useState('');
    const elements = useElements();
    const stripe = useStripe();


    const handleClose = () => updateShowCheckout(false);

    const handleCheckout = async (event) => {
        event.preventDefault();
        console.log("FOrm SUBMIT: ", event.target.name.value);

        const billingDetails = {
            name: event.target.name.value,
            email: event.target.email.value,
            address: {
                line1: event.target.address.value,
                city: event.target.city.value,
                state: event.target.state.value,
            }
        }

        axios.post('/cart/checkout', 
            {
                amount: total*100
            }
        )
        .then(async (response) => {
            const clientSecret = response.data;
            const cardElement = elements.getElement(CardElement);

            const paymentMethodReq = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: billingDetails
            });

            if (paymentMethodReq.error) {
                updateCheckoutError(paymentMethodReq.error.message);
                return;
            }
            // Get Status of payment intent
            const {paymentIntent, error} = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethodReq.paymentMethod.id
            })

            if (error) {
                console.log(error)
            }
            else if (paymentIntent) {
                console.log('PAYMENT INTENTS: ', paymentIntent);
                handleCheckoutFlash('Successful Checkout');
                updateShowCheckout(false);
                reduxClearItems();
            }


        }, (error) => {
            updateCheckoutError(error.message)
        })

    }

    


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-column bg-secondary justify-content-center align-items-center card card-body">
                    <h2 className="text-success border border border-light rounded p-1">Cart Total: ${total}</h2>
                    <Form className="d-flex text-light flex-column"onSubmit={handleCheckout}>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name="name" placeholder="Jane Doe"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="example@gmail.com"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="address" placeholder="1234 Apple Way"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control name="city" placeholder="San Francisco"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control name="state" placeholder="California"/>
                        </Form.Group>
                        <CardContainer>
                            <CardElement 
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: 'white',
                                                '::placeholder': {
                                                color: 'white',
                                                },
                                                iconColor: 'white',
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                ></CardElement>
                        </CardContainer>
                        {checkoutError && <DangerFlash message={checkoutError}/>}
                        <Button className="font-weight-bold" variant="info" type="submit">Checkout</Button>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
        
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        reduxClearItems: () => { dispatch(clearItems()); },
    };
};


export default connect(null, mapDispatchToProps)(CheckoutForm);