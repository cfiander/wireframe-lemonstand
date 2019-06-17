import React from 'react';
import './App.css';
import { Route, Link} from 'react-router-dom'
import SignUp from './SignUp'
import Recipes from './Recipes'
import LandingPage from './LandingPage'
import ScrollToTop from './ScrollToTop'
import Login from './Login'
import ExpandedRecipe from './ExpandedRecipe'

function App() {
  return (
    <div>
    <nav>
        <ul className="navList">
            <li>
               <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/SignUp`}>Sign Up</Link>
            </li>
            <li>
                <Link to={`/Login`}>Login</Link>
            </li>
            <li>
                <Link to={`/Recipes`}>Browse Recipes</Link>
            </li>
        </ul>
    </nav>
    <main>
          <Route
            exact path="/"
            component={LandingPage}
          />
          <ScrollToTop>
          <Route 
            exact path='/Recipes'
            component={Recipes}
          />
          </ScrollToTop>
          <Route 
            exact path='/SignUp'
            component={SignUp}
          />
          <Route 
            exact path='/Login'
            component={Login}
          />
          <Route
            path='/Recipes'
            component={ExpandedRecipe}
            />
    </main>
    <footer>Footer</footer>
    </div>
  );
}

export default App;
