const list = document.querySelector("#list");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const url = document.querySelector("#url");
const load = document.querySelector("#load");


console.log(list, input, add, clear, url, load);

let tasks = [
  "Coder en Python",
  "Faire la lessive",
  "Payer Netflix",
  "Coder en C++",
  "remove herobrine"
];

function taskToDom(task) {
  if (typeof task === "string" && task) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.addEventListener("click",(event) => {
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
  input.focus();
  input.value = "";
}

add.addEventListener("click",newTask)
clear.addEventListener("click",() =>{list.innerHTML=""})


