let tiepTuc = true;

while (tiepTuc) {
  let choice = prompt("Có yêu cầu gia hạn mới không? (có/không)");

  if (choice == null || choice.toLowerCase() == "không") {
    alert("Kết thúc chương trình!");
    tiepTuc = false;
  } else if (choice.toLowerCase() == "có") {
    let tenBanDoc = prompt("Nhập tên bạn đọc:");
    let tenSach = prompt("Nhập tên sách:");
    let soNgayDaMuon = parseInt(prompt("Nhập số ngày đã mượn hiện tại (≥1):"));
    let soNgayGiaHan = parseInt(prompt("Nhập số ngày muốn gia hạn thêm (≥1):"));

    let tongSoNgay = soNgayDaMuon + soNgayGiaHan;

    let ketQua = "";

    if (tongSoNgay > 60) {
      ketQua = "Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa";
    } else if (soNgayDaMuon > 45) {
      ketQua = "Không được gia hạn: Đã mượn quá lâu (>45 ngày)";
    } else {
      ketQua = "Gia hạn thành công";
    }
  } else {
    alert("Vui lòng nhập 'có' hoặc 'không'!");
  }
}
