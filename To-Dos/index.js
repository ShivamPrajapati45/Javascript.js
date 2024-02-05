let form = document.getElementById("form");
let type = document.getElementById("type");
let main = document.querySelector(".main");
let lists = document.getElementById("lists");
console.log(lists);

// const saveData = () => {
//   localStorage.setItem('ListItem',lists.innerHTML);
//   // saveData();
// }

form.addEventListener("submit", (e) => {
  // saveData();
  e.preventDefault();
  if (type.value == "") {
    alert("Make your task first..");
  } else {
    // saveData();
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("task");

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("tasks");
    parentDiv.appendChild(taskDiv);

    let check = document.createElement("i");
    check.classList.add("check");
    check.classList.add("fa-regular");
    check.classList.add("fa-circle");
    taskDiv.appendChild(check);

    let iconDiv = document.createElement("div");
    iconDiv.classList.add("icons");
    parentDiv.appendChild(iconDiv);

    let taskField = document.createElement("input");
    taskField.classList.add("task-value");
    taskField.setAttribute("readonly", "readonly");
    taskDiv.appendChild(taskField);
    taskField.value = type.value;

    let edit = document.createElement("i");
    iconDiv.appendChild(edit);
    edit.classList.add("edit");
    edit.classList.add("fa-solid");
    edit.classList.add("fa-pen-to-square");
    edit.setAttribute("title", "Edit");

    let Delete = document.createElement("i");
    iconDiv.appendChild(Delete);
    Delete.classList.add("delete");
    Delete.classList.add("fa-solid");
    Delete.classList.add("fa-trash");
    Delete.setAttribute("title", "Delete");

    lists.appendChild(parentDiv);
    // saveData();
    type.value = "";
  
    Delete.addEventListener("click", (e) => {
    Delete.parentElement.parentElement.remove();
  });
  // saveData();
    check.addEventListener("click", (e) => {
      if (check.classList.contains("fa-circle")) {
        check.classList.remove("fa-circle");
        check.classList.add("fa-circle-check");
        taskField.style.textDecoration = "line-through";
        // saveData();
      } else {
        check.classList.add("fa-circle");
        check.classList.remove("fa-circle-check");
        taskField.style.textDecoration = "none";
        // saveData();

      }
      // saveData();
    });

    edit.addEventListener("click", (e) => {
      if (edit.className === "edit fa-solid fa-pen-to-square") {
        taskField.removeAttribute("readonly", "readonly");
        edit.removeAttribute("title", "Edit");
        taskField.focus();
        taskField.style.border = "2px solid red";
        edit.classList.remove("fa-pen-to-square");
        edit.classList.add("fa-check");
        edit.setAttribute("title", "Save");
        // saveData();
      } else {
        edit.removeAttribute("title", "Save");
        edit.setAttribute("title", "Edit");
        taskField.setAttribute("readonly", "readonly");
        taskField.style.border = "none";
        edit.classList.add("fa-pen-to-square");
        edit.classList.remove("fa-check");
        // saveData();
      }
      // saveData();
    });
  }
  // saveData();
});








document.getElementById("light").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.style.transition = "0.6s ease-in-out";
  if (document.body.classList.contains("dark-theme")) {
    document.getElementById("light").classList.remove("fa-moon");
    document.getElementById("light").classList.add("fa-sun");
    document.getElementById("light").setAttribute("title", "Light Mode");
    document.getElementById("light").style.color = "white";
    // saveData();
  } else {
    document.getElementById("light").classList.remove("fa-sun");
    document.getElementById("light").classList.add("fa-moon");
    document.getElementById("light").setAttribute("title", "Dark Mode");
    document.getElementById("light").style.color = "black";
    // saveData();
  }
});

// const getData = () => {
//   lists.innerHTML = localStorage.getItem('ListItem');
//   // saveData();
// }

// getData();
