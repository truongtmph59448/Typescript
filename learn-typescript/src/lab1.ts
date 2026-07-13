function hinhChuNhat(chieuDai: number, chieuRong: number): {
    chuVi: number;
    dienTich: number;
} {
    return {
        chuVi: (chieuDai + chieuRong) * 2,
        dienTich: chieuDai * chieuRong
    };
}

const hcn = hinhChuNhat(10, 5);
console.log(" Bài 1 ");
console.log("Chu vi:", hcn.chuVi);
console.log("Diện tích:", hcn.dienTich);


function tinhTong(...numbers: number[]): number {
    return numbers.reduce((tong, so) => tong + so, 0);
}

console.log("\n===== Bài 2 =====");
console.log("Tổng =", tinhTong(1, 2, 3, 4, 5));




function demKyTu(chuoi: string, kyTu: string): number {
    let dem = 0;

    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTu) {
            dem++;
        }
    }

    return dem;
}

console.log("\n Bài 3 ");
console.log("Số lần xuất hiện:", demKyTu("typescript", "t"));



function laSoNguyenTo(n: number): boolean {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("\n Bài 4 ");
console.log("7:", laSoNguyenTo(7));
console.log("10:", laSoNguyenTo(10));
console.log("13:", laSoNguyenTo(13));