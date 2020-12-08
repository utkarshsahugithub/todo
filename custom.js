$(document).ready(function () {
    $('#addTaskBtn').click(function(e) {
        e.preventDefault();
        var li = `<li><input type="checkbox"><span>${$("#inputBox").val()}</span><input type="text"><br><button class="editClass">Edit</button><button class="saveClass">Save Changes</button><button class="deleteClass">Delete</button></li>`;
        $(".incompletedTasks ul").append(li);
        $(".deleteClass").click(function() {
            $(this).parent().remove();
        })
        $(".editClass").click(function() {
            $(this).parent().find("input[type='text']").val($(this).parent().find("span").text());
            $(this).hide();
            $(this).next().show();
        })
        $(".saveClass").click(function() {
            $(this).parent().find("span").text($(this).parent().find("input[type='text']").val());
            $(this).hide();
            $(this).prev().show();
        })
        $("input[type='checkbox']").click(function() {
            if($(this).prop('checked') == true) {
                $(".completedTasks ul").append($(this).parent('li'));
            } if(($(this).prop('checked') == false)) {
                $(".incompletedTasks ul").append($(this).parent('li'));
            }
        })
    })
});