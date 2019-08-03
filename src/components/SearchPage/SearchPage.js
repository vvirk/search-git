import React from 'react';
import history from '../../history';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

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
    return (
      <div className="search-inner">
        <h1 className="main-title">Github organisations search</h1>
        <div className="search-input-wrap">
        <input
          className="search-input"
          type="text"
          value={this.state.orgsname}
          onChange={ e => this.setState({ orgsname: e.target.value })}
          placeholder="Github organisations..."
        />
        <button 
          className="search-btn"
          onClick={(this.state.orgsname) ? () => this.props.getOrgs(this.state.orgsname) && history.push(`?search=${this.state.orgsname}`) : null}>
          search
        </button>
        </div>
        <ul className="search-results-list">
          {(this.props.orgs) ? this.props.orgs.map((org, index) => (
            <li
              className="search-result-item"
              key={index}
              onClick={()=>{this.props.getCurrentOrg(org.login)}}
            >
              <Link 
                to={`/org/${org.login}`}
                className="search-result-link"
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