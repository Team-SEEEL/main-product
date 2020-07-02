import React from 'react';

const QuantityMenu = (props) => {
    let handleQuantityChange = props.handleQuantityChange
    let selectValue = props.selectValue

    return (
        <select 
            value={selectValue} 
            onChange={handleQuantityChange} 
        >
            <option value="1">Qty: 1</option>
            <option value="2">Qty: 2</option>
            <option value="3">Qty: 3</option>
        </select>
    )
}

export default QuantityMenu;