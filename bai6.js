let tongSoPhanHoi = 0;
let soKhieuNaiNghiemTrong = 0;
let soKhieuNaiTrungBinh = 0;
let soKhieuNaiNhe = 0;
let soDeXuat = 0;
let soPhanHoiTichCuc = 0;

let tiepTuc = true;

while (tiepTuc) {
  let choice = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");

  if (choice == null || choice.toLowerCase() == "không") {
    tiepTuc = false;

    alert(
      "========== BÁO CÁO CUỐI CA ==========\n" +
        "Tổng số phản hồi/khiếu nại đã xử lý: " +
        tongSoPhanHoi +
        "\n" +
        "-------------------------------------\n" +
        "Số khiếu nại nghiêm trọng (mức 3): " +
        soKhieuNaiNghiemTrong +
        "\n" +
        "Số khiếu nại trung bình (mức 2): " +
        soKhieuNaiTrungBinh +
        "\n" +
        "Số khiếu nại nhẹ (mức 1): " +
        soKhieuNaiNhe +
        "\n" +
        "Số đề xuất cải thiện: " +
        soDeXuat +
        "\n" +
        "Số phản hồi tích cực: " +
        soPhanHoiTichCuc +
        "\n" +
        "=====================================",
    );
  } else if (choice.toLowerCase() == "có") {
    let tenBanDoc = prompt("Nhập tên bạn đọc (không được để trống):");

    if (tenBanDoc == null || tenBanDoc.trim() == "") {
      alert("Tên bạn đọc không được để trống! Vui lòng nhập lại.");
      continue;
    }

    let maThe = prompt("Nhập mã thẻ bạn đọc (có thể để trống):");

    let loaiPhanHoi = parseInt(
      prompt(
        "Nhập loại phản hồi:\n" +
          "1 - Phàn nàn / Khiếu nại\n" +
          "2 - Đề xuất cải thiện\n" +
          "3 - Phản hồi tích cực / Khen ngợi",
      ),
    );

    let mucDo = 0;
    if (loaiPhanHoi == 1) {
      mucDo = parseInt(
        prompt(
          "Nhập mức độ nghiêm trọng:\n" +
            "1 - Nhẹ (có thể xử lý nhanh)\n" +
            "2 - Trung bình\n" +
            "3 - Nghiêm trọng (cần báo cáo lãnh đạo)",
        ),
      );
    }

    let noiDung = prompt("Nhập nội dung ngắn gọn:");

    tongSoPhanHoi = tongSoPhanHoi + 1;

    let ketQua = "";

    if (loaiPhanHoi == 1 && mucDo == 3) {
      ketQua = "→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng";
      soKhieuNaiNghiemTrong = soKhieuNaiNghiemTrong + 1;
    } else if (loaiPhanHoi == 1 && mucDo == 2) {
      ketQua = "→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình";
      soKhieuNaiTrungBinh = soKhieuNaiTrungBinh + 1;
    } else if (loaiPhanHoi == 1 && mucDo == 1) {
      ketQua = "→ Xử lý ngay tại quầy - Khiếu nại nhẹ";
      soKhieuNaiNhe = soKhieuNaiNhe + 1;
    } else if (loaiPhanHoi == 2) {
      ketQua = "→ Cảm ơn! Đề xuất đã được ghi nhận";
      soDeXuat = soDeXuat + 1;
    } else if (loaiPhanHoi == 3) {
      ketQua = "→ Cảm ơn bạn đã phản hồi tích cực!";
      soPhanHoiTichCuc = soPhanHoiTichCuc + 1;
    } else {
      ketQua = "→ Loại phản hồi không hợp lệ";
      tongSoPhanHoi = tongSoPhanHoi - 1;
    }

    let tenLoai = "";
    if (loaiPhanHoi == 1) {
      tenLoai = "Phàn nàn / Khiếu nại";
    } else if (loaiPhanHoi == 2) {
      tenLoai = "Đề xuất cải thiện";
    } else if (loaiPhanHoi == 3) {
      tenLoai = "Phản hồi tích cực / Khen ngợi";
    } else {
      tenLoai = "Không hợp lệ";
    }

    let tenMucDo = "";
    if (mucDo == 1) {
      tenMucDo = "Nhẹ";
    } else if (mucDo == 2) {
      tenMucDo = "Trung bình";
    } else if (mucDo == 3) {
      tenMucDo = "Nghiêm trọng";
    } else {
      tenMucDo = "Không áp dụng";
    }

    alert(
      "===== KẾT QUẢ XỬ LÝ =====\n" +
        "Tên bạn đọc: " +
        tenBanDoc +
        "\n" +
        "Mã thẻ: " +
        (maThe == "" ? "Không có" : maThe) +
        "\n" +
        "Loại phản hồi: " +
        tenLoai +
        "\n" +
        "Mức độ: " +
        tenMucDo +
        "\n" +
        "Nội dung: " +
        noiDung +
        "\n" +
        "------------------------\n" +
        "Kết quả: " +
        ketQua,
    );

    console.log(ketQua);
  } else {
    alert("Vui lòng nhập 'có' hoặc 'không'!");
  }
}
