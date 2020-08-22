import { connect } from 'react-redux';
import styled from 'styled-components';
import CartItem from './cartItem';
import { clearItems, clearItem, updateItems } from '../actions/cart';
import { login } from '../actions/auth';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SuccessFlash } from './flashMessage';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);
const CardContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;

    & .StripeElement {
        width: 100%;
    }
    
`

const CartList = (props) => {
    let [showFlash, updateShowFLash] = useState(false);
    
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

    const checkoutCart = () => {

    }

    useEffect(() => {
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
             <div className=" d-flex flex-column justify-content-center align-items-center card card-body">
                <Elements stripe={stripePromise}>
                    <CardContainer>
                        <CardElement 
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '000',
                                            '::placeholder': {
                                            color: '000',
                                            },
                                    
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            ></CardElement>
                    </CardContainer>
                        
                    <h2>Total: $25</h2>
                    <Button onClick={() => checkoutCart()} variant="outline-info">Checkout</Button>
                </Elements>

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