import React from 'react';
import { Link } from 'react-router-dom';
import OrgInfoContainer from '../../containers/OrgInfoContainer';

class OrgMembers extends React.Component {
  render() {
    return (
      <div>
        <div className="org-members-wrap">
          <OrgInfoContainer />
          <div className="user-title-wrap">
            <h2 className="title">Members</h2>
          </div>
          <ul className="users-list">
            {this.props.currentOrgMembers.map((member, index) => (
              <li 
                className="user-item" 
                key={index}
                onClick={()=>{this.props.getCurrentUser(member.login)}}
              >
                <img 
                  src={member.avatar_url} 
                  alt={`${member.login} avatar`} 
                  className="user-avatar"    
                />
                <div className="user-info">
                  <Link to={`/users/${member.login}`}>
                    <h2 className="user-title">{member.login}</h2>
                  </Link>
                  <Link 
                    className="user-link"
                    to={`/users/${member.login}/followers`} >
                      followers
                  </Link>
                  <Link 
                    className="user-link" 
                    to={`/users/${member.login}/following`} >
                      following
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default OrgMembers;
