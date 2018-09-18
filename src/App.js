import React, { Component } from 'react';
import './App.css';
import laptop from './components/img/laptop.jpeg'
import city from './components/img/city.jpg'
import javascript from './components/img/JavaScript.png'
import html from './components/img/HTML5_logo.png'
import css from './components/img/css.png'
import electron from './components/img/electron.png'
import express from './components/img/expressjslogo.png'
import gBash from './components/img/gBash.png'
import postgresql from './components/img/logo.png'
import node from './components/img/Node.png'
import postman from './components/img/postman.png'
import redux from './components/img/Redux.png'
import react from './components/img/react.png'
import snow from './components/img/snowy-mountains-a.jpg'
import Icon from './components/img/RubnIcon.PNG'
import ParallaxImage from 'react-image-parallax2'
// import ScrollspyNav from "react-scrollspy-nav";


class App extends Component {

  render() {
    return (
      <div className="App">
        <img className='laptop' src={laptop} alt="" />
        <div>
          <ParallaxImage reduceHeight={1 / 9} className='coffee' src={city} alt="" />
            <img className='snow' src={snow} alt="" />
          <div className='div1'>

            <link href="https://fonts.googleapis.com/css?family=Saira:700" rel="stylesheet"></link>

            <link href="https://fonts.googleapis.com/css?family=Pontano+Sans" rel="stylesheet"></link>

            {/* <ScrollspyNav
             scrollTargetIds={["professional","portfolio","contact"]} activeNavClass="is-active"> */}
              <div className='navBar'>
                <div className='box-nav'>
                  <p><a href='/' className='navObj2'><span>HOME</span></a></p>
                  <p><a href='#professional' className='navObj'><span>PROFESSIONAL</span> </a></p>
                  <p><a href='#portfolio' className='navObj'><span>PROJECTS</span> </a></p>
                  <p><a href='#contact' className='navObj'><span>CONTACT</span></a></p>
                </div>
              </div>
            {/* </ScrollspyNav> */}

            <div>
              <div className='Name'>
                <p className='FrstName' id='home'> I <span className='sim'>'</span> M <br /> R U B E N <br /> O R T I Z <span className='sim'>.</span></p>
                <p className='Dev'> FULL-STACK WEB DEVELOPER</p>
              </div>
            </div>

            <div className='Summary'>
              <div>
                <img className='icon1' src={Icon} alt="" />
                <p>I'm a Full-Stack Web Developer looking for opportunities were I can practice and further develop greater knowledge and experience related to this amazing career. I'm always seeking to learn new technologies and techniques to be a better developer and a better asset in today's web industry.</p>
              </div>
            </div>

            <div className='Skills' id='professional'>
              <p className='Prof'> P R O F E S S I O N A L </p>
              <p className='skills'> S K I L L S </p>
              <div className='Techs'>
                <img className='icon' src={javascript} alt="" />
                <img className='icon' src={html} alt="" />
                <img className='icon' src={css} alt="" />
                <img className='icon' src={gBash} alt="" />
                <img className='icon' src={react} alt="" />
                <img className='icon' src={node} alt="" />
                <img className='icon' src={express} alt="" />
                <img className='icon' src={postman} alt="" />
                <img className='icon' src={electron} alt="" />
                <img className='icon' src={redux} alt="" />
                <img className='icon' src={postgresql} alt="" />
              </div>
            </div>

            <div className='Portfolio' id='portfolio'>
              <img src="mountainsBckgrnd" alt="" />
              <p className='portfolio'>P R O J E C T S </p>
              <p className='work'> SOME OF MY WORK >></p>

              <div className='Projects'>
                <div className='Project-Container'>
                  <a href="https://www.bigboystoyss.com/#/" className='navObj'>
                    <div className='Project1'>
                    </div>
                  </a>
                  <div className='textBox'>
                    <div className='textBox1'>
                      <p className='Prjct-descrptn'>Big Boys Toys</p>
                      <p className='Prjct-descrptn1'>E-commerce app dedicated to find all the new fun stuff that big guys are looking for such as the latests Toys for outdoors, electronics, gadgets and more. This app was part of a personal project for Coding School.
                      </p>
                      <p className='Prjct-descrptn1'>
                        Built with: React | HTML | CSS | Redux | JavaScript | Node | Express | PostgreSQl | Massive | Auth0
                      </p>
                      <a href="https://github.com/ROrtiz016/Personal-Project" className='Prjct-descrptn1'><p>github.com/ROrtiz016/Personal-Project</p></a>
                    </div>
                  </div>
                </div>

                <div className='Project-Container'>
                  <div className='textBox1'>
                    <p className='Prjct-descrptn'>ClonePen</p>
                    <p className='Prjct-descrptn1'>A useful and liberating tool for developers of any skill, and particularly empowering for people learning to code. With a focus primarily on front-end languages like HTML, CSS, JavaScript, and preprocessing syntaxes that turn into those things. This page was built with a group of 4 Developers. </p>
                    <p className='Prjct-descrptn1'>
                      Built with: React | HTML | CSS | JavaScript | Node | Express | PostgreSQl | Massive 
                      </p>
                      <a href="https://github.com/ROrtiz016/codepen-clone" className='Prjct-descrptn1'><p>github.com/ROrtiz016/codepen-clone</p></a>
                  </div>
                  <a href="https://www.clonepen.com/#/pens">
                    <div className='Project2'>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className='Contact' id='contact'>
              <div className='Info'>
                <p className='contct'>C O N T A C T</p>
                <p className='text1'>For more information feel free to send me a message:</p>
                <p>rortiz.max@gmail.com <br /> github.com/ROrtiz016 <br />
                  linkedin.com/in/rortiz-016/</p>
                <p>Tel: 1-787-538-5781</p>
                <img className='icon3'  src="https://png.icons8.com/color/260/google-plus.png" alt="" />
                <img className='icon3' src="https://cdn3.iconfinder.com/data/icons/sociocons/256/github-sociocon.png" alt="" />
                <img className='icon4' src="https://png.pngtree.com/element_our/md/20180301/md_5a9797d083160.png" alt="" />
              </div>

              <div className='Input'>
                <input className='name1' type="text" placeholder='Name*' />
                <input className='Email' type="text" placeholder='Email*' />
                <input className='subject' type="text" placeholder='Subject' />
                <textarea className='message' type="text" placeholder='Message' />
                <p className='send'>Send</p>
              </div>

            </div>

            <div className='Footer'>
              <img className='icon2' src={Icon} alt="" />
              <h6 className='BY'>2018 by Ruben Ortiz.</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
