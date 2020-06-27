import React from 'react';
import ReactDOM from 'react-dom';
import Photos from './components/Photos.jsx'
import Description from './components/Description.jsx'
import Options from './components/Options.jsx'
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
        photos: [],
        mainphoto: '',
        rating: 4.5,
        selectedoption: '',
        selectValue: ''
      }
      this.getPhotos = this.getPhotos.bind(this);
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
        mainphoto: currentPhoto
      })
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
            <Photos hoverHandler={this.hoverHandler} photos={this.state.photos}/>
          </div>
          <div className='main-photo'>
            <img src={this.state.mainphoto}/>
          </div>
          <div className="description">
            <div className="product-title">Apple Airpods Pro</div>
            <div className="company">Apple</div>
            <div className="ratings"><StarRatingComponent 
          starCount={5}
          value={rating}
            /> 17,034 ratings | 987 answered questions</div>
            <hr />
            <div className="price">
            Price: $229.99
             <img className="prime-logo" src={primeLogo} />
            </div>
            <br></br>
            <div className="options"><Options hoverOptionHandler={this.hoverOptionHandler}/></div>
            <br></br>
            <div className="details"><Details /></div>
            <hr />
            <br></br>
            <div className="about-item"><b><font size="+1">About This Item:</font></b>
            <Description /></div>
          </div>
          <div className="buying-options">
            <div className="share">Share: <ShareButtons /></div>
            <br></br>
            <div className="Quantitymenu"> <QuantityMenu selectValue={this.state.selectValue} handleQuantityChange={this.handleQuantityChange}/> </div>
            <br></br>
            <div><AddToCart /></div>
            <br></br>
            <div><AddToList /></div>
          </div>
        </div>
      );
    }
  }
  
ReactDOM.render(<App />, document.getElementById('main-product'));
  