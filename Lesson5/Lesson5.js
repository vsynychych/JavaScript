// ==============================================
//     -  Створити функцію конструктор для обєкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
// ==============================================


// -a
// function Tag(titleOfTag, action, attrs){
//     this.titleOfTag=titleOfTag;
//     this.action=action;
//     this.attrs=attrs;
// }
// let title="<a>";
// let actions= "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. " +
//     "В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. " +
//     "Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. " +
//     "При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.";
// let arr=[
//     { titleOfAttr:'accesskey', actionOfAttr:"Активация ссылки с помощью комбинации клавиш."},
//     { titleOfAttr:'coords', actionOfAttr:"Устанавливает координаты активной области."},
//     { titleOfAttr:'download', actionOfAttr:"Предлагает скачать указанный по ссылке файл."},
//     { titleOfAttr:'href', actionOfAttr:"Задает адрес документа, на который следует перейти."},
//     { titleOfAttr:'hreflang', actionOfAttr:"Идентифицирует язык текста по ссылке"},
//     { titleOfAttr:'name', actionOfAttr:"Устанавливает имя якоря внутри документа."}
//     ];
// let x=new Tag(title,actions,arr);
// console.log(x);




// -div
// function Tag(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//     let title="<div>";
//     let actions="Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью " +
//         "изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый " +
//         "раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут " +
//         "class или id с именем селектора.\n Как и при использовании других блочных элементов, содержимое тега" +
//         " <div> всегда начинается с новой строки. После него также добавляется перенос строки."
//     let arr=[
//         { titleOfAttr:'align', actionOfAttr:"Задает выравнивание содержимого тега <div>."},
//         { titleOfAttr:'title', actionOfAttr:"Добавляет всплывающую подсказку к содержимому."}
//     ];
// let x=new Tag(title,actions,arr);
// console.log(x);



// -h1
// function Tag(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//     let title="<h1>";
//     let actions="HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции," +
//         " расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня," +
//         " а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию," +
//         " заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня" +
//         " по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, " +
//         "а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него" +
//         " добавляется пустое пространство."
//     let arr=[
//         { titleOfAttr:'align', actionOfAttr:"Определяет выравнивание заголовка."}
//     ];
// let x=new Tag(title,actions,arr);
// console.log(x);



// -span
// function Tag(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//     let title="<span>";
//     let actions="Тег <span> предназначен для определения строчных элементов документа. " +
//         "В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить " +
//         "часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) " +
//         "можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для " +
//         "него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу" +
//         " стилей, а для тега добавить атрибут class или id с именем селектора."
//     let arr=[
//         { titleOfAttr:'accesskey', actionOfAttr:"Позволяет получить доступ к элементу с помощью заданного сочетания клавиш."},
//         { titleOfAttr:'class', actionOfAttr:"Определяет имя класса, которое позволяет связать тег со стилевым оформлением."},
//         { titleOfAttr:'contenteditable', actionOfAttr:"Сообщает, что элемент доступен для редактирования пользователем."}
//     ];
// let x=new Tag(title,actions,arr);
// console.log(x);



// -input
// function Tag(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//     let title="<input>";
//     let actions="Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы" +
//         "интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания" +
//         "текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать" +
//         "внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены" +
//         "на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и " +
//         "в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript."
//     let arr=[
//         { titleOfAttr:'accept', actionOfAttr:"Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."},
//         { titleOfAttr:'accesskey', actionOfAttr:"Переход к элементу с помощью комбинации клавиш."},
//         { titleOfAttr:'border', actionOfAttr:"Толщина рамки вокруг изображения."}
//     ];
// let x=new Tag(title,actions,arr);
// console.log(x);



// -form
// function Tag(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//     let title="<form>";
//     let actions="Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между " +
//         "пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью " +
//         "клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению."
//     let arr=[
//         { titleOfAttr:'accept-charset', actionOfAttr:"Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные."},
//         { titleOfAttr:'action', actionOfAttr:"Адрес программы или документа, который обрабатывает данные формы."}
//     ];
// let x=new Tag(title,actions,arr);
// console.log(x);



// -option
// function Tag(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//     let title="<option>";
//     let actions="Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>." +
//         " Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с " +
//         "помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> " +
//         "внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты."
//     let arr=[
//         { titleOfAttr:'disabled', actionOfAttr:"Заблокировать для доступа элемент списка."},
//         { titleOfAttr:'label', actionOfAttr:"Указание метки пункта списка."},
//         { titleOfAttr:'value', actionOfAttr:"Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов."}
//     ];
//
// let x=new Tag(title,actions,arr);
// console.log(x);



