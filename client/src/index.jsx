import React from 'react';
import ReactDOM from 'react-dom';
import Photos from './components/Photos.jsx'
import axios from 'axios'
 
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        photos: []
      }
      this.getPhotos = this.getPhotos.bind(this);

    }
  
    renderView() {
    }
  
    getPhotos() {
      axios.get('/api/photosurls').then((data) => {
        console.log(data.data, "logging data from api photos call");
        // TODO: access string inside object
        
          this.setState({
            photos: data.data
          });
      })
    }
  
  
  
    componentDidMount() {
      this.getPhotos();
    }
  
    render() {
      return (
        <div>
          <div >
            <Photos photos={this.state.photos}/>
          </div>
          <div className="nav">
            <span className="logo"
              onClick={() => this.changeView('feed')}>
              Amazon Main Product
            </span>
          </div>
  
          <div className="main">
            {this.renderView()}
          </div>
        </div>
      );
    }
  }
  
ReactDOM.render(<App />, document.getElementById('main-product'));
  