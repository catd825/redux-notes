import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App' 
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const rootReducer = (currentState = { notes: [] }, action) => {
  console.log("first reducer action", action)
  // console.log("first reducer state", currentState)
  console.log("reducer action", action)
  if(action.type === "add note"){
    // console.log("adding note")
    return { ...currentState, notes: [...currentState.notes, action.payload] }
  }else if(action.type==="add_notes_from_fetch"){
    return {...currentState, notes: action.payload}
  }else{
    return currentState
  }
  
}

//reducer is a fuctnion that returns a state object
const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log(store)

ReactDOM.render(
    <Provider store={store}>
      <App  />
    </Provider>,
  document.getElementById('root')
);
