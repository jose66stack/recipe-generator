import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  
  const APP_ID = "b0ab424e"
  const APP_KEY = "00275adb142accc6a956584433747571"
  
  const [recipes, setRecipes] = useState([]);


 useEffect( () => {
  getRecipes();
 }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  }
  


  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button className='search-button' type="submit">Search</button>
      </form>
    </div>
  )

}
export default App
