// import React from 'react';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from './Tab'


// export default class TabList extends Component {


function TabList(props) {

    function tabClick(e) {
        console.log('tabClick')
        console.log(e)
        props.onTabChange(e)
    }

    // render() {
        return (                    
        <div className="row navigate-bar">
            <Tab click={tabClick} tabName='Home'/>        
            <Tab click={tabClick} tabName='Projects'/>        
            <Tab click={tabClick} tabName='Favorites'/>        
            <Tab click={tabClick} tabName='Gallery'/>        
        </div>

        );
    // }
}


export default TabList;