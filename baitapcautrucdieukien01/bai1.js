const a = +(prompt("Nhập số a:"));
const b = +(prompt("Nhập số b:"));

if (a % b === 0) {
    console.log(`${a} chia hết cho ${b}`);
} else {
    console.log(`${a} không chia hết cho ${b}`);
}
