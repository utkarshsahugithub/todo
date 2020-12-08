$(document).ready(function() {
    var arrayIncompltedTask = [];
    var arrayCompletedTask = [];
    var addedTask;
    var incompletedTasks =  $(".incompletedTasks").children();
    var task;
    var i = 0;
    var completedTasks = $(".completedTasks").children();

    function editBtnFunction() {
        // taskBox = $("<input>").val(task.text());
        task.after(taskBox);
        // saveBtn = $("<button></button>").text("Save changes");
        // incompletedTasks.after(saveBtn);
        // saveBtn.click(function() {
        //     console.log(taskBox.val());
        // })
        task.text(taskBox.val());

    }
    function deleteBtnFunction() {
        task.remove();
        taskBox.remove();
        editBtn.remove();
        deleteBtn.remove();
        taskDone.remove();
        // incompletedTasks[]
        // console.log(incompletedTasks.html);
    }
    function taskDoneBtnFunction(i) {
        // console.log("added");
        console.log(arrayIncompltedTask);
        var singleCompletedTask = arrayIncompletedTask[i];
        console.log(singleCompletedTask);
        // arrayCompletedTask.push()
    }

    $(addTaskBtn).click(function(event) {
        event.preventDefault();
        addedTask = $("#inputBox").val();
        arrayIncompltedTask.push(addedTask);
        console.log(arrayIncompltedTask);
        task = $("<li></li>").text(arrayIncompltedTask[i]);
        taskBox = $("<input>").val(task.text());
        // console.log(taskBox);
        editBtn = $("<button></button>").text("Edit");
        $(editBtn).attr('id', "editBtn" + i);
        editBtn.on("click", editBtnFunction);

        // $(editBtn).attr("class", "editBtn")
        // console.log(editBtn);
        deleteBtn = $("<button></button>").text("Delete");
        $(deleteBtn).attr('id', "deleteBtn" + i);
        deleteBtn.on("click", deleteBtnFunction);

        taskDone = $("<button></button>").text("Task Done");
        $(taskDone).attr('id', "taskDone" + i);
        // taskDone.on("click", function() {
        //     taskDoneBtnFunction(i);
        // });

        i++;
        incompletedTasks.append(task, editBtn, deleteBtn, taskDone);
    });
    
});