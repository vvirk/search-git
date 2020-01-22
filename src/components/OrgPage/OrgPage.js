import React from 'react';
import { Link } from 'react-router-dom';
import OrgInfoContainer from '../../containers/OrgInfoContainer';
import ReposList from '../ReposList/ReposList';
import Member from '../Member/Member';

class OrgPage extends React.Component {
  componentDidMount() {
    const { getOrg, getOrgMembers, getOrgRepos, match } = this.props;

    getOrg(match.params.id);
    getOrgMembers(match.params.id);
    getOrgRepos(match.params.id);
  }

  render() {
    const { org, currentOrgRepos, currentOrgMembers, getCurrentUser } = this.props;
    let orgMembers = this.props.currentOrgMembers.slice(0,5);

    return (
        <div className="page-inner">
          <OrgInfoContainer />
          <div className="members-wrap">
            <h2 className="title">Members</h2>
              <ul className="users-list">
                {orgMembers.map(member => (
                  <Member
                    getUser={() => getCurrentUser(member.login)}
                    avatar={member.avatar_url}
                    login={member.login}
                    id={member.id}
                    key={member.id}
                  />
                ))}
              </ul>
            <div className="view-all-wrap">
              {(currentOrgMembers.length > 5)
              ? <Link 
                  to={`/org/${org.login}/members`}
                  className="view-all"
                >
                  View all members
                </Link>
              : null }
            </div>
          </div>
          <ReposList repos={currentOrgRepos} />
        </div>
    );
  }
}

export default OrgPage;
