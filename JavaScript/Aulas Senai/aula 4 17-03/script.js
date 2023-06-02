var studentsList = [['1001', 'Lucas'],['1002','Cami'],['1003', 'Bergamo'],['1004', 'Ramos']]

function printStudents(student){
    console.log(student[0] + ' - ' + student[1])
}

function printAllStudents(students){
    students.forEach(element => {
        printStudents(element)
    })
}

printAllStudents(studentsList)