import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

    var movieDivs = movies.map((movie) =>
        <div className="pb-5">
            <h4><i>{movie.name}</i></h4>
                <img className="ranking-item" src={movie.poster} alt={'poster'}
                onClick={()=>props.onOverlayClick(movie.poster)}/>
        </div>
    )

    return (                  
    <div className="row main">
        <br/>
        <div className="col">
            <div className="w-100 d-flex justify-content-center align-items-center my-5">
                <div className="line"></div>
                <h4>★ Favorite Movies ★</h4>
                <div className="line"></div>
            </div>

            {movieDivs}

        </div>

    </div>
    )
}

