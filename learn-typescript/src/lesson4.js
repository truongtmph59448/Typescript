"use strict";
// class
class Student {
    // property
    name;
    constructor(name) {
        this.name = name;
    }
    // method: ko từ khóa function
    sayHello() {
        console.log(this.name);
    }
}
const s1 = new Student("Truong");
console.log(s1.name);
s1.sayHello();
const s2 = {
    name: "Truong",
    age: 20,
    isDone: true, //option
};
console.log(s2);
const statusSuccess = "success";
//5. Enum 
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["USER"] = "User";
})(Role || (Role = {}));
console.log(Role.USER);
// Generic : <T>
function showInfo(data) {
    return data;
}
showInfo(10);
showInfo('Truong');
