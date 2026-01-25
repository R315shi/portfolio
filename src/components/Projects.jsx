import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Reis Cakaj (This Website)',
      description: 'Personal Portfolio',
      technologies: ['React'],
      icon: './images/Website1.png',
      color: '#e8f5e9',
      githubLink: 'https://github.com',
      liveLink: 'https://demo.example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team assignments, and progress tracking.',
      technologies: ['Vue.js', 'Firebase', 'WebSockets', 'Vuex'],
      icon: 'fas fa-tasks',
      color: '#f3e5f5',
      githubLink: 'https://github.com',
      liveLink: 'https://demo.example.com'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for analyzing business metrics with customizable charts and data filtering.',
      technologies: ['Python', 'D3.js', 'Flask', 'PostgreSQL', 'Chart.js'],
      icon: 'fas fa-chart-line',
      color: '#e3f2fd',
      githubLink: 'https://github.com',
      liveLink: 'https://demo.example.com'
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with user authentication, posts, comments, and likes.',
      technologies: ['Express.js', 'JWT', 'MongoDB', 'Redis', 'Socket.io'],
      icon: 'fas fa-users',
      color: '#fff3e0',
      githubLink: 'https://github.com',
      liveLink: 'https://demo.example.com'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p className="projects-intro">A selection of my recent work showcasing different technologies and solutions</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-img" style={{backgroundColor: project.color}}>
                <i className={project.icon}></i>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, index) => (
                    <span className="tag" key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;