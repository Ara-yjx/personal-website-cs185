import React, { Component } from 'react';
import { Rating, Label } from 'semantic-ui-react'
import { Button } from "react-bootstrap";
// import 'semantic-ui-css/semantic.min.css'
// Partial import to prevent conflict with Bootstrap
import 'semantic-ui-css/components/label.css'
import 'semantic-ui-css/components/rating.css'
// import 'semantic-ui-css/components/form.css'
import './Movies.css';


export default function MovieOverlays(props) {

    // let oData = this.state.overlayData
    let oData = props.data;
    oData.ratingStar = Math.round(parseFloat(oData.imdbRating)/2);
    
    var labelDivs = oData.Genre?.replace(' ', '').split(',').map(genre => 
        <Label as='a' color='grey' key={genre}>{genre}</Label>
    )
    
    return(
    <div id="movie-overlay" className={ props.visibility + " d-flex justify-content-center align-items-center"}
    onClick={props.hideOverlay}>
        <div className="overlay-center">
            <h2 className="mb-2"><i>{oData.Title}</i></h2>
            <p className="mb-2">Director: {oData.Director}</p>
            <div className="mb-2 d-flex flex-row justify-content-start align-items-baseline" style={{'font-weight':400}}>
                <p className="m-0 mr-2">Rating: {oData.imdbRating}</p>
                <Rating icon='star' rating={oData.ratingStar} maxRating={5} disabled/>
            </div>
            <div className="mb-2 d-flex flex-row justify-content-start align-items-baseline flex-wrap-around">
                {labelDivs}
            </div>
            <img src={oData.Poster} className="overlay-poster"></img>
            <div className="mt-2" >
                <Button variant="danger" size="sm" 
                onClick={()=>props.deleteMovie(oData.imdbID)}>
                    Remove
                </Button>
            </div>
        </div>
    </div>
    )

}