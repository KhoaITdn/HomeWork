const num1 = parseInt(prompt("Nhập số thứ nhất:"));
const num2 = parseInt(prompt("Nhập số thứ hai:"));
const num3 = parseInt(prompt("Nhập số thứ ba:"));

let max = num1;

if (num2 > max) {
    max = num2;
}

if (num3 > max) {
    max = num3;
}

console.log(`Số lớn nhất trong ba số là: ${max}`);
