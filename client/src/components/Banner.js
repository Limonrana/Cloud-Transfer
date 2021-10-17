import React from 'react';
import BannerImage from '../assets/banner-image.png';

const Banner = () => (
    <div className="bannerImage">
        <img src={BannerImage} className="bannerImg" alt="bannerImage" />
    </div>
);

export default Banner;
