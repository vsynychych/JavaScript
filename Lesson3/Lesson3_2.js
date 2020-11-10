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
// let address={
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
//
//
// let user={
//     name:"Vitaliy",
//     age:30,
//     wife:"Tetiana",
//     cars:true,
// }
// for (let userKey in user) {
//     console.log(userKey);
// }
//
//
// let auto= {
//     brands: "vw",
//     model: "Passat",
//     year: 2016,
//     price: 20000,
// }
// for (const autoKey in auto) {
//     console.log(autoKey);
// }
//
//
// let adress={
//     country: "Ukraine",
//     city:"Lviv",
//     street:"Luchakivska",
//     house: 1,
// }
// for (const adressKey in adress) {
//     console.log(adressKey);
// }
//
//
// let house={
//     flour:"4th",
//     rooms:1,
//     area: 40,
// }
// for (const houseKey in house) {
//     console.log(houseKey);
// }
//
//
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
//
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
// for (let autoKey in auto) {
//     console.log(autoKey);
// }
//
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
// for (let tvKey in tv) {
//     console.log(tvKey);
// }
//
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
// for (let smithKey in Smith) {
//     console.log(smithKey);
// }
//
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
//
//
// let user={
//     name:"Vitaliy",
//     age:30,
//     wife:"Tetiana",
//     cars:true,
// }
// let userKey=Object.keys(user);
//     console.log(userKey);
//
//
// let auto= {
//     brands: "vw",
//     model: "Passat",
//     year: 2016,
//     price: 20000,
// }
// let autoKey=Object.keys(auto);
//     console.log(autoKey);
//
//
// let adress={
//     country: "Ukraine",
//     city:"Lviv",
//     street:"Luchakivska",
//     house: 1,
// }
// let adressKey=Object.keys(adress);
//     console.log(adressKey);
//
//
// let house={
//     flour:"4th",
//     rooms:1,
//     area: 40,
// }
// let houseKey=Object.keys(house);
//     console.log(houseKey);
//
//
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
//
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
// let autoKey=Object.keys(auto);
//     console.log(autoKey);
//
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
// let tvKey=Object.keys(tv);
//     console.log(tvKey);
//
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
// let smithKey=Object.keys(Smith);
//     console.log(smithKey);
//
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
// console.log(arr);
// let i=0;
// while (i<arr.length){
//     console.log(arr[i]);
//     i++;
// }
//
// let arr=[{name: "Lviv", population:730000, country:"ukraine", region:"Galychyna"},
//     {name: "Wroclaw", population:641000, country:"poland", region:" Lower Silesian"},
//     {name: "Kyiv", population:2960000, country:"ukraine", region :"the center"},
//     {name: "Stuttgart", population:634000, country:"germany", region:"Baden-wurttemberg"},
// ]
// let i=0;
// while (i<arr.length){
//     console.log(arr[i]);
//     i++;
// }
//
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
// let i=0;
// while (i<cars.length){
//     console.log(cars[i]);
//     i++;
// }



// Завдання 9
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
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
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// let arr=[{name: "Lviv", population:730000, country:"ukraine", region:"Galychyna"},
//     {name: "Wroclaw", population:641000, country:"poland", region:" Lower Silesian"},
//     {name: "Kyiv", population:2960000, country:"ukraine", region :"the center"},
//     {name: "Stuttgart", population:634000, country:"germany", region:"Baden-wurttemberg"},
// ]
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     console.log(arrElement);
// }
//
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
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }



// Завдання 10
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
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
// for (let arrElement of arr) {
//     console.log(arrElement);
// }
//
// let arr=[{name: "Lviv", population:730000, country:"ukraine", region:"Galychyna"},
//     {name: "Wroclaw", population:641000, country:"poland", region:" Lower Silesian"},
//     {name: "Kyiv", population:2960000, country:"ukraine", region :"the center"},
//     {name: "Stuttgart", population:634000, country:"germany", region:"Baden-wurttemberg"},
// ]
// for (let arrElement of arr) {
//     console.log(arrElement);
// }
//
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
// for (let car of cars) {
//     console.log(car);
// }



