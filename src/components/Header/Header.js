import React from 'react';
import { Link } from 'react-router-dom';

// styles
import s from './styles/header.module.css';

class Header extends React.Component {
  render() {
    const { addResult } = this.props;

    return (
      <header className={s.header}>
        <Link
          to="/"
          className={s.logo}
          onClick={() => addResult('')}
        >
          GitSearch
        </Link>
      </header>
    );
  }
}

export default Header;
