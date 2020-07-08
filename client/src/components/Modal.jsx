import React from 'react';
import ModalPhoto from './ModalPhoto.jsx'

const outerWrapper = {
    // filter: 'blur(4px)'
}

const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0, 
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
  }

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 850,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    position: "relative"
}

const footerStyle = {
    position: 'absolute',
    bottom: 10
}


class Modal extends React.Component {
    
    onClose(e) {
        this.props.onClose && this.props.onClose(e);
    }
    
    render() {
        let currentPhoto = this.props.currentPhoto;
        let hoverExit = this.props.hoverExit;
        let isHovered = this.props.isHovered;
        let photos = this.props.photos;
        let hoverHandler = this.props.hoverHandler;
        let modalHoverHandler = this.props.modalHoverHandler;


        if (!this.props.showingModal) {
            return null;
        }

        if (this.props.modalPhoto === 0) {
            let modalPhoto = this.props.mainPhoto;
        } else {
            modalPhoto = this.props.modalPhoto;
        }


        return (
            <div className='outer-wrapper' style={outerWrapper}>
                <div className='modal-wrapper' style={backdropStyle}>
                    <div className = 'modal-wrapper-center' style={modalStyle}>
                        {this.props.children}
                        <div className="flex-container">
                            <div className="modal-image-div">
                                <img className='modal-image' src={this.props.mainPhoto}/>
                            </div>
                            <div className='modal-product-title'>{this.props.title}
                                <br></br>
                                <br></br>
                                <div className='modal-description'>{this.props.description}</div>
                            </div>
                        </div>
                            <div className="flex-container">
                            <div className="modal-photos">
                                {/* <ul> */}
                                <div className="flex-container">
                                        {
                                        photos.map((photo) => {
                                            return <ModalPhoto modalHoverHandler={modalHoverHandler} currentPhoto={currentPhoto} hoverHandler={hoverHandler} hoverExit={hoverExit} isHovered={isHovered} photo={photo} />
                                        })
                                        }
                                </div>
                                    {/* </ul> */}
                            </div>
                        </div>
                
                            <div style={footerStyle}>
                                <div className='modal-close-button'>
                                    <button onClick={(e) => {this.onClose(e)}}>
                                        Close
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;