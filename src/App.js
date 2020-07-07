import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './recipe.js'

function App() {

  const APP_ID = '4ff77166';
  const APP_KEY = '0fc905cccca2ddaaf71ab467e50f035c';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes,setRecipes] = useState([]);

  useEffect( () => {
    getRecipes();
  },[]); //added square breackets so that it only runs once


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button" >Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))}
      </div>
  );
}

export default App;
