import starFull from "../../assets/icons/star-full.svg";
import starEmpty from "../../assets/icons/star-empty.svg";

export default function Rating({ value }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    // role="img" + aria-label -> lecteur d'écran annonce note globale
    <div className="rating" role="img" aria-label={`Note : ${value} sur 5`}>
      {/* Boucle sur chaque nombre */}
      {stars.map((position) => (
        // Pour chaque nombre, créer img
        <img
          // Opérateur ternaire -> étoile full ou empty
          src={position <= Number(value) ? starFull : starEmpty}
          alt="" // Alt vide car les étoiles sont décoratives (info dans aria-label parent)
          // Key unique pour React
          key={position}
          className="rating__star"
        />
      ))}
    </div>
  );
}
