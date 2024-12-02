import NewTask from "./components/NewTask";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoTaskSelected from "./components/NoTaskSelected";

import { useState } from "react";
import SelectedTask from "./components/SelectedTask";

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

  function handleSelectTask(id) {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: id,
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

  let selectedTaskHo = TasksState.tasks.find(
    (task) => task.id === TasksState.selectedTaskId
  );
  let content = <SelectedTask task={selectedTaskHo} />;

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
          onSelectTask={handleSelectTask}
        />
        {content}
      </main>
    </>
  );
}

export default App;
