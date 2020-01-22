import React from 'react';
import OrgInfoContainer from '../../containers/OrgInfoContainer';
import Member from '../Member/Member';

class OrgMembers extends React.Component {
  componentDidMount() {
    const { getOrg, getOrgMembers, match } = this.props;
    getOrg(match.params.id);
    getOrgMembers(match.params.id);
  }
  render() {
    const { currentOrgMembers, getCurrentUser } = this.props;

    return (
      <div className="page-inner">
        <OrgInfoContainer />
        <div className="members-wrap">
          <h2 className="title">Members</h2>
          <ul className="users-list">
            {currentOrgMembers.map((member, index) => (
              <Member
                index={index}
                getUser={()=>{getCurrentUser(member.login)}}
                avatar={member.avatar_url}
                login={member.login}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default OrgMembers;
