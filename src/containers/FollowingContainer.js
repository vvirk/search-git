import { connect } from 'react-redux';
import UserFollowing from '../components/UserFollowing/UserFollowing';
import {
  getUserFollowing,
  getUser,
  toggleIsFetching,
} from '../actions/index';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentUserInfo: state.currentUserInfo, 
  currentUserFollowing: state.currentUserFollowing,
  isFetching: state.isFetching,
});

const mapDispatchToProps = {
  getUserFollowing,
  getUser,
  toggleIsFetching,
};

export const FollowingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFollowing);

export default FollowingContainer;
