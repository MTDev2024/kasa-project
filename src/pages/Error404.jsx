import { Link } from "react-router-dom"; // Link - pas NavLink

export default function Error404() {
  return (
    <div className="error404">
      {" "}
      {/* Wrapper avec classe */}
      <h1 className="error404__title">404</h1>
      <p className="error404__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error404__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
