import React from 'react';
import history from '../../history';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

//styles
import s from './styles/searchPage.module.css';

class SearchPage extends React.Component {
  state = { orgsname: '' };
  componentDidMount() {
    if (this.props.location.search) {
      const param = queryString.parse(this.props.location.search);
      this.props.getOrgs(param.search);
      this.setState({ orgsname: param.search });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      const param = queryString.parse(this.props.location.search);
      if(param.search) {
        this.props.getOrgs(param.search);
        this.setState({ orgsname: param.search });
      } else {
          this.props.addResult('');
          this.setState({ orgsname: '' });
        }
    }
  }
  render() {
    return (
      <div className={s.inner}>
        <h1 className={s.title}>Github organisations search</h1>
        <div className={s.searchInputWrap}>
        <input
          className={s.searchInput}
          type="text"
          value={this.state.orgsname}
          onChange={ e => this.setState({ orgsname: e.target.value })}
          onKeyDown={ e => (e.target.value) ? (e.keyCode === 13) ? this.props.getOrgs(e.target.value) && history.push(`?search=${e.target.value}`): null : null}
          placeholder="Github organisations..."
        />
        <button 
          className={s.searchBtn}
          onClick={(this.state.orgsname) ? () => this.props.getOrgs(this.state.orgsname) && history.push(`?search=${this.state.orgsname}`) : null}>
          search
        </button>
        </div>
        <ul className={s.resultsList}>
          {(this.props.orgs) ? this.props.orgs.map((org, index) => (
            <li
              className={s.resultItem}
              key={index}
              onClick={()=>{this.props.getCurrentOrg(org.login)}}
            >
              <Link 
                to={`/org/${org.login}`}
                className={s.resultLink}
              >
                {org.login}
              </Link>
            </li>
          )) : null}
        </ul>
      </div>
    );
  }
}

export default SearchPage;