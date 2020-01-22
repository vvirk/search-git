import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';
import Member from '../Member/Member';

class UserFollowers extends React.Component {
  componentDidMount() {
    const { getUser, match, getUserFollowers } = this.props;

    getUser(match.params.id);
    getUserFollowers(match.params.id);
  }

  render() {
    const { currentUserFollowers } = this.props;

    return (
        <div className="user-inner">
          <UserInfoContainer /> 
          <div className="user-wrap">
            <h2 className="title">Followers</h2>
            <ul className="users-list">
              {currentUserFollowers.map((follower, index) => (
                <Member 
                  index={index}
                  avatar={follower.avatar_url}
                  login={follower.login}
                />
              ))}
            </ul>
          </div>
        </div>
    );
  }
}

export default UserFollowers;