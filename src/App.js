import React, { Component } from 'react';
// import NavBar from './comp/NavBar/NavBar';
import Home from './comp/Home/Home'
import Work from './comp/Work/Work'
import Projects from './comp/Projects/projects'
import About from './comp/AboutMe/About'
import Contact from './comp/Contact/Contact'
import Footer from './comp/Footer/Footer'
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       {/* <NavBar/> */}
       <Home/>
       <Work/>
       <Projects/>
       <About/>
       <Contact/>
       <Footer/>
      </div>
    );
  }
}

export default App;
