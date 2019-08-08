import React from 'react';
import UserInfoContainer from '../../containers/UserInfoContainer';
import ReposList from '../ReposList/ReposList';

//styles
import s from './styles/userPage.module.css';

class UserPage extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
    this.props.getUserRepos(this.props.match.params.id);
  }
  render() {
    return (
      <div className={s.userPageInner}>
        <UserInfoContainer />
        <ReposList 
          repos={this.props.currentUserRepos}
        />
      </div>
    );
  }
}

export default UserPage;
