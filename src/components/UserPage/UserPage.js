import React from 'react';
import { Link } from 'react-router-dom';

class UserPage extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.currentUser);
    this.props.getUserRepos(this.props.currentUser);
  }
  render() {
    let { currentUserInfo } = this.props;
    return (
      <div className="wrap">
        <div className="avatar">
          <img src={currentUserInfo.avatar_url} alt={`${currentUserInfo.login} avatar`} />
        </div>
        <div className="title-wrap">
          <h2 className="title">{currentUserInfo.name}</h2>
          <p className="desc">{currentUserInfo.login}</p>
          {(currentUserInfo.bio !== null) ? <p className="desc">{currentUserInfo.bio}</p> : null}
        </div>
        <ul className="info">
          {(currentUserInfo.location !== null) ? <li className="info-item">{currentUserInfo.location}</li> : null}
          {(currentUserInfo.blog !== null) ? <li className="info-item">{currentUserInfo.blog}</li> : null}
          {(currentUserInfo.email !== null) ? <li className="info-item">{currentUserInfo.email}</li> : null}
        </ul>
        <ul className="folow-wrap">
          <li className="folow-item">
            <Link to={`/users/${currentUserInfo.login}/followers`} >followers({currentUserInfo.followers})</Link>
          </li>
          <li className="folow-item">
            <Link to={`/users/${currentUserInfo.login}/following`} >following({currentUserInfo.following})</Link>
          </li>
        </ul>
        <div className="repos-wrap">
            <h2 className="title">Repos</h2>
            <ul className="repos-list">
              {this.props.currentUserRepos.map((repo, index) => (
              <li key={index}>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="watch on GitHub"
                >
                  {repo.name}
                </a>
              </li>
              ))}
            </ul>
          </div>
      </div>
    );
  }
}

export default UserPage;
