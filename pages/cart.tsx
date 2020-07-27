import { Form, FormGroup, FormLabel, FormControl, FormText, Button, Alert, Col } from "react-bootstrap";
import CartList from "./components/cartList";
import Layout from "./layout";
import { clearItems } from "./actions/cart";
import { connect } from "react-redux";
import { store } from "./store/store";


const Cart = (props) => {
    console.log('CART PROPS', props);
    return (
        <Layout>
            {(parent) => 
                <div className="d-flex flex-column align-items-center">
                    <h1>Cart</h1>
                    <div>
                    </div>
                    <Col md={6} className="mx-auto">
                        <CartList/>
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
