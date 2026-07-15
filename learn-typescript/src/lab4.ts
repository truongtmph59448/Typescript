//Bài 1
class Student {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log ("ID:",this.id);
        console.log ("Tên:", this.name);
    }
}

const s1 = new Student('Truong', 1);

console.log (s1.name);
s1.display();

//Bài 2
interface User {
    id: number;
    email: string;
    phone?: string;
}

const user: User = {
    id: 1,
    email: 'tmtruong2505@gmail.com',
    phone: "0972387312",
};

console.log (user);

//Bài 3

type Product = {
    id: number;
    name: string;
    price: number;
};

const product: Product = {
    id: 1,
    name: 'Quần bò',
    price: 200000,
};

console.log (product);

// Bài 4


type Status = "loading" | "success" | "error";

function logStatus(status: Status) {
    if (status === "loading") {
        console.log("Đang tải...");
    } else if (status === "success") {
        console.log("Thành công");
    } else {
        console.log("Có lỗi");
    }
}

logStatus("loading");
logStatus("success");
logStatus("error");

//Bài 5
function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Truong"));
console.log(identity<boolean>(true));