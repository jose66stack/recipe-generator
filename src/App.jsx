import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  
  const APP_ID = "b0ab424e"
  const APP_KEY = "00275adb142accc6a956584433747571"
  
  const exampleReq = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


  return(
    <div className='App'>
      <form>
        <input type='text'/>
        <button type="submit"></button>
      </form>
    </div>
  )

}
export default App
