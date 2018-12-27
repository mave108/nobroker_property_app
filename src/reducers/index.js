import { combineReducers } from 'redux';
import PropertyReducer from './Property'

const rootReducer = combineReducers({
  // state: (state = {}) => state,
  propertydata: PropertyReducer

});

export default rootReducer;
