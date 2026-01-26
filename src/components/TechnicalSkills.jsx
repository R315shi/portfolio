import './TechnicalSkills.css';

function TechnicalSkills() {
  const skills = [
    {
      id: 1,
      icon: 'fab fa-js-square',
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces with React and modern JavaScript (ES6+). Experienced with HTML5, CSS3, and frameworks like Tailwind CSS.',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      id: 2,
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'Developing robust server-side applications with Node.js and PHP. Database design with SQL (MySQL).',
      technologies: ['Node.js', 'PHP', 'MySQL']
    },
    // {
    //   id: 3,
    //   icon: 'fas fa-mobile-alt',
    //   title: 'Mobile & DevOps',
    //   description: 'Creating cross-platform mobile apps with React Native. Implementing CI/CD pipelines, containerization with Docker, and cloud deployment on AWS and Heroku.',
    //   technologies: ['React Native', 'Docker', 'AWS', 'CI/CD', 'Git']
    // }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        {/* <p className="skills-intro">I work with a wide range of technologies across the frontend & backend</p> */}
        
        <div className="skills-container">
          {skills.map(skill => (
            <div className="skill-card" key={skill.id}>
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-technologies">
                {skill.technologies.map((tech, index) => (
                  <span className="tech-tag" key={index}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;