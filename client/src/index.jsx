import React from 'react';
import ReactDOM from 'react-dom';
import Price from './components/Price.jsx'
import Photos from './components/Photos.jsx'
import Description from './components/Description.jsx'
// import Options from './components/Options.jsx'
import Company from './components/Company.jsx'
import Details from './components/Details.jsx'
import Modal from './components/Modal.jsx'
import AddToCart from './components/AddToCart.jsx'
import AddToList from './components/AddToList.jsx'
import ShareButtons from './components/ShareButtons.jsx'
import MainPhoto from './components/MainPhoto.jsx'
import QuantityMenu from './components/QuantityMenu.jsx'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import primeLogo from '../dist/primelogo.png'
 
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        answers: 0,
        description: '',
        isHovered: false,
        modalOpened: false,
        showingModal: false,
        photos: [],
        prime: false,
        mainphoto: '',
        rating: 4.5,
        selectedoption: '',
        selectValue: '',
        title: ''
      }
      this.getPhotos = this.getPhotos.bind(this);
      this.hoverExit = this.hoverExit.bind(this);
      this.hoverHandler = this.hoverHandler.bind(this);
      this.handleModal = this.handleModal.bind(this);
      this.hoverOptionHandler = this.hoverOptionHandler.bind(this);
      this.handleQuantityChange = this.handleQuantityChange.bind(this);
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }
  
    renderView() {
    }

    getMainProducts() {
      let test = Math.floor(Math.random() * 10);
      axios.get(`/products/api/mainProduct/${test}`).then((data) => {
        let mainProductData = data.data;
        console.log(mainProductData, 'line 48')
        this.setState({
          answers: mainProductData[0].answers,
          company: mainProductData[0].company,
          description: mainProductData[0].description,
          price: mainProductData[0].price,
          prime: mainProductData[0].prime,
          ratings: mainProductData[0].ratings,
          title: mainProductData[0].title
        })
      })
    }

    getPhotos() {
      let test = Math.floor(Math.random() * 10);
      axios.get(`/products/api/photos/${test}`).then((data) => {
        let photourldata = data.data;
        console.log(photourldata, 'line 52')
        let photourlarray = [];
        // TODO: access string inside object
        photourldata.forEach(element => {photourlarray.push(element.photo_url)
        console.log(photourlarray, 'logging data from photourldata line 26')
        });
        // TODO: refactor filter method of getting correct urls
          this.setState({
            photos: photourlarray
          });
      })
    }
  
    // getPhotos() {
    //   axios.get('/api/photos').then((data) => {
    //     let photourldata = data.data;
    //     console.log(photourldata, 'line 52')
    //     let photourlarray = [];
    //     // makes a random number from 0 to 9
    //     let test = Math.floor(Math.random() * 10);
    //     photourldata = photourldata.filter(element => element.product_id === test)
    //     console.log(photourldata, "logging data from api photos call");
    //     // TODO: access string inside object
    //     photourldata.forEach(element => {photourlarray.push(element.photo_url)
    //     console.log(photourlarray, 'logging data from photourldata line 26')
    //     });
    //     // TODO: refactor filter method of getting correct urls
    //       this.setState({
    //         photos: photourlarray
    //       });
    //   })
    // }

    handleModal(e) {
      console.log('we out here in handleModal, line 62')
      this.setState({
        isHovered: true,
        modalOpened: true
      })
    }

    showModal () {
      this.setState({
        showingModal: !this.state.showingModal
      })
      console.log('logging from showModal, line 77')
    }

    hideModal () {
      this.setState({
        showingModal: false
      })
    }
  
    hoverHandler(e) {
      let currentPhoto = e.currentTarget.src
      this.setState({
        isHovered: true,
        mainphoto: currentPhoto
      })
      console.log(this.state.mainphoto, 'line 62')
    }

    hoverExit() {
      this.setState({
        isHovered: false
      })
      console.log(this.state.isHovered, 'line 71')
    }

    handleQuantityChange(e){
      this.setState({
        selectValue: e.target.value
      });
    }

    hoverOptionHandler(e) {
      console.log(e.target.value, 'logging from hoverOptionHandler')

    }
  
    componentDidMount() {
      this.getPhotos();
      this.getMainProducts();
      this.setState({
        mainPhoto: this.state.photos[0]
      })
      if (this.state.isHovered) {
        this.showModal()
      }
    }
  
    render() {
      const { rating } = this.state;
      return (
        <div className="flex-container">
          <div className="photos">
            <Photos currentPhoto={this.state.mainphoto} hoverHandler={this.hoverHandler} hoverExit={this.hoverExit} isHovered={this.state.isHovered} photos={this.state.photos}/>
          </div>
          <div className='main-photo'>
            <div className='main-photo-div'>
              <MainPhoto showingModal={this.state.showingModal} hideModal={this.hideModal} showModal={this.showModal} modalOpened={this.state.modalOpened} mainPhoto={this.state.mainphoto} handleModal={this.handleModal}/>
              <Modal mainPhoto={this.state.mainphoto} onClose={this.showModal} showingModal={this.state.showingModal}>
              </Modal>
            </div>
          </div>
          <div className="description">
            <div className="product-title">{this.state.title}</div>
            <div className="company-title"><Company company={this.state.company} /></div>
            <div className="ratings"><StarRatingComponent 
          starCount={5}
          value={rating}
            /> {this.state.reviews} | {this.state.questions}</div>
            <hr />
            <div className="price">
            <Price price={this.state.price} prime={this.state.prime} primeLogo={primeLogo} />
            </div>
            <br></br>
            {/* <div className="options"><Options hoverOptionHandler={this.hoverOptionHandler}/></div>
            <br></br> */}
            <div className="in-stock">In Stock.</div>
            <br></br>
            <div className="free-delivery">FREE delivery</div>
            <br></br>
            <div className="shipping-details">Ships from and sold by Amazon.com</div>
            <br></br>
            {/* <div className="details"><Details /></div> */}
            <hr />
            <br></br>
            <div className="about-item"><b><font size="15px">About This Item:</font></b>
            <Description description={this.state.description} /></div>
          </div>
          <div className="buying-options">
            <div className="share">Share: <ShareButtons /></div>
            <hr />
            <br></br>
            <div className="quantity-menu"> <QuantityMenu selectValue={this.state.selectValue} handleQuantityChange={this.handleQuantityChange}/> </div>
            <br></br>
            <div className="add-to-cart"><AddToCart /></div>
            <hr />
            <br></br>
            <div className="add-to-list"><AddToList /></div>
            <br></br>
            <div className="add-to-dash">Add to your Dash buttons</div>
          </div>
        </div>
      );
    }
  }
  
ReactDOM.render(<App />, document.getElementById('main-product'));
  