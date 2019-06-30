import { connect } from 'react-redux';
import { 
  getOrgs,
  getCurrentOrg,
} from '../actions/index';
import SearchPage from '../components/SearchPage/SearchPage';

const mapStateToProps = state => ({
  orgs: state.orgs,
  currentOrg: state.currentOrg,
});
const mapDispatchToProps = {
    getOrgs,
    getCurrentOrg,
};

export const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);

export default SearchContainer;
