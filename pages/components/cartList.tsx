import { connect } from 'react-redux';
import styled from 'styled-components';
import CartItem from './cartItem';
import { clearItems, clearItem, updateItems } from '../actions/cart';
import { login } from '../actions/auth';
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SuccessFlash } from './flashMessage';
import {useElements, useStripe, Elements, CardElement} from '@stripe/react-stripe-js';


 
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

const CartList = (props) => {
    let [showFlash, updateShowFLash] = useState(false);
    const elements = useElements();

    
    const handleSaveCart = () => {
        axios.post('/cart/addAll', {
            items: props.items
        })
        .then((response) => {
            updateShowFLash(true);
            setTimeout(() => {updateShowFLash(false)}, 1000);
        })
    }

    

    const loadCart = () => {
        axios.get('/cart/getAll')
        .then((response) => {
            console.log('LOAD ITEMS ', response.data.items);
            props.reduxUpdateItems(response.data.items);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleCheckout = async (event) => {
        event.preventDefault();
        console.log("FOrm SUBMIT: ", event.target.name.value);

        const billingDetails = {
            name: event.target.name.value,
            email: event.target.email.value,
            address: {
                line: event.target.address.value,
                city: event.target.city.value,
                state: event.target.state.value,
                postal_code: event.target.zip.value
            }
        }

        axios.post('/checkout', 
            {
                amount: 500
            }
        )
        .then((response) => {
            const client_secret = response.data;
            const cardElement = elements.getElement(CardElement);
            console.log(client_secret);
        }, (error) => {
            console.log(error);
        })

    }

    useEffect(() => {
        console.log('CARTLIST PROPS: ', props);
        props.reduxAuthenticate();
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Button onClick={() => props.reduxClearItems()} variant="outline-danger">Clear Cart</Button>
                <Button onClick={() => loadCart()} variant="outline-primary">Load Cart</Button>
                <Button onClick={() => handleSaveCart()} variant="outline-success">Save Cart</Button>
            </div>
            <SuccessFlash message="Items Saved to Cart" class="mt-3" visible={showFlash} timeout={1000}/>
            { props.items.length > 0 ? props.items.map((item, i) => 
                <CartItem key={i} {...item} index={i} reduxClearItem={props.reduxClearItem}/>
            ) 
            :
            <div className="d-flex justify-content-center">
                <h2>Cart is empty</h2>
            </div>
           
            }
             <div className="d-flex flex-column bg-secondary justify-content-center align-items-center card card-body">
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
                        <Form.Group>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control name="zip" placeholder="94040"/>
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
                        <Button className="font-weight-bold" variant="outline-info" type="submit">Checkout</Button>
                    </Form>
                    <h2>Total: $25</h2>
                    

            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reduxClearItem: (index) => { dispatch(clearItem(index)); },
        reduxUpdateItems: (items) => { dispatch(updateItems(items)); },
        reduxClearItems: () => { dispatch(clearItems()); },
        reduxAuthenticate: () => { dispatch(login()); }
    };
};


//Export the React + Redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(CartList);