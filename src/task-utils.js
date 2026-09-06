function formatTask(task) {
  return `[${task.status}] ${task.title}`;
}

module.exports = { formatTask };
