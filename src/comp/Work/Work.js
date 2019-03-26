import React, { Component } from 'react'
import './Work.css'
import HTML from '../../images/HTML5.png'
import CSS from '../../images/css.png'
import JavaScript from '../../images/JavaScript.png'
import Node from '../../images/Node.png'
import ReactLogo from '../../images/react.png'
import Vue from '../../images/Vue.png'
import SQL from '../../images/PostgreSQL.png'
import Git from '../../images/Git.png'
import Redux from '../../images/Redux.png'
import WordP from '../../images/Wordpress.png'
import Express from '../../images/express.png'
import PhotoS from '../../images/photoshop.png'
import Electron from '../../images/Electron.png'
import Post from '../../images/Postman.png'
import Hub from '../../images/octocat.gif'

class Work extends Component {

  render() {
    return (
      <div className='workContainer'>
        <div className='description'>
          <p>Loves coding. Always seeking to learn new technologies and techniques to become a better developer in today's web industry.</p>
        </div>

        <h1 className='Skill'>My Skills</h1>
        <div className='Skills'>
          <div className='logoContainer'>
            <img src={HTML} alt="" className='Logo' />
            <img src={CSS} alt="" className='Logo' />
            <img src={JavaScript} alt="" className='Logo' />
            <img src={Node} alt="" className='Logo' />
            <img src={ReactLogo} alt="" className='Logo' />
            <img src={Vue} alt="" className='Logo' />
            <img src={SQL} alt="" className='Logo' />
            <img src={Git} alt="" className='Logo' />
            <img src={Redux} alt="" className='Logo' />
            <img src={WordP} alt="" className='Logo' />
            <img src={Express} alt="" className='Logo' />
            <img src={PhotoS} alt="" className='Logo' />
            <img src={Electron} alt="" className='Logo' />
            <img src={Post} alt="" className='Logo' />
            <img src={Hub} alt="" className='Logo' />
          </div>
        </div>

      </div>
    )
  }
}

export default Work;