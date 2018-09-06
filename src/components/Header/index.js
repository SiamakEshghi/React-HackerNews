import React from 'react';
import 'components/style.css';
import logo from 'img/logo.png'

export default () => {
    return (
        <div className="header">
            <img className="logo" src={logo}/>
            <h1>TOP NEWS WEBSITE</h1>
            <h5 className="desc">React App</h5>
        </div>
    );
}