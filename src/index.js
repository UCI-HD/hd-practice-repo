const tasks = require("../data/tasks.json");
const { formatTask } = require("./task-utils");

if (tasks.length === 0) {
  console.log("No tasks yet.");
} else {
  for (const task of tasks) {
    console.log(formatTask(task));
  }
}