// -select
// function Tag(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//     let title="<select>";
//     let actions="Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с " +
//         "одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега" +
//         " <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в" +
//         " теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, " +
//         "который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то " +
//         "требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение" +
//         " через скрипты."
//     let arr=[
//         { titleOfAttr:'accesskey', actionOfAttr:"Позволяет перейти к списку с помощью некоторого сочетания клавиш."},
//         { titleOfAttr:'autofocus', actionOfAttr:"Устанавливает, что список получает фокус после загрузки страницы."},
//         { titleOfAttr:'required', actionOfAttr:"Список обязателен для выбора перед отправкой формы."}
//     ];
//
// let x=new Tag(title,actions,arr);
// console.log(x);




// =====================================================================================================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
// ==============================================



// -- a
// class Tag {
//     constructor(titleOfTag,action,attrs) {
//         this.title=titleOfTag;
//         this.actions=action;
//         this.arr=attrs;
//     }
// }
// let title="<a>";
// let actions= "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. \" +\n" +
//     "//     \"В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. \" +\n" +
//     "//     \"Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. \" +\n" +
//     "//     \"При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.";
// let arr=[{ titleOfAttr:'accesskey', actionOfAttr:"Активация ссылки с помощью комбинации клавиш."},
//     { titleOfAttr:'coords', actionOfAttr:"Устанавливает координаты активной области."},
//     { titleOfAttr:'download', actionOfAttr:"Предлагает скачать указанный по ссылке файл."},
//     { titleOfAttr:'href', actionOfAttr:"Задает адрес документа, на который следует перейти."},
//     { titleOfAttr:'hreflang', actionOfAttr:"Идентифицирует язык текста по ссылке"},
//     { titleOfAttr:'name', actionOfAttr:"Устанавливает имя якоря внутри документа."}
//     ];
// let x= new Tag(title,actions,arr);
// console.log(x);




// --div
// class Tag{
//     constructor(titleOfTag,action,attrs) {
//         this.title=titleOfTag;
//         this.actions=action;
//         this.arr=attrs;
//     }
// }
// let title="<div>";
// let actions="Елемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью \" +\n" +
//     "//         \"изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый \" +\n" +
//     "//         \"раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут \" +\n" +
//     "//         \"class или id с именем селектора.\\n Как и при использовании других блочных элементов, содержимое тега\" +\n" +
//     "//         \" <div> всегда начинается с новой строки. После него также добавляется перенос строки.";
// let arr=[
//         { titleOfAttr:'align', actionOfAttr:"Задает выравнивание содержимого тега <div>."},
//         { titleOfAttr:'title', actionOfAttr:"Добавляет всплывающую подсказку к содержимому."}
//     ]
// let x= new Tag(title,actions,arr);
// console.log(x);




// -- h1
// class Tag{
//     constructor(titleOfTag,action,attrs) {
//         this.title=titleOfTag;
//         this.actions=action;
//         this.arr=attrs;
//     }
// }
// let title="<h1>";
// let actions="HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции,\" +\n" +
//     "//         \" расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня,\" +\n" +
//     "//         \" а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию,\" +\n" +
//     "//         \" заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня\" +\n" +
//     "//         \" по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, \" +\n" +
//     "//         \"а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него\" +\n" +
//     "//         \" добавляется пустое пространство.";
// let arr=[ { titleOfAttr:'align', actionOfAttr:"Определяет выравнивание заголовка."}];
// let x= new Tag(title,actions,arr);
// console.log(x);




// -- span
// class Tag{
//     constructor(titleOfTag,action,attrs) {
//         this.title=titleOfTag;
//         this.actions=action;
//         this.arr=attrs;
//     }
// }
// let title="<span>";
// let actions="Тег <span> предназначен для определения строчных элементов документа. \" +\n" +
//     "//         \"В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить \" +\n" +
//     "//         \"часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) \" +\n" +
//     "//         \"можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для \" +\n" +
//     "//         \"него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу\" +\n" +
//     "//         \" стилей, а для тега добавить атрибут class или id с именем селектора.";
// let arr=[
//         { titleOfAttr:'accesskey', actionOfAttr:"Позволяет получить доступ к элементу с помощью заданного сочетания клавиш."},
//         { titleOfAttr:'class', actionOfAttr:"Определяет имя класса, которое позволяет связать тег со стилевым оформлением."},
//         { titleOfAttr:'contenteditable', actionOfAttr:"Сообщает, что элемент доступен для редактирования пользователем."}
//     ];
// let x= new Tag(title,actions,arr);
// console.log(x);




