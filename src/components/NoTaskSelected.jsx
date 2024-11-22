import noTaskImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoTaskSelected({ onStartAddTask }) {
  return (
    <div className="mt-24 text-center w-2/3 ">
      <img
        src={noTaskImage}
        alt="Empty Task List "
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Task Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Task or get started with a new one !!!
      </p>
      <p>
        <Button onClick={onStartAddTask}>Create New Task</Button>
      </p>
    </div>
  );
}
