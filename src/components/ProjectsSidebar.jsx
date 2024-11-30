import Button from "./Button";

export default function ProjectsSidebar({ onStartAddTask, tasks }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Daily Tasks
      </h2>
      <div>
        <Button onClick={onStartAddTask}> + Add Task</Button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {task.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
