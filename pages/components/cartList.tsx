import { connect } from 'react-redux';
import CartItem from './cartItem';
import { clearItems, clearItem } from '../actions/cart';
import { Button } from 'react-bootstrap';

const CartList = (props) => {
    console.log("Items, ", props.items);
    return (
        <div>
            <Button onClick={() => props.reduxClearItems()} variant="outline-danger">Clear Cart</Button>
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
        reduxClearItems: () => { dispatch(clearItems()); }
    };
};

//Export the React + Redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(CartList);