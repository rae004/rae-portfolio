import React from 'react';
import CardItem from "./CardItem";
import './Cards.css';
const CDN_SOURCE = 'https://rae-portfolio-storage151738-dev.s3.us-east-2.amazonaws.com/';

function Cards() {
    return (
        <div className={'cards'}>
            <h1>Check out these EPIC CARDS!</h1>
            <div className={'cards__container'}>
                <div className={'cards__wrapper'}>
                    <ul className={'cards__items'}>
                        <CardItem
                            src={CDN_SOURCE + 'images/img-9.jpg'}
                            text={'Explore the hidden wonders inside the CarItems'}
                            label={'Adventure'}
                            path={'/services'}
                        />
                        <CardItem
                            src={CDN_SOURCE + 'images/img-2.jpg'}
                            text={'Beautiful card items inside!'}
                            label={'Adventure'}
                            path={'/services'}
                        />
                    </ul>
                    <ul className={'cards__items'}>
                        <CardItem
                            src={CDN_SOURCE + 'images/img-4.jpg'}
                            text={'Explore the hidden SUB wonders inside the CarSubItems'}
                            label={'Sub1'}
                            path={'/services'}
                        />
                        <CardItem
                            src={CDN_SOURCE + 'images/img-5.jpg'}
                            text={'Beautiful SUB card items inside!'}
                            label={'Sub2'}
                            path={'/services'}
                        />
                        <CardItem
                            src={CDN_SOURCE + 'images/img-6.jpg'}
                            text={'What a great SUB card!!!!'}
                            label={'Sub3'}
                            path={'/services'}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards