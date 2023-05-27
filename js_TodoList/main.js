let todos = 
[
  'Do the homework',
  'Code your project for 3 hours',
  'Read 50 pages'
];

const toasts = document.querySelectorAll('#liveToast');
const btnadd = document.querySelector('#liveToastBtn');

const listItems = () => {
  let list = document.querySelector('#list');
  list.innerHTML = '';

  todos.forEach((item, index) => {
    let newItem = document.createElement('li');
    newItem.innerHTML = `
      <span onclick="checkElement(${this})">${item}</span> 
      <span class='close' onclick="delElement(${index})">x</span>`;
    list.appendChild(newItem);
  })
}

const newElement = () => {
  let task = document.querySelector('#task');

  if(task.value && task.value.trim() != ''){
    todos.push(task.value);
    task.value = '';
  } else {
    $(toasts[1]).toast('show');
    task.value = '';
  }

  listItems();
}

const delElement = (index) => {
  todos.splice(index,1);
  listItems();
}

const checkElement = (item) => {
  item.classList.addClass('checked');
  listItems();
}
