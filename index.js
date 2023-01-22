//const a = 5;

/*const test = () => {
  console.log('test')
}
*/

// const test = () => {
// console.log('test')
// }

'use strict';

const global = true;//глобальная обл. видимости
var global1 = true;
console.log(global, global1);

{
   const global2 = true;//локальная обл.(блочная)
   console.log(global2);
}

/*console.log(global3);//TDZ
const global3 = true;
*/

const numberUnreadMessages = 20;
const isRegisteredUser = true;
const favoritGenresUser = [''];
console.log(numberUnreadMessages, isRegisteredUser, favoritGenresUser);

let primitive1 = 2;
let primitive2 = 4;
primitive1 = 3;
console.log(primitive1, primitive2);//примитив

let obj1 = { name: 'name' };
let obj2 = obj1;
obj1.name = 'Ekaterina';
console.log(obj1, obj2);//ссылочная

const number = 1e6;
console.log(number);//экспонента(e)

const str = 'hello "world"';
console.log(str);

const test = 1;
const text2 = 'Hello World' + test;//конкатенация строк
const text3 = `Hello 
World ${test}`;//можно с переносами строк
console.log(text2, text3);

const number1 = 110;//литеральная
const number2 = new Number(110);//конструктор
console.log(number1, number2);

const number3 = 110;
const number4 = Number('110');
console.log(number3, number4);

let user = {     // объект
   name: "John",  // под ключом "name" хранится значение "John"
   age: 30        // под ключом "age" хранится значение 30
};


console.log(String(123), 123);//из числа в строку(явное)
console.log('' + 100);// неявное

String(123)//'123'
String(null)//'null'
//String + (?) = 'String'явное

console.log(Boolean('1'));// явное___(0, null, undefined = false)

if ('') {
   //false
}
console.log(10 > 'hello'); //false или < или ===
console.log(10 == '10'); //true( нестрогое равенство(сравнение по значению))
console.log(true + false); //1+0=1
console.log(12 / "6"); // 2 (/)
console.log("number" + 20 + 5); // String


Number(null)        // 0
Number(undefined)   // NaN
Number(true)        // 1
Number(false)       // 0
Number("12")        // 12
Number("-12.34")    // -12.34
Number("\n")        // 0
Number(" 12s")      // NaN
Number(123)         // 123

console.log(6 % 4);//2
console.log(2 ** 3);//8

/*const counter = 1;//ошибка
counter++
*/

let counter = 1;//постфиксная
console.log(counter++);//1

const isValid = '' || 10 || null;
console.log(isValid);//10(возвращает первое попавшийся true)

const isValid1 = 'str' && 'str' && null;
console.log(isValid1);//null(возвращает первое попавшийся false)

let userId;
alert(userId ?? "anonimus");//anonimus (userId не существует) (возвращает первый аргумент, если он не null/undefined , иначе второе)

const ADMIN = 'admin';
const userRole = 'user';
const ANONIMUS = 'anonimus';

if (userRole === ADMIN) {
   console.log(ADMIN);
} else {
   console.log(ANONIMUS);
};

const currentRole = userRole === ADMIN ? `Hello ADMIN` : `Hello ANONIMUS`;
console.log(currentRole);

for (let i = 0; i < 11; i++) {
   console.log(i);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = arr.length - 1; i >= 0; i--) {
   console.log(arr[i]);
}