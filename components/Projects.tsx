const Projects = () => {
  const projects = [
    {
      name: 'Personal Website',
      type: 'Frontend Development',
      description: ['Built personal website using React and TypeScript, enhanced with TailwindCSS'],
    },
  ]

  return (
    <>
      <div>
        {projects.map((project) => (
          <div key={project.name}>
            <h4>
              <div className="font-extrabold">{project.name}</div>
              <div className="text-gray-500">{project.type}</div>
            </h4>
            <ul>
              {project.description.map((description) => (
                <li key={description} className="text-sm">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
