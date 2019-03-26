import React, { Component } from 'react'
import './About.css'

class About extends Component {

  render() {
    return (
      <div className='AboutContainer'>
        <h1 className='AboutTitle'>Doing what I love</h1>

        <div className='TextContainer'>
          <p className='Texto'>After working 3 years in construction working long hours every week, I realized that I needed to change my career, I started looking for an industry where I could balance work and family time and be something that I would really enjoy doing. After an extended search, I decided to start learning code, I started learning on my own looking for courses online until the opportunity came to apply to a Coding bootcamp, I quit my job and decided to move to Utah in order to start the program. I graduated on August 2018 and ever since been working on growing my knowledge in coding. I feel prepared and confident with the skills I have developed to dedicate my efforts to a company where I can work with people as passionate as I am about coding and technology and developed the experience to become a strong player for the team.</p>
        </div>

      </div>
    )
  }
}

export default About;