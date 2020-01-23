import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';
import Member from '../Member/Member';
import Preloader from '../Preloader/Preloader';

class UserFollowers extends React.Component {
  componentDidMount() {
    const { getUser, match, getUserFollowers, toggleIsFetching } = this.props;

    toggleIsFetching(true);
    getUser(match.params.id);
    getUserFollowers(match.params.id);
  }

  render() {
    const { currentUserFollowers, isFetching } = this.props;

    return (
      <>
        {isFetching && <Preloader />}
        <div className="user-inner">
          <UserInfoContainer /> 
          <div className="user-wrap">
            <h2 className="title">Followers</h2>
            <ul className="users-list">
              {currentUserFollowers.map(follower => (
                <Member
                  key={follower.id}
                  avatar={follower.avatar_url}
                  login={follower.login}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default UserFollowers;