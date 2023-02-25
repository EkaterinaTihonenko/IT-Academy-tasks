function showMessage() {
   alert('Всем привет!');
};

function showMes() {
   let message = "Привет, я JavaScript!";
   alert(message);
};
showMes();
alert(message);

/*function testVar() {
   var test = 'Test';
}
console.log(test); ошибка*/

let userName = 'Ekaterina';

function show() {
   let mes = 'Привет, ' + userName;
   alert(mes);
}

function addition(a, b) {
   alert(a + ' ' + b);
};
addition('Ekaterina', 'Tihonenko');

function go(a, b) {
   alert("a=" + a + ", b=" + b);
}

go(1);     //a=1, b= undefined
go(1, 2);   //a=1, b=2
go(1, 2, 3); //a=1, b=2, 3 аргумент не вызовет ошибку

function sayHi() {
   for (var i = 0; i < arguments.length; i++) {
      alert("Привет, " + arguments[i]);
   };
};

sayHi("Винни", "Пятачок");

function sum(...theArgs) {
   let total = 0;
   for (const arg of theArgs) {
      total += arg;
   };
   return total;
};
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

function sum(...test) {
   console.log(test);
}
sum(10, 20, 30);

hoisted();//всплывает

function hoisted() {
   console.log('Hello World');
};

function showMess(a, b = 10) {
   console.log(a, b);
};

showMess("30");// 30 10

const x = function (y) {
   return y * y;
};

const summ = function (a, b = 10) {
   console.log(a, b);
};
summ(10, 1000);

function greeting(name) {
   alert('Hello' + name);
};

function processUserInput(callback) {
   var name = prompt('Please enter your name.');
   callback(name);
};
processUserInput(greeting);//ссылка на функцию

let sump = (a, b) => a + b;
console.log(sum(10, 20));

let sumt = function (a, b) {
   return a + b;
};

const test = (a, b) => {
   const smt = 10 + 50;
   return smt + a + b;
};
const testd = test(10 + 20);

function min(a, b) {
   return a <= b ? a : b;
};

console.log(min(10, 5));

let arr = new Array();
let arr1 = [];


let user = {
   name: "Ekaterina",
   age: 25,
};

let user2 = new Object();
user2.name = "Olga";
user2.age = 30;
alert(user2.name);

const getName = (obj, name) => {
   return obj[name];
};

const obj1 = {
   name: "Ekaterina",
   age: 25,
};

console.log(getName(obj1, 'name'));

const breakpoints = {
   sm: 'sm',
   lg: 'lg',
};

const sizes = {
   [breakpoints.sm]: {
      button: 200,
      container: 980,
   },
   [breakpoints.lg]: {
      button: 300,
      container: 1980,
   },
};

console.log(sizes[breakpoints.sm]);

const getBreakPoints = () => {
   const lg = 'lg';
   const breakpoints = {
      lg,
      sayHi: () => {
         console.log('Hello');
      }
   };
};
console.log(breakpoints.sayHi());

let user1 = { name: "Ekaterina", age: 25 };
alert("age" in user);//true

let user2 = {
   name: "Ekaterina",
   age: 25,
   isAdmin: true
};

for (let key in user2) {
   alert(key);//name age isAdmin
   //значение ключей
   alert(user2[key]);// Ekaterina 25 true
}

//деструктуризация
let options = {
   title: "Menu",
   width: 100,
   height: 200
};

let { title, width, height } = options;
console.log(title);
console.log(width);
console.log(height);

const adventurer = {
   name: 'Alice',
   cat: {
      name: 'Dinah'
   }
};

const dogName = adventurer.dog?.name;
console.log(dogName);

console.log(adventurer.someNonExistentMethod?.());

let user5 = {
   name: "John",
   surname: "Smith",
   user2: {
      name: 'Pete'
   }
};
const user2Name = user5.user2?.name;
console.log(user2Name);
console.log(user2Name.someNonExistentMethod?.());

let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130
};

function sum(obj) {
   let sum = 0;
   for (let en in obj) {
      if (en) {
         sum += (obj[en]);
      };
   };
   return sum;
};

let sumRezult = sum(salaries);
console.log("sum: " + sumRezult);

let str = "stringify";
alert(str.slice(2));
alert(srt.substring(2, 6));
alert(str.substr(2, 4));

const re = /яблоки/gi;
const str1 = 'Яблоки круглые и яблоки сочные.';
const newstr1 = str1.replace(re, 'апельсины');
console.log(newstr1);//апельсины круглые и апельсины сочные.

const str5 = 'text test'
let reg = /test/i;
console.log(reg.test(str5));//true

const regexp = new RegExp("", "g");

const str6 = 'text test'
let reg1 = /test/ig;
console.log(str6.match(reg1));//test

