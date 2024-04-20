const number = parseInt(prompt("Nhập một số nguyên:"));

if (number > 0) {
    console.log(`${number} là số lớn hơn 0`);
} else if (number < 0) {
    console.log(`${number} là số nhỏ hơn 0`);
} else {
    console.log("Số bạn nhập là 0");
}
