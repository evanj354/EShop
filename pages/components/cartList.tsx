import { connect } from 'react-redux';
import CartItem from './cartItem';
import { clearItems, clearItem, updateItems } from '../actions/cart';
import { login } from '../actions/auth';
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { SuccessFlash } from './flashMessage';
import axios from 'axios';
import CheckoutForm from './checkoutForm';


 


const CartList = (props) => {
    let [showFlash, updateShowFLash] = useState(false);
    let [showCheckout, updateShowCheckout] = useState(false);
    let [cartTotal, updateCartTotal] = useState(0);
    let [checkoutFlashMessage, updateCheckoutFlashMessage] = useState('');
    
    const handleSaveCart = () => {
        axios.post('/cart/addAll', {
            items: props.items
        })
        .then((response) => {
            updateShowFLash(true);
            setTimeout(() => {updateShowFLash(false)}, 1000);
        })
    }

    const handleCheckoutFlash = (message) => { 
        updateCheckoutFlashMessage(message); 
        setTimeout(() => {updateCheckoutFlashMessage('')}, 5000);
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

    
    useEffect(() => {
        const total = props.items.map(item => parseFloat(item.price.substring(1).replace(/,/g, '')))
        console.log(total)
        updateCartTotal(total.reduce((a, b) => a + b, 0));
    }, [props.items]);

    useEffect(() => {
        console.log('CARTLIST PROPS: ', props);
        props.reduxAuthenticate();
    }, [])

    return (
        <div className="d-flex flex-column justify-content-center">
            
            <div className="d-flex justify-content-between">
                <Button onClick={() => props.reduxClearItems()} className="font-weight-bold" variant="outline-danger">Clear Cart</Button>
                <Button onClick={() => loadCart()} className="font-weight-bold" variant="outline-primary">Load Cart</Button>
                <Button onClick={() => handleSaveCart()} className="font-weight-bold" variant="outline-success">Save Cart</Button>
            </div>
            <div className="text-center mt-3 ">
                <h2 className="text-dark">Total: ${cartTotal}</h2>
                <Button onClick={() => updateShowCheckout(true)} className="font-weight-bold" variant="outline-info" type="submit">Checkout</Button>
                <SuccessFlash 
                    message={checkoutFlashMessage} 
                    className='my-3'
                    visible={checkoutFlashMessage ? true : false}
                />
            </div>

            <SuccessFlash message="Items Saved to Cart" className="mt-2" visible={showFlash}/>
            { props.items.length > 0 ? props.items.map((item, i) => 
                <CartItem key={i} {...item} index={i} reduxClearItem={props.reduxClearItem}/>
            ) 
            :
            <div className="d-flex justify-content-center">
                <h2>Cart is empty</h2>
            </div>
           
            }
            <CheckoutForm 
                show={showCheckout} 
                updateShowCheckout={updateShowCheckout}
                handleCheckoutFlash={handleCheckoutFlash}
                total={cartTotal}
            />
                    

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