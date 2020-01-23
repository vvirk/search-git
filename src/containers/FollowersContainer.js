import { connect } from 'react-redux';
import UserFollowers from '../components/UserFollowers/UserFollowers';
import {
  getUserFollowers,
  getUser,
  toggleIsFetching,
} from '../actions/index';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentUserInfo: state.currentUserInfo, 
  currentUserFollowers: state.currentUserFollowers,
  isFetching: state.isFetching,
});

const mapDispatchToProps = {
  getUserFollowers,
  getUser,
  toggleIsFetching,
};

export const FollowersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFollowers);

export default FollowersContainer;
