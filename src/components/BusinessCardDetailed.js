import React from "react";

const BusinessCardDetailed = ({ card, onToggleFavorite }) => {
  const handleFavoriteToggle = () => {
    onToggleFavorite(card);
  };

  return (
    <div className="business-card-detailed">
      <h2>{card.name}</h2>
      <p>Email: {card.email}</p>
      <p>Tel: {card.tel}</p>
      <img src={card.photo} alt="Profile" className="contact-image" />
      <span
        className={`favorite-icon ${card.favorite ? "favorite" : ""}`}
        onClick={handleFavoriteToggle}
      >
        heart
      </span>
    </div>
  );
};

export default BusinessCardDetailed;
