import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class Projects extends Component {

    constructor(){
        super();
        this.state = {
            repos: [],
            error: false,
            errorDetail: ''
        }
    }

    componentDidMount() {
        axios.get('https://ai.github.com/users/devlima/repos')
        .then(res => {
            this.setState({
                repos: res.data
            });
        })
        .catch(error => {
            this.setState({
                error: true,
                errorDetail: error
            })
        })
    }
    render(){
        if(this.state.error) {
            return <h1 className="title h1">Try again later</h1>
        }
        return (
            <div id="projects" className="projects">
                <h2 className="title h2">Projects</h2>
                <nav className="projects-nav">
                    <ul>
                        {this.state.repos.map((repo, index) => {
                            return (
                                <li key={index}>
                                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                                    <p>{repo.description}</p>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <a href="#profile" className="page-link page-link-left"> <FontAwesomeIcon icon={faLongArrowAltLeft} /> <span>Profile</span></a>
            </div>
        )
    }
}

export default Projects;