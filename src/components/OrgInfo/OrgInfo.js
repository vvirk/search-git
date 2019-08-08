import React from 'react';
//styles
import s from './styles/orgInfo.module.css';

class OrgInfo extends React.Component {
  render() {
      let { org } = this.props;
    return (
      <div className={s.wrap}>
        <div className={s.logo}>
          <img src={org.avatar_url} alt={`${org.name} avatar`}/>
        </div>
        <div className={s.info}>
          <div className={s.titleWrap}>
            <h2 className={s.title}>{(org.name == null) ? org.login : org.name}</h2>
            {(org.description !== null) ? <p className={s.desc}>{org.description}</p> : null}
          </div>  
          <ul className={s.infoList}>
            {(org.location !== null) ? 
              <li className={s.infoItem}>{org.location}</li> : null}
            {(org.blog !== null) ?
              <li className={s.infoItem}>
                <a 
                  href={org.blog}
                  target="_blank"                   
                  rel="noopener noreferrer"
                >
                  {org.blog}
                </a>
              </li> : null}
            {(org.email !== null) ? <li className={s.infoItem}>{org.email}</li> : null}
            {(org.is_verified === true) ? <li className={s.verifed}>verifed</li> : null}
          </ul>
        </div>
      </div>
    );
  }
}

export default OrgInfo;
