function Movie(props) {
  const { 
    Title: title, 
    Year: year, 
    imdbID: id, 
    Type: type, 
    Poster: poster 
  } = props;

  return (
    <div id={id} className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ? (
          <a href={'https://www.imdb.com/title/' + id} target="_blank" rel="noreferrer">
            <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`} alt={poster} />
          </a>
        ) : (
          <a href={'https://www.imdb.com/title/' + id} target="_blank" rel="noreferrer">
            <img className="activator" src={poster} alt={title} />
          </a>
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
