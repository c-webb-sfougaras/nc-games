import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import StrategyGames from "./StrategyGames";
import RollAndWriteGames from "./RollAndWriteGames";
import EngineBuildingGames from "./EngineBuildingGames";
import HiddenRolesGames from "./HiddenRolesGames";
import PushYourLuckGames from "./PushYourLuckGames";
import DexterityGames from "./DexterityGames";
import DeckBuildingGames from "./DeckBuilding";
import ReviewPage from "./ReviewPage";
import NavBar from "./NavBar";
import { Link, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <header className="App-header">NC GAMES</header>
      <section className="App-body">
        <NavBar />
        <Switch>
          <Route path="/push-your-luck">
            <PushYourLuckGames />
          </Route>
          <Route path="/roll-and-write">
            <RollAndWriteGames />
          </Route>
          <Route path="/engine-building">
            <EngineBuildingGames />
          </Route>
          <Route path="/deck-building">
            <DeckBuildingGames />
          </Route>
          <Route path="/hidden-roles">
            <HiddenRolesGames />
          </Route>
          <Route path="/dexterity">
            <DexterityGames />
          </Route>
          <Route path="/strategy">
            <StrategyGames />
          </Route>
          <Route path="/reviews/:review_id">
            <ReviewPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </section>
    </section>
  );
}

export default App;
