import React from 'react';
import { Link } from 'react-router-dom';
//styles
import s from './styles/member.module.css';

const Member = (props) => {
  return (
    <li 
      className={s.member} 
      key={props.index}
      onClick={props.getUser}
    >
      <img 
        src={props.avatar} 
        alt={`${props.login} avatar`} 
        className={s.avatar} 
      />
      <div className={s.info}>
        <Link to={`/users/${props.login}`}>
          <h2 className={s.title}>{props.login}</h2>
        </Link>
        <Link
          className={s.link} 
          to={`/users/${props.login}/followers`} >followers</Link>
        <Link
          className={s.link} 
          to={`/users/${props.login}/following`} >following</Link>
      </div>
    </li>
  );
}

export default Member;