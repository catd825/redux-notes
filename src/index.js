import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App' 
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const rootReducer = (currentState = { notes: [] }, action) => {
  // console.log("first reducer action", action)
  // console.log("first reducer state", currentState)
  console.log("reducer action", action)
  if(action.type === "add note"){
    // console.log("adding note")
    return { ...currentState, notes: [...currentState.notes, action.payload] }
  }else{
    return currentState
  }
  
}

//reducer is a fuctnion that returns a state object
const store = createStore(rootReducer);
// console.log(store)

ReactDOM.render(
    <Provider store={store}>
      <App  />
    </Provider>,
  document.getElementById('root')
);
