//
// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// let text=document.getElementById("area");
// text.value=localStorage.getItem("text")
// text.oninput=(ev)=>{
//     console.log(ev.target.value);
//     localStorage.setItem("text",ev.target.value)
// }






// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// let form = document.getElementById("form1");
// let area = document.getElementById("area0");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");
// let input4 = document.getElementById("input4");
// let input5 = document.getElementById("input5");
// let input6 = document.getElementById("sel6");
//
// function set(byId, tag) {
//     tag.value = localStorage.getItem(tag);
//     tag.oninput = (ev) => {
//         console.log(ev.target.value);
//         localStorage.setItem(tag, ev.target.value)
//
//         byId.oninput = () => {
//             for (let element of byId) {
//                 console.log(element);
//                 let id = element.id
//                 console.log(id);
//                 let val = element.value
//                 console.log(val);
//                 localStorage.setItem(id, val)
//                 if (element.type === "checkbox" || element.type === "radio")
//                     element.checked
//                         ? element.value = true
//                         : element.value = false
//                 if (localStorage.value==="true"){
//                     element=element.setAttribute("checkbox","checked")
//                 }
//             }
//         }
//     }
// }
//
// set(form, area);
// set(form, input1);
// set(form, input2);
// set(form, input3);
// set(form, input4);
// set(form, input5);
// set(form, input6);






// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// let left= document.getElementById("left1");
// let right=document.getElementById("right2");
// let area=document.getElementById("area");
// let save=document.getElementById("saveT");
//
//
// save.onclick = (ev) => {
//     localStorage.setItem(localStorage.length + 1, area.value);
// }
//
// left.onclick = () => {
//     let index;
//     for (let key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === area.value) {
//                 index = key;
//             }
//         }
//     }
//     if (index === "1") {
//         return ;
//     }
//     area.value = localStorage.getItem(+index - 1);
// }
//
// right.onclick = () => {
//     let index2;
//     for (let key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === area.value) {
//                 index2 = key;
//             }
//         }
//     }
//     if (index2 === localStorage.length.toString) {
//         return;
//     }
//     area.value = localStorage.getItem(+index2 + 1);
// }
//
// function set(tag) {
//     tag.value = localStorage.getItem(tag);
//     tag.oninput = (ev) => {
//         console.log(ev.target.value);
//         localStorage.setItem(tag, ev.target.value)
//     }
// }
// set(area)





// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все
// необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
//
// let content = document.getElementById("content");
// let submit=document.getElementById("input7");
// let form=document.forms.form0;
//
// submit.onclick=(ev)=> {
//     let person={};
//     ev.preventDefault();
//     for (let i = 0; i < form.children.length; i++) {
//         const element = form.children[i];
//         if (element.name && element.type!=="submit") {
//             person[element.name]=element.value;
//         }
//     }
//     person.id=Math.random();
//     // console.log(person);
//     saveLS(person)
//
//
// }
// let arr="arr";
// function saveLS(user){
//     if (localStorage.hasOwnProperty(arr)){
//         let array=JSON.parse(localStorage.getItem(arr));
//         console.log(array);
//         let find=array.find(value => value.id===user.id)
//         if (find){
//             let filter=array.filter(value => value.id!==user.id);
//             filter.push(user)
//             localStorage.setItem(arr,JSON.stringify(array));
//         }
//         array.push(user);
//         localStorage.setItem(arr,JSON.stringify([user]))
//     } else {
//         localStorage.setItem(arr, JSON.stringify([user]))
//     }
//
//
// }
//
// function get(){
//     if (localStorage.hasOwnProperty(arr)){
//         let userParse=JSON.parse(localStorage.getItem(arr));
//         for (let user of userParse) {
//             content.appendChild(create(user));
//         }
//     }
// }
// get();
//
//
// function create(user){
//     let divElement=document.createElement("div");
//     divElement.style.backgroundColor="green";
//     divElement.style.width="200px";
//     divElement.style.float="left";
//     for (let key in user) {
//         let p=document.createElement("p");
//         p.innerText= key +" - " +user[key];
//         divElement.appendChild(p);
//     }
//     return divElement;
// }
//
//
//

// localStorage.clear();



