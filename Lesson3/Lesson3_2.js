// Завдання 1
// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте)
// let family={
//     father:"Volodymyr",
//     mother:"Galyna",
//     sister:"Natalia",
//     brother:"Ivan",
// }
// let user={
//     name:"Vitaliy",
//     age:30,
//     wife:"Tetiana",
//     cars:true,
// }
// let auto= {
//     brands: "vw",
//     model: "Passat",
//     year: 2016,
//     price: 20000,
// }
//
// let adress={
//     country: "Ukraine",
//     city:"Lviv",
//     street:"Luchakivska",
//     house: 1,
// }
//
// let house={
//     flour:"4th",
//     rooms:1,
//     area: 40,
// }



// Завдання 2
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let family= {
//     father: {
//         name:"Volodymyr",
//         age:56,
//         car:true,
//         skills:["builder", "driver"]
//     },
//     mother: "Galyna",
//     sister: "Natalia",
//     brother: "Ivan",
// }
//
// let auto= {
//     brands: "vw",
//     model:["passat","golf","jetta","polo","eos"],
//     detailed:{
//         type: "coupe",
//         ps:131,
//         fuel:"diesel",
//     },
//     year: 2016,
// }
//
//  let tv={
//      new:true,
//      films: ["thrillers", "comedy", "horrors", "fantasy", "adventures"],
//      series:{
//          comedy:"Friends",
//          fantasy: "Game of thrones",
//          horrors:"Supernaturals"
//      }
//  }
//
//  let Smith= {
//      main_actors: {
//          MrSmith: "Brad Pitt",
//          MrsSmith: "Angelina Jolie"
//      },
//      others: ["Vince Vaughn", "Adam Brody", "Keith David"],
//      Directed_by: "Doug Liman",
//      Distributed_by: "20th Century Fox",
//      Release_date: "June 7, 2005"
//  }
//
//  let Lviv={
//      country:"Ukraine",
//      area:182.01,
//      population:{
//          ukrainians:"88.1%",
//          russians:"8.9%",
//      },
//      Top_Twin_towns:["Winnipeg", "Freiburg", "Rochdale", "Budapest", "Kraków", "Kutaisi", "Wrocław"]
//  }



// Завдання 3
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// let family= {
//     father: "Volodymyr",
//     mother: "Galyna",
//     sister: "Natalia",
//     brother: "Ivan",
// }
// for (let familyKey in family) {
//     console.log(familyKey);
// }


// let user={
//     name:"Vitaliy",
//     age:30,
//     wife:"Tetiana",
//     cars:true,
// }
// for (let userKey in user) {
//     console.log(userKey);
// }


// let auto= {
//     brands: "vw",
//     model: "Passat",
//     year: 2016,
//     price: 20000,
// }
// for (const autoKey in auto) {
//     console.log(autoKey);
// }


// let adress={
//     country: "Ukraine",
//     city:"Lviv",
//     street:"Luchakivska",
//     house: 1,
// }
// for (const adressKey in adress) {
//     console.log(adressKey);
// }


// let house={
//     flour:"4th",
//     rooms:1,
//     area: 40,
// }
// for (const houseKey in house) {
//     console.log(houseKey);
// }


// let family= {
//     father: {
//         name:"Volodymyr",
//         age:56,
//         car:true,
//         skills:["builder", "driver"]
//     },
//     mother: "Galyna",
//     sister: "Natalia",
//     brother: "Ivan",
// }
// for (let familyKey in family) {
//     console.log(familyKey);
// }


// let auto= {
//     brands: "vw",
//     model:["passat","golf","jetta","polo","eos"],
//     detailed:{
//         type: "coupe",
//         ps:131,
//         fuel:"diesel",
//     },
//     year: 2016,
// }
// for (let autoKey in auto) {
//     console.log(autoKey);
// }


//  let tv={
//      new:true,
//      films: ["thrillers", "comedy", "horrors", "fantasy", "adventures"],
//      series:{
//          comedy:"Friends",
//          fantasy: "Game of thrones",
//          horrors:"Supernaturals"
//      }
//  }
// for (let tvKey in tv) {
//     console.log(tvKey);
// }


//  let Smith= {
//      main_actors: {
//          MrSmith: "Brad Pitt",
//          MrsSmith: "Angelina Jolie"
//      },
//      others: ["Vince Vaughn", "Adam Brody", "Keith David"],
//      Directed_by: "Doug Liman",
//      Distributed_by: "20th Century Fox",
//      Release_date: "June 7, 2005"
//  }
// for (let smithKey in Smith) {
//     console.log(smithKey);
// }


//  let Lviv={
//      country:"Ukraine",
//      area:182.01,
//      population:{
//          ukrainians:"88.1%",
//          russians:"8.9%",
//      },
//      Top_Twin_towns:["Winnipeg", "Freiburg", "Rochdale", "Budapest", "Kraków", "Kutaisi", "Wrocław"]
//  }
// for (let lvivKey in Lviv) {
//     console.log(lvivKey);
// }



// Завдання 4
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let family= {
//     father: "Volodymyr",
//     mother: "Galyna",
//     sister: "Natalia",
//     brother: "Ivan",
// }
// let familyKey=Object.keys(family);
//     console.log(familyKey);


// let user={
//     name:"Vitaliy",
//     age:30,
//     wife:"Tetiana",
//     cars:true,
// }
// let userKey=Object.keys(user);
//     console.log(userKey);


// let auto= {
//     brands: "vw",
//     model: "Passat",
//     year: 2016,
//     price: 20000,
// }
// let autoKey=Object.keys(auto);
//     console.log(autoKey);


// let adress={
//     country: "Ukraine",
//     city:"Lviv",
//     street:"Luchakivska",
//     house: 1,
// }
// let adressKey=Object.keys(adress);
//     console.log(adressKey);


// let house={
//     flour:"4th",
//     rooms:1,
//     area: 40,
// }
// let houseKey=Object.keys(house);
//     console.log(houseKey);


// let family= {
//     father: {
//         name:"Volodymyr",
//         age:56,
//         car:true,
//         skills:["builder", "driver"]
//     },
//     mother: "Galyna",
//     sister: "Natalia",
//     brother: "Ivan",
// }
// let familyKey=Object.keys(family);
//     console.log(familyKey);


// let auto= {
//     brands: "vw",
//     model:["passat","golf","jetta","polo","eos"],
//     detailed:{
//         type: "coupe",
//         ps:131,
//         fuel:"diesel",
//     },
//     year: 2016,
// }
// let autoKey=Object.keys(auto);
//     console.log(autoKey);


//  let tv={
//      new:true,
//      films: ["thrillers", "comedy", "horrors", "fantasy", "adventures"],
//      series:{
//          comedy:"Friends",
//          fantasy: "Game of thrones",
//          horrors:"Supernaturals"
//      }
//  }
// let tvKey=Object.keys(tv);
//     console.log(tvKey);


//  let Smith= {
//      main_actors: {
//          MrSmith: "Brad Pitt",
//          MrsSmith: "Angelina Jolie"
//      },
//      others: ["Vince Vaughn", "Adam Brody", "Keith David"],
//      Directed_by: "Doug Liman",
//      Distributed_by: "20th Century Fox",
//      Release_date: "June 7, 2005"
//  }
// let smithKey=Object.keys(Smith);
//     console.log(smithKey);


//  let Lviv={
//      country:"Ukraine",
//      area:182.01,
//      population:{
//          ukrainians:"88.1%",
//          russians:"8.9%",
//      },
//      Top_Twin_towns:["Winnipeg", "Freiburg", "Rochdale", "Budapest", "Kraków", "Kutaisi", "Wrocław"]
//  }
// let lvivKey=Object.keys(Lviv)
//     console.log(lvivKey);



// Завдання 5
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
// let arr=[{model:"passat", year:2000, ps:101, color:"black"},
//     {model:"polo", year:2010, ps:90, color:"white"},
//     {model:"amarok", year:2001, ps:118, color:"red"},
//     {model:"jetta", year:2012, ps:200, color:"blue"},
//     {model:"caddy", year:2003, ps:131, color:"green"},
//     {model:"golf", year:2014, ps:250, color:"silver"},
//     {model:"eos", year:2005, ps:101, color:"black"},
//     {model:"scirocco", year:2016, ps:170, color:"yellow"},
//     {model:"touran", year:2007, ps:118, color:"silver"},
//     {model:"touareg", year:2018, ps:150, color:"black"},
// ]



// Завдання 6
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
// let arr=[{name: "Lviv", population:730000, country:"ukraine", region:"Galychyna"},
//     {name: "Wroclaw", population:641000, country:"poland", region:" Lower Silesian"},
//     {name: "Kyiv", population:2960000, country:"ukraine", region :"the center"},
//     {name: "Stuttgart", population:634000, country:"germany", region:"Baden-wurttemberg"},
// ]


// Завдання 7
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars=[{model:"passat", year:2000, ps:101, color:"black", driver:{name:"Ivan", age:32, sex:"male", experience:10}},
//     {model:"polo", year:2010, ps:90, color:"white", driver:{name:"Bogdan", age:38, sex:"male", experience:16}},
//     {model:"amarok", year:2001, ps:118, color:"red", driver:{name:"Ira", age:28, sex:"female", experience:7}},
//     {model:"jetta", year:2012, ps:200, color:"blue", driver:{name:"Maria", age:30, sex:"female", experience:11}},
//     {model:"caddy", year:2003, ps:131, color:"green", driver:{name:"Nazar", age:22, sex:"male", experience:3}},
//     {model:"golf", year:2014, ps:250, color:"silver", driver:{name:"Mykola", age:41, sex:"male", experience:20}},
//     {model:"eos", year:2005, ps:101, color:"black", driver:{name:"Sofia", age:27, sex:"female", experience:8}},
//     {model:"scirocco", year:2016, ps:170, color:"yellow", driver:{name:"Roman", age:33, sex:"male", experience:14}},
//     {model:"touran", year:2007, ps:118, color:"silver", driver:{name:"Taras", age:25, sex:"male", experience:6}},
//     {model:"touareg", year:2018, ps:150, color:"black", driver:{name:"Stanislav", age:24, sex:"male", experience:3}},
// ]


// Завдання 8
// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// Завдання 9
// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// Завдання 10
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.


// Завдання 11
// - взять объекты из задания 1 и превратить каждый в json.

// Завдання 12
// - взять json из задания 11 и превратить их обратно в объекты.

// Завдання 13
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// Завдання 14
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// Завдання 15
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// Завдання 16
// - Создать массив пользователей.
// У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// Завдання 17
// - Создать массив пользователей.
// У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив

// Завдання 19
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
