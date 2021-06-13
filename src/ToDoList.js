import ToDo from "./ToDo";

const ToDoList = () => {
  const tasks = [
    {
      id: 1,
      name: "Walk the Dog",
      complete: false,
    },
    {
      id: 2,
      name: "Feed the Cat",
      complete: true,
    },
    {
      id: 3,
      name: "Pet the Cat",
      complete: true,
    },
    {
      id: 4,
      name: "Praise the Cat",
      complete: true,
    },
  ];

  const renderTask = (task) => {
        return (
            <ToDo name={task.name} complete={task.complete}/>
        );
  }

  return (
    <div className="tasks">
      {tasks.map(renderTask)}
    </div>
  );
};

export default ToDoList;
