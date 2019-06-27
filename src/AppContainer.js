import { connect } from 'react-redux';
import { data } from './reducers/data';
import { getOrgs } from './actions/index'
import SearchPage from './components/SearchPage/SearchPage';

const mapStateToProps = state => ({
  orgs: state.orgs,
});
const mapDispatchToProps = {
    data,
    getOrgs,
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);

export default AppContainer;
