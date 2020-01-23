import { connect } from 'react-redux';
import UserPage from '../components/UserPage/UserPage';
import {
  getUser,
  getUserRepos,
  toggleIsFetching,
} from '../actions/index';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentUserInfo: state.currentUserInfo,
  currentUserRepos: state.currentUserRepos,
  isFetching: state.isFetching,
});

const mapDispatchToProps = {
  getUser,
  getUserRepos,
  toggleIsFetching,
};

export const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage);

export default UserContainer;
