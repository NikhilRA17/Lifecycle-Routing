import React,{useState} from 'react'
import Lifecycle from './Lifecycle'

const Updating = () => {

  const [state,setState] = useState(true)
  const [msg,setMsg] = useState('')

  const showUpdate=()=>{
    setMsg('')
    setTimeout(() => {
      setMsg('Component Updated')
    }, 1000);

    
  }

  return (
    <div>

<button onClick={showUpdate} style={{width:'100px', backgroundColor:'navy', color:'white',marginTop:'20px', padding:'10px', borderRadius:'5px'}}>Update</button>


        {
          state?<Lifecycle/>:""
        }
         <h3>{msg}</h3>
    </div>
  )
}

export default Updating