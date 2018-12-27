import React from 'react';
import {FILTER_PSIZE_MIN,FILTER_PSIZE_MAX,FILTER_RENT_MIN,FILTER_RENT_MAX,PAGER_LENGTH} from '../../config/config';
import _ from 'lodash';
class Filter extends React.Component{
   
    constructor(props, context) {
        super(props, context)
        this.state = this.setInitialState()
        this.submitHandler = this.submitHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
 
      }
    setInitialState = ()=>{
        return {
            propertySize:{
                max:FILTER_PSIZE_MAX,
                min:FILTER_PSIZE_MIN
            },
            rent:{
                max:FILTER_RENT_MAX,
                min:FILTER_RENT_MIN
            },
            photoAvailable: false 
          }
    }
    photoChangeHandler = ()=>{
       this.setState((state)=>{           
           return {photoAvailable: !state.photoAvailable};
       });       
    }  

    propertySizeMinChangeHandler = (val) =>{
        this.setState((state)=>{
            let propertySize = {...state.propertySize};
            propertySize.min = parseInt(val) || 0;
            if(propertySize.min >=0 && propertySize.min <= FILTER_PSIZE_MAX/2){
                return {propertySize};
            }
            
        }); 
    }
    propertySizeMaxChangeHandler = (val) =>{
        this.setState((state)=>{
            let propertySize = {...state.propertySize};
            propertySize.max = parseInt(val) || FILTER_PSIZE_MAX;            
            if(propertySize.max > 0 && propertySize.max <= FILTER_PSIZE_MAX){
                return {propertySize};
            }
        }); 
     }
     rentMinChangeHandler = (val) =>{
        this.setState((state)=>{
            let rent = {...state.rent};
            rent.min = parseInt(val) || 0;            
            if(rent.min >= 0 && rent.min <= FILTER_RENT_MAX/2){
                return {rent};
            }
            
        }); 
     }
     rentMaxChangeHandler = (val) =>{
        this.setState((state)=>{
            let rent = {...state.rent};
            rent.max = parseInt(val) || FILTER_RENT_MAX;
            if(rent.max > 0 && rent.max <= FILTER_RENT_MAX){
                return {rent};
            }
        }); 
     }
     resetHandler = (e)=>{
        this.props.loading(true);
        this.setState(this.setInitialState());
        this.props.loadAllPropertyData();
     }
     submitHandler = (e) =>{
        this.props.loading(true);
        let {allProperties} = this.props; 
        //filter data based on property size
        let filteredData = _.filter(allProperties,(data)=> data.propertySize >= this.state.propertySize.min && data.propertySize <= this.state.propertySize.max);         
        //filter data based on rent
        filteredData = _.filter(filteredData,(data)=> data.rent >= this.state.rent.min && data.rent <= this.state.rent.max);         
        //filter data based on photo available         
        if(this.state.photoAvailable){
            filteredData = _.filter(filteredData,(data)=> data.photoAvailable);                        
        }
        this.props.updateHandler(_.slice(filteredData,0,this.props.offset+PAGER_LENGTH));
        //update copy data as well to for ifinite scroll
        this.props.updateCopyHandler(filteredData);
        this.props.loading(false);
        e.preventDefault();
     }
    render(){
        
        return (
            <div style={{width:"100%"}}>                       
                <div className="card">
                    <form name="filter" onSubmit={this.submitHandler} onReset={this.resetHandler}>
                        <div className="card-header">Filter</div>
                        <div className="card-body">
                            <p className="lead" style={{float:"left",width:"40%"}}>
                                <label>Property Size:</label><br/>
                            <input type="text" className="col-sm-2" 
                                   value={this.state.propertySize.min} 
                                   onChange={(e)=>{this.propertySizeMinChangeHandler(e.target.value)}} />    
                            <input type="range" 
                                    min="0" 
                                    max="750"
                                    value={this.state.propertySize.min}
                                    onChange={(e)=>{this.propertySizeMinChangeHandler(e.target.value)}}
                                    />
                            <input type="range" 
                                    min="751"
                                    max="1500"
                                    style={{marginLeft:"-5px"}}
                                    value={this.state.propertySize.max}
                                    onChange={(e)=>{this.propertySizeMaxChangeHandler(e.target.value)}}
                                    />   
                            <input type="text" 
                                   className="col-sm-3" 
                                   value={this.state.propertySize.max} 
                                   onChange={(e)=>{this.propertySizeMaxChangeHandler(e.target.value)}}/>                                 
                            </p>
                            <p className="lead" style={{float:"left",width:"40%"}}>
                                <label>Rent:</label><br/>
                            <input type="text" 
                                  className="col-sm-2" 
                                  value={this.state.rent.min}
                                  onChange={(e)=>{this.rentMinChangeHandler(e.target.value)}} />
                            <input type="range"
                                    min="0"
                                    max="75000"
                                    value={this.state.rent.min}
                                    onChange={(e)=>{this.rentMinChangeHandler(e.target.value)}}
                                    />
                            <input type="range" 
                                    style={{marginLeft:"-5px"}}
                                    min="75001"
                                    max="150000"
                                    value={this.state.rent.max} 
                                    onChange={(e)=>{this.rentMaxChangeHandler(e.target.value)}}
                                    />  
                            <input type="text" 
                                   className="col-sm-3" 
                                   value={this.state.rent.max} 
                                   onChange={(e)=>{this.rentMaxChangeHandler(e.target.value)}}/>                                  
                            </p>
                            <p className="lead" style={{float:"left",width:"15%"}}>
                                <label>Photos Available:</label><br/>
                                <input type="checkbox" name="PhotosAvailable" checked={this.state.photoAvailable} onChange={this.photoChangeHandler}/>
                            </p>
                            <div style={{clear:"both"}}></div>
                            <button type="submit" className="btn btn-primary btn-lg" style={{padding: "5px 61px"}}>Filter</button>&nbsp;
                            <input type="reset" className="btn btn-danger btn-lg" style={{padding: "5px 61px"}} value="Reset" />
                        </div>            
                    </form>  
                </div>         
            </div>
          
        );
    }
    
}

export default Filter;