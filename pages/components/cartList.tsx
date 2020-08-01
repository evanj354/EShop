import { connect } from 'react-redux';
import CartItem from './cartItem';
import { clearItems, clearItem } from '../actions/cart';
import { login } from '../actions/auth';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';

const CartList = (props) => {
    
    const handleSaveCart = () => {
        console.log("SAVE CART ITEMS: ", props.items);
        axios.post('/cart/addAll', {
            items: props.items
        });
    }

    useEffect(() => {
        props.reduxAuthenticate();
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Button onClick={() => props.reduxClearItems()} variant="outline-danger">Clear Cart</Button>
                <Button onClick={() => handleSaveCart()} variant="outline-success">Save Cart</Button>
            </div>
            
            { props.items.length > 0 ? props.items.map((item, i) => 
                <CartItem key={i} {...item} index={i} reduxClearItem={props.reduxClearItem}/>
            ) 
            :
            <div className="d-flex justify-content-center">
                <h2>Cart is empty</h2>
            </div>
            }
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
        reduxClearItems: () => { dispatch(clearItems()); },
        reduxAuthenticate: () => { dispatch(login()); }
    };
};

//Export the React + Redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(CartList);