import React, { Component } from 'react';
import { Rating, Label, Button } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
// Partial import to prevent conflict with Bootstrap
import 'semantic-ui-css/components/label.css'
import 'semantic-ui-css/components/rating.css'
import axios from 'axios';
import loadingImg from './imgs/iphone-spinner-2.gif'
import MOVIEIDS from './MovieIds'
import './Movies.css';
import MovieOverlays from './MovieOverlay'


const APIKEY = '9adc9a37'
// https://www.omdbapi.com/?i=tt3896198&apikey=9adc9a37

export default class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: true, overlay: "hidden", overlayData:{}, ratingStar:2 };
        this.movieData = {}
    }

    async componentDidMount() {
        // Scrolling control
        window.addEventListener('wheel', this.scrollLock, { passive: false }); // modern desktop
        window.addEventListener('mousewheel', this.scrollLock, { passive: false }); // modern desktop
        window.addEventListener('touchmove', this.scrollLock, { passive: false }); // mobile
        // window.addEventListener('keydown', this.scrollLock, false);

        // Fetch data from API
        for (let id of MOVIEIDS) {
            var response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${APIKEY}`);
            this.movieData[id] = response.data;   
        }
        this.setState({ loading: false });
    }
    
    scrollLock = function (e) {
        if(this.state.overlay === 'visible'){
            e.preventDefault();
        }
        return false;
    }.bind(this)


    // Overlay control
    showOverlay = function (data) {
        data.ratingStar = Math.round(parseFloat(data.imdbRating)/2)
        this.setState({overlay: 'visible', overlayData: data})
    }.bind(this)

    hideOverlay = function () {
        this.setState({overlay: 'hidden'})
    }.bind(this)


    render = function () {
        // Control Panel
        var panelDiv = 
        <div>
            <Button variant="outline-dark">Add Movie</Button>
        </div>

        // Posters
        var posterDivs = 
        <div className="w-100 p-5 d-flex flex-column align-items-center">
            <img src={loadingImg} alt="loading"></img>
        </div>
        if(!this.state.loading) {
            posterDivs = Object.values(this.movieData).map((data, index) => 
                <div className="m-2 -shadow poster-container">
                    <img src={data.Poster} className="poster" key={index}
                    onClick={()=>this.showOverlay(data)}></img>
                </div>
            )
        }

        

        // Assemble
        return (
        <div className="row main">
            {panelDiv}
            <div className="w-100 h-100 d-flex flex-wrap justify-content-center align-items-center">
                {posterDivs}
            </div>
            <MovieOverlays data={this.state.overlayData} visibility={this.state.overlay} hideOverlay={this.hideOverlay}/>
        </div>
        )
    }
}