// Завдання 11
// - взять объекты из задания 1 и превратить каждый в json.
// let family={
//     father:"Volodymyr",
//     mother:"Galyna",
//     sister:"Natalia",
//     brother:"Ivan",
// }
// let family2=JSON.stringify(family);
// console.log(family2);
//
// let user={
//     name:"Vitaliy",
//     age:30,
//     wife:"Tetiana",
//     cars:true,
// }
// let user2=JSON.stringify(user);
// console.log(user2);
//
// let auto= {
//     brands: "vw",
//     model: "Passat",
//     year: 2016,
//     price: 20000,
// }
// let auto2=JSON.stringify(auto);
// console.log(auto2);
//
// let adress={
//     country: "Ukraine",
//     city:"Lviv",
//     street:"Luchakivska",
//     house: 1,
// }
// let adress2=JSON.stringify(adress);
// console.log(adress2);
//
// let house={
//     flour:"4th",
//     rooms:1,
//     area: 40,
// }
// let house2=JSON.stringify(house);
// console.log(house2);



// Завдання 12
// - взять json из задания 11 и превратить их обратно в объекты.
// let family={
//     father:"Volodymyr",
//     mother:"Galyna",
//     sister:"Natalia",
//     brother:"Ivan",
// }
// let family2=JSON.stringify(family);
// console.log(family2);
// let cloned_family=JSON.parse(family2);
// console.log(cloned_family);
//
// let user={
//     name:"Vitaliy",
//     age:30,
//     wife:"Tetiana",
//     cars:true,
// }
// let user2=JSON.stringify(user);
// console.log(user2);
// let cloned_user=JSON.parse(user2);
// console.log(cloned_user);
//
// let auto= {
//     brands: "vw",
//     model: "Passat",
//     year: 2016,
//     price: 20000,
// }
// let auto2=JSON.stringify(auto);
// console.log(auto2);
// let cloned_auto=JSON.parse(auto2);
// console.log(cloned_auto);
//
// let adress={
//     country: "Ukraine",
//     city:"Lviv",
//     street:"Luchakivska",
//     house: 1,
// }
// let adress2=JSON.stringify(adress);
// console.log(adress2);
// let cloned_adress=JSON.parse(adress2);
// console.log(cloned_adress);
//
// let house={
//     flour:"4th",
//     rooms:1,
//     area: 40,
// }
// let house2=JSON.stringify(house);
// console.log(house2);
// let cloned_house=JSON.parse(house2);
// console.log(cloned_house);



// Завдання 13
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
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
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(JSON.stringify(arrElement));
// }



