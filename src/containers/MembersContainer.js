import { connect } from 'react-redux';
import {
  getCurrentUser,
  getOrgMembers,
  getOrg,
  toggleIsFetching,
} from '../actions/index';
import OrgMembers from '../components/OrgMembers/OrgMembers'; 

const mapStateToProps = state => ({
  currentOrgMembers: state.currentOrgMembers,
  currentUser: state.currentUser,
  isFetching: state.isFetching,
});

const mapDispatchToProps = {
  getCurrentUser,
  getOrgMembers,
  getOrg,
  toggleIsFetching,
};

export const MembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrgMembers);

export default MembersContainer;
