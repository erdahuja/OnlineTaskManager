function task(id, taskName, taskDesc) {
    this.id = ++id;
    this.taskName = taskName;
    this.taskDesc = taskDesc;
    this.completed = false;
}