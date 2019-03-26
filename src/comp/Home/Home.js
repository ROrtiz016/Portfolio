import React, { Component } from 'react';
import './Home.css'
import image from './tony.jpg'

class Home extends Component {

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet"></link>

        <div className='imageContainer'>
          <img src={image} alt="" className='frontImage' />
        </div>

        <div className='title'>
          <h2 className='title2'>LOOKING FOR A WEB DEVELOPER<p className='sym'>?</p></h2>
          <p className='subtitle'> How about Ruben <p className='sym'>?</p></p>
        <div className='arrow'>
          <i class="fas fa-chevron-down"></i>
        </div>
        </div>


      </div>
    )
  }
}

export default Home;