import React, { useState } from "react";
import "./BusinessCardList.css";
import bizcards from "../Data";
import BusinessCardDetailed from "./BusinessCardDetailed";

const BusinessCardList = () => {
  const [contacts, setContacts] = useState(bizcards);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const toggleFavorite = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].favorite = !updatedContacts[index].favorite;
    setContacts(updatedContacts);
  };

  const handleShowFavoritesOnly = () => {
    setShowFavoritesOnly(!showFavoritesOnly);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedContacts = filteredContacts.sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "descending") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  const displayedContacts = showFavoritesOnly
    ? sortedContacts.filter((contact) => contact.favorite)
    : sortedContacts;

  return (
    <div className="business-card-list">
      <div className="search-and-sort">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={showFavoritesOnly}
            onChange={handleShowFavoritesOnly}
          />
          Show Favorites Only
        </label>
      </div>
      <ul className="contact-list">
        {sortedContacts.map((contact, index) => (
          <li
            key={index}
            className={`contact-item ${
              selectedCardIndex === index ? "active" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <img src={contact.photo} alt="Profile" className="contact-image" />
            <span className="contact-name">{contact.name}</span>
            <span
              className={`favorite-icon ${contact.favorite ? "favorite" : ""}`}
              onClick={(event) => {
                event.stopPropagation();
                toggleFavorite(index);
              }}
            >
              heart
            </span>
          </li>
        ))}
      </ul>
      {selectedCardIndex !== -1 && (
        <BusinessCardDetailed
          card={sortedContacts[selectedCardIndex]}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default BusinessCardList;
