import React from 'react';

const MainPhoto = (props) => {
    let {handleModal, mainPhoto, hideModal, showModal, modalOpened, showingModal} = props;

    const showHideClassName = showingModal ? "modal display-block" : "modal display-none"
    
    return (
        <div className = {showHideClassName}>
            <img className='main-state-photo' src={mainPhoto} onClick={handleModal, showModal}/>
        </div>
    )
}

export default MainPhoto;