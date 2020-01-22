import React from 'react';
import { Link } from 'react-router-dom';
//styles
import s from './styles/member.module.css';

const Member = ({ getUser, avatar, login, id}) => (
  <li
    className={s.member} 
    key={id}
    onClick={getUser}
  >
    <img 
      src={avatar} 
      alt={`${login} avatar`} 
      className={s.avatar} 
    />
    <div className={s.info}>
      <Link to={`/users/${login}`}>
        <h2 className={s.title}>{login}</h2>
      </Link>
      <Link
        className={s.link} 
        to={`/users/${login}/followers`} >followers</Link>
      <Link
        className={s.link} 
        to={`/users/${login}/following`} >following</Link>
    </div>
  </li>
);

export default Member;