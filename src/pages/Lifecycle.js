import React, { Component, useState } from 'react'
import { Outlet } from 'react-router-dom';



export default class Lifecycle extends Component {

    constructor(){
        super();

        this.state = {
            name: '',
            input: ''
        }
        
    }

    

    componentDidMount(){
        console.log('Component Mounted')
    }

    componentDidUpdate(){
        console.log('Component Updated')
    }

    componentWillUnmount(){
        console.log('Component Unmounted')

    }

    handleClick=(event)=>{
        this.setState({...this.state,name:'Nikhil'})
    }

    handleChange=(event)=>{
        this.setState({...this.state,input:event.target.value})
    }

  render() {
    return (
      <div>
        <h3>{this.state.input}</h3>
        <input type={'text'} onChange={this.handleChange} /><br></br><br></br>
        <button onClick={this.handleClick} style={{width:'100px', backgroundColor:'red', color:'white',marginTop:'20px', padding:'10px', borderRadius:'5px'}}>Click Me</button>
        <Outlet/>
      </div>
    )
  }
}
