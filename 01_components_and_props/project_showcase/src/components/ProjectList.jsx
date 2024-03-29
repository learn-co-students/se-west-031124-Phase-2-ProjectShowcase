import ProjectListItem from "./ProjectListItem";

export default function ProjectList(props) {
    const projItems = props.projects.map(projectObj => <ProjectListItem project={projectObj} />)
    console.log("🚀 ~ ProjectList ~ projItems:", projItems)
  return (
    <section>
      <h1>All Projects</h1>
      <div className="filters">
        <button>All</button>
        <button>Phase 1</button>
        <button>Phase 2</button>
        <button>Phase 3</button>
        <button>Phase 4</button>
        <button>Phase 5</button>
      </div>
      <ul className="cards">
        {/* <ProjectListItem project={props.projects[0]} /> 
        <ProjectListItem project={props.projects[1]} /> 
        <ProjectListItem project={props.projects[2]} /> 
        <ProjectListItem project={props.projects[3]} />
        <ProjectListItem project={props.projects[4]} />
        <ProjectListItem project={props.projects[5]} /> */}
        {projItems}
      </ul>
    </section>
  );
}
