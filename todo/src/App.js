import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { reducer, initialState } from './reducers/reducer';

import Add from './components/Add';
import List from './components/List';
import Task from "./components/Task"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

   
    
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Task List</h1>
        <Add 
        dispatch={dispatch}
         />
        <List state={state} 
          dispatch = {dispatch}
        />
       
      </header>
    </div>
  );
}

export default App;
