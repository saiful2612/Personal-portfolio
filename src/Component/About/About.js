import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-area container mt-2 mb-5" id="about">
            <div className="row">
                <div className="col-lg-6 text-center">
                    <img className="img-fluid w-100" src="https://i.ibb.co/dtTM8W0/about-me-images.jpg" alt=""/>
                </div>
                <div className="col-lg-6 mt-5 about-info">
                    <h4 className="text-center">About me</h4>
                    <p> I have knowledge in MERN stack but like working in frontend. As a passionate coder,I like programming and problem solving. My expertise includes HTML5, CSS3, JS, Bootstrap, React, Material UI for front-end development and back-end technologies like Node JS, Express JS and MongoDB. Github, Firebase, Netlify and Heroku are familiar tools. I am looking for a challenging opportunity to use my skills and deepen  knowledge further.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;