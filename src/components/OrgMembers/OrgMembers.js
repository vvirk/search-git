import React from 'react';
import OrgInfoContainer from '../../containers/OrgInfoContainer';
import Member from '../Member/Member';

class OrgMembers extends React.Component {
  componentDidMount() {
    this.props.getOrg(this.props.match.params.id);
    this.props.getOrgMembers(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return (
      <div className="page-inner">
        <OrgInfoContainer />
        <div className="members-wrap">
          <h2 className="title">Members</h2>
          <ul className="users-list">
            {this.props.currentOrgMembers.map((member, index) => (
              <Member
                index={index}
                getUser={()=>{this.props.getCurrentUser(member.login)}}
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
