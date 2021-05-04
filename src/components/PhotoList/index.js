import React, { useState } from 'react';
import ImageCard from '../ImageCard';



function PhotoList({ category, name, description, link }) {
    
    const [photos] = useState([
        {
            name: 'Entertainment Roulette',
            category: 'front-end',
            description: 'Entertainment Roulette helps users whittle down the exhausting activity of choosing a movie from endless options. This temporary project was a way to test out knowledge of RESTful APIs.',
            link: 'https://github.com/es2013/entertainment-roulette'
        },
        {
            name: 'Second Project',
            category: 'front-end',
            description: 'This is the description of my second project'
        },
        {
            name: 'Third Project',
            category: 'front-end',
            description: 'This is the description of my Third project'
        },
        {
            name: 'Ecommerce Backend Mockup',
            category: 'back-end',
            description: 'This was a vital learning experience on how to set up an e-commerce platform on the server end through sequelize. We joined tables and tested all of our CRUD requests through Insomnia. This data is an MVP that would be ready to be a functioning API for a user who has set up a front end part of an e-commerce platform.',
            link: 'https://github.com/mmcginley81/ecommerce-mock'
        },
        {
            name: 'Fifth Project',
            category: 'back-end',
            description: 'This is the description of my Fifth project'
        },
        {
            name: 'Sixth Project',
            category: 'back-end',
            description: 'This is the description of my Sixth project'
        },
        {
            name: 'Seventh Project',
            category: 'back-end',
            description: 'This is the description of my seventh project'
        },
        {
            name: 'Eighth Project',
            category: 'back-end',
            description: 'This is the description of my eighth project'
        },
        {
            name: 'Basketblog',
            category: 'fullstack',
            description: 'Basketblog is a web application to help basketball fanatics blog about this favorite players, teams, and recent news in a safe and secure environment. Individuals who are also interested in pursuing a career in sports journalism also benefit from using this website. This application has its own database and also implements Stripe in case of any user would like to donate to this website. Hope you enjoy!',
            link: 'https://github.com/alexandergiannini/sports-blog-friends'
        },

    ]);

    // frontend or backend 1 or 2 // 3 frontend and backend options
    const currentPhotos = photos.filter((photo) => photo.category === category);
    
    return (
        <div className="row">
            {currentPhotos.map((image, i) => {
                return ( 
                
                <div className="col-md-4">
                    
                <ImageCard image={image} category={category}  i={i} link={link} />
                </div> 
                );
            })}           
         </div>   

    )
}

export default PhotoList;