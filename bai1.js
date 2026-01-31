let count = +prompt("Hôm nay có bao nhiêu lượt mượn sách");

for (let i = 1; i <= count; i++) {
  let bookName = prompt("Nhập vào tên sách");
  let fullName = prompt("Nhập vào tên người mượn");
  let dayCount = +prompt("Nhập vào số ngày mượn");

  if (dayCount > 14) {
    console.log(`Tên người mượn: ${fullName} Tên sách: ${bookName}`);
    console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
  } else if (dayCount <= 14 && dayCount > 0) {
    console.log(`Tên người mượn: ${fullName} Tên sách: ${bookName}`);
    console.log("Mượn thành công");
  }
}

console.log("Tổng số lượt mượn là: ", count);
