import React from 'react';
import './MainComponent.css';

const MainComponents = () => {
    
  return (
    <div className='main-div'>
        <div className='intro'
        data-aos="zoom-in">
          <div className='intro-text intro-text--first'>
            <h1>Reis Cakaj</h1><br/>
            <h3>Frontend / Full-Stack* Student Developer.<br/>Building modern web applications with React</h3>
            <div className='wrap'>
              <a href="#projects" className='link1'><h5>View Projects</h5></a>
            </div>
          </div>
         
           <div className='intro-text intro-text--second'>
            <h1>About Me</h1><br/>
            <h3>Im a college student that enjoys building websites.<br/>
            I mainly work with react on the frontend and im currently learning full-stack.</h3>
           </div>
          </div>        
    </div>
  )
}

export default MainComponents