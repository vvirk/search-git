import { connect } from 'react-redux';
import { addResult } from '../actions/index';
import Header from '../components/Header/Header'; 

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
  addResult,
};
export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
