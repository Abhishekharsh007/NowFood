import logo from './logo.svg';
import React from 'react';
import {useEffect, useState} from 'react';
import Food from './Food';
import './App.css';

function App() {

  const APP_ID = '2929ea32';
  const APP_KEY = 'eab8ae7746e40594ae4dff8988017fe4';

  const [foods, setfoods] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("food");

  const link = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect (() => {
    getfoods();
  }, [query]);

  const getfoods = async () => {
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);
    setfoods(data.hits);
  }

  const updateSearch = e => {
    setsearch(e.target.value);
  }

  const getsearch = e => {
    e.preventDefault();
    setquery(search);
    setsearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getsearch} className="search-form">
        <input className="search-input" type="text" placeholder="Search food" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Click
        </button>
      </form>
      <div className="food-items">
        { foods.map(food => (
            <Food 
              key={food.recipe.label}
              title={food.recipe.label} 
              ingredients={food.recipe.ingredients}
              url={food.recipe.url}
              calories={food.recipe.calories} 
              image={food.recipe.image}
            />
        ))}
      </div>
    </div>
  );
};

export default App;
