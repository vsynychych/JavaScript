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
let form = document.getElementById("form1");
let text=document.getElementById("area0");
// let input1=document.getElementById("input1");
// let input2=document.getElementById("input2");
// let input3=document.getElementById("input3");
// let input4=document.getElementById("input4");
// let input5=document.getElementById("input5");
// let input6=document.getElementById("input6");
text.value=localStorage.getItem("text");
// input1.value=localStorage.getItem("input1");
// input2.value=localStorage.getItem("input2")



text.oninput=(ev)=>{
    console.log(ev.target.value);
    localStorage.setItem("text",ev.target.value)
}
// input1.oninput=(ev)=>{
//     localStorage.setItem("input1",ev.target.value)
// }

// function set(tag){
//     // console.log(tag);
//
//     text.oninput=(ev)=>{
//     console.log(ev.target.value);
//     localStorage.setItem("ext",ev.target.value)
// }
// }
// set(form);

// element.value=localStorage.getItem("text")
// function get(){
//     let xxx=
// }
// get();
//


// let form = document.getElementById("form1");
//
// function set(byId) {
//     byId.oninput = () => {
//         console.log(byId);
//         for (let element of byId) {
//             console.log(element);
//             let id = element.id
//             console.log(id);
//             let val = element.value
//             console.log(val);
//             localStorage.setItem(id, val)
//             if (element.type === "checkbox" || element.type === "radio")
//                 element.checked
//                     ? element.value = true
//                     : element.value = false
//         }
//     }
// }
//
// set(form);





// let form = document.getElementById("form1");
//
// function set(byId) {
//     byId.oninput = () => {
//         console.log(byId);
//     }
//     get();
// }
// set(form);
//
// function get(){
//     for (let element of form ){
//         let id=element.id;
//         let val=element.value;
//         localStorage.setItem(id, val);
//     }
// }





// set(form);
// let text=document.getElementById("area");
// text.value=localStorage.getItem("text")
// text.oninput=(ev)=>{
//     console.log(ev.target.value);
//     localStorage.setItem("text",ev.target.value)
//         }
//     }
// }
//
// set(form);

// localStorage.clear()



// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//




// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все
// необходимые инпуты для редактирования, которые уже заполнены данными объекта