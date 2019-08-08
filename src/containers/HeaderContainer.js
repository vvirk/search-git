import { connect } from 'react-redux';
import { getOrgs } from '../actions/index';
import Header from '../components/Header/Header'; 

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
  getOrgs,
};
export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
