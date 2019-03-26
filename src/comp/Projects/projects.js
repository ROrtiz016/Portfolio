import React, { Component } from 'react'
import Coding from '../../images/orig.gif'
import BBT from '../../images/Screenshot (22).png'
import ClonePen from '../../images/Screenshot (15).png'
import './projects.css'

class projects extends Component {

  render() {
    return (
      <div className='Projects'>
        <img src={Coding} alt="" className='backGif' reduceHeight={1/3} />
        <h1 className='PrjtTitle'>Some of my Projects</h1>

        <div className='ProjContainer'>
          <div className='IndvProject'>
            <div className='Projects1'>
              <a href="https://www.bigboystoyss.com/#/"><img src={BBT} alt="" className='PrjImg' /></a>
            </div>

            <a href="https://github.com/ROrtiz016/Personal-Project" className='Git'><p>BigBoysToys GitHub</p></a>

          </div>

          <div className='IndvProject'>
            <div className='Projects1'>
              <a href="https://www.clonepen.com/#/"><img src={ClonePen} alt="" className='PrjImg' /></a>
            </div>

            <a href="https://github.com/ROrtiz016/codepen-clone" className='Git'><p>ClonePen GitHub</p></a>
          </div>

          <div className='IndvProject'>
            <div className='Projects1' Id='Focus'>
              {/* <a href="https://codepen.io/iLion16/pen/LqJVJP"></a> */}
              <p>Under Development</p>
              <h2 className='Name'>FOCUS</h2>
            </div>

            <a href="https://github.com/ROrtiz016/FOCUS" className='Git'><p>Focus GitHub</p></a>
          </div>

          {/* <div className='IndvProject'>
            <div className='Projects1'>
              <h1>Project4</h1>
            </div>
          </div> */}

        </div>

      </div>
    )
  }
}

export default projects