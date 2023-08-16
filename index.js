// var taskList = ["task 1", "task 2", "task 3", "task 1", "task 2", "task 3"];
var taskList = [];
var listView = document.querySelector(".list-view");

populateView();

function populateView()
{
    listView.innerHTML = "";

    for (var i = 0; i < taskList.length; i++){
        var newCard = "<div class='card'><span>" + (i+1) + "</span><p>" + taskList[i] + "</p><a id='"+i+"' onclick='deleteItems(this.id)'><img src='./delete.svg' alt=''></i></a></div>";
        var oldH = listView.innerHTML;
        newCard = oldH + newCard;
        listView.innerHTML = newCard;
    }
}
let todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var newTask = document.getElementById("task").value;
  if(newTask !== ""){
    document.getElementById("task").value = "";
    taskList.push(newTask);
    populateView();
    console.log(newTask);
  }
    // handle submit
  });

function deleteItems(id){
    taskList.splice(id,1);
    populateView();
}
