import React, { Component } from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import imgs from './img';


class ControlledCarousel extends React.Component {
  state = {
    index: 0,
    direction: null
  }

  handleSelect = (selectedIndex, e)=>
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  
  render() {
    const { index, direction } = this.state;
    
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        style={{ margin: 0 }}>
        
        {
          imgs.map(img => (
            <Carousel.Item>
              <img width={300} height={100} alt="200x100" src={img} />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    );
  }
}


export default ControlledCarousel;
