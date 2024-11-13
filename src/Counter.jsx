import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,reset,decrement, incrementByAmount } from './Redux/slice/counterSlice'

function Counter() {
  const count=useSelector((state)=>state.counterReducer.count)
  const dispatch=useDispatch()
  const[amount,setAmount]=useState('')

  function handleIncrement(){
    if(amount==""){
      alert("Please fill the field")
    }
    else{
      dispatch(incrementByAmount(Number(amount)))
      setAmount("")
    }
  }
  return (
    <div>
      <h1 className='counter text-center ms-5 mt-5'>Counter-Application</h1>
      <div className="container border border-3 mt-5  p-5 ">
        <h1 className='fw-bolder text-center mt-5' style={{fontSize:"50px",color:"violet"}}>{count}</h1>
        <div className='d-flex justify-content-evenly align-items-center mt-5'>
            <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
            <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>

            <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>


        </div>
         <div className='d-flex mt-5'>
            <input type="text" className='form-control' onChange={e=>setAmount(e.target.value)} placeholder='enter amount to be incremented' value={amount||""} />
            <button className='button  ms-3' onClick={handleIncrement}>Increment Amount</button>

         </div>
    
      </div>

    </div>
  )
}

export default Counter
