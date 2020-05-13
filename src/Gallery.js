import React, {Component} from 'react';
import './Gallery.css';

// import o00 from './imgs/owls/img.gif'
// import o01 from './imgs/owls/IMG_7554.GIF'
// import o02 from './imgs/owls/IMG_7562.GIF'
// import o03 from './imgs/owls/IMG_0898.JPG'
// import o04 from './imgs/owls/IMG_6102.GIF'
// import o05 from './imgs/owls/IMG_7555.GIF'
// import o06 from './imgs/owls/IMG_2661.GIF'
// import o07 from './imgs/owls/angry_owl.gif'
// import o08 from './imgs/owls/giphy.gif'
// import o09 from './imgs/owls/tenor.gif'
// import o10 from './imgs/owls/Owl-tries-on-hat.gif'
// var owls = [o00,o01,o02,o03,o04,o05,o06,o07,o08,o09,o10];

const owls = [
    require('./imgs/owls/img.gif'),
    require('./imgs/owls/IMG_7554.GIF'),
    require('./imgs/owls/IMG_7562.GIF'),
    require('./imgs/owls/IMG_0898.JPG'),
    require('./imgs/owls/IMG_6102.GIF'),
    require('./imgs/owls/IMG_7555.GIF'),
    require('./imgs/owls/IMG_2661.GIF'),
    require('./imgs/owls/angry_owl.gif'),
    require('./imgs/owls/giphy.gif'),
    require('./imgs/owls/tenor.gif'),
    require('./imgs/owls/Owl-tries-on-hat.gif'),
];


export default class extends Component {
    constructor(props) {
        super(props);
        this.owls = owls;
    }

    
    render = ()=>{
        var imgs = this.owls.map((owl) => 
            <div className="gallery-container">
                <img className="gallery-img my-2" 
                    src={owl} 
                    onClick={()=>this.props.onOverlayClick(owl)}/>
            </div>
        )
        
        return (
        <div className="row d-flex flex-wrap justify-content-around align-items-center main">
            {imgs}
        </div>
        )
    }
}