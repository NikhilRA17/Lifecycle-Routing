import React,{useState} from 'react'
import Lifecycle from './Lifecycle'

const Unmounting = () => {

  const [state,setState] = useState(true)
  const [msg,setMsg] = useState('')

  const showUnmount=()=>{
    setState(!state)
    setMsg('Component Unmounted')
  }

  return (
    <div>
        <button onClick={showUnmount} style={{width:'100px', backgroundColor:'navy', color:'white',marginTop:'20px', padding:'10px', borderRadius:'5px'}}>Unmount</button>

        {
          state?<Lifecycle/>:""
        }
        <h3>{msg}</h3>
    </div>
  )
}

export default Unmounting