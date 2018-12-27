import React from 'react';

const Layout = (props) =>{

    return (
        <div className="row">        
           <div id="products" className="row view-group">
            {props.children}
           </div>
        </div>
    );
}

export default Layout;