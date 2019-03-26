import React, {Component} from 'react'
import './NavBar.css'

class NavBar extends Component {

  render(){
    return (
      <div className='bar'>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
        
        <p><img src="" alt="" className='logo'/>LOGO</p>
        <div className='burger'>
        <i class="fas fa-bars"></i>
        </div>
      </div>
    )
  }
}

export default NavBar;