import React from 'react';
import Carousel from '../../UI/Carousel/Carousel';
import NoImage from '../../UI/NoImage/NoImage';

const PropertyListing = (props) =>{
    console.log("[listing]",props);
    return (
         props.data.map((data)=>{
         return (
            <div className="item col-xs-4 col-lg-4" key={data.id}>
            <div className="thumbnail card">
                <div className="img-event">                                      
                    {data.photos.length === 0?<NoImage/>:<Carousel images={data.photos} propertyid={data.id}/>}
                </div>
                <div className="caption card-body">
                    <h4 className="group card-title inner list-group-item-heading">
                     {data.propertyTitle}
                    </h4>
                    <div>
                        <span className="badge badge-danger">{data.typeDesc}</span>&nbsp;
                        <span className="badge badge-primary">{data.city}</span>&nbsp;
                        <span className="badge badge-info">{data.propertyType}</span>&nbsp;
                        <span className="badge badge-success">{data.propertySize}</span>&nbsp;
                        <span className="badge badge-primary">{new Date(data.creationDate).toLocaleDateString()}</span>
                        
                    </div>
                    <p className="group inner list-group-item-text">{data.description}</p>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <p className="lead">Rs {data.rent != 0?data.rent:null}</p>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <a className="btn btn-success" href={data.shortUrl} target="_blank">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         )
        })
    );
}

export default PropertyListing;