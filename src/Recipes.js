import React from 'react'
import ExpandCollapse from 'react-expand-collapse';
import { Motion, spring } from 'react-motion'
import './Recipes.css'

export default class Recipes extends React.Component {
    render() {
    return (
        <div className="top">
            <section>
                <button className="goback">Go Back</button>
                    <header>
                    <h2>Recipe One : Expanded Note</h2>
                    <p>[<em>placeholder for screenshot of recipe</em>]</p>
                    <p>Link to Recipe URL</p>
                    </header>
                    <div className="expanded">
                    <p>Ingredients Used: A Number, A List of said ingredients</p>
                    <p>Ingredients Missing</p>
                    <label htmlFor="substitutions">substitutions</label>
                    <select name="substitutions">
                    <option value="Vegan">Shortening Amount</option>
                    <option value="Vegetarian">Vegetable Oil Amount</option>
                    <option value="Keto">Lard Amount</option>
                    <option value="Gluten-Free">Something amount</option>
                    </select>
                    </div>
            </section>
            <section>
                <header>
                    <h2>Recipe Two: Non Expanded Note</h2>
                    <p>[<em>placeholder for screenshot of recipe</em>]</p>
                    <p>Link to Recipe URL</p>
                    <p></p>
                    <button className="moreinfo">More Info</button>
                </header>
            </section>
            <section>
                <header>
                    <h2>Recipe Three</h2>
                    <p>[<em>placeholder for screenshot of recipe</em>]</p>
                    <p>Link to Recipe URL</p>
                    <p></p>
                    <button className="moreinfo">More Info</button>
                </header>
            </section>
        </div>
    )
}
}