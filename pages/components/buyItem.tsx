import { Button } from "react-bootstrap";
import { store } from '../store/store';
import { addItem }from '../actions/cart';
import { connect } from "react-redux";
import { useState } from "react";
import { SuccessFlash } from './flashMessage';
// import dotenv from 'dotenv';
import axios from "axios";



const BuyItem = (props) => {
    const [showFlash, updateShowFlash] = useState(false);

    const handleAdd = () => {
        console.log('ADD: ', {...props});
        // axios.post('/cart/add', {  
        //     ...props
        // })
        // .then((response) => {
        //     console.log('RESPONSE: ', response);
        // }, (err) => {
        //     console.log('Error: ', err);
        // });

        props.reduxAddItem({...props})
        updateShowFlash(true);
        setTimeout(()=>{updateShowFlash(false)}, 1000);
    }

    return (
        <div className="d-flex flex-column m-5">
            <a className="mb-3" href={props.url}>
                <img className="img-fluid" src={props.imgurl} alt="Amazon.com"></img>
            </a>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div>{props.price}</div>
                <Button onClick={() => handleAdd()} variant="outline-info">Add to Cart</Button>
            </div>
            <SuccessFlash class="mt-2" visible={showFlash} message="Item added to Cart"/>  
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduxAddItem: (item) => dispatch(addItem(item))
    };
};

export default connect(null, mapDispatchToProps)(BuyItem);
