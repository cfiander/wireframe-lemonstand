import React from 'react'
import {Link} from 'react-router-dom'

export default function LandingPage(props) {
    return (
    <div>
        <header className="top">
            <h1>Let's make something delicious</h1>
            <h2>What's in your kitchen?</h2>
        </header>

        <section>
          <header>
            <h3>Start Here</h3>
          </header>
            <p>[<em>placeholder for screenshot of kitchen, fridge or food</em>]</p>
            <p>
                Don't know what to make? Don't want to waste? Have no fear. Lemonstand helps you take what you already have and make something great with it.
                Just start by adding the ingredients you already have on hand and we will find you recipes that include all or some of your ingredients. You can add a few ingredients you want to use, or all the ingredients you have. Either way
                we promise to deliver one of our 350,000 recipes sourced from the top recipe sites across the internet. Only want to use the ingredients you have? No problem--we can deliver recipes which only include your ingredients. Otherwise we will 
                list what ever other ingredients you need--or even give you substitutions which you might also have on hand. Filter by allergy, diet-type, and calories. 
            </p>
        </section>

        <section>
        <header>
            <h3>Search and Add Ingredients</h3>
            <h3>Filter Your Results</h3>
        </header>
        </section>
        <section>
        <div className="container">
        <h1>Ingredient List</h1>
        <form id="js-shopping-list-form">
            <label htmlFor="shopping-list-entry">Add an ingredient</label>
            <input type="text" name="shopping-list-entry" className="js-shopping-list-entry" placeholder="e.g., broccoli"/>
            <button type="submit">Add ingredient</button>
        </form>
        <div className="filter-controls">
        <select>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Keto">Keto</option>
          <option value="Gluten-Free">Gluten-Free</option>
        </select>
        </div>
        </div>
        </section>
        <section>
          <button className="clear">Clear Results</button>
          <ul className="shopping-list js-shopping-list">
          <li>
            <span className="shopping-item">
            <p>[<em>placeholder for screenshot of apple</em>]</p>
              Apples
            </span>
            <div className="shopping-item-controls">
              <button className="shopping-item-delete js-item-delete">
                  <span className="button-label">Delete</span>
              </button>
            </div>
          </li>
          <li>
            <span className="shopping-item">
            <p>[<em>placeholder for screenshot of Flour</em>]</p>
              Flour
            </span>
            <div className="shopping-item-controls">
              <button className="shopping-item-delete js-item-delete">
                  <span className="button-label">Delete</span>
              </button>
            </div>
          </li>
          </ul>
          <Link to={`/Recipes`}>
          <button type="submit">Search For Recipes</button>
          </Link>
          </section>
    </div>
    )
}