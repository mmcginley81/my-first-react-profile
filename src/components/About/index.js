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
            <p>A highly motivated and committed young professional pursuing a career in web development. Sharp, creative, and prepared for the challenges of the quickly changing development landscape. 

            </p>
            </div>
            </div>
        </section>
    )
}

export default About;