// -- input
// class Tag{
//     constructor(titleOfTag,action,attrs) {
//         this.title=titleOfTag;
//         this.actions=action;
//         this.arr=attrs;
//     }
// }
// let title="<input>";
// let actions="Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы" +
//             "интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания" +
//             "текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать" +
//             "внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены" +
//             "на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и " +
//             "в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.";
// let arr=[
//     { titleOfAttr:'accept', actionOfAttr:"Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."},
//         { titleOfAttr:'accesskey', actionOfAttr:"Переход к элементу с помощью комбинации клавиш."},
//         { titleOfAttr:'border', actionOfAttr:"Толщина рамки вокруг изображения."}
//     ]
// let x= new Tag(title,actions,arr);
// console.log(x);



// -- form
// class Tag{
//     constructor(titleOfTag,action,attrs) {
//         this.title=titleOfTag;
//         this.actions=action;
//         this.arr=attrs;
//     }
// }
// let title="<form>";
// let actions="Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между " +
//         "пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью " +
//         "клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.";
// let arr=[
//      { titleOfAttr:'accept-charset', actionOfAttr:"Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные."},
//         { titleOfAttr:'action', actionOfAttr:"Адрес программы или документа, который обрабатывает данные формы."}
//     ]
// let x= new Tag(title,actions,arr);
// console.log(x);



// -- options
// class Tag {
//     constructor(titleOfTag,action,attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//     let title="<option>";
//     let actions="Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>." +
//         " Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с " +
//         "помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> " +
//         "внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты."
//     let arr=[
//         { titleOfAttr:'disabled', actionOfAttr:"Заблокировать для доступа элемент списка."},
//         { titleOfAttr:'label', actionOfAttr:"Указание метки пункта списка."},
//         { titleOfAttr:'value', actionOfAttr:"Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов."}
//     ];
// let x=new Tag(title,actions,arr);
// console.log(x);



// --select
// class Tag {
//     constructor(titleOfTag,action,attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//     let title="<select>";
//     let actions="Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с " +
//         "одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега" +
//         " <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в" +
//         " теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, " +
//         "который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то " +
//         "требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение" +
//         " через скрипты."
//     let arr=[
//         { titleOfAttr:'accesskey', actionOfAttr:"Позволяет перейти к списку с помощью некоторого сочетания клавиш."},
//         { titleOfAttr:'autofocus', actionOfAttr:"Устанавливает, что список получает фокус после загрузки страницы."},
//         { titleOfAttr:'required', actionOfAttr:"Список обязателен для выбора перед отправкой формы."}
//     ];
// let x=new Tag(title,actions,arr);
// console.log(x);




// =====================================================================================================================


//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car={
//     model:"passat",
//     producer:"vw",
//     yearOfIssue:2012,
//     maxSpeed:189,
//     capacity:1.9,
//     drive: function (){
//     console.log("Їдемо зі швидкістю "+this.maxSpeed+" км на годину")
//     },
//     info: function (){
//         console.log(`
//         model:${this.model}
//         producer:${this.producer}
//         yearOfIssue:${this.yearOfIssue}
//         maxSpeed:${this.maxSpeed}
//         capacity:${this.capacity}`);
//     },
//     increaseMaxSpeed:function (newSpeed){
//         console.log(this.maxSpeed += newSpeed);
//     },
//     changeYear: function (newValue){
//         console.log(this.yearOfIssue = newValue);
//     },
//     driver:{
//         name: "",
//         age:0,
//     },
//     addDriver: function (name,age){
//         console.log("Водій: "+`${this.driver.name=name}, ${this.driver.age=age}`+" років")
//     }
// }
// car.drive();
// car.info();
// car.increaseMaxSpeed(9);
// car.changeYear(2020);
// car.addDriver("Oleg",35);
// console.log(car);


// =====================================================================================================================
//
//
// =====================================================================================================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//     максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає обєкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, producer, yearOfIssue, maxSpeed, capacity) {
//     this.model =  model ||"passat" ;
//     this.producer = producer||"vw";
//     this.yearOfIssue = yearOfIssue||2012;
//     this.maxSpeed =maxSpeed|| 189;
//     this.capacity =capacity|| 1.9;
//
//     this.drive=function(){
//     console.log("їдемо зі швидкістю " + this.maxSpeed + " км на годину")
//     };
//     this.info=function (){
//         console.log(this);
//     };
//     this.increaseMaxSpeed=function (newSpeed){
//         console.log("New speed = " +(this.maxSpeed += newSpeed)+" км на годину");
//     };
//     this.changeYear=function (newValue){
//         console.log("New year of issue "+(this.yearOfIssue = newValue));
//     };
//     this.driver={
//         name:"",
//         age:0,
//     };
//     this.addDriver=function (name,age){
//         console.log("Водій: "+`${this.driver.name=name}, ${this.driver.age=age}`+" років")
//     }
// }
// let x=new Car("A4","audi",2010,220,2.7);
// console.log(x);
// x.drive();
// x.info();
// x.increaseMaxSpeed(23);
// x.changeYear(2019);
// x.addDriver("Petro",39);


