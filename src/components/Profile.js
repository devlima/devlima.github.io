import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            profile: [],
            error: false,
            errorDetail: ''
        }
    }

    componentDidMount() {
        axios.get('https://ai.github.com/users/devlima')
        .then(res => {
            this.setState({
                profile: res.data
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
            <div id="profile" className="profile">
                <h1 className="title h1">{this.state.profile.name}</h1>
                <p className="subtitle">{this.state.profile.bio}</p>
                <p className="location">{this.state.profile.location}</p>
                <nav className="profile-nav">
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