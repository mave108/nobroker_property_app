import { PROPERTY_DATA, COPY_PROPERTY_DATA, API_ERROR,ALL_PROPERTY_DATA,LOADING} from '../actions/Types';
const Propertyeducer = (state = {}, action) => {
    switch(action.type) {
        case PROPERTY_DATA:
        return { ...state, propertList: action.payload};    
        case COPY_PROPERTY_DATA:
        return { ...state, propertListCopy: action.payload};
        case API_ERROR:
        return { ...state, error: action.payload};  
        case ALL_PROPERTY_DATA:
        return { ...state, allProperties: action.payload};
        case LOADING:
        return { ...state, loading: action.payload}; 
        default:
          return state;
      }
}
export default Propertyeducer;