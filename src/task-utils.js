function formatTask(task) {
  const priority = task.priority ? ` (${task.priority})` : "";
  return `[${task.status}] ${task.title}${priority}`;
}

module.exports = { formatTask };
