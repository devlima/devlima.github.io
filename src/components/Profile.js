import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

class Profile extends Component {
    render(){
        return (
            <div id="profile" className="profile">
                <h1 className="title h1">Gabriel Lima</h1>
                <p className="subtitle">Front-end Delevoper intern at Fattoria</p>
                <nav>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/gbrl/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/devlima" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="http://t.me/limagabriel" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                        <li><a href="malito:devlimagabriel@gmail.com" target="_blank" rel="noopener noreferrer">devlimagabriel@gmail.com</a></li>
                    </ul>
                </nav>
                <a href="#projects" className="page-link page-link-right"><span>Projects</span> <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                
            </div>
        )
    }
}

export default Profile;