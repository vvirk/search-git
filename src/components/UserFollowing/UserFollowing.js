import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';
import Member from '../Member/Member';

class UserFollowing extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
    this.props.getUserFollowing(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return (
        <div className="user-inner">
          <UserInfoContainer />
          <div className="user-wrap">
            <h2 className="title">Following list</h2>
            <ul className="users-list">
              {this.props.currentUserFollowing.map((follow, index) => (
                <Member 
                  index={index}
                  avatar={follow.avatar_url}
                  login={follow.login}
                />
              ))}
            </ul>
          </div>
        </div>
    );
  }
}

export default UserFollowing;