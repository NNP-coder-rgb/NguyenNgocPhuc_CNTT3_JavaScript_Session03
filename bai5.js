let tongYeuCau = 0;
let soThanhCong = 0;
let soTuChoi = 0;
let soChoXetDuyet = 0;

let tiepTuc = true;

while (tiepTuc) {
  let choice = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

  if (choice == null || choice.toLowerCase() == "không") {
    tiepTuc = false;

    alert(
      "========== BÁO CÁO CA LÀM VIỆC ==========\n" +
        "Tổng số yêu cầu đã xử lý: " +
        tongYeuCau +
        " yêu cầu\n" +
        "-------------------------------------------\n" +
        "Số yêu cầu đặt trước thành công: " +
        soThanhCong +
        " yêu cầu\n" +
        "Số yêu cầu bị từ chối: " +
        soTuChoi +
        " yêu cầu\n" +
        "Số yêu cầu chờ xét duyệt: " +
        soChoXetDuyet +
        " yêu cầu\n" +
        "===========================================",
    );
  } else if (choice.toLowerCase() == "có") {
    let tenBanDoc = prompt("Nhập tên bạn đọc:");
    let maSach = prompt("Nhập mã sách muốn đặt trước:");
    let tenSach = prompt("Nhập tên sách:");
    let soNgayCho = parseInt(prompt("Nhập số ngày dự kiến chờ (≥1):"));
    let uuTien = parseInt(
      prompt(
        "Nhập mức ưu tiên:\n1 - Sinh viên bình thường\n2 - Giảng viên/Nghiên cứu sinh\n3 - Nhân viên thư viện/Đặc cách",
      ),
    );

    tongYeuCau++;

    let ketQua = "";

    if (soNgayCho > 45) {
      ketQua = "Từ chối: Thời gian chờ quá lâu (>45 ngày)";
      soTuChoi++;
    } else if (uuTien == 3) {
      ketQua = "Đặt trước thành công - Ưu tiên đặc cách cao nhất";
      soThanhCong++;
    } else if (uuTien == 2 && soNgayCho <= 30) {
      ketQua = "Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu";
      soThanhCong++;
    } else if (uuTien == 1 && soNgayCho <= 21) {
      ketQua = "Đặt trước thành công";
      soThanhCong++;
    } else {
      ketQua = "Đặt trước tạm thời - Chờ xét duyệt thêm";
      soChoXetDuyet++;
    }

    let tenUuTien = "";
    if (uuTien == 1) {
      tenUuTien = "Sinh viên bình thường";
    } else if (uuTien == 2) {
      tenUuTien = "Giảng viên/Nghiên cứu sinh";
    } else if (uuTien == 3) {
      tenUuTien = "Nhân viên thư viện/Đặc cách";
    } else {
      tenUuTien = "Không hợp lệ";
    }

    alert(
      "===== KẾT QUẢ XỬ LÝ YÊU CẦU =====\n" +
        "Tên bạn đọc: " +
        tenBanDoc +
        "\n" +
        "Mã sách: " +
        maSach +
        "\n" +
        "Tên sách: " +
        tenSach +
        "\n" +
        "Số ngày dự kiến chờ: " +
        soNgayCho +
        " ngày\n" +
        "Mức ưu tiên: " +
        tenUuTien +
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
