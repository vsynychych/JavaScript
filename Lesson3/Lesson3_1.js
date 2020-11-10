
// // -- створити обєкт (не меньше 5ти властивостей) який описує
// // - собаку
// let dog={
//     name:"Oskar",
//     age:"2",
//     breed:"Spaniel",
//     color: "black",
//     kids: 3,
// }
//
// // - людину
// let men={
//     name:"Petro",
//     age:"27",
//     auto:true,
//     girl:true,
//     house:false
// }
//
// // - автомобіль
// let auto={
//     make:"audi",
//     model:"A8",
//     type:"coupe",
//     engine: "diesel"
//     color:"black",
// }
//
// - квартиру
// let house={
//     rooms:3,
//     size:"big",
//     area: 100,
//     flour:"4th",
//     windows: 6,
// }
//
// - книгу
// let book={
//     name: "Rich dad",
//     author: "Robert Kiyosaki",
//     publication_date:"April 1, 2000",
//     pages:336,
//     publisher:"Warner Books Ed"
// }
//



// Завдання 9
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// let breeds= ["afador", "bulldog", "malamute", "pitt_bull", "affenpinscher"];
// console.log(breeds);
//
// let man= ["ivan", "taras", "oleg", "petro", "nazar"];
// console.log(man);
//
// - з 5 автомобілів
// let cars= ["opel", "bmv", "vw", "audi","mercedes-benz"];
// console.log(cars);



// Завдання 14
// -- створити обєкт (не меньше 5ти властивостей) який описує,
// одна з властивостей обовязково повинна бути обєктом,ще одна - масивом
// - будинок
// let house={
//     rooms: ["corridor","bathroom","bedroom","kitchen","wardrobe"],
//     size:"big",
//     area: {
//         corridor:7,
//         bathroom:9,
//         bedroom:16,
//         kitchen:26,
//         wardrobe:6},
//     flour:"4th",
//     windows: 6,
// }
// - водій
// let driver = {
//     name:"Oleg",
//     age:36,
//     experience:17,
//     car:["Toyota", "VW"],
//     family:{
//         wife:"Oksana",
//         son:"Artur"}
// }
// - іграшку
// let toy={
//     brand: "Hot Wheels",
//     object: "car",
//     condition: new,
//     structure: ["body","chassis", "engine", "transmission"],
//     body:{
//         color: "black",
//         door: 5
//     }
// }
// - стіл
// let table={
//     object:"furniture",
//     types: ["Billiard table", "Tennis table", "Coffee table", "Computer desk", "The kitchen table", "Dining table"],
//     dining_table: {
//         size: "big",
//         color: "brown",
//         material:"tree"
//     },
//     condition: "new"
// }
// - сумка
// let bag={
//     purpose:"storage",
//     type:["Travel bag", "Book bag", "Handbag","Shoulder bag","Sport bag","Jelly bag"],
//     material:["Paper bag","Plastic bag", "A fur bag"],
//     my_travel_bag:{
//         size: "big",
//         material:"plastic",
//         condition: "new",
//         color: "black",
//     }
// }



// Завдання 23
// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// console.log(users[7].status);
// // - статус Максима
// console.log(users[4].status);
// console.log(users[10].status);
// // - імя передостаннього обєкту
// console.log(users[9].name);
// console.log(users[users.length - 2].name);
// // - імя третього обєкта
// console.log(users[2].name);
// // - вік Олега
// console.log(users[6].age);
// // - вік Олі
// console.log(users[3].age);
// console.log(users[9].age);
// // - вік + імя 5го обєкта
// console.log(users[4].name);
// console.log(users[4].age);
// // - вік + сатус Анни
// console.log(users[5].age);
// console.log(users[5].status);



// Завдання 48
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// - Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :
// Завдання 51
// - отримує текст з параграфа з id "content"
// let content=document.getElementById("content");
// console.log(content);

// Завдання 52
// - отримує текст з блоку з id "rules"
// let rules=document.getElementById("rules");
// console.log(rules);

// Завдання 53
// - замініть текст параграфа з id 'content' на будь-який інший
// content.innerText="Бійцівський клуб";

// Завдання 54
// - замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerText="Правила";

// Завдання 55
// - змініть кожному елементу колір фону на червоний
// content.style.backgroundColor="red";
// rules.style.backgroundColor="red";

// Завдання 56
// - змініть кожному елементу колір тексту на синій
// content.style.color="blue";
// rules.style.color="blue";

// Завдання 57
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let x=document.getElementsByClassName("fc_bp");
// console.log(x);

// Завдання 58
// - отримати всі елементи з класом fc_rules
// let fc_rules=document.getElementsByClassName("fc_rules");
// console.log(fc_rules);


// Завдання 59
// - поміняти колір тексту у всіх елементів fc_rules на червоний
// for (let i = 0; i < fc_rules.length; i++) {
//     let fcRule = fc_rules[i];
//     console.log(fcRule);
//     fcRule.style.color="red";
// }
