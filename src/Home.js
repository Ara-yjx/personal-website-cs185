import React from 'react';
import owl from './imgs/owls/img.gif'

function Home() {
    return (                    
    <div className="row main">
        <br/>
        <div className="col-6">
            <img className="w-100" src={owl} alt="me"/>
        </div>
        <div className="col-6">
            <p>> University of California, Santa Barbara</p>
            <p>> className of 2021</p>
            <p>> Computing Major</p>
            <p>> GitHub: <a href="https://github.com/Ara-yjx/">Ara-yjx</a></p>
        </div>
    </div>
    );
}

export default Home
