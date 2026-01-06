import { useState, useEffect } from "react";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";

export default function Carousel({ images, title }) {
  // Ici on initialise à l'index 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation clavier
  useEffect(() => {
    // Forme fonctionnelle de setState -> éviter currentIndex dans les dépendances
    const goNext = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goPrev = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    // On retire l'event listener quand le composant n'est plus affiché
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  // Ici index +1 (pour les boutons)
  const goNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Ici index -1 (pour les boutons)
  const goPrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Si pas d'image -> on n'affiche rien (return null)
  if (!images || images.length === 0) return null;

  // Affichage carousel
  return (
    <div className="carousel">
      {/* Alt descriptif basé sur le titre du logement
      TODO: Si le backend fournit des descriptions par image, 
      adapter pour utiliser images[i].alt au lieu de title */}
      <img
        src={images[currentIndex]}
        alt={`${title} - Photo ${currentIndex + 1} sur ${images.length}`}
        className="carousel__image"
      />

      {/* Si images.length > 1 on affiche les flèches et le compteur */}
      {images.length > 1 && (
        <>
          <button
            onClick={goPrev}
            aria-label="Image précédente"
            className="carousel__btn carousel__btn--prev"
          >
            {/* Alt vide car le bouton a déjà aria-label */}
            <img src={chevronLeft} alt="" />
          </button>

          <button
            onClick={goNext}
            aria-label="Image suivante"
            className="carousel__btn carousel__btn--next"
          >
            <img src={chevronRight} alt="" />
          </button>

          {/* Ici on affiche le compteur */}
          <p className="carousel__counter">
            {currentIndex + 1} / {images.length}
          </p>
        </>
      )}
    </div>
  );
}
