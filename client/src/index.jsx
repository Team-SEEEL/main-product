import React from 'react';
import ReactDOM from 'react-dom';
import Price from './components/Price.jsx'
import Photos from './components/Photos.jsx'
import Description from './components/Description.jsx'
// import Options from './components/Options.jsx'
import Company from './components/Company.jsx'
import Details from './components/Details.jsx'
import AddToCart from './components/AddToCart.jsx'
import AddToList from './components/AddToList.jsx'
import ShareButtons from './components/ShareButtons.jsx'
import QuantityMenu from './components/QuantityMenu.jsx'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import primeLogo from '../dist/primelogo.png'
 
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        isHovered: false,
        photos: [],
        mainphoto: '',
        rating: 4.5,
        selectedoption: '',
        selectValue: ''
      }
      this.getPhotos = this.getPhotos.bind(this);
      this.hoverExit = this.hoverExit.bind(this);
      this.hoverHandler = this.hoverHandler.bind(this);
      this.hoverOptionHandler = this.hoverOptionHandler.bind(this);
      this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }
  
    renderView() {
    }

    getRating() {

    }
  
    getPhotos() {
      axios.get('/api/photosurls').then((data) => {
        let photourldata = data.data;
        let photourlarray = [];
        console.log(photourldata, "logging data from api photos call");
        // TODO: access string inside object
        photourldata.forEach(element => {photourlarray.push(element.photo_url)
        console.log(photourlarray, 'logging data from photourldata line 26')
        });
        // TODO: refactor filter method of getting correct urls
        photourlarray = photourlarray.slice(102, 112)
          this.setState({
            photos: photourlarray
          });
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
      this.setState({
        mainPhoto: this.state.photos[0]
      })
    }

  
    render() {
      const { rating } = this.state;
      return (
        <div className="flex-container">
          <div className="photos">
            <Photos currentPhoto={this.state.mainphoto} hoverHandler={this.hoverHandler} hoverExit={this.hoverExit} isHovered={this.state.isHovered} photos={this.state.photos}/>
          </div>
          <div className='main-photo'>
            <img className='main-state-photo' src={this.state.mainphoto}/>
          </div>
          <div className="description">
            <div className="product-title">Apple Airpods Pro</div>
            <div className="company-title"><Company /></div>
            <div className="ratings"><StarRatingComponent 
          starCount={5}
          value={rating}
            /> 17,034 ratings | 987 answered questions</div>
            <hr />
            <div className="price">
            <Price primeLogo={primeLogo} />
            </div>
            <br></br>
            {/* <div className="options"><Options hoverOptionHandler={this.hoverOptionHandler}/></div>
            <br></br> */}
            <div className="in-stock">In Stock.</div>
            <br></br>
            <div className="shipping-details">Ships from and sold by Amazon.com</div>
            <br></br>
            <div className="details"><Details /></div>
            <hr />
            <br></br>
            <div className="about-item"><b><font size="15px">About This Item:</font></b>
            <Description /></div>
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
  