import React from 'react';

const BuyingPrice = (props) => {
    let primeLogo=props.primeLogo;
    let price = props.price;

    return (
        <div>
            <div className="buying-item-price">${price}</div>
            {/* <div className="buying-item-price-container"> */}
                <img className="prime-logo-2" src={primeLogo} />
                <div className="free-returns">& <font color="blue">FREE Returns</font></div>
            {/* </div> */}
        </div>
    )
}

export default BuyingPrice;