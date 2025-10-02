import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/todos" className="nav-link">
          Todos
        </Link>
        <Link to="/jokes" className="nav-link">
          Jokes
        </Link>
      </div>
    </nav>
  );
}
