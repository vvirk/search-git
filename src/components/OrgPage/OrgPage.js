import React from 'react';
import { Link } from 'react-router-dom';
import OrgInfoContainer from '../../containers/OrgInfoContainer';

class OrgPage extends React.Component {
  componentDidMount() {
    this.props.getOrg(this.props.currentOrg);
    this.props.getOrgMembers(this.props.currentOrg);
    this.props.getOrgRepos(this.props.currentOrg);
  }
  render() {
    let orgMembers = this.props.currentOrgMembers.slice(0,5);
    let { org } = this.props;
    console.log(orgMembers.length);
    return (
      <div>
        <div className="about">
          <OrgInfoContainer />
          <div className="member-wrap">
            <ul className="member-list">
              {orgMembers.map((member, index) => (
                <li 
                  className="member-item" 
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
            {(orgMembers.length > 5) ? 
              <Link to={`/org/${org.login}/members`}>
                View all members
              </Link> : null }
          </div>
          <div className="repos-wrap">
            <h2 className="title">Repos</h2>
            <ul className="repos-list">
              {this.props.currentOrgRepos.map((repo, index) => (
              <li key={index}>
                <a 
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
      </div>
    );
  }
}

export default OrgPage;
