import React from 'react';

const divStyle = {
    fontWeight: 'bold',
    fontSize: '50px', 
    color: 'red'
};

const NotFound = () => {

    const notFound = {
        padding: '30px',
        margin: '-10px',
        height: '100vh',
        width: '100vw',
        background:  'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)',
    }

    return (
        <div className="conta" style={notFound}>
            <img height="300" width="330" src="https://i.imgur.com/qIufhof.png" alt="404" />
            <div id="info">
                <p style={divStyle}>404 Error</p>
                <h3>This page could not be found</h3>
            </div>
        </div >
    )
};

export default NotFound;
