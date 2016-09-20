var collectObjects = {
    taskId: 0,
    taskListing: [],
    add: function (name, desc) {
        var taskObject = new task(this.taskId++, name, desc);
        this.taskListing.push(taskObject);
    },
    sorting: function () {},

    completedCount: function () {
        var array = this.taskListing.filter(function (taskObject) {

            return taskObject.completed;
        });
        return array.length;
    },
    pendingCount: function () {
        var array = this.taskListing.filter(function (taskObject) {

            return !taskObject.completed;
        });
        return array.length;
    },
    toggleTask: function (id) {
        this.taskListing.forEach(function (taskObject) {
            if (taskObject.id == id)
                taskObject.completed = !taskObject.completed;
        })
    }
};
