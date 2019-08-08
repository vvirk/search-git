import React from 'react';
import { Link } from 'react-router-dom';

// styles
import s from './styles/header.module.css';

// images
import headerLogo from './img/headerLogo.png';

class Header extends React.Component {
  render() {
    return (
      <header className={s.header}>
        <div className={s.logoWrap}>
          <Link
            to="/"
            className={s.logo}
            onClick={() => this.props.getOrgs('#')}
          >
            <img src={headerLogo} alt="Header logo"/>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
