import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';

class UserFollowing extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.currentUser);
    this.props.getUserFollowing(this.props.currentUser);
  }
  render() {
    return (
        <div className="page-inner">
          <UserInfoContainer />
          <div className="user-title-wrap">
            <h2 className="title">Following list</h2>
          </div>
          <ul className="user-list follow-list">
            {this.props.currentUserFollowing.map((follow, index) => (
              <li className="user-item" key={index}>
                <img 
                  src={follow.avatar_url} 
                  alt={`${follow.login} avatar`} 
                  className="user-avatar"
                />
                <h2 className="user-title follow-title">{follow.login}</h2>
              </li>
            ))}
          </ul>
        </div>
    );
  }
}

export default UserFollowing;