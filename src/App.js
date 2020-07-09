import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './recipe.js'

function App() {

  const APP_ID = '4ff77166';
  const APP_KEY = '0fc905cccca2ddaaf71ab467e50f035c';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes,setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("")

  useEffect( () => {
    getRecipes();
  },[query]); //added square breackets so that it only runs once


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange= {updateSearch} placeholder="Search a Dish......." />
        <button type="submit" className="search-button" >Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients = {recipe.recipe.ingredients} />
      ))}
      </div>
      </div>
  );
}

export default App;
