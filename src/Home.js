import React, { Component } from 'react';
import './home.css';
import HomePagePicture from './img/jerusalem.jpg';
import HeaderMobile from './HeaderMobile';
class Home extends Component  {
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
            Making your vision <br/> REALITY
          </div>
          <img src={HomePagePicture} alt="" className='homepage-background'/>
        </div>
          <HeaderMobile/>
      </div>
    );
  }
}

export default Home;
