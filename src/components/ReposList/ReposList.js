import React from 'react';
//styles
import s from './styles/reposList.module.css';

const ReposList = (props) => {
  return (
    <div>
      {(props.repos) ? <h2 className={s.title}>Repos</h2> : null}
      <ul className={s.list}>
        {props.repos.map((repo, index) => (
          <li 
            className={s.item}
            key={index}
          >
            <a 
              className={s.itemLink}
              href={repo.html_url} 
              target="_blank"                   
              rel="noopener noreferrer"
              title="watch on GitHub"
            >
              {repo.name}
            </a>
            <p className={s.desc}>
              {repo.description}
            </p>
            <div className={s.repoInfo}>
              <ul className={s.repoInfoList}>
                <li
                  className={s.repoInfoListItem}
                >
                  Language: <strong>{repo.language}</strong>
                </li>
                {(repo.forks) ? 
                  <li className={s.repoInfoListItem}>
                    Forks: <strong>{repo.forks}</strong>
                  </li> : null}
                {(repo.stargazers_count) ? 
                  <li className={s.repoInfoListItem}>
                    <strong>&#9733; {repo.stargazers_count}</strong>
                  </li> : null}
                {(repo.license) ? 
                  <li className={s.repoInfoListItem}>
                    License: <strong>{repo.license.name}</strong>
                  </li> : null}
                {(repo.updated_at) ? 
                  <li className={s.repoInfoListItem}>
                    Updated: <strong>{repo.updated_at.slice(0,10)}</strong>
                  </li> : null}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReposList;