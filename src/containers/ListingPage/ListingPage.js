import React from 'react';
import {connect} from 'react-redux';
import Layout from '../../components/Layouts/Layout';
import SwitchView from '../../components/SwitchView/SwitchView';
import PropertList from '../../components/Property/Listing/Listing';
import Loading from '../../components/UI/Loading/Loading';
import {loadPropertyData, UpdatePropertyData, UpdatePropertyCopy,setLoading} from '../../actions/index';
import _ from 'lodash';
import {PAGER_LENGTH} from '../../config/config';
import Sorting from '../../components/Sorting/Sorting';
import ErrorMsg from '../../components/UI/ErrorMsg/ErrorMsg';
import Filter from '../../components/Filter/Filter';

class ListingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {            
            pagingOffset:0
        }
        window.addEventListener("scroll", this.LoadMoreProperties);
    }
    componentDidMount(){
        //load property data        
        this.loadAllPropertyData();
    }
    setLoading = (loadingState)=>{
        this.props.dispatch(setLoading(loadingState));
    }
    loadAllPropertyData = ()=>{
      return this.props.dispatch(loadPropertyData());  
    }
    LoadMoreProperties = ()=>{
        let {propertListCopy} = this.props; 
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            this.setState((state)=>{
                let newOffset = state.pagingOffset+PAGER_LENGTH;
                return{
                    pagingOffset: newOffset                    
                };
            });            
            this.propertyUpdateHandler(_.slice(propertListCopy,0,this.state.pagingOffset+PAGER_LENGTH));
        }
        
    }
   
    propertyUpdateHandler = (data) =>{
        this.props.dispatch(UpdatePropertyData(data));
    }
    
    UpdatePropertyCopyHandler = (data) =>{
        this.props.dispatch(UpdatePropertyCopy(data));
    }
   
    displayListing = () =>{
        if(typeof this.props.propertyList === 'undefined' || this.props.loading){
            return <Loading>Loading...</Loading>;
        }else if(typeof this.props.error !== 'undefined'){            
          return <ErrorMsg>{this.props.error}</ErrorMsg>;
        }else{ 
            return this.props.propertyList.length > 0?<PropertList data={this.props.propertyList}/>:<ErrorMsg>No Property Found</ErrorMsg>;                   
        }
    }
    
    render(){
        console.log("[listing]",this.props);
        return(
            <Layout>
                <Filter updateHandler={this.propertyUpdateHandler} 
                        copyData={this.props.propertListCopy} 
                        updateCopyHandler={this.UpdatePropertyCopyHandler}
                        allProperties={this.props.allProperties}
                        loadAllPropertyData={this.loadAllPropertyData}
                        loading={this.setLoading}
                        offset={this.state.pagingOffset}/>
                <SwitchView>                     
                    <Sorting updateHandler={this.propertyUpdateHandler} 
                             copyData={this.props.propertListCopy} 
                             updateCopyHandler={this.UpdatePropertyCopyHandler}
                             offset={this.state.pagingOffset}
                    /> 
                </SwitchView> 
                {this.displayListing()}                
            </Layout>
        );
    }
}
function mapStateToProps(state){
    //console.log("[connect]",isFetching);    
    return {                 
        propertyList: state.propertydata.propertList,
        propertListCopy: state.propertydata.propertListCopy,
        allProperties: state.propertydata.allProperties,
        loading: state.propertydata.loading,
        error: state.propertydata.error       
    };
}
export default connect(mapStateToProps,null)(ListingPage);