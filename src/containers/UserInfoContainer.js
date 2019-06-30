import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo/UserInfo';

const mapStateToProps = state => ({
    currentUserInfo: state.currentUserInfo,
  });
  const mapDispatchToProps = {
  };
  export const UserInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(UserInfo);

export default UserInfoContainer;
