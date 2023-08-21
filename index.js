// Tinh tien luong nhan vien
// dom tới thẻ btn => onclick
// dom tới 2 thẻ input để láy value

var btnTongLuong = document.getElementById("btnTongLuong");
btnTongLuong.onclick = function () {
  //   đâu vào dom tới 2 thẻ input lấy value
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;

  // console.log(number1);
  // console.log(number2);

  //xử lý
  //convert number1 từ string sang number
  number1 = Number(number1);
  //convert number2 từ string sang number

  number2 = Number(number2);

  var tongLuong = number1 * number2;
  //dau ra

  var ketQua = "Tiền Lương của nhân viên : " + tongLuong;
  var divThongBao = document.getElementById("thongBao");
  divThongBao.innerText = ketQua;
  divThongBao.classList.add("thongBao");
};

// tính giá trị trung bình
// dom tới thẻ btn => onclick
// dom tới 5 thẻ input lấy giá trị
var btnTrungBinh = document.getElementById("btnTrungBinh");
btnTrungBinh.onclick = function () {
  var number3 = document.getElementById("number3").value;
  var number4 = document.getElementById("number4").value;
  var number5 = document.getElementById("number5").value;
  var number6 = document.getElementById("number6").value;
  var number7 = document.getElementById("number7").value;

  number3 = Number(number3);
  number4 = Number(number4);
  number5 = Number(number5);
  number6 = Number(number6);
  number7 = Number(number7);

  var trungBinh = (number3 + number4 + number5 + number6 + number7) / 5;
  // dau ra
  var ketQuaTrungBinh = "Trung bình của 5 số là :" + trungBinh;
  var divThongBao = document.getElementById("thongBao1");
  divThongBao.innerText = ketQuaTrungBinh;
  divThongBao.classList.add("thongBao1");
};

// Quy đổi tiền
// dom tới thẻ btn => onclick
// dom tới thẻ input lấy giá trị
var btnDoiTien = document.getElementById("btnDoiTien");
btnDoiTien.onclick = function () {
  var soTien = document.getElementById("soTien").value;
  soTien = Number(soTien);
  var QuyDoi = soTien * 23500;
  //   dau ra
  var soTienDaDoi = "Số Tiền Quy Đổi là: " + QuyDoi + "VND";
  var divThongBao = document.getElementById("thongBao2");
  divThongBao.innerText = soTienDaDoi;
  divThongBao.classList.add("thongBao2");
};
//  tinh chu vi

// dom tới thẻ btn => onclick
// dom tới thẻ input lấy giá trị
var tinhChuVi = document.getElementById("tinhChuVi");
tinhChuVi.onclick = function () {
  // dom tới thẻ input lấy giá trị
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  // ép kiểu dữ liệu sang number
  chieuDai = Number(chieuDai);
  chieuRong = Number(chieuRong);
  var chuVi = (chieuDai + chieuRong) * 2;
  // đầu ra
  var ketQuaChuVi = "Chu vi là: " + chuVi;
  var divThongBao = document.getElementById("thongBao3");
  divThongBao.innerText = ketQuaChuVi;
  divThongBao.classList.add("thongBao3");
};

// tinh tong 2 ki so
var btnTong = document.getElementById("btnTong");
btnTong.onclick = function () {
  var kiSo = document.getElementById("kiSo").value;
  kiSo = Number(kiSo);
  var hangChuc = Math.floor(kiSo / 10);
  var hangDonVi = kiSo % 10;
  var Tong = hangChuc + hangDonVi;
  //   dau ra
  var tongKiSo = "Tổng của kí số là : " + Tong;
  var divThongBao = document.getElementById("thongBao4");
  divThongBao.innerText = tongKiSo;
  divThongBao.classList.add("thongBao4");
};
