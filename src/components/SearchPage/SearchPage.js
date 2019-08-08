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
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      const param = queryString.parse(this.props.location.search);
      if(param.search) {
        this.props.getOrgs(param.search);
      } else this.props.getOrgs('#');
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className={s.inner}>
        <h1 className={s.title}>Github organisations search</h1>
        <div className={s.searchInputWrap}>
        <input
          className={s.searchInput}
          type="text"
          value={this.state.orgsname}
          onChange={ e => this.setState({ orgsname: e.target.value })}
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