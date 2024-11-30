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
      const taskId = Math.random();
      const newTask = {
        ...tasksData,
        id: taskId,
      };
      return {
        ...prevState,
        selectedTaskId: undefined, //taskId
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleCancelAddTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: undefined,
      };
    });
  }
  let content;

  console.log(TasksState);

  if (TasksState.selectedTaskId === null) {
    content = <NewTask onAdd={handleAddTask} onCancel={handleCancelAddTask} />;
  } else if (TasksState.selectedTaskId === undefined) {
    content = <NoTaskSelected onStartAddTask={handleStartAddTask} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          onStartAddTask={handleStartAddTask}
          tasks={TasksState.tasks}
        />
        {content}
      </main>
    </>
  );
}

export default App;
