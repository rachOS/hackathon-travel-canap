import React , { useState, useEffect } from 'react';
import axios from 'axios'
import './drink.css';
import load from '../img/load.png';
import arrow from '../img/raspeberry_jam.png';

export default function Drink(props){
    const [drink ,setDrink] = useState([]);

    useEffect (() => {
        console.log(props)
        const idDrink = props.match.params.idDrink;
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then(res => setDrink(res.data.drinks[0]))
    }, []);

    console.log(drink)
    const ingredientDrink = Object.values(drink);
    const measuresDrink = Object.values(drink);

    const handlereturn = (recipes) => {
        props.history.push(`/meal/flag/${recipes}`)
    }

    console.log(props.history)
    return(
        <div className="drink">
            <img className="drink-thumb" src={drink.strDrinkThumb} alt={drink.strDrink} />
            <div className="drink-ingredient">
                <div className='topcocktail'>
                    <h4>{drink.strDrink}</h4>
                    <button>return<img src={arrow} alt='arrow' /></button>
                </div>
                <p className="ingredient-title">Ingredients :</p>
                <div className="tips">
                    <div className="ingredients">{ingredientDrink.slice(21, 36).map(i => i !== "" && <li className="ingredient">{i}</li>)}</div>
                    <div className="ingredients">{measuresDrink.slice(35, 51).map(i => i && <li className="measure">{i}</li>)}</div>
                </div>

                <p className="instruction">{drink.strInstructions}</p>
            </div>
        </div>
    );
}