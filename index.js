var addtask = document.querySelector(".add");
let inputBox = document.querySelector(".input-box");
let myTask = document.querySelector(".my-tasks");
let newTask = document.querySelector(".new-task");
let example = document.querySelector(".example");
let edit = document.querySelector(".delete-task");


addtask.addEventListener("click", createtask );
myTask.addEventListener("click", (e)=>{
    let item = e.target;
    if (item.classList.contains("new-task"))  {
        item.parentElement.classList.toggle("completed");
      } else if (item.classList.contains("delete-task")) {
        item.parentElement.remove();
      }
    });

//creating new tasks

function createtask(){
    if(inputBox.value === ""){
        alert("must enter a task");
    }else{
        //inserting text
        let rem = edit.textContent
         let text = inputBox.value;
        inputBox.value = "";
       //creating new div
      let newDiv = document.createElement("div")
      newDiv.classList.add("my-tasks");
      myTask.appendChild(newDiv)


      //creating p elements
      let LI= document.createElement("li");
      let del = document.createElement("span");

       //giving them classLists
      LI.classList.add("new-task");
      del.classList.add("delete-task");
      LI.innerHTML = text;
      del.innerHTML = rem


      //add them to the my-tasks div
      newDiv.append(LI, del)
      myTask.appendChild(newDiv)
    }

}






