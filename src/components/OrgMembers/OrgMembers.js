import React from 'react';
import OrgInfoContainer from '../../containers/OrgInfoContainer';
import Member from '../Member/Member';
import Preloader from '../Preloader/Preloader';

class OrgMembers extends React.Component {
  componentDidMount() {
    const { getOrg, getOrgMembers, match, toggleIsFetching } = this.props;
    toggleIsFetching(true);
    getOrg(match.params.id);
    getOrgMembers(match.params.id);
  }

  render() {
    const { currentOrgMembers, getCurrentUser, isFetching } = this.props;

    return (
      <>
      {isFetching && <Preloader />}
      <div className="page-inner">
        <OrgInfoContainer />
        <div className="members-wrap">
          <h2 className="title">Members</h2>
          <ul className="users-list">
            {currentOrgMembers.map(member => (
              <Member
                key={member.id}
                getUser={()=>{getCurrentUser(member.login)}}
                avatar={member.avatar_url}
                login={member.login}
              />
            ))}
          </ul>
        </div>
      </div>
      </>
    );
  }
}

export default OrgMembers;
