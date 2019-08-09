import React from 'react';
import { Link } from 'react-router-dom';

// styles
import s from './styles/header.module.css';

// images

class Header extends React.Component {
  render() {
    return (
      <header className={s.header}>
        <Link
          to="/"
          className={s.logo}
          onClick={() => this.props.addResult('')}
        >
          GitSearch
        </Link>
      </header>
    );
  }
}

export default Header;
