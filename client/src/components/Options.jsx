import React from 'react';

const Options = (props) => {
    let hoverOptionHandler = props.hoverOptionHandler;

    return (
        <div>
            <div onMouseEnter={hoverOptionHandler} className="option1">
                Airpods
            </div>
            <div className="option2">
                Airpods and AppleCare+ Bundle
            </div>
        </div>
    )
}

export default Options;