import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

class Projects extends Component {
    render(){
        return (
            <div id="projects" className="projects">
                <h2 className="title h2">Projects</h2>
                <nav className="projects-nav">
                    <ul>
                        <li>
                            <a href="https://goopgle.com" target="_blank" rel="noopener noreferrer">music-recently</a>
                            <p>Using spotify API</p>
                        </li>
                        <li>
                            <a href="https://goopgle.com" target="_blank" rel="noopener noreferrer">music-recently</a>
                            <p>Using spotify API</p>
                        </li>
                        <li>
                            <a href="https://goopgle.com" target="_blank" rel="noopener noreferrer">music-recently</a>
                            <p>Using spotify API</p>
                        </li>
                        <li>
                            <a href="https://goopgle.com" target="_blank" rel="noopener noreferrer">music-recently</a>
                            <p>Using spotify API</p>
                        </li>
                        <li>
                            <a href="https://goopgle.com" target="_blank" rel="noopener noreferrer">music-recently</a>
                            <p>Using spotify API</p>
                        </li>
                        <li>
                            <a href="https://goopgle.com" target="_blank" rel="noopener noreferrer">music-recently</a>
                            <p>Using spotify API</p>
                        </li>
                        <li>
                            <a href="https://goopgle.com" target="_blank" rel="noopener noreferrer">music-recently</a>
                            <p>Using spotify API</p>
                        </li>
                    </ul>
                </nav>
                <a href="#profile" className="page-link page-link-left"> <FontAwesomeIcon icon={faLongArrowAltLeft} /> <span>Profile</span></a>
            </div>
        )
    }
}

export default Projects;