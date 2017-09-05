import React, { Component } from 'react';
import './home.css';
import backgroundhomepicture from './img/pexels-photo-444964.jpeg';
import HeaderMobile from './HeaderMobile'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div className='techscope-header'>
            TechScope
          </div>
          <div className='techscope-body'>
            Developers building Israel
          </div>
          <div className='techscope-paragraph'>
            We work with you <br/> building the world <br/> from Israel
          </div>
          <img src={backgroundhomepicture} alt="" className='homepage-background'/>
        </div>
        <div className='header-bar-home'>
          <HeaderMobile/>
        </div>
      </div>
    );
  }
}

export default Home;
