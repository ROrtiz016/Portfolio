import React, {Component} from 'react'
import axios from 'axios'
import './App.css'

class Contact extends Component{
  constructor(){
    super()
    this.state={
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    this.nameHandler = this.nameHandler.bind(this)
    this.emailHandler = this.emailHandler.bind(this)
    this.subjectHandler = this.subjectHandler.bind(this)
    this.messageHandler = this.messageHandler.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
  }

  nameHandler(e){
    this.setState({
      name: e.target.value
    })
  }

  emailHandler(e){
    this.setState({
      email: e.target.value
    })
  }

  subjectHandler(e){
    this.setState({
      subject: e.target.value
    })
  }

  messageHandler(e){
    this.setState({
      message: e.target.value
    })
  }

  sendEmail(){
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    const{name, email, subject, message} = this.state;
    axios.post(`/api/message/${name}/${email}/${subject}/${message}/`)
    alert('Message sent')
  }

  


  render(){
    return(
      <div className='Contact' id='contact'>
              <div className='Info'>
                <p className='contct'>C O N T A C T</p>
                <p className='text1'>For more information feel free to send me a message:</p>
                <p>rortiz.max@gmail.com <br /> github.com/ROrtiz016 <br />
                  linkedin.com/in/rortiz-016/</p>
                <p>Tel: 1-787-538-5781</p>
                <img className='icon3' src="https://png.icons8.com/color/260/google-plus.png" alt="" />
                <img className='icon3' src="https://cdn3.iconfinder.com/data/icons/sociocons/256/github-sociocon.png" alt="" />
                <img className='icon4' src="https://png.pngtree.com/element_our/md/20180301/md_5a9797d083160.png" alt="" />
              </div>

              <div className='Input'>
                <input className='name1' type="text" placeholder='Name*' onChange={this.nameHandler}/>
                <input className='Email' type="text" placeholder='Email*' onChange={this.emailHandler}/>
                <input className='subject' type="text" placeholder='Subject' onChange={this.subjectHandler} />
                <textarea className='message' type="text" placeholder='Message' onChange={this.messageHandler}/>
                <button className='send' onClick={this.sendEmail}>Send</button>
              </div>

            </div>
    )
  }
}

export default Contact;