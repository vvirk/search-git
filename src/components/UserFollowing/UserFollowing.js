import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';
import Member from '../Member/Member';
import Preloader from '../Preloader/Preloader';

class UserFollowing extends React.Component {
  componentDidMount() {
    const { getUser, match, getUserFollowing, toggleIsFetching } = this.props;

    toggleIsFetching(true);
    getUser(match.params.id);
    getUserFollowing(match.params.id);
  }

  render() {
    const { currentUserFollowing, isFetching } = this.props;

    return (
      <>
        {isFetching && <Preloader />}
        <div className="user-inner">
          <UserInfoContainer />
          <div className="user-wrap">
            <h2 className="title">Following list</h2>
            <ul className="users-list">
              {currentUserFollowing.map(follow => (
                <Member 
                  key={follow.id}
                  avatar={follow.avatar_url}
                  login={follow.login}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default UserFollowing;