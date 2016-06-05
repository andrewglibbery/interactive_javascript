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
	
	checkbox.type = "checkbox";
	editInput.type = "text";
	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);


	return listItem;
}


// add a new task
var addTask = function() {
	console.log("add task...");
	//when button pressed
	//create new list item with text from #new-task
	var listItem = createNewTaskElement(taskInput.value);

	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskComplete);
	taskInput.value = "";
}

// edit existing task
var editTask = function() {
	console.log("edit task...");

	var listItem = this.parentNode;
	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode");


	//When edi button press
	if(containsClass) {
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}
		//if class of parent is .editMode
			//Switch from .editMode
			//label text become the input's value
		//else
			//Switch to .editMode
			//input value becomes the label's text

		//Toggle .editMode of the parent
	listItem.classList.toggle("editMode");
}


// delete existing task
var deleteTask = function() {
	console.log("delete task...");

	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	//when delete button pressed
		//Remove the parent list item fron the ul
	ul.removeChild(listItem);
}

// mark a task as complete
var taskComplete = function() {	
	console.log("complete task...");
	//When checkbox is checked
var listItem = this.parentNode;

completedTasksHolder.appendChild(listItem);
bindTaskEvents(listItem, taskIncomplete);
		//Append the task list item to the #completed-task
}

//Mark a task as incomplete
var taskIncomplete = function() {
	console.log("incomplete task...");

	var listItem = this.parentNode;

	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskComplete);
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