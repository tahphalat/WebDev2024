prompt('What is your name?')
console.log('Hello, world!!!!')
console.log('Hello, world!!')

// string
let firstname = 'Tom'

// number 
let age = 20
let height = 1.68

// Output
console.log(firstname)
console.log(age)

// Boolean
let isThai = true

console.log('My name is' , firstname, 'and my age is ', age)


//  Operations

let number1 = 5
let number2 = 10

let number3 = number1 + number2
console.log(number3)

// Condition statement

let condition1 = number1 == number2 //เก็บค่า boolean

if(condition1){
    console.log('Equal!!')
} else if(number1 > 0) {
    console.log('more than 0')
} else {
    console.log('Not equal')
}
//  ใช้ && || ได้เหมือน c++


// Loop

let cnt = 0
while(cnt <= 10){
    console.log(cnt)
    cnt++
}

for(let i=0 ; i<10 ; i++){
    console.log(i)
}

// Array = list ของ data

let ages = [30,40,50] //array 3 items
console.log(ages[0],ages[1],ages[2])
console.log(ages)

// 1. แทนที่ array เก่าได้เลย
ages = [45,60]
console.log(ages)

// 2. ต่อ/เอาท้ายออก array
// คล้าย stack
ages.push(55)
console.log('push 55', ages)

ages.pop()
console.log('pop',ages)

//check item in array 
if(ages.includes(45)){
    console.log('you have 45 in list')
}

// sorting
let items =  [35,14,20]
console.log('before', items)
items.sort()
console.log('after', items)

//หาขนาด
console.log('length', items.length)

//object (คล้าย struct in C++)

let students = {
    age:30,
    name: 'tom',
    grade: 'A' 
}
console.log(students.age, students.name, students.grade)

//object + array

let Students = [{
    age:30,
    name: 'tom',
    grade: 'A' 
}, {
    age:29,
    name: 'jerry',
    grade:'B'
}]


// push ได้
Students.push({
    age: 31,
    name:'sprite',
    grade:'C'
})

for(let i=0; i<Students.length; i++){
    console.log('Student Number: ', (i+1))
    console.log('name ', Students[i].name )
    console.log('age ', Students[i].age )
    console.log('grade ', Students[i].grade )
}


// function

let score1 = 50
let score2 = 60
let grade=''
function calculation_grade (score){
    if(score>=80){
        grade = 'A'
    } else if(score >=70){
        grader = 'B'
    } else if(score >=60){
        grader = 'C'
    } else if(score >=50){
        grader = 'D'
    } else {
        grader = 'F'
    }
    return grade
}

// ใช้ function
let grade1 = calculation_grade(score1);
let grade2 = calculation_grade(score2);
console.log('grade', grade1)
console.log('grade', grade2)


//arrow function = ประกาศให้ตัวแปรนั้นเป็นประเภท function

let calculation_grade_Arrow = (score) =>{
    if(score>=80){
        grade = 'A'
    } else if(score >=70){
        grader = 'B'
    } else if(score >=60){
        grader = 'C'
    } else if(score >=50){
        grader = 'D'
    } else {
        grader = 'F'
    }
    return grade
}


