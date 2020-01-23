import { connect } from 'react-redux';
import { 
  getOrgs,
  getCurrentOrg,
  addResult,
  toggleIsFetching,
} from '../actions/index';
import SearchPage from '../components/SearchPage/SearchPage';

const mapStateToProps = state => ({
  orgs: state.orgs,
  currentOrg: state.currentOrg,
  isFetching: state.isFetching,
});

const mapDispatchToProps = {
  getOrgs,
  getCurrentOrg,
  addResult,
  toggleIsFetching,
};

export const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);

export default SearchContainer;
