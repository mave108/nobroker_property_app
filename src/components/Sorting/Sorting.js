import React from 'react';
import Widget from './Widget/Widget';
import _ from 'lodash';
import {PAGER_LENGTH} from '../../config/config';
const Sorting = (props) =>{
    const sortingOptions = [
        {val:0,text:"---Sort---"},
        {val:1,text:"Higher to lower Rent"},
        {val:2,text:"Lower to Higher Rent"},
        {val:3,text:"Bigger to Smaller Size"},
        {val:4,text:"Smaller to Bigger Size"},
        {val:5,text:"Newer to Older"},
        {val:6,text:"Older to Newer"}
    ];
    
   const SortHandler = (val)=>{
    let {copyData} = props; 
      switch(parseInt(val)){
          case 1:  
            const sortedArray1 = _.sortBy(copyData,"rent" ).reverse();
            props.updateHandler(_.slice(sortedArray1,0,props.offset+PAGER_LENGTH));
            //sort copy data as well to for ifinite scroll
            props.updateCopyHandler(sortedArray1);
          break;
          case 2:
            const sortedArray2 = _.sortBy(copyData,"rent" );
            props.updateHandler(_.slice(sortedArray2,0,props.offset+PAGER_LENGTH));
            //sort copy data as well to for ifinite scroll
            props.updateCopyHandler(sortedArray2);
          break;
          case 3:
            const sortedArray3 = _.sortBy(copyData,"propertySize" ).reverse();
            props.updateHandler(_.slice(sortedArray3,0,props.offset+PAGER_LENGTH));
            //sort copy data as well to for ifinite scroll
            props.updateCopyHandler(sortedArray3);
          break;
        case 4:
            const sortedArray4 = _.sortBy(copyData,"propertySize" );
            props.updateHandler(_.slice(sortedArray4,0,props.offset+PAGER_LENGTH));
            //sort copy data as well to for ifinite scroll
            props.updateCopyHandler(sortedArray4);
          break;
          case 5:
          const sortedArray5 = _.sortBy(copyData,"creationDate" ).reverse();
            props.updateHandler(_.slice(sortedArray5,0,props.offset+PAGER_LENGTH));
            //sort copy data as well to for ifinite scroll
            props.updateCopyHandler(sortedArray5);
          break;
          case 6:
          const sortedArray6 = _.sortBy(copyData,"creationDate" );
            props.updateHandler(_.slice(sortedArray6,0,props.offset+PAGER_LENGTH));
            //sort copy data as well to for ifinite scroll
            props.updateCopyHandler(sortedArray6);
          break;
      }
   }
   


    return (        
       <React.Fragment>
           Sort by:
           <Widget className="col-xs-5 col-lg-5" 
                   style={{float:"right"}} 
                   changeHanldler={SortHandler} 
                   options={sortingOptions} />                                   
        </React.Fragment>
    );
}

export default Sorting;