const { entries, map } = require("lodash");

const products = [
   {
      id: 1,
      title: "Title 1",
      price: 11300,
      rating: 1,
   },
   {
      id: 2,
      title: "Title 2",
      price: 15300,
      rating: 2,
   },
   {
      id: 3,
      title: "Title 3",
      price: 16200,
      rating: 3,
   },
];

const filteredProducts = products
   .sort((a, b) => a.rating - b.rating)
   .filter((item) => item.rating >= 3);

/*for (let i = 0; i < products.length; i++) {
   for (let j = i + 1; j < products.length; j++) {
      if (products[i].price > products[j].price) {
         const temp = products[i];
         products[i] = products[j];
         products[j] = temp;
      };
   };
};

for (let i = 0; i < products.length; i++) {
   if (products[i].rating >= 3) {
      filteredProducts.push(products[i]);
   };
};
*/
console.log(filteredProducts);

const dreverStandings = [
   { name: 'Carlos Sainz', car: 'FERRARI', points: 127 },
   { name: 'Charles Leclerc', car: 'FERRARI', points: 138 },
   { name: 'George Russell', car: 'MERCEDES', points: 111 },
   { name: 'Sergio Perez', car: 'RED BULL RACING RBPT', points: 147 },
   { name: 'Lewis Hamilton', car: 'MERSEDES', points: 93 },
   { name: 'Max Verstappen', car: 'RED BULL RACING RBPT', points: 181 },
];

flow(
   groupBy('car'),
   entries,
   map(([car, driver]) => ({ car, points: sumBy('points')(driver) })),
   orderBy('points', 'desc'),
   take(2),
);

console.log(getTop2CarConstructorStandings(dreverStandings));

const mapToId = (a, b) => {
   return a + b;
};

console.log(mapToId(2, 2));

//рекурсия
const first = () => {
   console.log('[first]: I am here');
};

const second = () => {
   console.log('[second]: I am here');
   first();
};

const third = () => {
   console.log('[third]: I am here');
   second();
};

third();

//замыкание
function user() {
   let name = 'Ekaterina';

   return function displayName() {
      console.log(name);
   };
}
let nameUser = user();
nameUser();

//ооп
const obj = {
   name: 'Ekaterina',
   lasName: 'Tihonenko',
   sayHi() {
      console.log('Hello', this.name);
   }
};

const obj2 = {
   name: 'Ekaterina',
   lasName: 'Tihonenko',
}

const sayHi = obj.sayHi;
sayHi.call(obj2);//привязывает контекст и вызыв. ф-ю

//obj.sayHi();

//const sayHi = obj.sayHi.bind(obj2);
//obj.sayHi();
//явно

//sayHi.apply(obj2, [12456, 5987785, 584546546]);

//КЛАСС

class Person {
   constructor() {
      this.firstName = 'Ekaterina';
      this.lastName = 'Tihonenko';
   }
}

const person1 = new Person();

console.log(person1);

class Button {
   constructor(text, className) {
      thisstate = {
         isActive: false,
         isFocused: false,
         text,
         className,
      };
   }

   render() {
      return `
   <button 
         class='${this.state.className}
                  ${this.state.isActive ? 'active' : ''}
                   '>
                   ${this.state.text}
                   </button>`;
   }
}

class User {
   constructor() {
      this.firstName = 'Ekaterina';
      this.lastName = 'Tihonenko';
   }
}

const user = new User();

console.log(user);

class TodoLis {
   constructor() {
      this.tasks = [];
   }

   add(title) {
      this.tasks.push({
         title,
         id: this.tasks.length + 1,
         isCompleted: false,
      });
   }

   delete(id) {
      this.tasks = this.tasks.filter((item) => item.id !== id);
   }

   complete(id) {
      this.tasks = this.tasks.map((item) => {
         if (item.id === id) {
            return {
               ...item,
               isCompleted: true,
            };
         }
         return item;
      });
   }

   edit(tasks) {
      const { id, title, isCompleted } = tasks;
      this.tasks = this.tasks.map((item) => {
         if (item.id === id) {
            return {
               ...item,
               title,
               isCompleted,
            };
         }
         return item;
      });
   }
   showAllTasks() {
      if (item.length) {
         this.tasks.forEach((item) => {
            console.log(item);
         });
      } else {
         console.log('Нет задач');
      }
   }
}

const app = new TodoLis();

app.add('Выучить JS');
app.complete(2);
