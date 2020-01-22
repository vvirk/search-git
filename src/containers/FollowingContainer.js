import { connect } from 'react-redux';
import UserFollowing from '../components/UserFollowing/UserFollowing';
import {
  getUserFollowing,
  getUser,
} from '../actions/index';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentUserInfo: state.currentUserInfo, 
  currentUserFollowing: state.currentUserFollowing,
});

const mapDispatchToProps = {
  getUserFollowing,
  getUser,
};

export const FollowingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFollowing);

export default FollowingContainer;
