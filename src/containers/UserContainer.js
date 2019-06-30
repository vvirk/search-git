import { connect } from 'react-redux';
import UserPage from '../components/UserPage/UserPage';
import { 
  getUser,
  getUserRepos,
} from '../actions/index';

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    currentUserInfo: state.currentUserInfo,
    currentUserRepos: state.currentUserRepos,
  });
  const mapDispatchToProps = {
    getUser,
    getUserRepos,
  };
  export const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(UserPage);

export default UserContainer;
