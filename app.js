// solution 1
function add(a) {

    return function(b) {
      return a + b;
    };
  
  }
  
  console.log( add(67)(23) );
  


let para = document.createElement("p");
let graph = document.createTextNode("this is 2nd assgmnt for javascript practice.");
para.appendChild(graph);

let element = document.getElementById("per");
let child = document.getElementById("p1");
element.insertBefore(para, child);



let list = document.createElement('li');
list.appendChild(document.createTextNode('class '));
document.querySelector('ul').appendChild(list);


function myFun() {

    document.getElementById("per").style.backgroundColor = "red";
    
    }
myFun();
let prevStudents = localStorage.getItem("students"); // get from LocalStorage
let students = prevStudents ? JSON.parse(prevStudents) : [];
function provideStudent() {
  let std = {
    name: prompt("Enter Name"),
    rollNo: +prompt("Enter Roll no"),
    teacher: prompt("Enter Teachers Name"),
    className: prompt("Enter Your Class"),
  };
  students.push(std);
  console.log(students);
  let stringify = JSON.stringify(students); // Convert it to String
  localStorage.setItem("students", stringify); // Save it to LocalStorage 
}


let user = {
  name: 'safina',
  id: 'safinayounus24@gmail.com',
  age: 18
}
localStorage.setItem("user", JSON.stringify(user));
document.getElementById('result').innerHTML = localStorage.getItem('user');

// function arr(array, value) {
//     if (array.length === 0) {
//       return false;
//     }
    
//     let ary = Math.floor(array.length / 4);
//     let arry= array[ary];
    
//     if (value === arry) {
//       return true;
//     } else if (value < arry) {
//       return arr(array.slice(0, ary), value);
//     } else {
//       return arr(array.slice(ary + 1), value);
//     }
//   }

