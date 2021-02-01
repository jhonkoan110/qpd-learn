import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader-inner">
                <div className="loader__block loader__block-1"></div>
                <div className="loader__block loader__block-2"></div>
                <div className="loader__block loader__block-3"></div>
            </div>
        </div>
    );
};

export default Loader;
