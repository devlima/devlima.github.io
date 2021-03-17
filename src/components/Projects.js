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
            errorDetail: '',
            config: {
                headers: { 'Access-Control-Allow-Origin': '*'}
            }
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/devlima/repos', {
            crossdomain: true
        })
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
        return (
                <div id="projects" className={this.state.error ? 'error' : 'projects'}>
                    <h2 className="title h2">Projects</h2>
                    <nav className="projects-nav">
                        <ul>
                            {this.state.repos.map((repo, index) => {
                                return (
                                    <li key={index}>
                                        <a className="projects--link" href={repo.homepage} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                                        <p className="projects--description">{repo.description}</p>
                                        <a className="projects--link-code" href={repo.html_url} target="_blank" rel="noopener noreferrer">code on github</a>
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