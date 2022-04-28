import React from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=b0e8fb39&s=Harry Potter')
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true });
    fetch(`http://www.omdbapi.com/?apikey=b0e8fb39&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
