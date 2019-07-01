import React from 'react';
import { Link } from 'react-router-dom';

class SearchPage extends React.Component {
  state = { orgsname: '' };
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
          onClick={() => this.props.getOrgs(this.state.orgsname)}>
          search
        </button>
        </div>
        <ul className="search-results-list">
          {this.props.orgs.map((org, index) => (
            <li
              className="search-result-item"
              key={index}
              onClick={()=>{this.props.getCurrentOrg(org.login)}}
            >
              <Link 
                to={`/search-git/org/${org.login}`}
                className="search-result-link"
              >
                {org.login}
              </Link>
            </li>
          ))}
        </ul>
        <p>{this.props.org}</p>
      </div>
    );
  }
}

export default SearchPage;