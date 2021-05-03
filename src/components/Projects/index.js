import React, { useState } from 'react';
import PhotoList from '../PhotoList';
import background from '../../assets/cover/florian.jpg';



function Projects() {


  const [currentCategory, setCurrentCategory] = useState('front-end');

  return (
    <>
      <h1 id="about">Projects</h1>
      <div style={{ backgroundImage: `url(${background})`}} className="background">
      <div className="project-type">
        
        <button className="btn btn-success" onClick={()=>setCurrentCategory('front-end')} >Front End</button>

        <button className="btn btn-success" onClick={()=>setCurrentCategory('fullstack')}>Full Stack</button>

        <button className="btn btn-success" onClick={()=>setCurrentCategory('back-end')}>Back End</button>

      </div>
      
        
        <PhotoList category={currentCategory} />
      
      </div>
    </>
  )
}
 

export default Projects;