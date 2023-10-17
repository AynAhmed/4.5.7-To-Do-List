$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault(); // Prevent the form
        var taskInput = $("input[name='task']");
        var task = taskInput.val();


            // Add the task to the list
            $("#to-do-list ul").append("<li>" + task + "</li>");
            taskInput.val("");

            // Save the updated task list in localStorage
            savedTasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));

    });

    // Load tasks from localStorage and populate list
    function loadTasks() {
        var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.forEach(function(task) {
            $("#to-do-list ul").append("<li>" + task + "</li>");
        });
    }

    loadTasks();

    ////handle delete function
    $("#to-do-list ul").on("click", "li", function() {
        $(this).toggleClass("crossOff");
        var task = $(this).text();
        var savedTasks = JSON.parse(localStorage.getItem("tasks"))
        var taskIndex = savedTasks.indexOf(task);


        savedTasks.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));

        $(this).remove();

    });
});
