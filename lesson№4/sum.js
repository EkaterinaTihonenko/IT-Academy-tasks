const sum = (a, b) => a + b;

const arr = [
   'Minsk',
   'Moscow',
   'Mogilev',
   'Homel'
];

const result = [];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
   result.push(arr[i] = arr[i] + 'smt');
};

console.log(result);

const compact = (arr2) => {
   const result2 = [];
   for (let ind = 0; ind < arr2.length; ind++) {
      if (arr2[ind]) {
         result2.push(arr2[ind]);
      }
   }
   return result2;
};

const concat = (arr3, ...rest) => {
   return [...arr3, ...rest];
};

const join = (arr, separator) => {
   let result = "";
   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      result += element + separator;
   }

   return result;
};

const reverse = (arr) => {
   const length = arr.length;
   for (let i = 0; i < arr.length / 2; i++) {
      const element = arr[i];
      arr[i] = arr[length - i - 1];
      arr[length - i - 1] = element;
   }
};

const data = [1, 2, 3, 4, 5];
reverse(data);

const truncate = (str, options) => {
   const separator = options.separator ?? "...";
   return str.slice(0, options.length) + separator;
};

const users = [
   { id: "1", name: "name", age: 18 },
   { id: "1", name: "name", age: 20 },
   { id: "1", name: "name", age: 30 },
   { id: "1", name: "name", age: 40 },
];

const result = users.filter((item) => item.age > 18);

const str = "lorem ipsum 544mkmm mmmp";
console.log(
   truncate(str, {
      length: 10,
   })
);

module.exports = {
   compact,
   concat,
   join,
};
