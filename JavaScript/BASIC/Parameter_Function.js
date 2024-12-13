// // Array Parameter Function 
// // ForEach 

// let f_score = [10,20,30,40]

// f_score.forEach((s)=>{
//     console.log('Score: ', s)
// })

// // Map, filter

// // MAP
// // f_score[0] = f_score[0] * 2
// // f_score[1] = f_score[1] * 2
// // f_score[2] = f_score[2] * 2
// // f_score[3] = f_score[3] * 2

// // use this instead
// f_score = f_score.map((s)=>{
//     return s*2
// })

// f_score.forEach((s)=>{
//     console.log('New_Score: ', s)
// })

// // FILTER
// let newScore = []
// for(let i = 0 ; i<f_score.length ; i++ ){
//     // if(f_score[i] >=60) newScore.push(f_score[i])
// }

// // use this instead
// newScore=f_score.filter((fs)=>{
//     // if(fs>=60) return true
//     // else return false

//     // can shortcut it to
//     return fs>=60
// })

// newScore.forEach((ns)=>{
//     console.log('f NewScore: ', ns)
// })

// ##############################################
// Object Parameter Function

let Students = [
    {
        name:'Tom',
        age: 20,
        grade: 'B'
    },
    {
        name:'Jerry',
        age: 19,
        grader:'A'
    }
]

// console.log('student: ', Students[1])

// use this instead

let student = Students.find((s)=>{
    // if(s.name == 'Jerry') return true
    return s.name=='Jerry'
})

console.log('student:', student)

// MAP
console.log('before : ', Students)
let doubleAge = Students.map((sa)=>{
    sa.age = sa.age*2
    return sa
})
console.log('after : ', doubleAge)

// FILTER
let highAge = Students.filter((s)=>{
    return s.age >= 40
})

console.log('highAge : ' ,highAge)