"use strict";
//Bài 1
const averageScore = (...scores) => {
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
};
console.log('Điểm trung bình 1:', averageScore(8, 9, 10));
console.log('Điểm trung bình 2:', averageScore(5, 6, 7, 8));
//Bài 2
const checkNumber = (n) => {
    return n % 2 === 0 ? "even" : "odd";
};
console.log(checkNumber(4));
console.log(checkNumber(7));
//Bài 3
const createUser = (name, age, role = "user") => {
    if (age !== undefined) {
        return `Name: ${name}, Age: ${age}, Role: ${role}`;
    }
    return `Name: ${name}, Role: ${role}`;
};
console.log(createUser("Truong"));
console.log(createUser("Truong", 20, "admin"));
//Bài 4
const mergeProducts = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
const printProducts = (...products) => {
    console.log('Danh sách sản phẩm:');
    products.forEach((product, index) => {
        console.log(`${index + 1}: ${product}`);
    });
};
const a = ["Iphone", "Samsung"];
const b = ["Xiaomi", "Oppo"];
const allProducts = mergeProducts(a, b);
console.log(allProducts);
printProducts(...allProducts);
