import React from 'react';
import { Link } from 'react-router-dom';

//styles
import s from './styles/orgInfo.module.css';

class OrgInfo extends React.Component {
  render() {
      const { org } = this.props;
      const {
        avatar_url,
        name,
        login,
        description,
        location,
        email,
        blog,
        is_verified
      } = org;

    return (
      <div className={s.wrap}>
        <div className={s.logo}>
          <img src={avatar_url} alt={`${name} avatar`}/>
        </div>
        <div className={s.info}>
          <div className={s.titleWrap}>
            <Link 
              to={`/org/${login}`}
              className={s.title}
            >
              {(name === null) ? login : name}
            </Link>
            {description && <p className={s.desc}>{description}</p>}
          </div>  
          <ul className={s.infoList}>
            {location && <li className={s.infoItem}>{location}</li>}
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
            {email && <li className={s.infoItem}>{email}</li>}
            {is_verified && <li className={s.verifed}>verifed</li>}
          </ul>
        </div>
      </div>
    );
  }
}

export default OrgInfo;
