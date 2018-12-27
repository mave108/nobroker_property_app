import React from 'react';

const SwitchView = (props) =>{
  
    return (
        <div className="col-lg-12 my-3">
                  <div className="pull-left" style={{float:"left",width:"40%"}}>
                      <div className="btn-group">
                          <button className="btn btn-info" id="list">
                              List View
                          </button>
                          <button className="btn btn-danger" id="grid">
                              Grid View
                          </button>
                      </div>
                  </div>
                  <div className="pull-right sorting" style={{float:"right",width:"40%"}}>
                    {props.children}
                  </div>
        </div>
    );
}

export default SwitchView;