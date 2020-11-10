// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    xValue : 0,
    yValue  : 0
  }
  handleClick = (e) => {
    // e gives an event object
    // check the value of e using console.log(e)
    this.setState({
      message: 'Welcome to the world of events',
    })
  }
  // triggered whenever the mouse moves
  handleMouseMove = (e) => {
    // console.log(e.clientX,e.clientY)
    this.setState({ xValue: e.clientX  });
    this.setState({ yValue: e.clientY  });
  } 
  render() {
    return (
      <div style={{ height:'100vh',width:'100%' }} onMouseMove={this.handleMouseMove}>
        
        <button style={{
           left : this.state.xValue + 'px',
           top : this.state.yValue + 'px',
           backgroundColor : 'blue',
           padding :'20px',
           position : 'absolute',
           color:'#fff'
        }}>30 Days of  React</button>
          
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
