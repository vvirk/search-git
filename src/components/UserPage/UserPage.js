import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';
import ReposList from '../ReposList/ReposList';

//styles
import s from './styles/userPage.module.css';

class UserPage extends React.Component {
  componentDidMount() {
    const { getUser, match, getUserRepos } = this.props;

    getUser(match.params.id);
    getUserRepos(match.params.id);
  }
  render() {
    return (
      <div className={s.userPageInner}>
        <UserInfoContainer />
        <ReposList repos={this.props.currentUserRepos} />
      </div>
    );
  }
}

export default UserPage;
