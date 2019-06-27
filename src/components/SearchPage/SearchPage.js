import React from 'react';
import { Link } from 'react-router-dom';

class SearchPage extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { orgsname: '' };
  }
  render() {
    console.log(this.state.orgsname);
    return (
      <div>
        <h2>Github organisations: </h2>
        <input
          type="text"
          value={this.state.username}
          onChange={ e => this.setState({ orgsname: e.target.value })}
          placeholder="Github organisations..."
        />
        <button onClick={() => this.props.getOrgs(this.state.orgsname)}>
          Get organisation
        </button>
        <ul>
          {this.props.orgs.map((org, index) => (
            <li  key={index}>
              <Link to={`/organisation/${org.login}`}>{org.login}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchPage;