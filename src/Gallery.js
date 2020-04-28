import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css'

export default function Gallery() {
    return (
    <div className="row d-flex flex-wrap justify-content-around align-items-center main">
        <div className="gallery-container"><img className="gallery-img overlayable w-100 my-2" src="imgs/owls/img.gif"/></div>
        <div className="gallery-container"><img className="gallery-img overlayable w-100 my-2" src="imgs/owls/IMG_7554.GIF"/></div>
        <div className="gallery-container"><img className="gallery-img overlayable w-100 my-2" src="imgs/owls/IMG_7562.GIF"/></div>
        <div className="gallery-container"><img className="gallery-img overlayable w-100 my-2" src="imgs/owls/IMG_0898.JPG"/></div>
        <div className="gallery-container"><img className="gallery-img overlayable w-100 my-2" src="imgs/owls/IMG_6102.GIF"/></div>
        <div className="gallery-container"><img className="gallery-img overlayable w-100 my-2" src="imgs/owls/IMG_7555.GIF"/></div>
        <div className="gallery-container"><img className="gallery-img overlayable w-100 my-2" src="imgs/owls/IMG_2661.GIF"/></div>
        <div className="gallery-container"><img className="gallery-img overlayable w-100 my-2" src="imgs/owls/angry_owl.gif"/></div>
        <div className="gallery-container"><img className="gallery-img overlayable w-100 my-2" src="imgs/owls/giphy.gif"/></div>
        <div className="gallery-container"><img className="gallery-img overlayable w-100 my-2" src="imgs/owls/tenor.gif"/></div>
        <div className="gallery-container"><img className="gallery-img overlayable w-100 my-2" src="imgs/owls/Owl-tries-on-hat.gif"/></div>
    </div>
    )
}