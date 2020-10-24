import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import igor from '../../../igor_alt_cv.jpg';

class AlternativeCvPresentation extends Component {
    render() {
        return (
            <div className="alternativecv">
            <img src={igor} className="App-logo" alt="logo" />
            <Link to="/">Away From here</Link>
            </div>
        );
    }
}

export default AlternativeCvPresentation;