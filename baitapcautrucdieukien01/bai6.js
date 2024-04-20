const doanhSo = parseInt(prompt("Nhập mức doanh số bán hàng (tính bằng triệu đồng):"));

let hoaHong = 0;

if (doanhSo > 1000) {
    hoaHong = doanhSo * 0.1;
} else if (doanhSo > 500) {
    hoaHong = doanhSo * 0.08;
} else {
    hoaHong = doanhSo * 0.05;
}

console.log(`Hoa hồng nhận được: ${hoaHong} triệu đồng`);
