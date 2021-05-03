import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';



function Projects() {


  const [currentCategory, setCurrentCategory] = useState('front-end');

  return (
    <section className="album py-5 bg-light">
      <div className="project-type">
        
        <button className="btn btn-success" onClick={()=>setCurrentCategory('front-end')} >Front End</button>

        <button className="btn btn-success" onClick={()=>setCurrentCategory('fullstack')}>Full Stack</button>

        <button className="btn btn-success" onClick={()=>setCurrentCategory('back-end')}>Back End</button>

      </div>
      
        
        <PhotoList category={currentCategory} />
      

    </section>
  )
}
 

export default Projects;