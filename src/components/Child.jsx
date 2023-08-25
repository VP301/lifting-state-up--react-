import React, {useState} from 'react'

export const Child = (props) => {
    const [is,setIs] =useState('');
    const [iss,setIss] =useState('');
  
    function onchangeis(e){
      setIs(e.target.value)
    }
  
    function onchangeiss(e){
      setIss(e.target.value)
    }
    
    function submitHandler(e){
        e.preventDefault()
         const entereddata={
            a: is,
            b:iss
         }
        console.log(entereddata)
        props.onDiv(is,iss)
        setIs('')
        setIss('')
    }
    
  return (
    <div>
    <form onSubmit={submitHandler}>
       
      
      <input value={is} onChange={onchangeis} name="fir"/>
      <input value={iss}  onChange={onchangeiss} name="sec"/>
      <button onSubmit={submitHandler} >submit</button>
      </form>
    </div>
  )
}
