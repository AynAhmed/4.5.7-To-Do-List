$(document).ready(function() {

    $("form").submit(function(e) {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page
        var todo = $(this).serializeArray();
        var task = todo[0].value;

         $("#to-do-list ul").append("<li>" + task + "</li>");
         $("input[name='task']").val("");
    });
//
    $("#to-do-list").on("click",  function(e) {
        $(e.target).toggleClass("crossOff");
    });
});

//step 1
/// create a click event that strikes through a list item when you’ve completed it. 
//That item should also be removed from the task list.