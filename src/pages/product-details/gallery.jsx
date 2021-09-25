import { useState } from "react";

export const Gallery = ({ images }) => {
    const [ activeImage, setActiveImage ] = useState(images.main);
    
    const handleSetActive = image => {
        setActiveImage(image);
    }
    return (
        <div className="gallery-wrapper">
            <div className="main-image">
                <div className="main-image-shadow"></div>
                <div className="main-image-container">
                    <img src={activeImage} alt=""/>
                </div>
            </div>
            <div className="thumbnails">
                <div className={ activeImage === images.main ? 'thumbnail active' : 'thumbnail' } onClick={() => handleSetActive(images.main)}>
                    <img src={images.main} alt=""/>
                </div>
                { images.gallery && images.gallery.map((image, index) => (
                    <div className={ image === activeImage ? 'thumbnail active' : 'thumbnail' } key={index} onClick={() => handleSetActive(image)}>
                        <img src={image} alt="" />
                    </div>
                ))
                }
            </div>
        </div>
    );
}