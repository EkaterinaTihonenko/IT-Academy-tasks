
const sum1 = (a, b) => a + b;
console.log(sum1(8, 20));

const sum2 = (a, b) => {
   return a + b;
};
console.log(sum2(8, 5));

const sum3 = function (a, b) {
   return a + b;
};
console.log(sum3(8, 19));

function sum4(a, b, c) {
   return a + b + c;
}
console.log(sum4(8, 9));
/*
push - добавляет в конец
pop - удаляет с конца
shift - убирает с начала
unshift - добавляет в начало массива
indexof - поиск в массиве индекса
includes - true / false есть ли значение в массиве
*/

const arr = [1, 2, 3, 4, 5];
arr.push(111);
console.log(arr.pop());
console.log(arr);
const result = arr.indexOf(5);
const result1 = arr.indexOf(2, 3);//ищи индекс с 2ого

console.log(result);
console.log(result1);

const arr5 = [1, 1, 2, 3, 4, 5];

const uniq = (arr5) => {
   const result5 = [];
   for (let i = 0; i < arr5.length; i++) {
      if (!result5.includes(arr[i])) {
         result5.push(arr5[i])
      }
   }
   return result5;
}
console.log(uniq(arr5));

/*
find-ищит
filter-фильтрует
map-позволяет трансформировать один массив в другой
reduce-
*/
const ar = [1, 1, 2, 3, 4, 5];
const resu = ar.find((item) => {
   return item === 5
})
console.log(resu);


const products = [
   {
      id: 1,
      title: 'Bag 1',
      rating: 5,
      categories: ['clothes'],
      price: 100,
   },
   {
      id: 2,
      title: 'Bag 1',
      rating: 4,
      categories: ['clothes'],
      price: 100,
   },
   {
      id: 3,
      title: 'Bag 1',
      rating: 2,
      categories: ['clothes'],
      price: 500,
   }
]

const result2 = products.find((item) => {
   return item.id === 2;
});
console.log(result2);

const result3 = products.filter((item, index, arr) => {
   return item.price < 500;
});
console.log(result3);

const result4 = products.filter((item, index, arr) => {
   return item.rating >= 3;
});
console.log(result4);

const result5 = products.map((item, index, arr) => {
   return {
      ...item,
      price: item.price / 2;
   };
});
console.log(result5);

const result6 = products.reduce((acc, item, index, arr) => {
   return acc += item.price;
}, 0);
console.log(result6);

const arre = [1, 2, 60, 10, 15, 3, 40, 5];

arre.sort((a, b) => {
   if (a < b) return - 1;
   if (a < b) return 1;
   return 0
})

console.log(arre);


