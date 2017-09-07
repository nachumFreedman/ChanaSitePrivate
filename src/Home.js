import React, { Component } from 'react';
import './home.css';
import HomePagePicture from './img/jerusalem.jpg';
import HomeSecondPicture from './img/icons.png';
import HeaderMobile from './HeaderMobile';
//Bob RosenSchein bobr@bobr.com answers.com

class Home extends Component  {
  state = {
    headerTop: document.body.scrollHeight - 60,
  }


  componentDidMount(){
    window.addEventListener('scroll', (e)=>{
      const scrollY = window.scrollY;
      const sectionHeight = document.body.scrollHeight / 2;
      
      this.setState({ headerTop: Math.max( sectionHeight - 60 - scrollY, 0) });
    });
  }

  render() {
    return (
      <div>
        <HeaderMobile style={{top: this.state.headerTop}}/>
        <div className="page-section">
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
        
        <div className="page-section second">
          <img src={HomeSecondPicture} alt="" className='homepage-background-second'/>
          <div className='secondpage-paper'>
            <h1>Examples</h1>
            <p>Building components to user specifications is not always easy but building components to ours... is</p>
            <div>Read more >></div>
          </div>
          <div className='triangle-bottom'>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
