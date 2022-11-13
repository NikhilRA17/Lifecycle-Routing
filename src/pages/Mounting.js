import React, { useState } from 'react'
import Lifecycle from './Lifecycle'

const About = () => {
  const [state,setState] = useState(true)
  const [msg,setMsg] = useState('')

  const showMount=()=>{
    setMsg('Component Mounted')
  }

  return (
    <div>
        <button onClick={showMount} style={{width:'100px', backgroundColor:'navy', color:'white',marginTop:'20px', padding:'10px', borderRadius:'5px'}}>Mount</button>

        {
          state?<Lifecycle/>:""
        }
         <h3>{msg}</h3>
    </div>
  )
}

export default About