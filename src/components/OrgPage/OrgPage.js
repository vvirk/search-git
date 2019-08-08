import React from 'react';
import { Link } from 'react-router-dom';
import OrgInfoContainer from '../../containers/OrgInfoContainer';
import ReposList from '../ReposList/ReposList';
import Member from '../Member/Member';

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
                  <Member
                    index={index}
                    getUser={()=>{this.props.getCurrentUser(member.login)}}
                    avatar={member.avatar_url}
                    login={member.login}
                  />
                ))}
              </ul>
            <div className="view-all-wrap">
              {(this.props.currentOrgMembers.length > 5) ? 
              <Link 
                to={`/org/${org.login}/members`}
                className="view-all"
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
