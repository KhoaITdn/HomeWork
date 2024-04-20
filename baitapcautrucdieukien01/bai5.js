const diemBaiKiemTra = parseFloat(prompt("Nhập điểm bài kiểm tra:"));
const diemThiGiuaKy = parseFloat(prompt("Nhập điểm thi giữa kỳ:"));
const diemThiCuoiKy = parseFloat(prompt("Nhập điểm thi cuối kỳ:"));

const diemTrungBinh = (diemBaiKiemTra + diemThiGiuaKy + diemThiCuoiKy) / 3;

if (diemTrungBinh >= 8.5) {
    console.log("Học sinh đạt hạng A");
} else if (diemTrungBinh >= 7) {
    console.log("Học sinh đạt hạng B");
} else if (diemTrungBinh >= 5.5) {
    console.log("Học sinh đạt hạng C");
} else if (diemTrungBinh >= 4) {
    console.log("Học sinh đạt hạng D");
} else {
    console.log("Học sinh đạt hạng F");
}
