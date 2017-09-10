import React, { Component } from 'react';
import './home.css';
import HomePagePicture from './img/jerusalem.jpg';
import HomeExamplesPicture from './img/icons.png';
import HomeAboutPicture from './img/about.png';
import TechscopeLogo from './img/techscopelogo.png';
import HomeAboutReactPicture from './img/reactlogo.png';
import HeaderMobile from './HeaderMobile';
//Bob RosenSchein bobr@bobr.com answers.com

class Home extends Component  {
  state = {
    headerTop: document.body.scrollHeight - 60,
  }


  componentDidMount(){
    window.addEventListener('scroll', (e)=>{
      const scrollY = window.scrollY;
      const sectionHeight = document.body.scrollHeight / 4;
      
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
              <img src={TechscopeLogo} alt="" className='site-logo'/>
            </div>

            <img src={HomePagePicture} alt="" className='homepage-background'/>
          </div>
        </div>
        
        <div className='page-section third'>
          <div className='home-about-paper'>
            <div className='home-about-paper-header'> About Us</div>
            <div className='home-about-paper-body'>
              We do our absolute best to give you not just the website you want, also a 'code-base' that will last for years, Because of that we only hire the best in tech and keep our team small to maximize quality.
            </div>
            <div className='home-about-paper-link'>Read more</div>
          </div>
          <div className='home-about-paper-white-1'>
            <img src={HomeAboutReactPicture}
                 alt=""
                 className='home-about-paper-white-1-img'/>
            <div className='home-about-paper-white-1-text'>
              <h1 className='home-about-paper-white-1-header'>
                We use React.JS
              </h1>
              <p className='home-about-paper-white-1-body'>Because we care about the product
              </p>

            </div>
          </div>
          <div className='home-about-paper-white-2'></div>
          <div className='home-about-paper-white-3'></div>
          

          <img src={HomeAboutPicture} alt="" className='home-about-picture' />
        </div>
        
        <div className="page-section example">
          <img src={HomeExamplesPicture} alt="" className='homepage-background-example'/>
          <div className='examplepage-paper'>
            <h1>Examples</h1>
            <p>Building components to user specifications is not always easy but building components to ours... is</p>
            <div>Read more >></div>
          </div>
        </div>

        <div className='page-section contact'>
          <h1 className='home-contact-header-'>Contact</h1>
        </div>
      </div>
    );
  }
}

export default Home;
