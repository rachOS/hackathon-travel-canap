import React from 'react';
import load from '../img/load.png';
import './ContainerMeal.css';

const ContainerMeal = (props) => {
    return (
        <div className='containermeal'>
            <div className='title-random'>
                <h2>A bite to discover</h2>
                <button onClick={() => props.changeMeal()}><img src={load} alt='recharge' />
Another meal</button>
            </div>
            <div className='meal'>
                <h4>{props.mealRandom.strMeal}</h4>
                <img className='img-meal' src={props.mealRandom.strMealThumb} alt={props.strMeal} />
                <button>Make me love it</button>
            </div>
        </div>
    )
}

export default ContainerMeal;