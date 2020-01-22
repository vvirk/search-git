import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer';
import OrgContainer from './containers/OrgContainer';
import MembersContainer from './containers/MembersContainer';
import UserContainer from './containers/UserContainer';
import FollowersContainer from './containers/FollowersContainer';
import FollowingContainer from './containers/FollowingContainer';
import HeaderContainer from './containers/HeaderContainer';

export const MainRouter = () => (
    <div className="wrapper">
      <main className="main">
        <Router>
          <HeaderContainer />
          <div className="content">
            <Route path="/" exact component={SearchContainer} />
            <Route path="/org/:id" exact component={OrgContainer} />
            <Route path="/org/:id/members" exact component={MembersContainer} />
            <Route path="/users/:id" exact component={UserContainer} />
            <Route path="/users/:id/followers" exact component={FollowersContainer} />
            <Route path="/users/:id/following" exact component={FollowingContainer} />
          </div>
        </Router>
      </main>
    </div>
);

export default MainRouter;
