// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import notebooks from './Notebooks';
import world from './World';

const rootReducer = combineReducers({
  router,
  notebooks,
  world
});

export default rootReducer;
