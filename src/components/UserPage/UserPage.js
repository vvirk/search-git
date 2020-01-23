import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';
import ReposList from '../ReposList/ReposList';
import Preloader from '../Preloader/Preloader';

//styles
import s from './styles/userPage.module.css';

class UserPage extends React.Component {
  componentDidMount() {
    const { getUser, match, getUserRepos, toggleIsFetching } = this.props;

    toggleIsFetching(true)
    getUser(match.params.id);
    getUserRepos(match.params.id);
  }
  render() {
    const { isFetching, currentUserRepos } = this.props;

    return (
      <>
        {isFetching && <Preloader />}
        <div className={s.userPageInner}>
          <UserInfoContainer />
          <ReposList repos={currentUserRepos} />
        </div>
      </>
    );
  }
}

export default UserPage;
