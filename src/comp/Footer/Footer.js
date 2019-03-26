import React, { Component } from 'react'
import logo from '../../images/RubLogo.png'
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <div className='FootContainer'>
        <div className='infoFoo'>
          <p className='infoFooter'>2019</p>
          <p className='infoFooter1'>Ruben Ortiz</p>
        </div>

        <img src={logo} alt="" className='logo1' />
      </div>
    )
  }
}

export default Footer;