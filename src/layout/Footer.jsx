function Footer() {
  return (
    <footer className="page-footer blue lighten-1">
      <div className="footer-copyright blue darken-1">
        <div className="container white-text">
          © {new Date().getFullYear()}. Игорь Степанов
          <a className="white-text right" href="https://t.me/ia_stepanov">Telegram</a>
          <a className="white-text right" href="https://www.linkedin.com/in/ia-stepanov/">LinkedIn</a>
          <a className="white-text right" href="https://github.com/ia-stepanov">Github</a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
