// //task1
// function num(obj)
// {
//     return `"${obj.name} is ${obj.age} years old live ${obj.loc}"` 
// }
// console.log(num({name:12,age:12,loc:12}));



// //task2
// function num (obj)
// {
//     return `${obj.up-obj.down}`
// }
// console.log(num({up:2,down:13}));



// //task3
// function num (obj)
// {
//     let cnt=0
//     obj.forEach((el)=>{
//        cnt+=el.down
//     })
//     return cnt
// }
// console.log(num([{up:2,down:13},{up:2,down:7}]));



// //task4
// function num(obj)
// {
//     return `${2024-obj.year}`
// }
// console.log(num({name:"man",year:2000}));



// //task5
// function num(obj)
// {
//     return `${obj.rating.reduce((cnt,num)=>cnt+num/obj.rating.length)}`
// }
// console.log(num({name:"man",rating:[1,2,3,45,]}));










// -------------------------------------------------------------------------------------------




// //task1
// function  num(obj)
// {
//     return Object.keys(obj).length
// }
// console.log(num({name:"jone",age:30}));




// //task2
// function nmu(obj,str)
// {
//     return obj[str]
// }
// console.log(nmu({name:"alise",age:25},"name"));



// //task3
// function srt(obj)
// {
//     let cnt= Object.keys(obj).toSorted()
//     let obj1={}
//     cnt.forEach((el)=>
//     {
//         obj1[el]=obj[el]
//     })
//     return obj1

// }
// console.log(srt({b:2,a:1,c:3}));



// //task4
// function num(obj,str)
// {
//   delete obj[str]
//   return obj
// }
// console.log(num({a:1,b:2,c:3},"c"));



// //task5
// function kalon(obj)
// {
//     let cnt=Object.keys(obj)
//     let up={}
//     cnt.forEach((el)=>{
//         up[el.toUpperCase()]=obj[el]
//     })
//     return up
// }
// console.log(kalon({name:12}));










