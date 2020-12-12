import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
const CDN_SOURCE = 'https://rae-portfolio-storage151738-dev.s3.us-east-2.amazonaws.com';


function HeroSection() {
    return (
        <div className={'hero-container'}>
            <video src={CDN_SOURCE + '/videos/video-1.mp4'} autoPlay loop muted />
            <h1>BOB, ADVENTURE AWAITS!</h1>
            <p>what are you waiting for???</p>
            <div className={'hero-btns'}>
                <Button
                    className={'btns'}
                    buttonStyle={'btn--outline'}
                    buttonSize={'btn--large'}>
                    GET STARTED
                </Button>
                <Button
                    className={'btns'}
                    buttonStyle={'btn--primary'}
                    buttonSize={'btn--large'}>
                    WATCH NOW <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection