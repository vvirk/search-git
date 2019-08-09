import { connect } from 'react-redux';
import { 
  getOrgs,
  getCurrentOrg,
  addResult,
} from '../actions/index';
import SearchPage from '../components/SearchPage/SearchPage';

const mapStateToProps = state => ({
  orgs: state.orgs,
  currentOrg: state.currentOrg,
});
const mapDispatchToProps = {
    getOrgs,
    getCurrentOrg,
    addResult,
};

export const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);

export default SearchContainer;
