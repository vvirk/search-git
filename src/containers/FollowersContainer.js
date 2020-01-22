import { connect } from 'react-redux';
import UserFollowers from '../components/UserFollowers/UserFollowers';
import {
  getUserFollowers,
  getUser,
} from '../actions/index';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentUserInfo: state.currentUserInfo, 
  currentUserFollowers: state.currentUserFollowers,
});

const mapDispatchToProps = {
  getUserFollowers,
  getUser,
};

export const FollowersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFollowers);

export default FollowersContainer;
