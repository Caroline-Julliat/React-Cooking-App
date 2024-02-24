import axios from "axios"
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

function Home() {

    const [data, setData] = useState([])
    const [ingredients, setIngredients] = useState("")

    useEffect(() => {
        axios
          .get(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" + ingredients
          )
          .then((res) => setData(res.data.meals))
      }, [ingredients])
    
    return (
        <main>
            <form className="form-container">
        <input
          type="text"
          placeholder="Taper le nom d'un aliment (en anglais)"
          onChange={(e) => setIngredients(e.target.value)}
        />
      </form>
      <div className="recipes-container">
        {data.map((recipe) => (
          <Card key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
        </main>
    );
}

export default Home;