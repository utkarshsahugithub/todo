$(document).ready(function () {
  var arrayIncompletedTask = [];
  var arrayCompletedTask = [];
  var i = 0;
  

  function addContent() {
    var taskValue = $("#inputBox").val();
    arrayIncompletedTask.push(taskValue);
    
    var singleTaskContainer = $("<div></div>");
    var singleTaskValue = $("<p></p>").text(taskValue);
    var singleTaskValueEditBox = $("<input></input>");
    var editButton = $("<button></button>").text("Edit");
    editButton.addClass("editMode");
    var deleteButton = $("<button></button>").text("Delete");
    var taskDoneButton = $("<button></button>").text("Task Done");
    taskDoneButton.addClass("taskDoneMode");
    var undoButton = $("<button></button>").text("Undo");
      undoButton.addClass('undoMode');

    singleTaskContainer.append(
      singleTaskValue,
      singleTaskValueEditBox,
      editButton,
      deleteButton,
      taskDoneButton
    );

    var singleTaskList = $("<li></li>");
    singleTaskList.addClass("singleTaskList");
    singleTaskList.append(singleTaskContainer);
    $(".incompletedTasks ul").append(singleTaskList);

    function editFunction() {
      if (editButton.hasClass("editMode")) {
        var updatedValue = $(this).parent().find("p").text();
        $(this).prev().val(updatedValue);
        var saveAfterEditButton = $("<button></button>").text("Save Chnages");
        $(this).after(saveAfterEditButton);
        $(this).remove();
        saveAfterEditButton.click(function () {
          $(this).parent().find("p").text($(this).prev().val());
          var editButtonNew = $("<button></button>").text("Edit Chnages");
          $(this).after(editButtonNew);
          $(this).remove();
          editButtonNew.on("click", editFunction);
        });
      }
    }
    editButton.on("click", editFunction);

    deleteButton.click(function () {
      singleTaskList.remove();
      var index = arrayIncompletedTask.indexOf(
        $(this).parent().find("p").text()
      );
      arrayIncompletedTask.splice(index, 1);
      console.log(arrayIncompletedTask);
    });

    function undoFunction() {
      // console.log($(this).parent().find("p").text());
      if(undoButton.hasClass('undoMode')) {

        arrayIncompletedTask.push($(this).parent().find("p").text());
        arrayCompletedTask.splice( (arrayCompletedTask.indexOf($(this).parent().find("p").text())) , 1);
        singleTaskCompletedList.remove();
        $(".incompletedTasks ul").append(singleTaskList);
        console.log("ArrayCompletedTask-: " + arrayCompletedTask);
        console.log("ArrayIncompleted-: " + arrayIncompletedTask);
        taskDoneButton.addClass('taskDoneMode');
        undoButton.removeClass('undoMode');
      }
    }
    var singleTaskCompletedList = $("<li></li>");
    function taskDoneFunction() {
      if(taskDoneButton.hasClass('taskDoneMode')) {
        var singleTaskCompletedContainer = $("<div></div>");
      $(".completedTasks ul").append(singleTaskCompletedList);
      singleTaskCompletedList.append(singleTaskCompletedContainer);
      var singleTaskCompletedValue = $("<p></p>").text($(this).parent().find("p").text());
      arrayCompletedTask.push(singleTaskCompletedValue);
      console.log("completd-:" + arrayCompletedTask);

      
      singleTaskCompletedContainer.append(singleTaskCompletedValue, undoButton);
      
      var index = arrayIncompletedTask.indexOf(
        $(this).parent().find("p").text()
      );
      arrayIncompletedTask.splice(index, 1);
      singleTaskList.remove();
      taskDoneButton.removeClass('taskDoneMode');
      undoButton.on("click", undoFunction);
      console.log("incompleted-:" + arrayIncompletedTask);
      
      }
      
    }
    taskDoneButton.on('click', taskDoneFunction);
    i++;
  }

  $("#addTaskBtn").on("click", function (e) {
    e.preventDefault();
    addContent();
  });
});