// Завдання 14
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let arr=[{name: "Lviv", population:730000, country:"ukraine", region:"Galychyna"},
//     {name: "Wroclaw", population:641000, country:"poland", region:" Lower Silesian"},
//     {name: "Kyiv", population:2960000, country:"ukraine", region :"the center"},
//     {name: "Stuttgart", population:634000, country:"germany", region:"Baden-wurttemberg"},
// ]
// for (let arrElement of arr) {
//     console.log(JSON.stringify(arrElement));
// }



// Завдання 15
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
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
// let cars2=[];
// for (let i = 0; i < cars.length; i++) {
//     let Elements = cars[i];
//     let cloned_cars2=JSON.stringify(Elements);
//     cars2.push(cloned_cars2);
// }
// console.log(cars2);



// Завдання 16
// - Создать массив пользователей.
// У каждого пользователя обязательно должно быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users=[{name:"Oleg",age:29,skills:["html","css","js","mongo"]},
//     {name:"Nazar",age:22,skills:["html","css","js"]},
//     {name:"Taras",age:19,skills:["html","css"]},
//     {name:"Bogdan",age:35,skills:["java","js","python","c++"]}];
//
// for (let user of users) {
//     console.log("Name: "+ user.name);
//     for (let user1 of user.skills) {
//         console.log("Skills: "+ user1);
//     }
// }


// Завдання 17
// - Создать массив пользователей.
// У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
// let users=[{name:"Oleg",age:29,skills:["html","css","js","mongo"]},
//     {name:"Nazar",age:22,skills:["html","css","js"]},
//     {name:"Taras",age:19,skills:["html","css"]},
//     {name:"Bogdan",age:35,skills:["java","js","python","c++"]}];
// let users2=[];
// for (let user of users) {
//     for (let user1 of user.skills) {
//         users2.push(user1);
//     }
// }
// console.log(users2);



// Завдання 19
// - За допомогою 2х циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
// {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (let user of users) {
//     console.log(user);
//     for (let user1 of user.skills) {
//         console.log(user1);
//     }
// }



// Завдання 24
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// Завдання 24.1
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let result=[];
// for (let user of users) {
//     result.push(user.address);
// }
// console.log(result);



// Завдання 24.2
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// допомогою document.createElement. Всі данні в одному блоці.
// for (let user of users) {
//     let div=document.createElement("div");
//     document.body.appendChild(div);
//     let address="";
//     for (let userKey in user.address) {
//         address=address+" "+user.address[userKey];
//     }
//     console.log(div.innerText = "name: "+ user.name+ "  address: ("+address+")"+"  age" + user.age+"  status:"+user.status);
// }



// Завдання 24.3
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// // допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (let user of users) {
//     let div=document.createElement("div");
//     let p0=document.createElement("p");
//     let p1=document.createElement("p");
//     let p2=document.createElement("p");
//     let p3=document.createElement("p");
//
//     document.body.appendChild(div);
//     div.appendChild(p0);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(p3);
//
//     let address="";
//     for (let userKey in user.address) {
//         address=address+" "+user.address[userKey];
//     }
//
//     p0.innerText="Name: "+user.name;
//     p1.innerText="Address: " + address;
//     p2.innerText="Age: "+user.age;
//     p3.innerText="Status: "+user.status;
// }




// Завдання 24.4
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за 
// допомоги document.createElement, розділивши всі властивості по своїм блокам , 
// блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let user of users) {
//     let div=document.createElement("div");
//     let p0=document.createElement("p");
//     let p2=document.createElement("p");
//     let p3=document.createElement("p");
//     let addressUser = document.createElement("p");
//
//     document.body.appendChild(div);
//     div.appendChild(p0);
//     div.appendChild(p2);
//     div.appendChild(p3);
//     div.appendChild(addressUser);
//     let address="";
//     for (let userKey in user.address) {
//         console.log(userKey);
//         let values=document.createElement("div");
//         values.innerText = user.address[userKey];
//         addressUser.appendChild(values);
//     }
//     p0.innerText="Name "+user.name;
//     p2.innerText="Age: "+user.age;
//     p3.innerText="Status: "+user.status;
// }



// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address:
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [
// {user_id: 3, country: 'USA', city: 'Portland'},
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'},
// {user_id: 4, country: 'USA', city: 'Miami'},];
//
// for (let users of usersWithId) {
//     for (let cities of citiesWithId){
//         if (users.id===cities.user_id){
//            users.address=cities;
//         }
//     }
// }
// let usersWithCities=[];
// usersWithCities.push(usersWithId);
// console.log(usersWithCities);



// Завдання 100
// - створити в розмітці блок з id, class та текстом в середені.
// Зчитати окремо цей текст з селекторів по id , class та тегу id=document.getElementById(id);
//
// let id=document.getElementById("check");
// console.log(id);

// let class1=document.getElementsByClassName("rules");
// for (let i = 0; i < class1.length; i++) {
//     const classElement = class1[i];
//     console.log(classElement);
// }
//
// let tag=document.getElementsByTagName("h2");
// for (let tagElement of tag) {
//     console.log(tagElement);
// }




// Завдання 101
// - змінити цей текст використовуючи селектори id, class,  tag
// let id=document.getElementById("check");
// console.log(id.innerText = "Ok10");
//
// let class1=document.getElementsByClassName("rules");
// for (let i = 0; i < class1.length; i++) {
//     const classElement = class1[i];
//     console.log(classElement.innerText="ok10");
// }
//
// let tag=document.getElementsByTagName("h2");
// for (let tagElement of tag) {
//     tagElement.innerText="ok10";
//     console.log(tagElement);
// }



// Завдання 102
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let id=document.getElementById("check");
// id.style.width="50%";
// id.style.height="100px";
// console.log(id);
//
// let class1=document.getElementsByClassName("check");
// for (let i = 0; i < class1.length; i++) {
//     let classElement = class1[i];
//     classElement.style.width="20%";
//     classElement.style.height="150%";
//     console.log(classElement);
// }
//
// let tag=document.getElementsByTagName("h3");
// for (let i = 0; i < tag.length; i++) {
//     const tagElement = tag[i];
//     tagElement.style.width="100px";
//     tagElement.style.height="80px";
//     console.log(tagElement);
// }




// Завдання 103
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table=document.createElement("table");
// let tr=document.createElement("tr");
// let td1=document.createElement("td");
// let td2=document.createElement("td");
// let td3=document.createElement("td");
//
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// table.appendChild(tr);
// document.body.appendChild(table);



// Завдання 104
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table=document.createElement("table");
// for (let i = 0; i <10; i++) {
//     let tr=document.createElement("tr");
//     table.appendChild(tr);
//         for (let j = 0; j < 3; j++) {
//         let td=document.createElement("td");
//         tr.appendChild(td);
//     }
//     document.body.appendChild(table);
// }




// Завдання 105
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table=document.createElement("table");
// let i=0;
// while ( i <10) {
//     let tr=document.createElement("tr");
//     table.appendChild(tr);
//     i++;
//     for (let j = 0; j < 5; j++) {
//         let td=document.createElement("td");
//         tr.appendChild(td);
//     }
//     document.body.appendChild(table);
// }




// Завдання 106
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt
//
// let n=prompt();
// let m=prompt();
// let table=document.createElement("table");
// for (let i = 0; i <n; i++) {
//     let tr=document.createElement("tr");
//     table.appendChild(tr);
//     for (let j = 0; j < m; j++) {
//         let td=document.createElement("td");
//         tr.appendChild(td);
//     }
//     document.body.appendChild(table);
// }



// Завдання 108
// -Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// let all=document.querySelectorAll("[class]");
// console.log(all);
// for (let allElement of all) {
//     if (allElement.getAttribute("class")){
//         console.log(allElement);
//     }
// }



// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let pe=document.getElementsByTagName("p");
// for (let peElement of pe) {
//     peElement.innerText="hello oktenweb!"
//     console.log(peElement);
// }



// - знайти всі div та змінити ім колір на червоний
// let diva=document.getElementsByTagName("div");
// for (let divaElement of diva) {
//     divaElement.style.backgroundColor="red";
// }




// ====class===
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let h2=document.getElementsByTagName("h2");
// let content=document.getElementById("content");
// let ul=document.createElement("ul");
// for (let h2El of h2) {
//     let li=document.createElement("li");
//     li.innerText=h2El.innerText;
//     ul.appendChild(li);
// }
// content.appendChild(ul);




// -Є масив:
// let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let wrap=document.createElement("div");
// wrap.id="wrap";
// for (let i = 0; i <rules.length; i++) {
//     let rule = rules[i];
//     let div=document.createElement("div");
//     let h2=document.createElement("h2");
//     let p=document.createElement("p");
//     div.className=`rules rule${i+1}`;
//     h2.innerText=rule.title;
//     p.innerText=rule.body;
//     div.appendChild(h2);
//     div.appendChild(p);
//     wrap.appendChild(div);
// }
// document.body.appendChild(wrap);


