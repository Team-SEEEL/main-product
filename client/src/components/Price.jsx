import React from 'react'; 

const Price = (props) => {
    let primeLogo=props.primeLogo;
    let price = props.price;
    let amazonCardPrice = Math.round(price / 6);

    return (
        <div>
            <div className='item-price-container'>
                <div className="item-price-colon">Price:</div>
                <div className="item-price">${price}</div>
                <img className="prime-logo" src={primeLogo} />
            </div>
            
            <div className='amazon-card-price'>
                Pay <font color="#B12704!important">${amazonCardPrice}/month for 6 months,</font> interest-free with your Amazon Prime Rewards Visa Card
            </div>
        </div>
    )
}

export default Price;