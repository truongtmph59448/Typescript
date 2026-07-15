"use strict";
//Bài 1
class Student {
    name;
    id;
    constructor(name, id) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log("ID:", this.id);
        console.log("Tên:", this.name);
    }
}
const s1 = new Student('Truong', 1);
console.log(s1.name);
s1.display();
const user = {
    id: 1,
    email: 'tmtruong2505@gmail.com',
    phone: "0972387312",
};
console.log(user);
const product = {
    id: 1,
    name: 'Quần bò',
    price: 200000,
};
console.log(product);
function logStatus(status) {
    if (status === "loading") {
        console.log("Đang tải...");
    }
    else if (status === "success") {
        console.log("Thành công");
    }
    else {
        console.log("Có lỗi");
    }
}
logStatus("loading");
logStatus("success");
logStatus("error");
//Bài 5
function identity(value) {
    return value;
}
console.log(identity(10));
console.log(identity("Truong"));
console.log(identity(true));
