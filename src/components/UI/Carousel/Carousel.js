import React from 'react';
import {IMAGE_BASE_URL} from '../../../config/config';
const Carousel = (props) =>{
    
    let indicators = [];
    let carouselItem= [];
    (()=>{
        props.images.forEach( (image,index)=>{
            let ActiveClass = index === 0 ?'active':null;
            indicators.push(<li data-target="#carouselExampleIndicators" data-slide-to={index} key={`indicators${index}`} className={ActiveClass}></li>);
            carouselItem.push(
            <div className={['carousel-item',ActiveClass].join(' ')} key={`carouselItem${index}`}>
              <img className="d-block w-100" src={`${IMAGE_BASE_URL}${props.propertyid}/${image.imagesMap.medium}`}  />
            </div>
          );
        })
    })();

    return (

        <div id={`carouselExampleIndicators${props.propertyid}`} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            {indicators}
        </ol>
        <div className="carousel-inner">
          {carouselItem}
        </div>  
        <a className="carousel-control-prev" href={`#carouselExampleIndicators${props.propertyid}`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#carouselExampleIndicators${props.propertyid}`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
    );
}

export default Carousel;