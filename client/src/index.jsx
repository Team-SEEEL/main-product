import React from 'react';
import ReactDOM from 'react-dom';
import Photos from './components/Photos.jsx'
import Description from './components/Description.jsx'
import axios from 'axios'
 
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        photos: [],
        mainphoto: ''
      }
      this.getPhotos = this.getPhotos.bind(this);
      this.hoverHandler = this.hoverHandler.bind(this);

    }
  
    renderView() {
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
        photourlarray = photourlarray.slice(0, 14)
          this.setState({
            photos: photourlarray
          });
      })
    }
  
    hoverHandler(e) {
      console.log(e.currentTarget.src, 'line 39')
      let currentPhoto = e.currentTarget.src
      // set state for mainphoto
      this.setState({
        mainphoto: currentPhoto
      })
    }
  
    componentDidMount() {
      this.getPhotos();
    }

  
    render() {
      return (
        <div className="flex-container">
          <div className="photos">
            <Photos hoverHandler={this.hoverHandler} photos={this.state.photos}/>
          </div>
          <div className='main-photo'>
            <img src={this.state.mainphoto}/>
          </div>
          <div className="description">
            <div className="title">Apple Airpods Pro (Title)</div>
            <div>Ratings | Answers</div>
            <div>Price</div>
            <div>Options</div>
            <div>Description</div>
          </div>
          <div className="buying-options">
            <div>Buying Options</div>
            <div>Add to Cart</div>
            <div>Buy Now</div>
            <div>Gift Options & Accessories</div>
            <div>Add to List</div>
            <div>Other Sellers on Amazon</div>
            <div>New & Used</div>
          </div>
        </div>
      );
    }
  }
  
ReactDOM.render(<App />, document.getElementById('main-product'));
  