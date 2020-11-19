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
// -- наисать функцию калькулятора с 3мя числами и колбеком

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
//     {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
//
//
//
// - взять слдующий массив
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный
