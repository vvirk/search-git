import React from 'react';

class UserFollowers extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.currentUser);
    this.props.getUserFollowers(this.props.currentUser);
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
          <h2 className="title">Followers</h2>
          <ul className="followers-list">
            {this.props.currentUserFollowers.map((follower, index) => (
              <li className="follower" key={index}>
                <img src={follower.avatar_url} alt={`${follower.login} avatar`} />
                <h2 className="title">{follower.login}</h2>
              </li>
            ))}
          </ul>
        </div>
    );
  }
}

export default UserFollowers;