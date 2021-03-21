import React from 'react'
import RecipeList from './RecipeList'

function App() {
 return (
   <RecipeList recipes={sampleRecipes}/>
 )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on Chiecken\n 2. Put chicken in oven\n 3. Eat chiecken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        ampunt: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        ampunt: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n 2. Put pork in oven\n 3. Eat pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        ampunt: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        ampunt: '2 Tbs'
      }
    ]
  }
]

export default App;
