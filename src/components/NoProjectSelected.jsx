import noProjectImage from "../assets/no-projects.png";

export default function NoProjectSelected({onNew}) {
  return (
    <div className="w-2/3 mt-24 text-center ">
      <img
        src={noProjectImage}
        className="w-16 h-16 object-contain mx-auto"
        alt="An empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <button
          onClick={onNew}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          Create a new project
        </button>
      </p>
    </div>
  );
}
