const list = document.querySelector("#list");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const url = document.querySelector("#url");
const load = document.querySelector("#load");


console.log(list, input, add, clear, url, load);

let tasks = [];

function taskToDom(task) {
  if (typeof task === "string" && task) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.addEventListener("click",(event) => {
        const taskIndex = tasks.indexOf(task);
        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1);  
          saveTasksToLocalStorage();  
        }
        event.target.parentElement.remove();
      });

    li.textContent = "📈" + task;
    button.textContent = "REMOVE";
    

    li.append(button);
    list.append(li);

    
  }
}

for (let i = 0; i < tasks.length; i++) {
  taskToDom(tasks[i]);
}

function newTask(event) {
  taskToDom(input.value);
  tasks.push(input.value);  
  saveTasksToLocalStorage();
  input.focus();
  input.value = "";
}

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
      list.innerHTML = ''; 
      tasks.forEach(task => {
        taskToDom(task);
      });
    }
}

function loadTasksFromJson() {
    const jsonData = url.value;
    try {
      const parsedData = JSON.parse(jsonData);
      if (Array.isArray(parsedData)) {
        tasks = parsedData;
        saveTasksToLocalStorage();  
        list.innerHTML = '';
        tasks.forEach(task => {
          taskToDom(task);
        });
        url.value = '';
      } else {
        throw new Error('Invalid JSON data');
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
      alert('Erreur lors du chargement des tâches. Veuillez vérifier le format JSON.');
    }
}
  
load.addEventListener("click", loadTasksFromJson);

add.addEventListener("click",newTask);
clear.addEventListener("click",() =>{list.innerHTML=""});
window.addEventListener('load', loadTasksFromLocalStorage);


