function newItem() {
	var item = document.createElement("td");
    // Contains the new task's input
	var input = document.getElementById("myInput").value;
    
    // Cannot add an empty task
	if (input === '') {
		alert("Please enter something!");
	}
    // Add a task for valid input
	else {
        var table = document.getElementById("todo");
        // Insert a new row into table
        var row = table.insertRow(table.tBodies[0].rows.length + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var checkbox = '<input type="checkbox" class="checkbox" id="complete" value="no">';

        // Fill first and third column, and add a class to second column
        cell1.innerHTML = input;
        cell2.innerHTML = "";
        cell2.className += "t_completed";
        cell3.innerHTML = checkbox;

        document.getElementById("myInput").value = "";
	}
}

// User can press enter to add a new task
$(document).ready(function(){
    $("#myInput").on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            newItem();
        }
    });

// When user clicks on checkmark, the text has a strikethrough, and adds timestamp
    $("#todo").on("click", ".checkbox", function(){
    	var element = $(this).parent().parent().find('td');
    	var timestamp = $(this).parent().parent().find('.t_completed')
        if($(this).is(':checked')) {
            // Add dashed class to same row as selected checkmark
            element.addClass('dashed');
            timestamp.removeClass('dashed');
            // Add timestamp
            var formatDate = function () {
                // Create a date object from the timestamp
                var date = new Date();

                // Create a list of names for the months
                var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];

                var hours = date.getHours();
                var ampm = ""

                if (hours < 12) {
                	hours = hours;
                	ampm = "AM";
                }
                else {
                	hours = hours - 12;
                	ampm = "PM";
                }
                if (hours == 0) {
                	hours = '12'
                }

                // Return a formatted date
                return (months[date.getMonth()]).substring(0,3) + ' ' + date.getDate() + ', ' + date.getFullYear() + ' ' + hours + ':' + date.getMinutes() + ' ' + ampm;

            };
            timestamp.html(formatDate);
        }
        // If checkbox is not checked, or uncheck the box, then remove strikethrough and timestamp
        else {
            element.removeClass('dashed');
            timestamp.html("");
        }
    });
});
