import { Button } from "react-bootstrap";
import { clearItem } from "../actions/cart";
import { connect } from "react-redux";
import { store } from "../store/store";

const CartItem = ({ name, url, price, imgurl, index, reduxClearItem}) => {
    return (
        <div>
            <div className="d-flex flex-column m-5 card card-body">
                <button onClick={() => reduxClearItem(index)} type="button" className="close align-self-end" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <a className="mb-3" href={url}>
                    <img src={imgurl} alt="Amazon.com"></img>
                </a>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduxClearItem: (index) => { dispatch(clearItem(index)); }
    }
}


export default connect(null, mapDispatchToProps)(CartItem);
// export default cartItem;