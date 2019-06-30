import { connect } from 'react-redux';
import { 
    getOrg,
    getOrgMembers,
    getCurrentUser,
    getOrgRepos,
} from '../actions/index';
import OrgPage from '../components/OrgPage/OrgPage';

const mapStateToProps = state => ({
    currentOrg: state.currentOrg,
    org: state.currentOrgInfo,
    currentOrgMembers: state.currentOrgMembers,
    currentOrgRepos: state.currentOrgRepos,
    currentUser: state.currentUser,
  });
  const mapDispatchToProps = {
      getOrg,
      getOrgMembers,
      getCurrentUser,
      getOrgRepos,
  };
  export const OrgContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(OrgPage);

export default OrgContainer;
