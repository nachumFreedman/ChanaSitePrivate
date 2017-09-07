import React, {Component} from 'react';
import './HeaderMobile.css';

class HeaderMobile extends Component {
  render() {
    return (
      <div className='header-container' style={this.props.style}>
        <div className='header-home'>
          Home
        </div>
        <div className='header-examples'>
          Examples
        </div>
        <div className='header-contact'>
          Contact
        </div>
        <div className='header-blog'>
          Blog
        </div>
      </div>
    )
  };
}
export default HeaderMobile;
