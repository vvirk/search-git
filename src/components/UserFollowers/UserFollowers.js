import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';

class UserFollowers extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.currentUser);
    this.props.getUserFollowers(this.props.currentUser);
  }
  render() {
    return (
        <div className="page-inner">
          <UserInfoContainer /> 
          <div className="user-title-wrap">
            <h2 className="title">Followers</h2>
          </div>
          <ul className="user-list follow-list">
            {this.props.currentUserFollowers.map((follower, index) => (
              <li className="user-item" key={index}>
                <img 
                  src={follower.avatar_url} 
                  alt={`${follower.login} avatar`}
                  className="user-avatar"
                 />
                <h2 className="user-title follow-title">{follower.login}</h2>
              </li>
            ))}
          </ul>
        </div>
    );
  }
}

export default UserFollowers;