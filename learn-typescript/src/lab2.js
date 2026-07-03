var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["high"] = "Cao";
})(Rate || (Rate = {}));
var listProducts = [
    {
        name: "áo",
        price: 3,
        sale: true,
        rate: Rate.low,
    },
    {
        name: "quần",
        price: 8,
        sale: false,
        rate: Rate.medium,
    },
    {
        name: "giày",
        price: 6,
        sale: true,
        rate: Rate.medium,
    },
    {
        name: "mũ",
        price: 20,
        sale: true,
        rate: Rate.high,
    },
    {
        name: "dép",
        price: 2,
        sale: false,
        rate: Rate.low,
    },
];
var newList = listProducts.map(function (product) {
    return __assign(__assign({}, product), { description: product.price > 5 ? "Tốt" : "Bình thường" });
});
function showProducts(products) {
    console.log("===== DANH SÁCH SẢN PHẨM =====");
    products.forEach(function (product) {
        console.log("T\u00EAn s\u1EA3n ph\u1EA9m: ".concat(product.name));
        console.log("Gi\u00E1 b\u00E1n: ".concat(product.price));
        console.log("Tr\u1EA1ng th\u00E1i Sale: ".concat(product.sale ? "Có" : "Không"));
        console.log("\u0110\u00E1nh gi\u00E1: ".concat(product.rate));
        console.log("M\u00F4 t\u1EA3: ".concat(product.description));
        console.log("----------------------------");
    });
}
function totalPrice(products) {
    return products.reduce(function (sum, product) { return sum + product.price; }, 0);
}
console.log("Tổng giá bán:", totalPrice(listProducts));
var saleProducts = listProducts.filter(function (product) {
    return (product.sale &&
        (product.rate === Rate.medium || product.rate === Rate.high));
});
console.log(" SẢN PHẨM ĐANG SALE VÀ ĐÁNH GIÁ TỪ TRUNG BÌNH TRỞ LÊN ");
console.log(saleProducts);
