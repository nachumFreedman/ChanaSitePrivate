import React, { Component } from 'react';
import './Home.css';
import ControlledCarousel from './Carousel'

import chefImg from './img/chef-alpha.png';
import Menu from './Menu';

const headerRawRaw = {
  paddingTop: '3vh',
  paddingLeft: '11vw',
  fontSize: 50,
  color: 'black',
  fontFamily: 'precious',
};

const carouselStyle = {
  position: 'absolute',
  backgroundColor: 'white',
  height: '300px',
  left: 150,
  top: 150,
};

class Home extends Component {
  render() {
    return (
      <div>
        <img src={chefImg} style={{ position: 'absolute', top: '5vh', right: 0, zIndex: 30, height: '80vh'}}/>
        <div className='page-section' style={{backgroundColor: 'purple',}}>
          <h1 style={headerRawRaw}>Chef RawRaw</h1>
          <div style={carouselStyle}>
            <ControlledCarousel/>
          </div>
        </div>
        <div className='page-section' style={{backgroundColor: 'blue',}}>
<Menu/>
        </div>
      </div>
    );
  }
}

export default Home;
