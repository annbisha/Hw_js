// const day = 23;
// const hourPerDay = 8;
// const salerryPerHour = 100;
// let workDays = parseInt(prompt("How many days do you work?"));
// let mySalerry;

// const myNormalSalerry = salerryPerHour * hourPerDay * day;
// if (isNaN(workDays)) {
//   alert("error");
// } else if (workDays == day) {
//   alert(`myNormalSalerry: ${myNormalSalerry} `);
// } else {
//   mySalerry = salerryPerHour * hourPerDay * workDays;
//   alert(`mySalerry: ${mySalerry} `);
// }

//2 завдання
const login = "admin";
const password = 1234;
let enterLogin = prompt("login");
let enterPassword = prompt("password");

if (enterLogin == login && enterPassword == password) {
  alert("Welcome!");
} else {
  alert("Incorrect login or password");
}
