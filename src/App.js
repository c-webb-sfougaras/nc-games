import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <header className="App-header">NC GAMES</header>
      <section className="App-body">
        <NavBar />

        <Switch>
          <Route path="/push-your-luck">Push Your Luck</Route>
          <Route path="/roll-and-write">Roll and Write</Route>
          <Route path="/engine-building">Engine Building</Route>
          <Route path="/deck-building">Deck Building</Route>
          <Route path="/hidden-roles">Hidden Roles</Route>
          <Route path="/dexterity">Dexterity</Route>
          <Route path="/strategy">Strategy</Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </section>
    </section>
  );
}

export default App;
