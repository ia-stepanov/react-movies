import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            className="validate"
            placeholder="введите название фильма на английском"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button className="btn search-btn blue accent-2" onClick={() => this.props.searchMovies(this.state.search)}>Поиск</button>
        </div>
      </div>
    );
  }
}

export { Search };
