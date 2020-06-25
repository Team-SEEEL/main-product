import React from 'react';
import addToCartLogo from '../../dist/addToCart_icon.png'

const AddToCart = (props) => {

    return (
        <div>
            <button><img className="add-to-cart-button" src={addToCartLogo}/></button>
        </div>
    )
}

export default AddToCart;