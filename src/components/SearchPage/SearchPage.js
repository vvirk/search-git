import React from 'react';
import history from '../../history';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

//styles
import s from './styles/searchPage.module.css';

class SearchPage extends React.Component {
  state = { orgsname: '' };

  componentDidMount() {
    const { location, getOrgs } = this.props;

    if (location.search) {
      const param = queryString.parse(location.search);
      getOrgs(param.search);
      this.setState({ orgsname: param.search });
    }
  }
  componentDidUpdate(prevProps) {
    const { location, getOrgs, addResult } = this.props;
  
    if (location.search !== prevProps.location.search) {
      const param = queryString.parse(location.search);

      if(param.search) {
        getOrgs(param.search);
        this.setState({ orgsname: param.search });
      } else {
          addResult('');
          this.setState({ orgsname: '' });
        }
    }
  }

  render() {
    const { orgsname } = this.state;
    const { getOrgs, orgs, getCurrentOrg, } = this.props;

    return (
      <div className={s.inner}>
        <h1 className={s.title}>Github organisations search</h1>
        <div className={s.searchInputWrap}>
        <input
          className={s.searchInput}
          type="text"
          value={orgsname}
          onChange={ e => this.setState({ orgsname: e.target.value })}
          onKeyDown={ e => (e.target.value)
            ? e.keyCode === 13
              ? getOrgs(e.target.value) && history.push(`?search=${e.target.value}`)
              : null
            : null}
          placeholder="Github organisations..."
        />
        <button 
          className={s.searchBtn}
          onClick={orgsname
            ? () => getOrgs(orgsname) && history.push(`?search=${orgsname}`)
            : null}
        >
          search
        </button>
        </div>
        <ul className={s.resultsList}>
          {orgs && orgs.map((org, index) => (
            <li
              className={s.resultItem}
              key={index}
              onClick={() => getCurrentOrg(org.login)}
            >
              <Link
                to={`/org/${org.login}`}
                className={s.resultLink}
              >
                {org.login}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchPage;