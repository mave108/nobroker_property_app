import {PROPERTY_DATA,COPY_PROPERTY_DATA,API_ERROR, ALL_PROPERTY_DATA,LOADING} from './Types';
import {PROPERTY_LIST_API_URL,SOMETHING_WENT_WRONG} from '../config/config';
import axios from 'axios';
import _ from 'lodash';
import {PAGER_LENGTH} from '../config/config';

export const loadPropertyData = () =>{
                               
    return (dispatch) => {     
        //load all data at once bcz api gives fixed no of data all the time   
        return axios.get(PROPERTY_LIST_API_URL).then( response =>{               
            if('data' in response.data){
                dispatch({ type: PROPERTY_DATA, payload:_.slice(response.data.data,0,PAGER_LENGTH)});                           
                dispatch({ type: COPY_PROPERTY_DATA, payload:response.data.data});                           
                dispatch({ type: ALL_PROPERTY_DATA, payload:response.data.data});  
                dispatch({ type: LOADING, payload:false});                         
            }                      
        }).catch( (error)=>{            
            dispatch({ type: API_ERROR, payload:SOMETHING_WENT_WRONG}); 
            dispatch({ type: LOADING, payload:false});
            dispatch({ type: PROPERTY_DATA, payload:[]});                           
        });
    }
}

export const UpdatePropertyData = (data) =>{
                               
    return (dispatch) => {        
        dispatch({ type: PROPERTY_DATA, payload:data});                           
    }
}
export const UpdatePropertyCopy = (data) =>{
                               
    return (dispatch) => {        
        dispatch({ type: COPY_PROPERTY_DATA, payload:data});                           
    }
}

export const setLoading = (loadingState) =>{
                               
    return (dispatch) => {        
        dispatch({ type: LOADING, payload:loadingState});                           
    }
}