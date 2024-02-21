import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import logger from "redux-logger";
/** TODO: import REDUX **/
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

/** TODO: Add REDUCERS */
const airportList = (state = [], action) => {
  // console.log(`Hey, I'm the count reducer!!!!`, action);

  // Since the store passes all actions to all reducers,
  // having a system for naming your actions is a good idea.
  if (action.type === "ADD_PLANE") {
    // console.log('doing the increase!');
    // When we return something, that value becomes the value of our "count" variable.
    return [...state, action.payload];
  }

  return state;
};

/** TODO: Create store */

const storeInstance = createStore(
  combineReducers({
    airportList,
  }),
  // Tell Redux that we want to use our logger.
  // apply middlewear: hey, this thing... let it snoop.
  // In this case, the thing we let snoop is our logger.
  applyMiddleware(logger)
);

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
