import React from 'react';
import ReactDOM from 'react-dom';
 
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        // photos: []
      }

    }
  
    renderView() {
    }
  
    getBlogPosts() {
      axios.get('/api/blogs').then((data) => {
        console.log(data, "logging data from api blogs call");
        // this.setState({
        // });
      })
    }
  
  
    changeToAdminView() {
      this.getAdminData();
    }
  
    componentDidMount() {
      this.getBlogPosts();
    }
  
    render() {
      return (
        <div>
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
  