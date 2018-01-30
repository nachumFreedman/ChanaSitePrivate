import React, { Component } from 'react';
import './Home.css';
import menuImgs from './menuImgs';

const menuStyle = {
  backgroundColor: 'white',
  height: '60vh',
  width: '30vw',
  margin: '10vh 0 0 10vw',
  color: 'gold',
  textAlign: 'center',
}

const menuImgStyle = {
  position: 'absolute',
  top: '10vh',
  left: '55vw',
  borderRadius: '50%',
  height: 400,
}

const imgNames = ['chocolate', 'rain'];

class Menu extends Component {
  state = {
    menuImg: 0,
  }

  handleClick = (a)=> {
    console.log(a);

    this.setState({
      menuImg: a,
    });    
  }
  
  render() {
    return (
      <div>
        <div style={menuStyle}>
          <h1>Menu</h1>
          {
            menuImgs.map( (img, id)=> ( 
              <p key={id} onClick={()=> this.handleClick(id)}>
                {imgNames[id]}
              </p>
            ))
          }
        </div>
        <img style={menuImgStyle} src={menuImgs[this.state.menuImg]}/>
      </div>      
    );
  }
}


export default Menu;
