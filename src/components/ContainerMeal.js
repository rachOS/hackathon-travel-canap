import React, {useState, useEffect} from 'react';
import load from '../img/load.png';
import './ContainerMeal.css';
import axios from 'axios';

const ContainerMeal = (props) => {

    const [mealRandom,setMeals] = useState([]);

    useEffect(()=> {
        changeMeal();
    }, []);

    const changeMeal = () => {
        const nameflag = props.match.params.nameflag;
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nameflag}`)
         .then(res=> setMeals(res.data.meals[Math.floor(Math.random()* res.data.meals.length)]))
    };

    return (
        <div className='containermeal'>
            <div className='title-random'>
                <h2>A bite to discover</h2>
                <button onClick={() => changeMeal()}><img src={load} alt='recharge' />Another meal</button>
            </div>
            <div className='meal'>
                <h4>{mealRandom.strMeal}</h4>
                <img className='img-meal' src={mealRandom.strMealThumb} alt={mealRandom.strMeal} />
                <button>Make me love it</button>
            </div>
        </div>
    )
}

export default ContainerMeal;