import React from 'react';
import './MainComponent.css';

const MainComponents = () => {
    
  return (
    <div className='maindiv'>

        <div className='firstdiv'
        data-aos="zoom-in">
          <div className='text1'>
            <h1>Reis Cakaj</h1><br/>
            <h3>Frontend / Full-Stack* Student Developer.<br/>Building modern web applications with React</h3>
            <div className='wrap'>
              <a href="#projects" className='link1'><h5>View Projects</h5></a>
            </div>
          </div>
        </div> 
        <div className='seconddiv'>
           <div className='text1'>
            <h1>About Me</h1><br/>
            <h3>Student that has lost his will to live bruh what is thiss ;-;<br/>Building modern web applications with React</h3>
          </div>         
        </div>
    </div>
  )
}

export default MainComponents