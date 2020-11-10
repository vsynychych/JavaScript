// =====class=======
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let header=document.getElementById("main_header");
// header.style.color="green";


// -- робить шириниу елементу ul 400 пікселів
// let ul=document.getElementsByTagName("ul");
// for (let i = 0; i < ul.length; i++) {
//     const ulElement = ul[i];
//     ulElement.style.width="400px";
//     console.log(ulElement);
// }


// -- робить шириниу всіх елементів з класом linkList шириною 50%
// let link=document.getElementsByClassName("linkList");
// console.log(link);
// for (let i = 0; i < link.length; i++) {
//     const linkElement = link[i];
//     linkElement.style.width="50%";
//     console.log(linkElement);
// }


// -- отримує текст який зберігається в елементі з класом listElement2
// let list2=document.getElementsByClassName("listElement2");
// for (let i = 0; i < list2.length; i++) {
//     const list2El = list2[i];
//     console.log(list2El);
// }


// -- отримує всі елементи li та змінює ім колір фону на сірий
// let li=document.getElementsByTagName("li");
// for (let i = 0; i < li.length; i++) {
//     const liElement = li[i];
//     liElement.style.backgroundColor="silver";
//     console.log(liElement);
// }


// -- отримує всі елементи 'a' та додає їм клас anchor



// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
// let ashka=document.getElementsByTagName("a");
// for (let i = 0; i < ashka.length; i++) {
//     let ashkaElement = ashka[i];
//     console.log(ashkaElement);
//
//     if (ashkaElement.text==="link3"){
//         ashkaElement.style.fontSize="40px";
//     }
// }


// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a




// let ashka=document.getElementsByTagName("a");
// for (let i = 0; i < ashka.length; i++) {
//     const ashkaElement = ashka[i];
//     console.log(ashkaElement);
// }




// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub=document.getElementsByClassName("sub-header");
// for (let i = 0; i < sub.length; i++) {
//     const subElement = sub[i];
//     subElement.style.backgroundColor=prompt();
// }


// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
// let sub=document.getElementsByClassName("sub-header");
// for (let i = 0; i < sub.length; i++) {
//     let subElement = sub[i];
//     if (subElement==="content 2 segment"){
//         subElement.style.color=prompt();
//     }
// }


// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// Текст отримати з prompt()
// let content1=document.getElementsByClassName("content_1");
// for (let i = 0; i < content1.length; i++) {
//     const content1El = content1[i];
//     content1El.innerText=prompt();
// }


// -- отримати елементи p та змінити їм padding на довільне значення
// let pe=document.getElementsByTagName("p");
// for (let i = 0; i < pe.length; i++) {
//     const peElement = pe[i];
//     console.log(peElement);
//     peElement.style.padding="20px"
// }


// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let text=document.getElementsByClassName("text2");
// console.log(text);
// for (let i = 0; i < text.length; i++) {
//     const textElement = text[i];
//     textElement.innerText="OK10";
// }