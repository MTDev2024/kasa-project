import { useState } from "react";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Génère un ID unique basé sur le titre ("Description" -> "collapse-description")
  // Cet ID lie le bouton au contenu pour l'accessibilité
  const contentId = `collapse-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={toggleCollapse}
        // aria-expanded -> ouvert (true) ou fermé (false)
        aria-expanded={isOpen}
        // aria-controls lie le bouton au contenu via l'ID
        aria-controls={contentId}
      >
        <span className="collapse__title">{title}</span>
        <svg
          className={`collapse__chevron ${
            isOpen ? "collapse__chevron--open" : ""
          }`}
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          // SVG décoratif -> caché pour lecteurs d'écran
          aria-hidden="true"
        >
          <path
            d="M10.7897 0.502064C11.4591 -0.167355 12.5462 -0.167355 13.2157 0.502064L23.4979 10.7843C24.1674 11.4538 24.1674 12.5409 23.4979 13.2103C22.8285 13.8797 21.7414 13.8797 21.072 13.2103L12 4.13835L2.92804 13.205C2.25862 13.8744 1.17148 13.8744 0.502065 13.205C-0.167354 12.5355 -0.167354 11.4484 0.502065 10.779L10.7843 0.496708L10.7897 0.502064Z"
            fill="white"
          />
        </svg>
      </button>

      {/* Affichage seulement si isOpen est true */}
      {isOpen && (
        <div
          className="collapse__content"
          // ID = ID aria-controls du bouton
          id={contentId}
          // "region" -> zone de contenu
          role="region"
        >
          {children}
        </div>
      )}
    </div>
  );
}
