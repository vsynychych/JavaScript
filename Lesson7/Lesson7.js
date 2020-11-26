// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
// let text=document.createElement("div");
// text.id="text";
// text.innerText="ok10";
// document.body.appendChild(text);
//
//
// let div=document.createElement("div");
// let button=document.createElement("button");
// document.body.appendChild(div);
// div.appendChild(button);
// button.innerText="hide";
// //
// // button.onclick=()=>{
// //         text.style.display="none";
// // }
// //
// // -------------------------------------------
// button.onclick=()=>{
//         if (text.style.display==="block"){
//             text.style.display="none"
//         }else {text.style.display="block"}
// }



// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let div=document.createElement("div");
// let button=document.createElement("button");
// document.body.appendChild(div);
// div.appendChild(button);
// button.innerText="hide";
//
// button.onclick=()=>{
//         button.style.display="none";
// }





// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//
// let button=document.getElementById("MyButton");
// console.log(button);
//
// button.onclick=(ev)=>{
//     let MyInput=document.getElementById("MyInput");
//     let val=MyInput.value;
//     if (val>=18){
//         alert("Welcome");
//     }else {
//         alert("Error");
//     }
// }





// - Создайте меню, которое раскрывается/сворачивается при клике
// let list=document.getElementById("list");
// let menu=document.getElementById("menu");
// let xxx=false;
//
// menu.onclick=()=>{
//     if (xxx){
//         list.style.display="none";
//         xxx=false;
//     }else {list.style.display="block";
//     xxx=true;
//     }
// }




// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.//
// let comments=[
//     {title : 'lorem1', body:'1 lorem '},
//     {title : 'lorem2', body:'2 lorem ipsum '},
//     {title : 'lorem3', body:'3 lorem ipsum dolo '},
//     {title : 'lorem4', body:'4 lorem ipsum dolo sit '},
//     {title : 'lorem5', body:'5 lorem ipsum dolo sit ameti'}];
//
// let comm=document.createElement("div");
// comm.id="MyTitle";
//
// comments.forEach(el=>{
// let div=document.createElement("div");
// let p=document.createElement("p");
// let h2=document.createElement("h2");
// let button=document.createElement("button");
//
// h2.innerText=el.title;
// p.innerText=el.body;
// button.innerText="Hide";
// let x=false;
//
// button.onclick=()=>{
//     if (x){
//         p.style.display="none";
//         x=false;
//     }else {p.style.display="block";
//     x=true;
//     }
// }
// div.appendChild(h2);
// div.appendChild(p);
// div.appendChild(button);
// document.body.appendChild(div);
// })






// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1=document.getElementById("form1");
// let form2=document.getElementById("form2");
// let input1=document.getElementById("input1");
// let input2=document.getElementById("input2");
// let input3=document.getElementById("input3");
// let input4=document.getElementById("input4");
// let but=document.getElementById("button");
//
// but.onclick=()=>{
//     console.log(document.forms.form1.input1.value);
//     console.log(document.forms.form1.input2.value);
//     console.log(document.forms.form2.input3.value);
//     console.log(document.forms.form2.input4.value);
// }




// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.


// function table(tr, td, tag) {
//     let table = document.createElement("table");
//     for (let i = 0; i < tr; i++) {
//         let tr = document.createElement("tr")
//         for (let j = 0; j < td; j++) {
//             let td = document.createElement("td");
//             tr.appendChild(td);
//             td.innerText=`${i}${j}`;
//         }
//         table.appendChild(tr);
//     }
//     let x=document.createElement(tag)
//     x.appendChild(table);
//     document.body.appendChild(x);
// }
//
// table(3, 5, "div");






// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//  (Додатковачастина для завдання)






// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.






// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку






// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку





// - создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте





// - взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ








// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к
// следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и
// выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне






// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан