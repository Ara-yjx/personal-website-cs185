import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tab(props) {
    var tabActivateClass = props.tabActivate ? 'activate-tab' : ''

    return (                    
    <div className={'navigate-tab ' + tabActivateClass} 
        onClick={()=>props.click(props.tabName)} >
        <p>{props.tabName}</p>
    </div>
    );
}


export default Tab;
