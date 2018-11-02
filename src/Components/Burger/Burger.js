import React from 'react';
import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ( props ) => {
    const transformedIngredients = Object.keys( props.ingredients ).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return<BurgerIngredient key= {igKey + i} type= {igKey}/>
        })
    })
    .reduce

    return(
        <div className= { styles.Burger }>
         <BurgerIngredient type='bread-top' />
         {transformedIngredients}
         <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default burger;