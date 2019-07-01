import React from 'react';
import { Link } from 'react-router-dom';

class UserInfo extends React.Component {
  render() {
    let { currentUserInfo } = this.props;
    return (
      <div className="info-wrap">
        <div className="logo">
          <img src={currentUserInfo.avatar_url} alt={`${currentUserInfo.login} avatar`} />
        </div>
        <div className="info">
          <div className="title-wrap">
            <h2 className="title">
            <Link 
              to={`/search-git/users/${currentUserInfo.login}`}
              className="title-link"
            >
              {currentUserInfo.name}
            </Link>
            </h2>
            <p className="desc">{currentUserInfo.login}</p>
            {(currentUserInfo.bio !== null) ? <p className="desc">{currentUserInfo.bio}</p> : null}
          </div>
          <ul className="info-list">
            {(currentUserInfo.location !== null) ? <li className="info-item">{currentUserInfo.location}</li> : null}
            {(currentUserInfo.blog !== null) ? <li className="info-item">{currentUserInfo.blog}</li> : null}
            {(currentUserInfo.email !== null) ? <li className="info-item">{currentUserInfo.email}</li> : null}
          </ul>
          <ul className="folow-wrap">
            <li className="folow-item">
              <Link 
                to={`/search-git/users/${currentUserInfo.login}/followers`}
                className="folow-item-link"
              >
                followers({currentUserInfo.followers})
              </Link>
            </li>
            <li className="folow-item">
              <Link 
                to={`/search-git/users/${currentUserInfo.login}/following`}
                className="folow-item-link"
              >
                following({currentUserInfo.following})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserInfo;
