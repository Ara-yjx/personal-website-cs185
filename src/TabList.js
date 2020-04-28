// import React from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from './Tab'


export default function TabList(props) {

    function tabClick(e) {
        props.onTabChange(e)
    }

    return (                    
    <div className="row navigate-bar">
        <Tab click={tabClick} tabName='Home'/>        
        <Tab click={tabClick} tabName='Projects'/>        
        <Tab click={tabClick} tabName='Favorites'/>        
        <Tab click={tabClick} tabName='Gallery'/>        
    </div>
    );
}

