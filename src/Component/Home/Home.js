import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <section id="home" className="home-area">
                <div className="text-center">
                    <div className="my-auto">
                        <h1><span className="first-part">Hello! I am</span> <span className="name-style">Saiful</span></h1>
                        <h4 className="">Front-end Developer</h4>
                    </div>

                    <div className="mt-4">
                        <a className="" href="https://drive.google.com/file/d/12uUSOxTs7RJbJiGpuV65hsXYEoxz43-H/view" target="_blank" rel="noreferrer">My Resume</a>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;