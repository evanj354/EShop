import { connect } from 'react-redux';
import CartItem from './cartItem';
import { clearItems, clearItem } from '../actions/cart';
import { login } from '../actions/auth';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SuccessFlash } from './flashMessage';

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

    useEffect(() => {
        console.log("PROPS: ", props);

        props.reduxAuthenticate();
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Button onClick={() => props.reduxClearItems()} variant="outline-danger">Clear Cart</Button>
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