// - создать массив с 20 числами.
// let arr = [23, 5, 123, 62, 235, 1, 40, 2436, -58, 74, 54, 3, 90, 33, 568, 76, 10, 48, 45, 2];
// console.log(arr);



// -- при помощи метода sort и колбека  отсортировать массив.
// let sort=arr.sort((a,b)=>{
//    return a-b
// })
// console.log(sort);




// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sort=arr.sort((a,b)=>{
//    return b-a
// })
// console.log(sort);




// -- при помощи filter получить числа кратные 3
// let filter = arr.filter((value) => {
//         if (value % 3 === 0){
//             return value;
//         }
// })
// console.log(filter);




// -- при помощи filter получить числа кратные 10
// let filter=arr.filter(value => {
//     if (value%10===0){
//         return value;
//     }
// })
// console.log(filter);




// -- перебрать (проитерировать) массив при помощи foreach()

// let x=arr.forEach(value => {
//     console.log(value);
// })




// -- перебрать массив при помощи map() и получить новый массив в котором все значения
// будут в 3 раза больше
// let map = arr.map((value) => {
//     value=value*3;
//     return value;
// });
// console.log(map);




// - создать массив со словами на 15-20 элементов.
// let names=["ivan","karina", "oksana","nazar","taras","petro","nastia","oleg","rostyslav",
// "vitaliy","tetiana","kyrylo","oleksiy","natalia","anastasia","maria","ira"];



// // -- отсортировать его по алфавиту в восходящем порядке.
// let sort=names.sort((a, b) => {
//     if (a>b){
//         return 1;
//     }
//     return-1;
// })
// console.log(sort);



// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sort=names.sort((a, b) => {
//     if (a>b){
//         return-1;
//     }
//     return 1;
// })
// console.log(sort);



// -- отфильтровать слова длиной менее 4х символов
// let filter=names.filter(value => {
//     if (value.length<4){
//         return value;
//     }
// })
// console.log(filter);



// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут
//  со знаком "!" в конце
// let map=names.map(value => {
//     value=value+"!";
//     return value;
// })
// console.log(map);




// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true} ];


// - відсортувати його за віком (зростання , а потім окремо спадання)
// let newUsers1 = JSON.parse(JSON.stringify(users));
// let sort1=newUsers1.sort((a,b) => {
//     return b.age-a.age ;
// })
// console.log(users);
// console.log(sort1);
//
// let newUsers2 = JSON.parse(JSON.stringify(users));
// let sort2=newUsers2.sort((a,b) => {
//     return a.age-b.age;
// })
// console.log(sort2);



// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let newUsers1 = JSON.parse(JSON.stringify(users));
// let sort1 =newUsers1.sort((a,b)=>{
//     return  a.name.length-b.name.length;
// })
// console.log(sort1);
//
// let newUsers2 = JSON.parse(JSON.stringify(users));
// let sort2 =newUsers2.sort((a,b)=>{
//     return  b.name.length-a.name.length;
// })
// console.log(sort2);



// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// - відсортувати його за індентифікатором
// let newUsers=JSON.parse(JSON.stringify(users));
// let map=newUsers.map((value,index) => {
//     value.id=index;
//     return value;
// })
// console.log(map);
// console.log(users);
//
// let sortNewUsers=newUsers.sort((a,b)=>{
//     return  b.id-a.id;
// })
// console.log(sortNewUsers);




// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculate(a,b,x,callback){
//     return  callback(a,b,x);
// }
// let result=calculate(5,2,"/",(a,b,x)=>{
//     if (x === "-") {
//         return a - b;
//     } else if (x === "+") {
//         return a + b;
//     } else if (x === "*") {
//         return a * b;
//     } else if (x === "/") {
//         return a / b
//     }
// });
// console.log(result);




// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculate(a, b, c, x, callback) {
//     return callback(a, b, c, x);
// }
//
// let result = calculate(5, 2, 10, "+", (a, b, c, x) => {
//     if (x === "-") {
//         return a - b - c;
//     } else if (x === "+") {
//         return a + b + c;
//     } else if (x === "*") {
//         return a * b * c;
//     } else if (x === "/") {
//         return a / b / c;
//     }
// });
// console.log(result);



// =====================================================================================================================
// =============КЛАССНАЯ РАБОТА=================
// =====================================================================================================================
// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let filter=cars.filter(value => {
//     if (value.volume>3){
//         return value;
//     }
// })
// console.log(filter);


// - двигун = 2л
// let filter=cars.filter(value => {
//     if (value.volume===2){
//         return value;
//     }
// })
// console.log(filter);



// - виробник мерс
// let filter=cars.filter(value => {
//     if (value.producer==="mercedes"){
//         return value;
//     }
// })
// console.log(filter);



// - двигун більше 3х літрів + виробник мерседес
// let filter=cars.filter(value => {
//     if (value.producer==="mercedes" && value.volume>3){
//         return value;
//     }
// })
// console.log(filter);



// - двигун більше 3х літрів + виробник субару
// let filter=cars.filter(value => {
//     if (value.producer==="subaru" && value.volume>3){
//         return value;
//     }
// })
// console.log(filter);



// - сили більше ніж 300
// let filter=cars.filter(value => {
//     if (value.power>300){
//         return value;
//     }
// })
// console.log(filter);



// - сили більше ніж 300 + виробник субару
// let filter=cars.filter(value => {
//     if (value.producer==="subaru" && value.power>300){
//         return value;
//     }
// })
// console.log(filter);



