import React, { Component } from 'react';
import Header from './Header/Header'
import Article from './Article/Article'
import Comments from './Buttons/Comments'
import Share from './Buttons/Share'
import Hammer from './Hammer/Hammer'
import Ad1 from './Ads/Ad1'
import Ad2 from './Ads/Ad2'
import Ad3 from './Ads/Ad3'
import Ad4 from './Ads/Ad4'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            
            <Article />
        
            <div className="article-links">
              <Comments />
              <Share />
            </div>

          </div>

          <Hammer />

          <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            
            <Ad1 />
            <Ad2 />
            <Ad3 />
            <Ad4 />

            
            
            
          </div>
        </main>
        <footer className="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 className="float-right">All rights reserved</h6>
        </footer>
      </div>
    );
  }
}

export default App;
