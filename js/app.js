// User interaction doesnt provide desired results
//solution: Add interactivity so the user can manage dialy tasks

var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); //complete-tasks


var createNewTaskElement = function(taskString) {
	var listItem = document.createElement("li");
//input (checkbox)
	var checkbox = document.createElement("input");
	//label
	var label = document.createElement("label");
	//input (text)
	var editInput = document.createElement("input");
	//button.edit
	var editButton = document .createElement("button");
	//button.delete
	var deleteButton = document.createElement("button");
	//EAch elements, needs modified and appended
	return listItem;
}


// add a new task
var addTask = function() {
	console.log("add task...");
	//when button pressed
	//create new list item with text from #new-task
	var listItem = createNewTaskElement("Some New Task");
}

// edit existing task
var editTask = function() {
	console.log("edit task...");
	//When edi button press
		//if class of parent is .editMode
			//Switch from .editMode
			//label text become the input's value
		//else
			//Switch to .editMode
			//input value becomes the label's text

		//Toggle .editMode of the parent
}


// delete existing task
var deleteTask = function() {
	console.log("delete task...");
	//when delete button pressed
		//Remove the parent list item fron the ul
}

// mark a task as complete
var taskComplete = function() {	
	console.log("complete task...");
	//When checkbox is checked
		//Append the task list item to the #completed-task
}

//Mark a task as incomplete
var taskIncomplete = function() {
	console.log("incomplete task...");
	//When checkbox is unchecked
		//Appedn the task list item to the #incompleted-task
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("bind task events");
	//select it's children
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
		// bind editTask to edit button
		editButton.onclick = editTask;
		//bin deleteTask to delete button
		deleteButton.onclick = deleteTask;
		// bind checkBoxEventHandler to checkbox
		checkbox.onchange = checkBoxEventHandler;
}

addButton.onclick = addTask;


//cycle over incompleteTaskHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i += 1) {
	bindTaskEvents(incompleteTasksHolder.children[i], taskComplete);
}	
	//for each item
		//bind events to list items's children (taskCompleted)

//cycle over completeTaskHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i += 1) {
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
	//for each item
		//bind events to list items's children (taskIncompleted)





// mark a task as incomplete