// =====================================================================================================================
//
// =====================================================================================================================
//     - Створити клас який дозволяє створювати обєкти car, з властивостями модель, виробник, рік випуску,
//     максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає обєкт який "водій" з довільним набором полів, і доавляет його в поточний обєкт car


// class Car{constructor(model, producer, yearOfIssue, maxSpeed, capacity){
//         this.model =  model ||"passat" ;
//         this.producer = producer||"vw";
//         this.yearOfIssue = yearOfIssue||2012;
//         this.maxSpeed =maxSpeed|| 189;
//         this.capacity =capacity|| 1.9;
//     }
//     drive(){
//     console.log("їдемо зі швидкістю " + this.maxSpeed + " км на годину")
//     };
//     info(){
//         console.log(this);
//     };
//     increaseMaxSpeed(newSpeed){
//         console.log("New speed = " +(this.maxSpeed += newSpeed)+" км на годину");
//     };
//     changeYear(newValue){
//         console.log("New year of issue "+(this.yearOfIssue = newValue));
//     };
//     driver={
//         name:"",
//         age:0,
//     };
//     addDriver(name,age){
//         console.log("Водій: "+`${this.driver.name=name}, ${this.driver.age=age}`+" років")
//     }
// }
// let x=new Car("A4","audi",2010,220,2.7);
// console.log(x);
// x.drive();
// x.info();
// x.increaseMaxSpeed(23);
// x.changeYear(2019);
// x.addDriver("Petro",39);

// =====================================================================================================================
//
//
// =====================================================================================================================
//     -створити класс попелюшка з полями імя, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити обєкт класу "принц" за допомоги класу який має поля імя, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class Cinderella {
//     constructor(name,age,footSize) {
//     this.name=name;
//     this.age=age;
//     this.footSize=footSize;
//     }
// }
// let cinderella1= new Cinderella("Tetiana",20,35);
// let cinderella2=new Cinderella("Lola",24,38);
// let cinderella3=new Cinderella("Karina",23,37);
// let cinderella4=new Cinderella("Anastasia",27,36);
// let cinderella5=new Cinderella("Olena",26,39);
// let cinderella6=new Cinderella("Katrina",21,39.5);
// let cinderella7=new Cinderella("Svitlana",22,38.5);
// let cinderella8=new Cinderella("Oksana",18,36.5);
// let cinderella9=new Cinderella("Marta",19,37.5);
// let cinderella10=new Cinderella("Lidia",23,35.5);
//
// let arr=[cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,
//     cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age= age;
//         this.shoe = shoe;
//         this.find=function (MyPrinces){
//             for (let myPr of MyPrinces) {
//                 if (this.shoe===myPr.footSize){
//                     console.log("My princess is "+ myPr.name);
//                 }
//             }
//         }
//     }
// }
// let x=new Prince("Artur",23,36);
// x.find(arr);


// =====================================================================================================================
//
//
// =====================================================================================================================
//     -створити функцію конструктор попелюшка з полями імя, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити обєкт типу "принц" за допомоги функції конструктора з полями імя, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Cinderella(name,age,footSize){
//     this.name=name;
//     this.age=age;
//     this.footSize=footSize;
// }
// let cinderella1= new Cinderella("Tetiana",20,35);
// let cinderella2=new Cinderella("Lola",24,38);
// let cinderella3=new Cinderella("Karina",23,37);
// let cinderella4=new Cinderella("Anastasia",27,36);
// let cinderella5=new Cinderella("Olena",26,39);
// let cinderella6=new Cinderella("Katrina",21,39.5);
// let cinderella7=new Cinderella("Svitlana",22,38.5);
// let cinderella8=new Cinderella("Oksana",18,36.5);
// let cinderella9=new Cinderella("Marta",19,37.5);
// let cinderella10=new Cinderella("Lidia",23,35.5);
//
// let arr=[cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,
//     cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];
//
// function Prince(name,age,shoe){
//     this.name=name;
//     this.age=age;
//     this.shoe=shoe;
//     this.Find=function(MyPrinces){
//         for (let MyPr of MyPrinces) {
//             if (this.shoe===MyPr.footSize){
//                 console.log("My princess is "+MyPr.name);
//             }
//         }
//     }
// }
// let x=new Prince("Artur",23,35);
// x.Find(arr);
