import React from 'react';
import './App.css';
import Active from './component/Active/Active';
import All from './component/All/All';
import Completed from './component/Completed/Completed';
import Nav from './component/Completed/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {

  const todo = useSelector(state => state.todos)

  return (
    <Router>
      <div className="app">
        <div className="app__container">
          <header>#todo</header>
          <Nav />
          <Switch>
            <Route exact path="/" render={(props) => <All {...props} todo={todo} />} />
            <Route exact path="/active" render={(props) => <Active {...props} todo={todo} />} />
            <Route exact path="/completed" render={(props) => <Completed {...props} todo={todo} />} />
          </Switch>
        </div>
      
      </div>
    </Router>
  );
}

export default App;
