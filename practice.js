let name = "Антон";
console.log(name)
// Переназначение переменной:
name = "Илья";
console.log(name)

// Базовые арифметические операторы
const width = 10;
const height = 5;
const space = width * height;
console.log(space)

//возведение числа в степень:
const volume = 2 ** 3 // 2 * 2 * 2 (это 2 в 3 степени)
console.log(volume)

//конкатенация
const city = 'Ростов'
const street = 'Садовая'
console.log(city + ', ' + street + ' ' + 5) // Это конкатенация (соединение двух или более объектов линейной структуры, чаще всего строк, в единое целое)

//Операторы присваивания
let age = 18 + 5;
age += 2; // age = age + 2
age -= 3;
age *= 2;
age /= 2;

age ++ // age = age + 1
age -- // age = age - 1

console.log(age);


// Операторы сравнения
const vasya = 20;
console.log(age < vasya) // >, >=, <, <=, ==, ===

// Порядок операторов
const isSuited = 90 - 10 < 100 - 5; // Как в математике
console.log(isSuited)
// ассоциативность - выполнение операции слева направо
// оператор присваивания выполняется справа налево, например:
let b;
let c;
c = b = 100 + 50;
console.log(b)
console.log(c) // они равны, потому что 100 + 50 сначала присвоилось к b, а потом b присвоилось к c


// 4.5 Типы данных
// Типы данных делятся на 2 (глобально) - ОБЪЕКТЫ И ПРИМИТИВЫ:
// Объекты
const user = {
    name: 'Вася',
    age: 18
}
// Примитивы (числа, строки, булевое, undefined, null, Symbol() - уникальное неизменное значение, BigInt(99999999999999) - работа с большими числами)
const aGe = 18;


let a = 5;
let ab = 5.6;
console.log(typeof ab) // number
a = 'Строка'
console.log(typeof a) // string


let isAdmin = a < 5;
console.log(typeof isAdmin) // boolean

let z;
console.log(typeof z) // undefined

let d = null;
console.log(typeof d) // object тут странное поведение
console.log(d == null)


// 4.6 Упражнение 
// Ваша часовая ставка 80$ и вы готовы работать 
// не более 5 часов в день 5 дней в неделю (кроме выходных).
// К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. 
// Вы должны уехать через 11 дней.Выведете в консоль:

// Boolean переменную успеете ли вы взяться за работу
// Сколько вы за неё попросите?

let paymentHour = 80;
let work = 40;
let perDay = 5;
let days = 11 - 2;

let readyForWork = days*perDay > work;
console.log(readyForWork)
let payment = paymentHour * work;
console.log(payment)

// -------------------------------------------------------
const issAdmin = false;
const notAdmin = true;
console.log(`Что тут у нас: ${issAdmin && notAdmin}`)
console.log(`Что тут у нас: ${issAdmin || notAdmin}`)
console.log(`Что тут у нас: ${!issAdmin}`)

const isEdited = true;
const isSuper = false;
console.log(`Что тут у нас: ${!issAdmin && notAdmin && (isEdited || isSuper)}`)


let booname = 'Олег'
console.log(booname || 'User')

let iAdmin = false;
let fileName = 'pass'
console.log(iAdmin && fileName)

let ages = 0; // человеку может быть 0 лет
console.log(ages || 18) // выведет 18 
console.log(ages ?? 18) // выведет 0