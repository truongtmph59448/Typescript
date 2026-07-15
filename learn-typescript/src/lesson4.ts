// class

class Student {
    // property
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    // method: ko từ khóa function
    sayHello() {
        console.log(this.name);
    }
}

const s1 = new Student ("Truong");

console.log(s1.name);
s1.sayHello();

// 2. Interface: Object

interface IStudent {
    name: string;
    age: number;
    isDone?: boolean;
}

const s2 : IStudent = {
    name: "Truong",
    age: 20,
    isDone: true, //option
};
console.log(s2);

// 3. Type Object// tạo giá trị
type Product = {
    title: string;
    price: number;
};

type Status = "success" | "error";

const statusSuccess: Status = "success";

// 4. Intersection Type
type Person = {
    name: string;
};

type Employee = {
    id: string;
};
// &
type EmployeePerson = Employee & Person;

//5. Enum 

enum Role {
    ADMIN = 'Admin',
    USER = 'User',
}

console.log (Role.USER);

// Generic : <T>

function showInfo<T> (data:  T): T {
    return data;
}

showInfo<number>(10);
showInfo<string>('Truong');