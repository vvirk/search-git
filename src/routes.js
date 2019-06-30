import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer';
import OrgContainer from './containers/OrgContainer';
import MembersContainer from './containers/MembersContainer';
import UserContainer from './containers/UserContainer';
import FollowersContainer from './containers/FollowersContainer';
import FollowingContainer from './containers/FollowingContainer';

export const MainRouter = () => (
  <Router>
    <Route path="/search-page/" exact component={SearchContainer} />
    <Route path="/search-page/org/:id" exact component={OrgContainer} />
    <Route path="/search-page/org/:id/members" exact component={MembersContainer} />
    <Route path="/search-page/users/:id" exact component={UserContainer} />
    <Route path="/search-page/users/:id/followers" exact component={FollowersContainer} />
    <Route path="/search-page/users/:id/following" exact component={FollowingContainer} />
  </Router>
);

export default MainRouter;
