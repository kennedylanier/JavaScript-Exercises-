interface Task {
  name: string;
}

const tasks: Task[] = [];

const addTask = (task: string) => {
  tasks.push({ name: task });
};

const displayTasks = (): void => {
  console.log(tasks);
};
