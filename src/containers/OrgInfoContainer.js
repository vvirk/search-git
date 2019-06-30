import { connect } from 'react-redux';
import OrgInfo from '../components/OrgInfo/OrgInfo';

const mapStateToProps = state => ({
    org: state.currentOrgInfo,
  });
  const mapDispatchToProps = {
  };
  export const OrgInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(OrgInfo);

export default OrgInfoContainer;
