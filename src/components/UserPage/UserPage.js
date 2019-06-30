import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';

class UserPage extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.currentUser);
    this.props.getUserRepos(this.props.currentUser);
  }
  render() {
    return (
      <div className="page-inner">
        <UserInfoContainer />
        <div className="repos-wrap">
            <div className="user-title-wrap">
              <h2 className="title">Repos</h2>
            </div>
            <ul className="repos-list">
              {this.props.currentUserRepos.map((repo, index) => (
              <li 
                key={index}
                className="repos-item"
                >
                <a 
                  className="repos-item-link"
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
