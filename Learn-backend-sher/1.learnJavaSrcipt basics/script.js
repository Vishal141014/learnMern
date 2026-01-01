//Fundamentals of javascripts
// arrays and objects
// function return
// async js coding

// array, foreach, map, filter, find, indexOf
// var arr = [1,2,3,4,"vishal",{this:value},"chutki"];
// array
var arr = [1,2,3,4];

// foreach
// arr.forEach(function(i){
//     console.log(i);
//     console.log(i+2, "hellow");
// })

// map (jiss array par map chalaya hai map ek new array dega usme same element honge iska use hum array ko change karne ke liye karte hai) ,map always return karega or return value hi arr ke haar index par hoga like arr length 4 so map return 12 so [12,12,12,12] return karega
// let mapVal = arr.map((i) => {
//     // return 12; // [12,12,12,12]
//     return i; // i value add each index beacuse here i value simply add into this work like forEach so arr element add
// })
// console.log(mapVal) 

//filer (jab hame new array banna hota hai with some less length or more like conidtion dena hoo too use karte  hai filer ka) , always return true and false like boolean 
// let filVal = arr.filter((i)=>{
//     if(i >= 3){  // matlab wo hi value new array mai put karo jo 3 se bada ya barabar(=) ho
//         return true; // new vlaue put into new array 
//     }else{
//         return false;
//     }
// })
// console.log(filVal)

// find(array mai kuch bhi dhundhna find hai or ye duplicate mai fist wala index se elemet return kar dega) like [2,2] first 2 return kar dega or length bhi wahi dega
// let findVal = arr.find((i)=>{
//     if(i == 2){
//         return i;
//     }
// })
// console.log(findVal);

//indexOf (Serch any index of any element ) if find return index or if not so return -1
// let indVal = arr.indexOf(5)  
// let indVal2 = arr.indexOf(4)
// console.log(indVal) // -1
// console.log(indVal2) // 3

// _______________________________________________________

//Object
// {} -> blank object 
// key:value
// let objStuData = {
//     name: "vishal",
//     age: 22,
//     course: "B.Tech"
// }
// console.log(objStuData)
// console.log(objStuData.name)
// objStuData.name = "Chutki"
// console.log(objStuData.name) // agar hum sochte hai ki hamara object change na ho too hum use karge freeze

// let objData = {
//     name:"Nikita",
//     age:22
// }
// Object.freeze(objData)
// console.log(objData)
// console.log(objData.age)
// objData.age = 21
// console.log(objData.age)

// ________________________________________
// // function length is how many parameters
// // like 
// const divide = (i,j,k) => {
// };
// // this funciton length is 3
//_________________________________________

//async in js 
// (line by line code chle ye hai synchronous)
// jo bhi code async(asyncronous) nature ka ho use side stack mai bhej do or agle code ko chalao jo bhi sync nature ka ho , jab bhi sara syn code chl jaaye, tab check karo ki async code complete hua ya nahi agar wo complete hua ho to use main stack mai lao too use chal doo

// async function abcd(){
//     var blob = await fetch(`https://randomuser.me/api/`)
//     var ans = await blob.json();
//     console.log(ans);
//     console.log(ans.result.gender);

// }
// abcd()










