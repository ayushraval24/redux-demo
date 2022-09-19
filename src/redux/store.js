import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

// createStore(reducers,middleware,state)
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
