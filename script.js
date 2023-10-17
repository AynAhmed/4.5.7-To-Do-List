function printData( ){
    e.preventDefault();

    var todo = $("form").serializeArray();
    console.log(todo)
    var task = todo[0].value;
    $("#to-do-list").append("" + task +"</li>")

}