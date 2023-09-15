import React from 'react'
import { useEffect } from 'react';

const Component = ({toggle, numberState,numberState2, changeFunction, changeFunction2, submitFunction, clickFunction}) => {
 
  useEffect(() => {
    console.log('Component loaded')
  }, [])

  return (

    <div>
      <div className='headers'>
        <h2>sum={numberState+numberState2}</h2>
      </div>
      <div className='content'>
        <p onClick={clickFunction} >Click me</p>
      {
          toggle===false?
          <form onSubmit={submitFunction}>
          <input value={numberState} placeholder='1ST Number..' onChange={changeFunction}/>
          <input placeholder='2nd number...' onChange={changeFunction2}/>
          <button type='submit'>Save</button>
          </form>  
        :
        null
      }
    </div>
    </div>
  )
}

export default Component