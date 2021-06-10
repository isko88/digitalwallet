import React from 'react';
import './App.css';
import Header from './components/Header';
import CostsTable from './components/CostsTable';
import { Redirect, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Switch>
        {/* <Route path="/" component={ } exact /> */}
        <Route path="/costs" component={CostsTable} exact />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
