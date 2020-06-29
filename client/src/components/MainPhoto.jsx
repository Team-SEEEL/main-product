import React from 'react';

const MainPhoto = (props) => {
    let handleModal = props.handleModal
    let mainPhoto = props.mainPhoto;
    let hideModal = props.hideModal;
    let showModal = props.showModal;
    let modalOpened = props.modalOpened;    
    let showingModal = props.showingModal;

    const showHideClassName = showingModal ? "modal display-block" : "modal display-none"
    
    return (
        <div className = {showHideClassName}>
            <img className='main-state-photo' src={mainPhoto} onClick={handleModal, showModal}/>
        </div>
    )
}

export default MainPhoto;