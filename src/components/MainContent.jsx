import Input from "./Input";
import {useRef} from "react";

export default function MainContent({onCancel, onSave}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  let proyecto = {
    title: title,
    description: description,
    dueDate: dueDate,
  };

  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancel}
            className="text-stone-800 hover:text-stone:950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={() => onSave(proyecto)}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          ref={proyecto.title}
          type="text"
          placeholder="Project Name"
          label="Título"
        />
        <Input
          ref={proyecto.description}
          placeholder="Descripción"
          label="Descripción "
          textarea
        />
        <Input ref={proyecto.dueDate} type="date" label="Due Date" />
      </div>
    </div>
  );
}
