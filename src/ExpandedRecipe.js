import React from 'react'

export default function ExpandedRecipe(props) {
    return (
        <div className="expanded">
        <h2>Recipe One</h2>
        <p>[<em>placeholder for screenshot of recipe</em>]</p>
        <p>Link to Recipe URL</p>
        <p>Ingredients Used: A Number, A List of said ingredients</p>
        <p>Ingredients Missing</p>
        <label htmlFor="substitutions"/>
        <select name="substitutions">
          <option value="Vegan">Shortening Amount</option>
          <option value="Vegetarian">Vegetable Oil Amount</option>
          <option value="Keto">Lard Amount</option>
          <option value="Gluten-Free">Something amount</option>
        </select>
        </div>
    )
}