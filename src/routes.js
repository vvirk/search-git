import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContainer from './AppContainer'
import OrgPage from './components/OrgPage/OrgPage';


export const MainRouter = () => (
  <Router>
    <Route path="/" exact component={AppContainer} />
    <Route path="/organisation/:id" exact component={OrgPage} />
  </Router>
);

export default MainRouter;
