import { Form, FormGroup, FormLabel, FormControl, FormText, Button, Alert, Col } from "react-bootstrap";
import CartList from "./components/cartList";
import Layout from "./layout";
import { clearItems } from "./actions/cart";
import { login } from './actions/auth';
import { connect } from "react-redux";
import { store } from "./store/store";
import { useEffect } from "react";
import Router from "next/router";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);


const Cart = (props) => {

    useEffect(() => {
        Router.push('/cart', '/cart', {shallow: true});
    }, []);

    useEffect(() => {
       console.log('NEW PROPS, ', props.query.flashMessage);
    }, [props.query.flashMessage])

    return (
        <Layout>
            {(parent) => 
                <div className="d-flex flex-column align-items-center">
                    <h1>{props.query.flashMessage}'s Cart</h1>
                    <div>
                    </div>
                    <Col md={6} className="mx-auto">
                        <Elements stripe={stripePromise}>
                            <CartList flashMessage={props.query.flashMessage}/>
                        </Elements>
                    </Col>
                </div>
            }   
        </Layout>
    )
}

Cart.getInitialProps = async (context) => {
    let query = context.query;
    return {query};
}




export default Cart;
