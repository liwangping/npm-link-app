import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import NpmLink from './NpmLink';

const Hello = () => {
  return (
    <>
      <NpmLink />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
