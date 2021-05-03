import React from 'react';
import './style.css';
import background from '../../assets/cover/florian.jpg'

function About() {


    return(
        <section className="About">
            <div style={{ backgroundImage: `url(${background})`}} className="background">
            <h1 id="about">About Me</h1>
            <div className="card about-card">
            <h2 id="about-section"> Designer, developer, project manager based out of LA</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

            </p>
            </div>
            </div>
        </section>
    )
}

export default About;