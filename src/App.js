import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabList from './TabList'
import Home from './Home'
import Projects from './Projects'
import Favorites from './Favorites'
import Gallery from './Gallery'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {'page': <Home/>};
        this.onTabChange = this.onTabChange.bind(this);
        // without bind, "this" within onTabChange points to sth. else
    }

    onTabChange = function (tabName){
        console.log('onTabChange ' + tabName)
        switch(tabName) {
            case 'Projects':
                this.setState({'page': <Projects/>});
                break;
            case 'Favorites':
                this.setState({'page': <Favorites/>});
                break;
            case 'Gallery':
                this.setState({'page': <Gallery/>});
                break;
            default:
                this.setState({'page': <Home/>});
        }

    }


    render = function () {

        return (
        <div className="container-fluid page">
            <div className="row d-flex flex-column align-items-center">
                <div className="col-lg-9 col-12">
                    <div className="container-fluid page-center">

                        <div className="whitespace"></div>
                        <div className="row d-flex justify-content-center">
                            <h1>Jiaxi Ye</h1>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <p className="caption">Coder. Artist. Owl lover.</p>
                        </div>

                        <TabList onTabChange={this.onTabChange}/>

                        {this.state.page}

                    </div>
                </div>
            </div>
        </div>
        )
    }

        // <div onclick="gototop()" id="gototop" title="Go to top">^ Top</div>
    
}

