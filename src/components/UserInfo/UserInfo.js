import React from 'react';
import { Link } from 'react-router-dom';

//styles
import s from './styles/userInfo.module.css';

class UserInfo extends React.Component {
  render() {
    const { currentUserInfo } = this.props;
    const {
      avatar_url,
      login,
      name,
      bio,
      company,
      location,
      blog,
      email,
      followers,
      following
    } = currentUserInfo;

    return (
      <div className={s.infoWrap}>
        <div className={s.logo}>
          <img src={avatar_url} alt={`${login} avatar`} />
        </div>
        <div className={s.info}>
          <div className="title-wrap">
            <Link 
              to={`/users/${login}`}
              className={s.title}
            >
              {name}
            </Link>
            <p className={s.desc}>{login}</p>
            {bio && <p className="desc">{bio}</p>}
          </div>
          <ul className={s.infoList}>
            {company && 
            <li className={s.infoItem}>
              {company}
            </li>}
            {location && 
              <li className={s.infoItem}>{location}</li>}
            {blog && 
              <li className={s.infoItem}>
                <a 
                  href={blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {blog}
                </a>
              </li>}
            {email && 
              <li className={s.infoItem}>{email}</li>}
          </ul>
          <div className={s.folowWrap}>
            <Link 
              to={`/users/${login}/followers`}
              className={s.folowLink}
            >
              followers({followers})
            </Link>
            <Link 
              to={`/users/${login}/following`}
              className={s.folowLink}
            >
              following({following})
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
