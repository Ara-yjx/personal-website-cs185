import React from 'react';
import './Favorites.css'

const movies = [
    {
        name: 'Wandering Earth',
        poster: require('./imgs/posters/wandering_earth.jpg'),
    },
    {
        name: '5 Centimeters per Second',
        poster: require('./imgs/posters/5_centimeters.jpg'),
    },
    {
        name: 'Léon: The Professional',
        poster: require('./imgs/posters/leon.jpg'),
    },
]



export default function Favorites(props) {

    var movieDivs = movies.map((movie, index) =>
        // <div className={"row pb-5 d-flex " + (index % 2 ? "flex-row-reverse":"")}>
        <div className="row pb-5">
            <div className="col-6">
                <h4><i>{movie.name}</i></h4>
            </div>
            <div className="col-6">
                <img className="ranking-item" src={movie.poster} alt={'poster'}
                onClick={()=>props.onOverlayClick(movie.poster)}/>
            </div>
        </div>
    )

    return (
    <div className="row main">
        <br/>
        <div className="col">
            <div className="w-100 d-flex justify-content-center align-items-center mb-5">
                <div className="line"></div>
                <h4 className="mx-2">★ Favorite Movies ★</h4>
                <div className="line"></div>
            </div>

            <div className="container-fluid">
                {movieDivs}
            </div>

        </div>
    </div>
    )
}

