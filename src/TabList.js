// import React from 'react';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TabList.css'
import Tab from './Tab'


export default class TabList extends Component {

    
    constructor(props) {
        super(props)
        this.tabs = ['Home', 'Projects', 'Favorites', 'Gallery', 'Guestbook']
        this.state = { activate: 'Home' }
    }

    tabChange = function (e) {
        this.props.onTabChange(e)
        this.setState({ activate: e })
        console.log(e)
    }.bind(this)


    render = function() {
        var tabDivs = this.tabs.map((tab, i) => 
            <Tab click={this.tabChange} tabActivate={this.state.activate==tab} tabName={tab}/>
        )
        return (
        <div className="row navigate-bar">
            {tabDivs}    
        </div>
        );
    }
}

