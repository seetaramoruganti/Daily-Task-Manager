import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddTask,
  tasks,
  onSelectTask,
  selectedTaskId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Daily Tasks
      </h2>
      <div>
        <Button onClick={onStartAddTask}> + Add Task</Button>
      </div>
      <ul className="mt-8">
        {tasks.map((task) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (task.id === selectedTaskId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={task.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectTask(task.id)}
              >
                {task.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
