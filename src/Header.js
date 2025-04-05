import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <form className="Header" id="search-form">
      <input
        type="search"
        placeholder="Enter a city"
        required
        className="search-form-input"
      />
      <input type="submit" value="Search" className="search-form-btn" />
    </form>
  );
}
