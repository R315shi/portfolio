import React from 'react';
import './MainComponent.css';

const MainComponents = () => {
    
  return (
    <div className='main-div'>

        <div className='first-div'
        data-aos="zoom-in">
          <div className='text1'>
            <h1>Reis Cakaj</h1><br/>
            <h3>Frontend / Full-Stack* Student Developer.<br/>Building modern web applications with React</h3>
            <div className='wrap'>
              <a href="#projects" className='link1'><h5>View Projects</h5></a>
            </div>
          </div>
        </div> 
        <div className='second-div'
        data-aos="zoom-in">
           <div className='text1'>
            <h1>About Me</h1><br/>
            <h3>Im a college student that enjoys building websites.<br/>
            I mainly work with react on the frontend and im currently learning full-stack.</h3>
          </div>         
        </div>
        <div className="tech-stack"
        data-aos="zoom-in">
          <h1>Tech Stack</h1>
          <h3>Front-End</h3>
          <div className="tech-stack-column">
            <div>
              <img src="/images/react.png" alt="React" className='tech-stack-image' />
              <h3>ReactJS</h3>
            </div>
            <div>
              <img src="/images/html.png" alt="HTML" className='tech-stack-image' />
              <h3>HTML</h3>
            </div>
            <div>
              <img src="/images/css.png" alt="CSS" className='tech-stack-image'/>
              <h3>CSS</h3>
            </div>
            <div>
              <img src="/images/js.png" alt="JS" className='tech-stack-image'/>
              <h3>JavaScript</h3>
            </div>
          </div>
          <h3>Back-End (Learning)</h3>
          <div className="tech-stack-column">
            <div>
            <img src="/images/php.png" alt="PHP" className='tech-stack-image'/>
            <h3>PHP</h3>
            </div>
            <div>
            <img src="/images/mysql.png" alt="MySQL" className='tech-stack-image'/>
            <h3>MySQL</h3>
            </div>
          </div>
          <h3>Tools</h3>
          <div className="tech-stack-column">
            <div>
            <img src="/images/git.png" alt="GIT" className='tech-stack-image'/>
            <h3>Git</h3>
            </div>
            <div>
              <img src="/images/github.png" alt="Github" className='tech-stack-image'/>
              <h3>Github</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainComponents