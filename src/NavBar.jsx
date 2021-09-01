import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <section className="NavBar">
      <h1 className="navBarTitle">Navigation</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/strategy">Strategy Games</Link>
        </li>

        <li>
          <Link to="/roll-and-write">Roll and Write</Link>
        </li>
        <li>
          <Link to="/engine-building">Engine Building</Link>
        </li>
        <li>
          <Link to="/push-your-luck">Push Your Luck</Link>
        </li>
        <li>
          <Link to="/hidden-roles">Hidden Roles</Link>
        </li>
        <li>
          <Link to="/deck-building">Deck Building</Link>
        </li>
        <li>
          <Link to="/dexterity">Dexterity</Link>
        </li>
      </ul>
    </section>
  );
}

export default NavBar;
