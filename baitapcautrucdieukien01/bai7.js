const soPhutSuDung = parseInt(prompt("Nhập số phút sử dụng điện thoại:"));

let cuocPhi = 0;

if (soPhutSuDung <= 50) {
    cuocPhi = soPhutSuDung * 500; // Giá cước là 500 đồng/phút
} else if (soPhutSuDung <= 150) {
    cuocPhi = 50 * 500 + (soPhutSuDung - 50) * 400; // 400 đồng/phút sau 50 phút đầu
} else if (soPhutSuDung <= 250) {
    cuocPhi = 50 * 500 + 100 * 400 + (soPhutSuDung - 150) * 300; // 300 đồng/phút sau 150 phút đầu
} else {
    cuocPhi = 50 * 500 + 100 * 400 + 100 * 300 + (soPhutSuDung - 250) * 200; // 200 đồng/phút sau 250 phút đầu
}

console.log(`Cước điện thoại là: ${cuocPhi} đồng`);
