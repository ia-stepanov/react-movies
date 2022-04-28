
function Header() {
  return (
    <nav className="blue lighten-1">
      <div className="nav-wrapper">
        <a href="https://ia-stepanov.github.io/react-movies/" className="brand-logo">React Movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/ia-stepanov?tab=repositories" target="_blank" rel="noreferrer">Проекты</a></li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
