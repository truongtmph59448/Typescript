enum Rate  {
 low = "Thấp",
 medium = "Trung bình",
 high = "Cao",
}

type Product = {
    name: string,
    price: number,
    sale: boolean,
    rate: Rate,
}

const listProducts: Product[] = [
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

const newList = listProducts.map((product) => {
  return {
    ...product,
    description: product.price > 5 ? "Tốt" : "Bình thường",
  };
});

function showProducts(products: typeof newList): void {
  console.log("===== DANH SÁCH SẢN PHẨM =====");

  products.forEach((product) => {
    console.log(`Tên sản phẩm: ${product.name}`);
    console.log(`Giá bán: ${product.price}`);
    console.log(`Trạng thái Sale: ${product.sale ? "Có" : "Không"}`);
    console.log(`Đánh giá: ${product.rate}`);
    console.log(`Mô tả: ${product.description}`);
    console.log("----------------------------");
  });
}

function totalPrice(products: Product[]): number {
  return products.reduce((sum, product) => sum + product.price, 0);
}

console.log("Tổng giá bán:", totalPrice(listProducts));

const saleProducts = listProducts.filter((product) => {
  return (
    product.sale &&
    (product.rate === Rate.medium || product.rate === Rate.high)
  );
});

console.log(" SẢN PHẨM ĐANG SALE VÀ ĐÁNH GIÁ TỪ TRUNG BÌNH TRỞ LÊN ");
console.log(saleProducts);