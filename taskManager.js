const taskManager = (() => {
    const tasks = [];
  
    const addTask = (task) => {
      tasks.push(task);
    };
  
    const displayTasks = () => {
      console.log(tasks);
    };
  
    return {
      addTask,
      displayTasks,
    };
  })();
// adding three tasks
  taskManager.addTask("Fold laundry");
taskManager.addTask("Call mom");
taskManager.addTask("Water plants");
// display tasks
taskManager.displayTasks();
