// Bai 1
function b1_tinhDiem() {
    let b1_diemChuan = document.getElementById("b1_diemChuan").value * 1;
    let b1_diemMon1 = document.getElementById("b1_diemMon1").value * 1;
    let b1_diemMon2 = document.getElementById("b1_diemMon2").value * 1;
    let b1_diemMon3 = document.getElementById("b1_diemMon3").value * 1;
    let b1_khuVuc = document.getElementById("b1_khuVuc").value * 1;
    let b1_doiTuong = document.getElementById("b1_doiTuong").value * 1;
  
    // Check All input >=0
    if (
      b1_diemChuan == null ||
      b1_diemChuan == "" ||
      b1_diemMon1 == null ||
      b1_diemMon1 == "" ||
      b1_diemMon2 == null ||
      b1_diemMon2 == "" ||
      b1_diemMon3 == null ||
      b1_diemMon3 == ""
    ) {
      alert("Khong Nhap Diem Sao Tui Check");
      return;
    } else if (
      b1_diemChuan < 0 ||
      b1_diemMon1 < 0 ||
      b1_diemMon2 < 0 ||
      b1_diemMon3 < 0
    ) {
      alert("Nhap Diem >= 0");
      return;
    }
    //Check all option is selected
    if (b1_khuVuc == 100 || b1_doiTuong == 100) {
      alert("Hay Chon Khu Vuc va Doi Tuong");
      return;
    }
  
    let b1_tongDiem =
      b1_diemMon1 + b1_diemMon2 + b1_diemMon3 + b1_khuVuc + b1_doiTuong;
  
    if (b1_tongDiem >= b1_diemChuan) {
      document.getElementById("b1_ketQua").innerText = "Đậu";
    } else {
      document.getElementById("b1_ketQua").innerText = "Rớt";
    }
  }
  
  // Bai 2
  function b2_tinhTienDien() {
    let b2_ten = document.getElementById("b2_ten").value;
    let kw = document.getElementById("b2_kw").value * 1;
    let b2_tienDien = 0;
  
    // Check kw value >= 0
    if (kw < 0) {
      alert("Vui lòng nhập số KW >= 0");
      return;
    }
  
    // Check Name inputs
    if (b2_ten == null || b2_ten == "") {
      b2_ten = "Thang nay khong co ten";
    }
  
    if (kw <= 50) {
      b2_tienDien = kw * 500;
    } else if (kw <= 100) {
      b2_tienDien = 50 * 500 + (kw - 50) * 650;
    } else if (kw <= 200) {
      b2_tienDien = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    } else if (kw <= 350) {
      b2_tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    } else {
      b2_tienDien =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
    }
  
    document.getElementById(
      "b2_ketQua"
    ).innerText = `Ten: ${b2_ten} - Tien dien: ${b2_tienDien}`;
  }
  
  //Bai 3
  function b3_thuNhap() {
    let b3_ten = document.getElementById("b3_ten").value;
    let b3_tongThuNhap = document.getElementById("b3_tongThuNhap").value * 1;
    let b3_soNguoiPhuThuoc =
      document.getElementById("b3_soNguoiPhuThuoc").value * 1;
  
    // Check Name inputs
    if (b3_ten == null || b3_ten == "") {
      b3_ten = "Thang nay khong co ten";
    }
  
    // Check tongThuNhap >= 0
    if (b3_tongThuNhap < 0) {
      alert("No. Nan` khong can tinh thue ^_^");
      return;
    } else if (b3_tongThuNhap < 5600000) {
      alert("Doc Luu Y: Tong thu nhap phai >= 5600000");
      return;
    }
  
    // Check So nguoi phu thuoc
    if (b3_soNguoiPhuThuoc == null || b3_soNguoiPhuThuoc == "") {
      b3_soNguoiPhuThuoc = 0;
    } else if (b3_soNguoiPhuThuoc < 0) {
      alert("Co don thi ghi 0");
      return;
    }
  
    let b3_thuNhapChiuThue =
      b3_tongThuNhap - 4000000 - b3_soNguoiPhuThuoc * 1600000;
    let b3_tienThue = 0;
    if (b3_thuNhapChiuThue <= 60 * 1000000) {
      b3_tienThue = b3_thuNhapChiuThue * 0.05;
    } else if (b3_thuNhapChiuThue <= 120 * 1000000) {
      b3_tienThue = b3_thuNhapChiuThue * 0.1;
    } else if (b3_thuNhapChiuThue <= 210 * 1000000) {
      b3_tienThue = b3_thuNhapChiuThue * 0.15;
    } else if (b3_thuNhapChiuThue <= 384 * 1000000) {
      b3_tienThue = b3_thuNhapChiuThue * 0.2;
    } else if (b3_thuNhapChiuThue <= 624 * 1000000) {
      b3_tienThue = b3_thuNhapChiuThue * 0.25;
    } else if (b3_thuNhapChiuThue <= 960 * 1000000) {
      b3_tienThue = b3_thuNhapChiuThue * 0.3;
    } else {
      b3_tienThue = b3_thuNhapChiuThue * 0.35;
    }
  
    document.getElementById(
      "b3_ketQua"
    ).innerHTML = `Ten: ${b3_ten} - Thue: ${b3_tienThue} VND`;
  }
  
  //Bai 4
  function chonKhachHang() {
    let b4_khachHang = document.getElementById("b4_khachHang").value;
    if (b4_khachHang == 2) {
      document.getElementById("b4_soKetNoi").style.display = "block";
    } else {
      document.getElementById("b4_soKetNoi").style.display = "none";
    }
  }
  
  function b4_tinhTienCap() {
    let b4_khachHang = document.getElementById("b4_khachHang").value;
    let b4_maKH = document.getElementById("b4_maKH").value;
    let b4_soKenh = document.getElementById("b4_soKenh").value;
    let tienphi = 0;
    if (b4_khachHang == 0) {
      alert("Hay Chon Doi Tuong Khach Hang");
      return;
    } else if (b4_khachHang == 2) {
      let b4_soKetNoi = document.getElementById("b4_soKetNoi").value * 1;
      if (b4_soKetNoi < 0) {
        alert("Nhap So Ket Noi >= 0");
        return;
      } else if (b4_soKetNoi <= 10) {
        tienphi = 75;
      } else {
        tienphi = 75 + (b4_soKetNoi - 10) * 5;
      }
      let tongtien = 15 + tienphi + 50 * b4_soKenh;
      document.getElementById(
        "b4_ketQua"
      ).innerHTML = `Ma KH: ${b4_maKH} - Tien Phi: $ ${tongtien}`;
    } else {
      let tongtien = 4.5 + 7.5 * b4_soKenh + 20.5;
      document.getElementById(
        "b4_ketQua"
      ).innerHTML = `Ma KH: ${b4_maKH} - Tien Phi: $ ${tongtien}`;
    }
  }