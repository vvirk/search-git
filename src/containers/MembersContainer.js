import { connect } from 'react-redux';
import {
  getCurrentUser,
  getOrgMembers,
  getOrg,
} from '../actions/index';
import OrgMembers from '../components/OrgMembers/OrgMembers'; 

const mapStateToProps = state => ({
  currentOrgMembers: state.currentOrgMembers,
  currentUser: state.currentUser,
});

const mapDispatchToProps = {
  getCurrentUser,
  getOrgMembers,
  getOrg,
};

export const MembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrgMembers);

export default MembersContainer;
