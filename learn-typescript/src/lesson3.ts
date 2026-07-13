// 2 cach viet function
function sayHello(): void {
  console.log("Hello");
}

// chay function
sayHello();

// cach 2: arrow function
const sayHello2 = (): void => {
  console.log("Hello");
};

sayHello2();

function sumNumbers(a: number, b: number): number {
  return a + b;
}

const result = sumNumbers(5, 3);
console.log(result);

function multiplyNumbers(a: number, b: number = 5): number {
    return a * b;
}
multiplyNumbers(4, 6);

multiplyNumbers(5);

function divideNumbers(a: number, b?: number): number {
    if (b !== undefined) {
        return a / b;
} else {
    return a ;
}
}
divideNumbers(5, 5);

divideNumbers(45);

function sumAllNumbers(...numbers: number[]): void {
    console.log (numbers);
}
sumAllNumbers(1);
sumAllNumbers(1, 2);

//spread operator: array/ object: chia tách array / object thành từng phần tử

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
// gop 2 array thanh 1 array moi [1, 2, 3, 4, 5, 6]
// cach 1 : concat: arr1.concat(arr2);// [1, 2, 3, 4, 5, 6]
// cach 2: spread operator: ...
const arr3: number[] = [...arr1, ...arr2];
console.log(arr3);

const student1 = { name: "Truong", age: 20 };
const student2 = { hasPet: true};
const student3 = { ...student1, ...student2 };
console.log(student3);