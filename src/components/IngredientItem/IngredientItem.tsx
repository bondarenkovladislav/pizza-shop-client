import React from 'react'
import {IIngredient} from "../../interfaces/IIngredient";
import styles from './IngredientItem.module.scss'

interface IProps {
    ingredient: IIngredient
}

export const IngredientItem = ({ingredient}: IProps) => {
    return <span className={styles.root}>{ingredient.name}</span>
}
