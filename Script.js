// they are three way to print in javaScript
console.log("Hello");
document.write("Hello");
// alert("Hello");

/* Variable
They are three different type of valiable in javaScript
1 = ver
2 = let
3 = const
*/
var Name = "abhi";
let age = 25;
const group = "o+";
console.log(Name, age, group);

// Data type in javaScript
/* They are the TWO different data type in 
1. Primitive
2. Nom Primitive 


 1 = Primaitive
 a) Number : int,flot = 
 let age (25) 
 b)  String : 'hellow' = let name("abhi")
 c) Boolean : true, false = isAdmin = true
 d) Null : null = null
 e) Undefined :  undefined = The variable dont have a value yet
 f) Symbal :  Symbol = Let y = Symbol("Hello")
 g) BigInt : 1234 = let x = (23456)

 2 = Non-Primative
  a)  Object = is a collection of value
  const Student = {
    name : "Abhi",
    agr : 21,
    SGPA = 8.8,
    isPassed: true
  };
  console.log(Student)
  console.log(Student.age)
*/

/* Operators 
 Used to Perform Some operatio on data
1. Arithmetic  operator = +,-,*,/, modules %, Exponentiation **,
 Unary Operator = They need only one value
They are two type
a). Increment ++, a++(post),++aa(pre)
b). Decrement --, a--(post),--aa(pre)

2.Assignment operator = Assign the value in variable , =, +=, -+, *=, %=,**=,  /=

3.Comparison operator = cpomaring the 2 value 
a)  Equal to ==
b) Equal to & type ===
c) Not Equal to !=
D) Not equal to & type !==
   >,>=,<,<=

4.Logical operatos
a) AND (&&): If both are true it give true
b) OR  (||): If any one is true it give trur
c) NOT (!): It will reveres the condition
 */

let a = 20;
let b = 20;
// console.log("a+b =", a + b);
console.log(a == b);

// conditional statments
let Number = 34;
if (Number >= 39) {
  console.log("Pasa :)");
} else if (Number <= 34) {
  console.log("is Good but not a bast");
} else {
  console.log("feel");
}

// Loop
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// for-of loop
let str = "Abhi";
for (let i of str) {
  console.log(i);
}
//Array
let ar = [1, 2, 3];
let info = ["Abhi", 86, "Agra"];
console.log(ar);
console.log(info);

// loop in Array

let student = ["name", "age", "sgpa"];
for (let id = 0; id <= student.length; id++) {
  console.log(student[id]);
}

// Function
//  They are to different function in javaScript
function myfun() {
  console.log("Abhi");
}
myfun();

const sum = (a, b) => {
  console.log(a + b);
};
