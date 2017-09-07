import React, { Component } from 'react';
import './home.css';
import HomePagePicture from './img/jerusalem.jpg';
import HomeExamplesPicture from './img/icons.png';
import HomeAboutPicture from './img/about.png';
import HeaderMobile from './HeaderMobile';
//Bob RosenSchein bobr@bobr.com answers.com

class Home extends Component  {
  state = {
    headerTop: document.body.scrollHeight - 60,
  }


  componentDidMount(){
    window.addEventListener('scroll', (e)=>{
      const scrollY = window.scrollY;
      const sectionHeight = document.body.scrollHeight / 3;
      
      this.setState({ headerTop: Math.max( sectionHeight - 60 - scrollY, 0) });
    });
  }

  render() {
    return (
      <div>
        <HeaderMobile style={{top: this.state.headerTop}}/>
        <div className="page-section">
          <div className='techscope-header-container'>
            <div className='techscope-header'>
              TechScope
            </div>
            <div className='techscope-body'>
              Developers building Israel
            </div>
            <img src={HomePagePicture} alt="" className='homepage-background'/>
          </div>
        </div>
        
        <div className='page-section third'>
          <div className='home-about-paper'>
          </div>
          <div className='home-about-paper-header'> About Us</div>
          <div className='home-about-paper-body'>We do our absolute best to give you not just the website you want, also a 'code-base' that will last for years, Because of that we only hire the best in tech and keep our team small to maximize quality.</div>

          <img src={HomeAboutPicture} alt="" className='home-about-picture' />
        </div>
        
        <div className="page-section second">
          <img src={HomeExamplesPicture} alt="" className='homepage-background-second'/>
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
