$(document).ready(function() {
    // Load tasks from localStorage and populate the list
    function loadTasks() {
        var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.forEach(function(task) {
            $("#to-do-list ul").append("<li>" + task + "</li>");
        });
    }
    loadTasks();

    $("#task-form").submit(function(e) {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page
        var taskInput = $("input[name='task']");
        var task = taskInput.val();

        if (task.trim() !== "") {
            // Add the task to the list
            $("#to-do-list ul").append("<li>" + task + "</li>");
            taskInput.val("");

            // Save the updated task list in localStorage
            var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            savedTasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
        }
    });

    $("#to-do-list ul").on("click", "li", function() {
        $(this).toggleClass("crossOff");
        var task = $(this).text();
        var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        var taskIndex = savedTasks.indexOf(task);

        if (taskIndex !== -1) {
            savedTasks.splice(taskIndex, 1);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
        }

        $(this).remove();
    });
});
