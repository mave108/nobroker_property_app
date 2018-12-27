import React from 'react';

const Widget = (props) =>{
  
    return (
        <select className={props.className} style={props.style} onChange={(e)=>{props.changeHanldler(e.target.value)}}>
           {props.options.map( (option)=>{
                return <option value={option.val} key={option.val}>{option.text}</option>
           })}                                
        </select>
    );
}

export default Widget;