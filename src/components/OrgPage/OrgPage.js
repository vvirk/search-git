import React from 'react';
import { Link } from 'react-router-dom';
import OrgInfoContainer from '../../containers/OrgInfoContainer';
import ReposList from '../ReposList/ReposList';

class OrgPage extends React.Component {
  componentDidMount() {
    this.props.getOrg(this.props.match.params.id);
    this.props.getOrgMembers(this.props.match.params.id);
    this.props.getOrgRepos(this.props.match.params.id);
  }
  render() {
    let orgMembers = this.props.currentOrgMembers.slice(0,5);
    let { org } = this.props;
    return (
        <div className="page-inner">
          <OrgInfoContainer />
          <div className="members-wrap">
            <h2 className="title">Members</h2>
              <ul className="users-list">
                {orgMembers.map((member, index) => (
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
                        to={`/users/${member.login}/followers`} >followers</Link>
                      <Link
                        className="user-link" 
                        to={`/users/${member.login}/following`} >following</Link>
                    </div>
                  </li>
                ))}
              </ul>
            <div className="view-all-wrap">
              {(this.props.currentOrgMembers.length > 5) ? 
              <Link 
                to={`/org/${org.login}/members`}
                className="user-link"
              >
                View all members
              </Link> : null }
            </div>
          </div>
          <ReposList 
            repos={this.props.currentOrgRepos}
          />
        </div>
    );
  }
}

export default OrgPage;
