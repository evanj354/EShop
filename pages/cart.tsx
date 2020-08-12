import { Form, FormGroup, FormLabel, FormControl, FormText, Button, Alert, Col } from "react-bootstrap";
import CartList from "./components/cartList";
import Layout from "./layout";
import { clearItems } from "./actions/cart";
import { login } from './actions/auth';
import { connect } from "react-redux";
import { store } from "./store/store";
import { useEffect } from "react";
import Router from "next/router";


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
                        <CartList flashMessage={props.query.flashMessage}/>
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
