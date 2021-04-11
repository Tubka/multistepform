import { combineReducers,applyMiddleware , createStore } from "redux";
import { formReducer } from "./reducers/form";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store

