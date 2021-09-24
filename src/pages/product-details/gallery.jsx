import { useState } from "react";

export const Gallery = ({ images }) => {
    const [ activeImage, setActiveImage ] = useState();
    return (
        <div className="gallery-wrapper">
            <div className="main-image">
                <div className="main-image-shadow"></div>
                <div className="main-image-container">
                    <img src={images.main} alt=""/>
                </div>
            </div>
            <div className="thumnails">
                <div className="thumbnail">
                    <img src={images.main} alt="" />
                </div>
            </div>
        </div>
    );
}