// Завдання1
// //- створити функцію яка виводить масив
// let  arr=[true, 16,-5,"ok10",9,false,329,0,"name"];
// function first(arr){
//     console.log(arr);
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// first(arr);



//Завдання2
//- створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попвередню функцію.+
// function arr2(length,min,max){
//     let arr=[];
//     for (let i = 0; i < length; i++) {
//     arr.push(Math.round(Math.random()*(max-min)+min))
//     }
// return arr;
// }
// const x=arr2(25,0,150);
// first(x);



// Завдання3
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function num(a,b,c){
//     let min;
//     if (a<=b && a<=c){min=a}
//     if (b<=a && b<=c){min=b}
//     if (c<=a && c<=b){min=c}
//     console.log(min);
//     return min;
// }
// let x = num(30,5,-5);
// console.log(x);



// Завдання4
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function num(a,b,c){
//     let max;
//     if (a>=b && a>=c){max=a}
//     if (b>=a && b>=c){max=b}
//     if (c>=a && c>=b) {max=c}
//     console.log(max);
//     return max;
// }
// let x =num(52,30,68);
// console.log(x);



// Завдання5
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function array(){
//     let max=arguments[0];
//     let min=arguments[0];
//     for (const argument of arguments) {
//         if (argument>max) max=argument;
//         if (argument<min) min=argument;
//     }
//     console.log(max);
//     return min;
// }
// let x = array(34,76,39,64,5,4,554);
// console.log(x);



// Завдання6
// - створити функцію яка виводить масив
// let arr=[23,-53,12,23,5,-21,7,87,157];
// function array(){
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// array();




// Завдання7
// - створити функцію яка повертає найбільше число з масиву
// function array(){
//     let arr=[23,-53,12,23,5,-21,7,87,189];
//     let max=[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>max) max=arr[i];
//     }
//     console.log(max);
//     return max;
// }
// let x= array();
// console.log(x);
// ------------------------------------------------------
// function arr(array){
//     let max=array[0];
//     for (let arrayElement of array) {
//         if (max<arrayElement) max=arrayElement;
//     }
//     return max;
// }
// let x = arr([23,43,6,12,32,123]);
// console.log(x);



// Завдання8
// - створити функцію яка повертає найменьше число з масиву
// function array() {
//     let arr = [23, -53, 12, 23, 5, -21, 7, 87, 189];
//     let min = [0];
//     for (let number of arr) {
//         if (number < min) min=number;
//     }
//     return min;
// }
// let x = array();
// console.log(x);



// Завдання9
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function arr(array){
//     let sum=0;
//         for (let arrayElement of array) {
//             sum+=arrayElement;
//         }
//     return sum;
// }
// let x = arr([76,5,1,24]);
// console.log(x);



// Завдання10
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arr(array){
//     let sum=0;
//     for (let i = 0; i < array.length; i++) {
//         sum=sum+array[i];
//     }
//     return sum/array.length;
// }
// let x = arr([24,5,1,10]);
// console.log(x);



// Завдання11
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості обєктів в масиві
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
// }];
//
// function arr(Object){
//     let number=0;
//     for (let objectElement of Object)
//         if (typeof objectElement==="object"){
//             number++;
//         }
//             return number;
// }
// let x = arr(users);
//     console.log(x);



// Завдання12
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
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
// }];
//
// function arr(Object){
//     let number=0;
//     for (let objectElement of Object) {
//         if (typeof objectElement === "object") {
//             for (let key in objectElement) {
//                 number++;
//             }
//         }
//     }
//     return number;
// }
// let x = arr(users);
// console.log(x);




// Завдання13
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат [3,5,7,9]
//
// function arr(arr1,arr2){
//     let result=[];
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i]+arr2[i]);
//     }
//     return result;
// }
// let resultArr=arr([1,2,3,4],[2,3,4,5]);
// console.log(resultArr);



// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]



// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"
// function text (){
//     let div =document.createElement("div");
//     document.body.appendChild(div);
//     div.innerText="Hello owu";
// }
// text();


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function text (type,txt){
//     let tag =document.createElement(type);
//     document.body.appendChild(tag);
//     tag.innerText=txt;
// }
// text("div","Hello owu")


// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
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


//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок