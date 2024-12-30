import MainContent from "./components/MainContent";
import ProjectSideBar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import {useState} from "react";

function App() {
  const [compProyect, setCompProyect] = useState(false);
  const [compNoProjectSelected, setCompNoProjectSelected] = useState(true);
  const [proyectos, setProyectos] = useState({
    selectedProject: null,
    projects: [],
  });

  function newProject() {
    setCompProyect(true);
    setCompNoProjectSelected(false);
  }

  function onCancel() {
    console.log("Cancel");
    setCompProyect(false);
    setCompNoProjectSelected(true);
  }

  function onSave(proyecto) {
    console.log("Save");
    proyecto = {
      title: proyecto.title.current.value,
      description: proyecto.description.current.value,
      dueDate: proyecto.dueDate.current.value,
    };
    setProyectos((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, proyecto],
      };
    });

    console.log(proyecto.title);
    setCompNoProjectSelected(true);
    setCompProyect(false);
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onNew={newProject} proyectos={proyectos.projects} />
      {compProyect && <MainContent onCancel={onCancel} onSave={onSave} />}
      {compNoProjectSelected && <NoProjectSelected onNew={newProject} />}
    </main>
  );
}

export default App;
