import React from 'react';

const Company = (props) => {
    let company = props.company
    return (
        <div className='company-container'>
            <div className='company-left'>by  </div>
            <div className='company'> {company}</div>
        </div>
    )
}

export default Company;