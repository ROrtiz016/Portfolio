import React, { Component } from 'react'
import './Contact.css'
import Pizza from '../../images/Pizza.gif'

class Contact extends Component {

  render() {
    return (
      <div className='ContactContainer'>
      <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet"></link>
        <img src={Pizza} alt="" className='backGif' />

        <div className='InfoContainer'>
          <h1 className='Cont'>Contact</h1>

          <div className='Info'>
            <h2 className='Indicator'>Email:</h2>
            <p className='information'>ruben.ortiz.dev@gmail.com</p>
          </div>

          <div className='Info'>
            <h2 className='Indicator'>GitHub:</h2>
            <p className='information'>github.com/ROrtiz016</p>
          </div>

          <div className='Info'>
            <h2 className='Indicator'>Linkedin:</h2>
            <p className='information'>linkedin.com/in/rortiz-016/</p>
          </div>

          <div className='Info'>
            <h2 className='Indicator'>Phone#:</h2>
            <p className='information'>385-528-5173</p>
          </div>

          <div className='Info'> 
            <a href="https://github.com/ROrtiz016" ><img src="https://cdn3.iconfinder.com/data/icons/sociocons/256/github-sociocon.png" alt="" className='social' /></a>
            <a href="https://www.linkedin.com/in/rortiz-016/"><img src="https://png.pngtree.com/element_our/md/20180301/md_5a9797d083160.png" alt="" className='social1' /></a>
          </div>

        </div>
      </div>
    )
  }
}

export default Contact;