var student = require('./student.js')
var input = require("readline-sync")
var listOfStudent = new Array()
while(1){
while (input.question("exit? : ") != "yes") {
    var faye = new student;
    console.log("What do you want to do?")
    var choice = (input.question("Add a student, Remove a student, View list of student/s:"))
    if (choice == "add") {
        faye.addName(input.question("\tName : "))
        console.log("Add Course : ")
        faye.addCourse(input.question("\tCourse : "), input.question("\tYear : "))
        console.log("Add Schedule :")
        faye.addSchedule(input.question("\tDay : "), input.question("\tTime : "))
        listOfStudent.push(faye)
    }else if (choice == "remove") {
        console.log("You can remove a student by entering its INDEX")
        if (listOfStudent == 0){
            console.log("There is/are no student/s to remove!")
        }else
        var index = input.question("Please enter the index of the student you want to remove :")
        listOfStudent.splice(parseInt(index), 1)
        console.log("A student has been removed!\t", listOfStudent)
    }else if (choice == "view") {
            console.log(listOfStudent)
        } else {
            console.log("Invalid input!")

        }
    }
console.log("Successfully Added data!")
break
}
