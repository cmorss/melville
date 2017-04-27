// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import notebooks from './notebooks';

const rootReducer = combineReducers({
  router,
  notebooks
});

export default rootReducer;
