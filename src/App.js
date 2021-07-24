import './App.css';
import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const APP_ID = "";
  const APP_KEY = "";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);
  }

  const submitSearch = (e) => {
    e.preventDefault();

    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={submitSearch}>
        <input 
          className="search-bar"
          type="text" 
          onChange={(e) => setSearch(e.target.value)} 
          value={search}
          placeholder="Type food name..."
          required 
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe 
            key={recipe.recipe.label} 
            recipe={recipe.recipe} 
          />
        ))}
      </div>
      <footer className="footer">
        Cloudy Skies
      </footer>
    </div>
  );
}

export default App;

