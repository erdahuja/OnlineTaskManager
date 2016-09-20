window.addEventListener("load", init);

function init() {
    document.getElementById("AddBtn").addEventListener("click", addTask);


}

function addTask() {
    var taskName = document.getElementById("taskName").value;
    var taskDesc = document.getElementById("taskDesc").value;
    var list = document.createElement("li");
    list.className = "pending";
    var tlist = document.getElementById("taskList");
    collectObjects.add(taskName, taskDesc);
    tlist.appendChild(list).innerHTML = collectObjects.taskId + " " + taskName + " " + taskDesc;
    list.addEventListener("click", toggleTask);
    updateCount();

}

function toggleTask() {
    var currentli = this.innerHTML;
    var liValueArray = currentli.split(" ");
    var id = liValueArray[0];
    collectObjects.toggleTask(id);
    if (this.className == "completed") {
        this.className = "pending";
    } else {
        this.className = "completed";
    }
    updateCount();
}

function updateCount() {

    document.getElementById("pending").innerHTML = collectObjects.pendingCount();
    document.getElementById("completed").innerHTML = collectObjects.completedCount();


}
