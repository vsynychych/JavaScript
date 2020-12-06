// Розпорядок дня *********************************************************************************
// -------------Callback Hell-----------------

function routineDay(day, cb) {
    setTimeout(() => {
        if (day === "dayOff") {
            cb("2. Можна довше поспати, проснувся о 9ій годині", null);
            console.log("3. Весь день відпочиваю......і вчуся писати код")
        } else if (day === "workingDay") {
            cb(null, "тому проснувся о 7ій годині");
        }
    }, Math.round(Math.random() * (1000 - 500) + 500))
}


routineDay("workingDay", (err, data) => {
    if (err) {
        console.log("Вихідний!!!", err);
    } else {
        console.log("Сьогодні робочий день.")
        console.log("1. Потрібно йти на роботу,", data);
        bathrooms("yes", (err, data) => {
            if (err) {
                console.log(" Води не має...", err);
            } else {
                console.log("Є вода...", data)
                food("something", (err, data) => {
                    if (err) {
                        console.log("Не має сніданку...", err);
                    } else {
                        console.log("Сніданок приготований...", data)
                        drive("yes", (err, data) => {
                            if (err) {
                                console.log("  -Без маски не впускаємо!!", err);
                            } else {
                                console.log("- Приїжджаю на роботу без пригод... ", data);
                                work(true, (err, data) => {
                                    if (err) {
                                        console.log("Погано відпрацював", err);
                                    } else {
                                        console.log("- Все ок... ", data);
                                        drive2(30, (err, data) => {
                                            if (err) {
                                                console.log("більше 50 хв", err);
                                            } else {
                                                console.log("- Все ок... ", data);
                                                food2("something", (err, data) => {
                                                    if (err) {
                                                        console.log("Не має вечері...", err);
                                                    } else {
                                                        console.log("Вечеря приготована...", data)
                                                        IT("yes", (err, data) => {
                                                            if (err) {
                                                                console.log("((((...", err);
                                                            } else {
                                                                console.log("Вивчив нові скіли...", data)
                                                                sleep("yes", (err, data) => {
                                                                    if (err) {
                                                                        console.log("погано спав...", err);
                                                                    } else {
                                                                        console.log("Добре спалося...", data)
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})


function bathrooms(water, cb) {

    setTimeout(() => {
        console.log("2. Душ:")
        if (water === "no") {
            cb("їду на роботу не митим... день не вдався", null)
        } else if (water === "yes") {
            cb(null, "їду на роботу чистим")
        }
    }, Math.round(Math.random() * (1500 - 700) + 700))
}


function food(breakfast, cb) {

    setTimeout(() => {
        console.log("3. Сніданок:")
        if (breakfast === "no") {
            cb("їду на роботу голодним...день не вдався", null)
        } else if (breakfast === "something") {
            cb(null, "їду на роботу ситим")
        }
    }, Math.round(Math.random() * (2000 - 800) + 800))
}


function drive(mask, cb) {
    console.log("4. Дорога на роботу:")
    setTimeout(() => {
        if (mask === "no") {
            cb(" -Я забув маску...і запізнився на роботу...день не вдався((", null);
        } else if (mask === "yes") {
            cb(null, "Тому шо не забув маску");
        }
    }, Math.round(Math.random() * (2200 - 900) + 900))
}


function work(status, cb) {
    console.log("5. На роботі:")
    setTimeout(() => {
        if (status === false) {
            cb(" не все заплановане виконав...день не вдався((", null);
        } else if (status === true) {
            cb(null, "Добре відпрацював");
        }
    }, Math.round(Math.random() * (2500 - 1000) + 1000))
}


function drive2(time, cb) {
    console.log("6. Дорога додому")
    setTimeout(() => {
        if (time > 50) {
            cb("довго добираюся додому... ((", null);
        } else if (time < 50) {
            cb(null, "Швидко доїхав додому");
        }
    }, Math.round(Math.random() * (2700 - 1100) + 1100))
}


function food2(dinner, cb) {

    setTimeout(() => {
        console.log("7. Вечеря:")
        if (dinner === "no") {
            cb("Без вечері...((((", null)
        } else if (dinner === "something") {
            cb(null, "Мммм")
        }
    }, Math.round(Math.random() * (2800 - 900) + 900))
}


function IT(lesson, cb) {

    setTimeout(() => {
        console.log("8. Написання коду:")
        if (lesson === "no") {
            cb("Не написав код...((((", null)
        } else if (lesson === "yes") {
            cb(null, "супер ")
        }
    }, Math.round(Math.random() * (2900 - 900) + 900))
}



function sleep(lesson, cb) {

    setTimeout(() => {
        console.log("9. Сон:")
        if (lesson === "no") {
            cb("не виспався...((((", null)
        } else if (lesson === "yes") {
            cb(null, "можна розпочинати новий день і підкорювати нові  вершини... ")
        }
    }, Math.round(Math.random() * (3000 - 900) + 900))
}






//----------------------------------------------------------------------------------------------------------------------
// -------------Promise-----------------


// function routineDay(day) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (day === "dayOff") {
//                 reject("2. Можна довше поспати, проснувся о 9ій годині");
//                 console.log("3. Весь день відпочиваю......і вчуся писати код")
//             } else if (day === "workingDay") {
//                 resolve( "тому проснувся о 7ій годині");
//             }
//         }, Math.round(Math.random() * (1000 - 500) + 500))
//     })
// }
//
//
// function bathrooms(water) {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("2. Душ:")
//         if (water === "no") {
//             reject("їду на роботу не митим... день не вдався")
//         } else if (water === "yes") {
//             resolve( "їду на роботу чистим")
//         }
//     }, Math.round(Math.random() * (1500 - 700) + 700))
// })
// }
//
//
// function food(breakfast) {
// return new  Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("3. Сніданок:")
//         if (breakfast === "no") {
//             reject("їду на роботу голодним...день не вдався")
//         } else if (breakfast === "something") {
//             resolve( "їду на роботу ситим")
//         }
//     }, Math.round(Math.random() * (2000 - 800) + 800))
// })
// }
//
//
// function drive(mask) {
//     return new Promise((resolve, reject) => {
//         console.log("4. Дорога на роботу:")
//         setTimeout(() => {
//             if (mask === "no") {
//                 reject(" -Я забув маску...і запізнився на роботу...день не вдався((");
//             } else if (mask === "yes") {
//                 resolve( "Тому шо не забув маску");
//             }
//         }, Math.round(Math.random() * (2200 - 900) + 900))
//     })
// }
//
//
// function work(status) {
//     return new Promise((resolve, reject) => {
//         console.log("5. На роботі:")
//         setTimeout(() => {
//             if (status === false) {
//                 reject(" не все заплановане виконав...день не вдався((");
//             } else if (status === true) {
//                 resolve( "Добре відпрацював");
//             }
//         }, Math.round(Math.random() * (2500 - 1000) + 1000))
//     })
// }
//
//
// function drive2(time) {
//     return new Promise((resolve, reject) => {
//         console.log("6. Дорога додому")
//         setTimeout(() => {
//             if (time > 50) {
//                 reject("довго добираюся додому... ((");
//             } else if (time < 50) {
//                 resolve("Швидко доїхав додому");
//             }
//         }, Math.round(Math.random() * (2700 - 1100) + 1100))
//     })
// }
//
//
// function food2(dinner) {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("7. Вечеря:")
//         if (dinner === "no") {
//             reject("Без вечері...((((")
//         } else if (dinner === "something") {
//             resolve( "Мммм")
//         }
//     }, Math.round(Math.random() * (2800 - 900) + 900))
// })
// }
//
//
// function IT(lesson) {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("8. Написання коду:")
//         if (lesson === "no") {
//             reject("Не написав код...((((")
//         } else if (lesson === "yes") {
//             resolve("супер ")
//         }
//     }, Math.round(Math.random() * (2900 - 900) + 900))
// })
// }
//
//
// function sleep(lesson) {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("9. Сон:")
//         if (lesson === "no") {
//             reject("не виспався...((((")
//         } else if (lesson === "yes") {
//             resolve("можна розпочинати новий день і підкорювати нові  вершини... ")
//         }
//     }, Math.round(Math.random() * (3000 - 900) + 900))
// })
// }
//
//
// routineDay("workingDay").then(value => {
//         console.log("Сьогодні робочий день.")
//         console.log("1. Потрібно йти на роботу, "+ value);
//         return bathrooms("yes");
//     }
// )
//     .then(value => {
//         console.log("Є вода..."+value)
//         return food("something");
//     })
//     .then(value => {
//         console.log("Сніданок приготований..."+value)
//         return drive("yes");
//     })
//     .then(value => {
//         console.log("- Приїжджаю на роботу без пригод... "+value);
//         return work(true);
//     })
//     .then(value => {
//         console.log("- Все ок... "+value);
//         return drive2(30);
//     })
//     .then(value => {
//         console.log("- Все ок... "+value);
//         return food2("something");
//     })
//     .then(value => {
//         console.log("Вечеря приготована..."+value);
//         return IT("yes");
//     })
//     .then(value => {
//         console.log("Вивчив нові скіли..."+value);
//         return sleep("yes");
//     })
//     .then(value => {
//         console.log("Добре спалося..."+value);
//     })
//
//     .catch(reason => {
//         console.log(reason);
//     })
//
//     .finally(()=>{
//         console.log("Дякую за увагу!!!!!!")
//     })
