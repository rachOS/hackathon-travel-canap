import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Destination from './Destination';
import ContainerMeal from './ContainerMeal';

export default function TreapContainer(){
    const [mealRandom,setMeals] = useState({});
    useEffect(()=> {
        changeMeal();
    }, [])

    const changeMeal = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=> setMeals(res.data.meals[0]))
    }

    return(
        <div>
            {/*<Destination />*/}
            <ContainerMeal 
                mealRandom={mealRandom}
                changeMeal={changeMeal}
            />
        </div>
    )
}