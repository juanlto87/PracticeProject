export default function ProjectSideBar({onNew, proyectos}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 fond-bold uppercas md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={onNew}
      >
        + New Project
      </button>
      <ul>
        {proyectos.map((proyecto) => (
          <li key={Math.random()} className="my-4">
            <button className="text-stone-200 hover:text-stone-100">
              {proyecto.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
