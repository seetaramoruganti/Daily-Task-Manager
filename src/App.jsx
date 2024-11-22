import NewTask from "./components/NewTask";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoTaskSelected from "./components/NoTaskSelected";

import { useState } from "react";

function App() {
  const [TasksState, setTasksState] = useState({
    selectedTaskId: undefined,
    tasks: [],
  });

  function handleStartAddTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: null,
      };
    });
  }

  function handleAddTask(tasksData) {
    setTasksState((prevState) => {
      const newTask = {
        ...tasksData,
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  let content;

  console.log(TasksState);

  if (TasksState.selectedTaskId === null) {
    content = <NewTask onAdd={handleAddTask} />;
  } else if (TasksState.selectedTaskId === undefined) {
    content = <NoTaskSelected onStartAddTask={handleStartAddTask} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar onStartAddTask={handleStartAddTask} />
        {content}
      </main>
    </>
  );
}

export default App;
