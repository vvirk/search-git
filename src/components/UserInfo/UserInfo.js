import React from 'react';
import { Link } from 'react-router-dom';

//styles
import s from './styles/userInfo.module.css';

class UserInfo extends React.Component {
  render() {
    let { currentUserInfo } = this.props;
    return (
      <div className={s.infoWrap}>
        <div className={s.logo}>
          <img src={currentUserInfo.avatar_url} alt={`${currentUserInfo.login} avatar`} />
        </div>
        <div className={s.info}>
          <div className="title-wrap">
            <Link 
              to={`/users/${currentUserInfo.login}`}
              className={s.title}
            >
              {currentUserInfo.name}
            </Link>
            <p className={s.desc}>{currentUserInfo.login}</p>
            {(currentUserInfo.bio !== null) ? <p className="desc">{currentUserInfo.bio}</p> : null}
          </div>
          <ul className={s.infoList}>
            {(currentUserInfo.location !== null) ? 
              <li className={s.infoItem}>{currentUserInfo.location}</li> : null}
            {(currentUserInfo.blog !== null) ? 
              <li className={s.infoItem}>
                <a 
                  href={currentUserInfo.blog}
                  target="_blank"                   
                  rel="noopener noreferrer"
                >
                  {currentUserInfo.blog}
                </a>
              </li> : null}
            {(currentUserInfo.email !== null) ? 
              <li className={s.infoItem}>{currentUserInfo.email}</li> : null}
          </ul>
          <div className={s.folowWrap}>
            <Link 
              to={`/users/${currentUserInfo.login}/followers`}
              className={s.folowLink}
            >
              followers({currentUserInfo.followers})
            </Link>
            <Link 
              to={`/users/${currentUserInfo.login}/following`}
              className={s.folowLink}
            >
              following({currentUserInfo.following})
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
