import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage/SearchPage';
import OrganizationPage from './components/OrganisationPage/OrganisationPage';
import UserPage from './components/UserPage/UserPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/organisation">organisation</Link>
          </li>
          <li>
            <Link to="/user">user</Link>
          </li>
        </ul>

        <Route exact path="/" component={SearchPage} />
        <Route path="/organisation" component={OrganizationPage} />
        <Route path="/user" component={UserPage} />
      </div>
    </Router>
  );
}

export default App;
