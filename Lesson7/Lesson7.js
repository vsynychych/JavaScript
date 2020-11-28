
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
//
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
//
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
//
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
//
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
//
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
//
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
//  (Додаткова частина для завдання)
//
// let form = document.createElement("form");
// let tr = document.createElement("input");
// let td = document.createElement("input");
// let text = document.createElement("input");
// let button = document.createElement("button");
// form.id = "MyForm";
// tr.id = "input1";
// td.id = "input2";
// text.id = "input3";
// form.appendChild(tr);
// form.appendChild(td);
// form.appendChild(text);
// form.appendChild(button);
// document.body.appendChild(form);
// button.innerText = "OK";
//
// button.onclick = () => {
//     let tr1 = document.forms.MyForm.input1.value;
//     let td1 = document.forms.MyForm.input2.value;
//     let text = document.forms.MyForm.input3.value;
//     let table = document.createElement("table");
//     let div2 = document.createElement("div")
//     for (let i = 0; i < tr1; i++) {
//         let tr = document.createElement("tr")
//         for (let j = 0; j < td1; j++) {
//             let td = document.createElement("td");
//             tr.appendChild(td);
//             td.innerText = text;
//         }
//         table.appendChild(tr);
//     }
//     div2.appendChild(table);
//     document.body.appendChild(div2);
// }



// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let arrImg = [
//     {id: 1, url: "Lviv/Lviv_1.jpg"},
//     {id: 2, url: "Lviv/Lviv_2.jpg"},
//     {id: 3, url: "Lviv/Lviv_3.jpg"},
//     {id: 4, url: "Lviv/Lviv_4.jpg"},
//     {id: 5, url: "Lviv/Lviv_5.jpg"},
// ];
// let arrows = [
//     {id1: 1, url: "Lviv/Left.png"},
//     {id2: 2, url: "Lviv/Right.png"}
// ]
// let content = document.getElementById("content");
// let img = document.createElement("img");
// let left = document.createElement("img");
// let right = document.createElement("img");
// let aLeft = document.createElement("a");
// let aRight = document.createElement("a");
// aLeft.href = "#";
// aRight.href = "#";
//
// let index = 0;
//
// left.width = 100;
// left.src = arrows[0].url;
//
// img.width = 800;
// img.height = 540;
// img.src = arrImg[index].url;
//
// right.width = 100;
// right.src = arrows[1].url;
//
// content.appendChild(aLeft);
// aLeft.appendChild(left);
// content.appendChild(img);
// content.appendChild(aRight);
// aRight.appendChild(right);
//
// left.onclick = () => {
//     if (index - 1 < 0) {
//         index = arrImg.length - 1
//     } else {
//         index = index - 1
//     }
//     img.src = arrImg[index].url;
// }
//
// right.onclick = () => {
//     if (index + 1 > arrImg.length - 1) {
//         index = 0;
//     } else {
//         index = index + 1
//     }
//
//     img.src = arrImg[index].url;
// }




// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//
// let arr=["shit","bullshit","bastard","fuck","stupid","freak"];
//
// let form=document.createElement("form");
// form.id="MyForm";
// let input= document.createElement("input");
// input.id="MyInput"
// input.type="text";
// let button=document.createElement("button");
// button.innerText="OK";
//
//
// form.appendChild(input);
// form.appendChild(button);
// document.body.appendChild(form);
//
// button.onclick=()=>{
//     arr.forEach(el=>{
//         let x=document.forms.MyForm.MyInput.value;
//         if (x===el){
//             alert("WARNING!!!");
//         } stop();
//     })
// }





// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
// let arr = ["shit", "bullshit", "bastard", "fuck", "stupid", "freak"];
//
// let form = document.createElement("form");
// form.id = "MyForm";
// let input = document.createElement("input");
// input.id = "MyInput"
// input.type = "text";
// let button = document.createElement("button");
// button.innerText = "OK";
//
// form.appendChild(input);
// form.appendChild(button);
// document.body.appendChild(form);
//
// button.onclick = () => {
//     let x = document.forms.MyForm.MyInput.value;
//     arr.forEach(el => {
//         let xxx = x.split(" ");
//         xxx.forEach(ell => {
//             if (ell === el) {
//                 alert("WARNING")
//             }
//             stop();
//         })
//     })
// }





// - создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем
// заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// let h2=document.getElementsByTagName("h2");
// let content=document.getElementById("content");
// let wrap=document.getElementById("wrap");
// let ul=document.createElement("ul");
// for (let i = 0; i < h2.length; i++) {
//     let li=document.createElement("li");
//     let a=document.createElement("a");
//     let anchor="anchor"+i;
//     a.href="#"+anchor;
//     h2[i].setAttribute("id",anchor);
//     a.innerText=h2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);
// content.style.width="30%";
// wrap.style.width="70%"
// content.style.float="left";
// wrap.style.float="right";




// - взять массив пользователей
//
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
//
// function newUsers(arr) {
//     let string = document.createElement("div")
//     arr.forEach(el => {
//         let div = document.createElement("div");
//         div.innerText = JSON.stringify(el);
//         string.appendChild(div);
//     })
//     return string;
// }
//
// let x = newUsers(usersWithAddress);
// // console.log(x);
//
// let content = document.getElementById("content");
// let users = document.createElement("div");
// users.appendChild(x);
// content.appendChild(users);
//
// let input1 = document.createElement("input");
// let input2 = document.createElement("input");
// let input3 = document.createElement("input");
//
// input1.type = "checkbox";
// input2.type = "checkbox";
// input3.type = "checkbox";
//
// let label1 = document.createElement("label");
// let label2 = document.createElement("label");
// let label3 = document.createElement("label");
//
// label1.innerText = "Users status false";
// label2.innerText = "Users старше 29 лет";
// label3.innerText = "Users с города киев";
//
// let button = document.createElement("button");
// button.innerText = "OK";
//
// content.appendChild(input1);
// content.appendChild(label1);
// content.appendChild(input2);
// content.appendChild(label2);
// content.appendChild(input3);
// content.appendChild(label3);
// content.appendChild(button);
//
// button.onclick = () => {
//     let newArr = JSON.parse(JSON.stringify(usersWithAddress));
//     if (input1.checked)
//         newArr = newArr.filter(value => value.status === false);
//
//     if (input2.checked)
//         newArr = newArr.filter(value => value.age >= 29);
//
//     if (input3.checked)
//         newArr = newArr.filter(value => value.address.city === 'Kyiv');
//
//     users.innerText="";
//     users.appendChild(newUsers(newArr));
// }