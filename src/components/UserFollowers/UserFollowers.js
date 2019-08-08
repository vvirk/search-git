import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';
import Member from '../Member/Member';

class UserFollowers extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
    this.props.getUserFollowers(this.props.match.params.id);
  }
  render() {
    return (
        <div className="user-inner">
          <UserInfoContainer /> 
          <div className="user-wrap">
            <h2 className="title">Followers</h2>
            <ul className="users-list">
              {this.props.currentUserFollowers.map((follower, index) => (
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