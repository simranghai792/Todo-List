let todo = [];

let req = prompt("Please enter your request");
console.log(req);

while(true){
    if(req == "quit"){
        console.log("Quit App");
        break;
    }
    if(req == "list"){
        console.log("------------");
     for(let i = 0;i<todo.length;i++){
            console.log(i,todo[i]);
        } 
    //     or 
    /*for(task of todo){
             console.log(task);
         }*/
        console.log("------------");
    }

    else if(req == "add"){
        let task = prompt("Please enter the task you want to ADD");
        todo.push(task);
        console.log("Task Added");
    }

    else if(req == "delete"){
        let idx = prompt("Please enter the Task Index you want to Delete");
        todo.splice(idx,1);
        console.log("Task Deleted");
    }
    else{
        console.log("Wrong Request!!");
        console.log("Please Check the options available in ToDo App");
    }

req = prompt("Please Enter your request");
}