import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "enter your new task :"
        }
    ]);
    todoList.push(addTask.task);
    console.log(todoList);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more task ?",
            default: "false"
        }
    ]);
    condition = addMoreTask.addMore;
}
console.log("your updated todo_list : ", todoList);
