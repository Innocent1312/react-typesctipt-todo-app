import React from "react";
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navigation from "./components/Navigation";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Switch>
          <Route path="/" exact component={TodosPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </>
  )
};

export default App;