// - мотор серіі ej
// let filter=cars.filter(value => value.engine.includes("ej"));
// console.log(filter);



// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filter=cars.filter(value => {
//     if (value.producer==="subaru" && value.power>300 && value.engine.includes("ej")){
//         return value;
//     }
// })
// console.log(filter);



// - двигун меньше 3х літрів + виробник мерседес
// let filter=cars.filter(value => {
//     if (value.producer==="mercedes" && value.volume<3){
//         return value;
//     }
// })
// console.log(filter);



// - двигун більше 2л + сили більше 250
// let filter=cars.filter(value => {
//     if (value.volume>2 && value.power>250){
//         return value;
//     }
// })
// console.log(filter);



// - сили більше 250  + виробник бмв
// let filter=cars.filter(value => {
//     if (value.power>250 && value.producer==="bmw"){
//         return value;
//     }
// })
// console.log(filter);





// - взять слдующий массив
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Lychakivska', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Gorodotska', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Patona', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Liubinska', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Struiska', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Naukova', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Zelena', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Chormovola', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Lypynskogo', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Vygovskogo', number: 121}}];
// -- отсортировать его по id пользователей
// let sort=usersWithAddress.sort((a,b)=>{
//     return a.id-b.id
// })
// console.log(sort);



// -- отсортировать его по id пользователей в обратном опрядке
// let sort=usersWithAddress.sort((a,b)=>{
//     return b.id-a.id
// })
// console.log(sort);



// -- отсортировать его по возрасту пользователей
// let sort=usersWithAddress.sort((a,b)=>{
//     return a.age-b.age
// })
// console.log(sort);



// -- отсортировать его по возрасту пользователей в обратном порядке
// let sort=usersWithAddress.sort((a,b)=>{
//     return b.age-a.age
// })
// console.log(sort);



// -- отсортировать его по имени пользователей
// let sort=usersWithAddress.sort((a,b)=>{
//     if (b.name>a.name)
//     return -1
// })
// console.log(sort);



// -- отсортировать его по имени пользователей в обратном порядке
// let sort=usersWithAddress.sort((a,b)=>{
//     if (b.name>a.name){
//         return 1
//     }
//     return -1
// })
// console.log(sort);


// -- отсортировать его по названию улицы  в алфавитном порядке
// let sort=usersWithAddress.sort((a,b)=>{
//     if (b.address.street>a.address.street)
//         return -1
// })
// console.log(sort);



// -- отсортировать его по номеру дома по возрастанию
// let sort=usersWithAddress.sort((a,b)=>{
//       return  a.address.number-b.address.number
// })
// console.log(sort);



// -- отфильтровать (оставить) тех кто младше 30
// let filter=usersWithAddress.filter(value => {
//     if (value.age<30){
//         return value
//     }
// })
// console.log(filter);



// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filter=usersWithAddress.filter(value => {
//     if (!value.status){
//         return value
//     }
// })
// console.log(filter);



// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filter=usersWithAddress.filter(value => {
//     if (!value.status && value.age<30){
//         return value
//     }
// })
// console.log(filter);



// -- отфильтровать (оставить) тех у кого номер дома четный
// let filter=usersWithAddress.filter(value => {
//     if (value.address.number%2===0){
//         return value
//     }
// })
// console.log(filter);



// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
// але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// let cars = [
//     {model:"vw",power: 120,carOwner:{name: "ivan", age:26,experience:4}, year: 2013, price:14000},
//     {model:"audi",power: 150,carOwner:{name: "petro", age:28,experience:7}, year: 2010, price:15000},
//     {model:"mercedes",power: 180,carOwner:{name: "taras", age:32,experience:10}, year: 2015, price:20500},
//     {model:"toyota",power: 110,carOwner:{name: "vitaliy", age:33,experience:12}, year: 2011, price:9000},
//     {model:"renault",power: 80,carOwner:{name: "bogdan", age:22,experience:1}, year: 2006, price:7000},
//     {model:"chevrolet",power: 105,carOwner:{name: "nazar", age:25,experience:5}, year: 2008, price:7500},
//     {model:"ford",power: 130,carOwner:{name: "oleg", age:27,experience:3}, year: 2018, price:17000},
//     {model:"hyundai",power: 116,carOwner:{name: "oskar", age:39,experience:17}, year: 2014, price:13000},
//     {model:"honda",power: 126,carOwner:{name: "david", age:41,experience:19}, year: 2012, price:11000},
//     {model:"mazda",power: 96,carOwner:{name: "danylo", age:35,experience:17}, year: 2009, price:7000},
//     {model:"lexus",power: 150,carOwner:{name: "artur", age:39,experience:16}, year: 2019, price:27000},
//     {model:"nissan",power: 120,carOwner:{name: "steffan", age:21,experience:3}, year: 2010, price:9500}];
//
// let newCars = [];
// for (let i = 0; i < cars.length; i = i + 2) {
//     let car = cars[i];
//     newCars.push(car);
// }
//
// let x = newCars.map((value) => {
//     value.power = value.power * 1.1;
//     value.price = value.price * 1.05;
//     if (value.carOwner.experience < 5 && value.carOwner.age > 25)
//         value.carOwner.experience = value.carOwner.experience + 1
//     return value;
// });
// console.log(x)
//
// let sum = x.reduce(function (acc, value) {
//     return acc + value.price;
// }, 0);
// console.log("Сума, потрібна, для ремонту всіх авто: " + sum);
