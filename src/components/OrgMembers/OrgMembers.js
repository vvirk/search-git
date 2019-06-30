import React from 'react';
import { Link } from 'react-router-dom';
import OrgInfoContainer from '../../containers/OrgInfoContainer';

class OrgMembers extends React.Component {
  render() {
    return (
      <div>
        <div className="org-members-wrap">
          <OrgInfoContainer />
          <ul className="org-members-list">
            {this.props.currentOrgMembers.map((member, index) => (
              <li 
                className="org-member-item" 
                key={index}
                onClick={()=>{this.props.getCurrentUser(member.login)}}
              >
                <img src={member.avatar_url} alt={`${member.login} avatar`} />
                <Link to={`/users/${member.login}`}>
                  <h2>{member.login}</h2>
                </Link>
                <Link to={`/users/${member.login}/followers`} >followers</Link>
                <Link to={`/users/${member.login}/following`} >following</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default OrgMembers;
