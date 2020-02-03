import React from "react";
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navigation from "./components/Navigation";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <>
      <h1>Hello TypeScript</h1>
      <blockquote>
        This page will be used by me for train my typescript scills
      </blockquote>

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