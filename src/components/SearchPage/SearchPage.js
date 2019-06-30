import React from 'react';
import { Link } from 'react-router-dom';

class SearchPage extends React.Component {
  state = { orgsname: '' };
  render() {
    return (
      <div>
        <h2>Github organisations: </h2>
        <input
          type="text"
          value={this.state.orgsname}
          onChange={ e => this.setState({ orgsname: e.target.value })}
          placeholder="Github organisations..."
        />
        <button onClick={() => this.props.getOrgs(this.state.orgsname)}>
          Get organisation
        </button>
        <ul>
          {this.props.orgs.map((org, index) => (
            <li 
              key={index}
              onClick={()=>{this.props.getCurrentOrg(org.login)}}
            >
              <Link to={`/org/${org.login}`}>
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