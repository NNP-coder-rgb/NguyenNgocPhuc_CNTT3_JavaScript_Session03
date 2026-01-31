let tongSoSach = 0;
let soSachMat = 0;
let soSachHet = 0;
let soSachTonNhieu = 0;
let soSachTonBinhThuong = 0;

let tiepTuc = true;

while (tiepTuc) {
  let choice = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

  if (choice == null || choice.toLowerCase() == "không") {
    tiepTuc = false;

    alert(
      "========== BÁO CÁO KIỂM KÊ SÁCH ==========\n" +
        "Tổng số sách đã kiểm kê: " +
        tongSoSach +
        " cuốn\n" +
        "-------------------------------------------\n" +
        "Số sách mất: " +
        soSachMat +
        " cuốn\n" +
        "Số sách hết hàng: " +
        soSachHet +
        " cuốn\n" +
        "Số sách tồn kho nhiều (≥10): " +
        soSachTonNhieu +
        " cuốn\n" +
        "Số sách tồn kho bình thường (1-9): " +
        soSachTonBinhThuong +
        " cuốn\n" +
        "===========================================",
    );
  } else if (choice.toLowerCase() == "có") {
    let maSach = prompt("Nhập mã sách (không được để trống):");

    if (maSach == null || maSach.trim() == "") {
      alert("Mã sách không được để trống! Vui lòng nhập lại.");
      continue;
    }

    let tenSach = prompt("Nhập tên sách:");
    let soLuongThucTe = parseInt(
      prompt("Nhập số lượng thực tế trong kho (≥0):"),
    );

    let tinhTrang = parseInt(
      prompt(
        "Nhập tình trạng sách:\n1 - Bình thường (có thể cho mượn)\n2 - Mất (không còn trong kho)",
      ),
    );

    tongSoSach++;

    let ketQua = "";

    if (tinhTrang == 2) {
      ketQua = "Sách mất";
      soSachMat++;
    } else if (tinhTrang == 1 && soLuongThucTe == 0) {
      ketQua = "Sách hết hàng (vẫn còn trong hệ thống)";
      soSachHet++;
    } else if (tinhTrang == 1 && soLuongThucTe >= 10) {
      ketQua = "Sách tồn kho nhiều";
      soSachTonNhieu++;
    } else if (tinhTrang == 1 && soLuongThucTe >= 1 && soLuongThucTe <= 9) {
      ketQua = "Sách tồn kho bình thường";
      soSachTonBinhThuong++;
    } else {
      ketQua = "Tình trạng không hợp lệ";
      tongSoSach--;
    }

    alert(
      "===== KẾT QUẢ KIỂM KÊ =====\n" +
        "Mã sách: " +
        maSach +
        "\n" +
        "Tên sách: " +
        tenSach +
        "\n" +
        "Số lượng thực tế: " +
        soLuongThucTe +
        " cuốn\n" +
        "Tình trạng: " +
        (tinhTrang == 1
          ? "Bình thường"
          : tinhTrang == 2
            ? "Mất"
            : "Không hợp lệ") +
        "\n" +
        "------------------------\n" +
        "Phân loại: " +
        ketQua,
    );
  } else {
    alert("Vui lòng nhập 'có' hoặc 'không'!");
  }
}
