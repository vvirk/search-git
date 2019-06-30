import React from 'react';

class UserFollowing extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.currentUser);
    this.props.getUserFollowing(this.props.currentUser);
  }
  render() {
    let { currentUserInfo } = this.props;
    return (
        <div>
          <div className="avatar">
            <img src={currentUserInfo.avatar_url} alt={`${currentUserInfo.login} avatar`} />
          </div>
          <div className="title-wrap">
            <h2 className="title">{currentUserInfo.name}</h2>
            <p className="desc">{currentUserInfo.login}</p>
            {(currentUserInfo.bio !== null) ? <p className="desc">{currentUserInfo.bio}</p> : null}
          </div>
          <h2 className="title">Following list</h2>
          <ul className="follow-list">
            {this.props.currentUserFollowing.map((follow, index) => (
              <li className="follower" key={index}>
                <img src={follow.avatar_url} alt={`${follow.login} avatar`} />
                <h2 className="title">{follow.login}</h2>
              </li>
            ))}
          </ul>
        </div>
    );
  }
}

export default UserFollowing;