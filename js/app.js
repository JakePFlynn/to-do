
//add button click functionality
//if there is text, it will add it to the list

document.getElementById('add').addEventListener('click', function(){
	var value = document.getElementById('item').value;
	if(value) {
		addItem(value);
		document.getElementById('item').value = "";
	}
});

//adding remove functionality for the list items

function removeItem(){
	var li = this.parentNode.parentNode.parentNode;
	var ul = this.parentNode.parentNode.parentNode.parentNode;
	ul.removeChild(li);
}

//moving the item to the lower section of the page when it is complete

function finishedItem(){
	var li = this.parentNode.parentNode.parentNode;
	var ul = this.parentNode.parentNode.parentNode.parentNode;
	var id = ul.id;

//check whether the item is completed or not

	var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

	ul.removeChild(li);
	target.insertBefore(li, target.childNodes[0]);
}
//adding the elements to the dom

function addItem(text){
	var list = document.getElementById('todo')

	var item = document.createElement('li');
	item.innerText = text;

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove = document.createElement('button');
	var removeIcon = document.createElement('i');
	removeIcon.classList.add('remove', 'fa', 'fa-times');

//removing the li when button is clicked

	removeIcon.addEventListener('click', removeItem);

	var finished = document.createElement('button');
	var finishedIcon = document.createElement('i');
	finishedIcon.classList.add('finished', 'fa', 'fa-check');

//putting completed item onto completed section of the page

	finishedIcon.addEventListener('click', finishedItem);

//adding the elements 

	buttons.appendChild(remove);
	remove.appendChild(removeIcon);
	buttons.appendChild(finished);
	finished.appendChild(finishedIcon);
	item.appendChild(buttons);

//inserting the items from top to bottom rather than bottom to top

	list.insertBefore(item, list.childNodes[0]);
};