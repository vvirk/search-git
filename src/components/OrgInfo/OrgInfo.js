import React from 'react';

class OrgInfo extends React.Component {
  render() {
      let { org } = this.props;
    return (
      <div className="info-wrap">
        <div className="logo">
          <img src={org.avatar_url} alt={`${org.name} avatar`}/>
        </div>
        <div className="info">
          <div className="title-wrap">
            <h2 className="title">{(org.name == null) ? org.login : org.name}</h2>
            {(org.description !== null) ? <p className="desc">{org.description}</p> : null}
          </div>  
          <ul className="info-list">
            {(org.location !== null) ? <li className="info-item">{org.location}</li> : null}
            {(org.blog !== null) ? <li className="info-item">{org.blog}</li> : null}
            {(org.email !== null) ? <li className="info-item">{org.email}</li> : null}
            {(org.is_verified === true) ? <li className="verifed">verifed</li> : null}
          </ul>
        </div>
      </div>
    );
  }
}

export default OrgInfo;
