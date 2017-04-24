// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import notebook from './notebook';

const rootReducer = combineReducers({
  router,
  notebook
});

export default rootReducer;
