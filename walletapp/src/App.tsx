import React from 'react';
import './App.css';
import Header from './components/Header';
import CostsTable from './components/CostsTable';
import { Redirect, Route, Switch } from 'react-router';


function App() {
  return (
    <>
      <Header />
      <Switch>
        {/* <Route path="/" component={ } exact /> */}
        <Route path="/songs" component={CostsTable} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
