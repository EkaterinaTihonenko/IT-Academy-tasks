class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  download() {
    console.log("download");
  }

  comment() {
    console.log("download");
  }
}

console.log(User.prototype);

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
}

deleteUser() {
   console.log("deleteUser");
   this.comment();
}

new Promise((resolve, rejest) => {
   //asynchronous code
})

  .then((result) => {
   //handling the result
  })
  .catch((error) => {
   //handling an error
  });

class Todo {
   constructor(name) {
      this._tasks = [];
      this._tasks = new Date();
   }

   get tasks() {
      return this._tasks;
   }

   get date() {
      return this._date;
   }

   set date(date) {
      if (date) {
         this._date = date;
      }
   }

   add() {
      //added to tasks
   }
}

class SubTodo extends Todo {
 
   add() {

   }
}


const date = new Date();
console.log(date.getTime - new Date().getTime);

console.log(Math);

class User {
   static setAge() {
      console.log('asdasd');
   }

   setAgeObj(){

   }
}

const user = new User();
console.log(user.se);

const map = new Map([["key1", "value1"]]);

map.set('key2', 'asdasdasd');
map.delete('key2')
console.log(map);

class Todo {
   constructor() {
     this.tasks = [
       {
         id: 1,
         title: "title",
         description: "",
         date: new Date(),
         isCompeted: false
       }
     ];
   }
 
 getAllTasks() {
   return this._tasks;
 }
 
 getTask(id) {
   return this._tasks.map((item) => {
     if (item.id === id) {
        return {
           ...item,
           isCompleted: true,
        };
     }
     return item;
  });
 }
 
 updateTask(id, props) {
 
 }
 
 deleteTask(id) {
   this.tasks = this.tasks.filter((item) => item.id !== id);
 }
 
 createTask(props) {
   this._tasks.push({
       id: this._tasks.length + 1,
       date: new Date(),
       isCompeted: false,
       ...props
     });
   }
 }
 