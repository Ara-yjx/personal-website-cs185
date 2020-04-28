import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Favorites.css'

export default function Favorites() {
    return (                  
    <div className="row main">
        <br/>
        <div className="col">
            <div className="w-100 d-flex justify-content-center align-items-center my-5">
                <div className="line"></div>
                <h4>★ Favorite Movies ★</h4>
                <div className="line"></div>
            </div>
            <h4>1. <i>Wandering Earth</i></h4>
            <img className="ranking-item overlayable" src="imgs/posters/wandering_earth.jpg"/>
            <br/><br/><br/><hr/><br/><br/>
            <h4>2. <i>5 Centimeters per Second</i></h4>
            <img className="ranking-item overlayable" src="imgs/posters/5_centimeters.jpg"/>
            <br/><br/><br/><hr/><br/><br/>
            <h4>3. <i>Léon: The Professional</i></h4>
            <img className="ranking-item overlayable" src="imgs/posters/leon.jpg"/>
        </div>

    </div>
    )
}

