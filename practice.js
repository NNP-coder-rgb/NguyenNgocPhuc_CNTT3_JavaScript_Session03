// Khai báo các biến cần thiết
let passWord = "";
let count = 0;
let isLogin = false;

do {
  passWord = prompt("Vui lòng nhập mật khẩu");

  if (passWord != "admin123") {
    count++;
    if (count === 3) {
      alert("Tài khoản bị khóa");
    }
  } else {
    alert("Đăng nhập thành công");
    isLogin = true;
    break;
  }
} while (passWord != "admin123" && count < 3);

// Xử lý các case
if (isLogin) {
  let choice;
  let quantity;
  let totalPrice = 0;
  do {
    choice = +prompt("Vui lòng nhập lựa chọn");
    switch (choice) {
      case 1:
        quantity = +prompt("Vui lòng nhập số lượng sách");

        // Tiến hành nhập thông tin của tưng cuốn sách
        for (let i = 1; i <= quantity; i++) {
          let price = +prompt(`Nhập giá tiền của cuốn sách thứ: ${i}`);

          if (price <= 0 || isNaN(price)) {
            console.log("Giá tiền không hợp lệ");
            continue;
          }

          totalPrice += price;
        }
        console.log("Tổng số tiền là: ", totalPrice);

        break;
      case 2:
        for (let i = 1; i <= 3; i++) {
          for (let j = 1; j <= 5; j++) {
            if (i === 2 && j === 3) {
              console.log("Đang sửa chữa");
              continue;
            }
            console.log(`Khu vực ${i} - Kệ sách số ${j}`);
          }
        }
        break;
      case 3:
        break;
      default:
        console.log("Lựa chọn không hợp lệ");
        break;
    }
  } while (choice != 3);
}
