import React from "react";
import { NavLink, Link } from "react-router-dom";
// import { FaCalendarAlt } from "react-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        {/* <FaCalendarAlt /> */}
        <span className="logo-icon">📅</span>
        <span>CampusEvents</span>
      </Link>

      <div className="navbar-links">
        <NavLink to="/" end> Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/my-registration">My Registrations</NavLink>
      </div>

      <Link to="/events" className="navbar-button">
        Explore Events
      </Link>
    </nav>
  );
}

export default Navbar;
