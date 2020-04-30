import React , {useState, useEffect}from 'react';
import axios from 'axios'
import './recipes.css';
import load from '../img/load.png';
import flags from './flags';
import arrow from '../img/arrow.png';


export default function Recipes(props){

    const [recipe,setRecipe] = useState([]);
    const [cocktailRandom,setCocktail] = useState([]);
    
    useEffect (() => {
        const idmeal = props.match.params.idmeal;
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`)
        .then(res=> setRecipe(res.data.meals[0]))
    }, []);
    
    const ingredient = Object.values(recipe);
    const measures = Object.values(recipe);
    
    useEffect(()=> {
        changeCocktail();
    }, []);
    
    const changeCocktail = () => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res=> setCocktail(res.data.drinks[0]))
    };

    const handleDrink = (idDrink) => {
        props.history.push(`/${idDrink}`)
    }

    const handlereturn = () => {
        props.history.goBack()
    }
    
    return (
        <div className="recipe">
            <img className="recipe-thumb" src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className="recipe-ingredient">
                <div className='topcocktail'>
                    <h4>{recipe.strMeal}</h4>
                    <button onClick={() => handlereturn()}>return<img src={arrow} alt='arrow' /></button>
                </div>
                <p className="ingredient-title">Ingredients </p>
                <div className="tips">
                    <div className="ingredients">{ingredient.slice(9, 29).map(i => i !== "" && <li className="ingredient">{i}</li>)}</div>
                    <div className="ingredients">  {measures.slice(29, 49).map(i => i !== "" && <li className="measure">{i}</li>)}</div>
                </div>
                <p className="ingredient-title">Recipe</p>
                <p className="instruction">{recipe.strInstructions}</p>
            </div>
            <div className='cocktail'>
                <div className='title-cocktail'>
                    <p>Accompany this delicious dish with</p>
                    <div className='recharge'>
                        <button className="cocktail-name" onClick={() => handleDrink(cocktailRandom.idDrink)}>{cocktailRandom.strDrink}</button>
                        <button onClick={() => changeCocktail()}><img className='load' src={load} alt='recharge' /></button>
                    </div>
                </div>
                <img src={cocktailRandom.strDrinkThumb} alt={cocktailRandom.strDrink} />
            </div>
        </div>
    )
}