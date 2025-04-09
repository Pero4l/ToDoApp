let toDoApp = [{
    title: "Shooping",
    id: 1,
    status: "Done" 
}]

function addTask(title, status){
    let id = toDoApp.length +1
    let toDo = {
        title: title,
        id: id,
        status: status
    }


    toDoApp.push(toDo)
}

addTask("Go to school", "Undone")
addTask("Coding", "Undone")
addTask("Learn JS", "Done")
addTask("Laundry", "Undone")
addTask("Cooking", "Done")
addTask("Spend time with my bike", "Undone")
addTask("Do my assignment", "Done")


console.log("AFTER PUSHING", toDoApp);


function markTask(){
    let completed = []
    let pending = []
    for(let i in toDoApp){
        if(toDoApp[i].status === "Done"){
            completed.push(toDoApp[i])
        }else{
            pending.push(toDoApp[i])
        }
    }
        

    console.log("ALL DONE", completed);
    console.log("ALL UNDONE", pending);
    
    
}

markTask()



function deleteTask(toDoApp){
    return toDoApp.filter(toDoApp => toDoApp.id !== 3)

}

console.log("AFTER DELETE", deleteTask(toDoApp));