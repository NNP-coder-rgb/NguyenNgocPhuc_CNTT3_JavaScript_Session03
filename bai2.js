let count = prompt("Hôm nay có bao nhiêu lượt trả sách");
let dayCount;
let countLate = 0;
for (let i = 1; i <= count; i++) {
  let bookName = prompt("Nhập vào tên sách");
  let fullName = prompt("Nhập vào tên người mượn");

  do {
    dayCount = +prompt("Nhập vào số ngày mượn");
  } while (dayCount < 1);

  if (dayCount <= 14) {
    console.log(`
        Tên người mượn: ${fullName} 
        Tên sách: ${bookName}
        `);
    console.log("Trả đúng hạn");
  } else if (dayCount >= 15 && dayCount <= 21) {
    console.log(`
        Tên người mượn: ${fullName} 
        Tên sách: ${bookName}
        `);
    console.log("Trả muộn nhẹ Phạt nhắc nhở");
    countLate++;
  } else {
    console.log(`
        Tên người mượn: ${fullName}
        Tên sách: ${bookName}
        `);
    console.log("Quá hạn nghiêm trọng" + " Cần ghi biên bản phạt");
    countLate++;
  }
}

console.log("Tổng số lượt trả sách là: ", count);
console.log("Số lượt trả muộn là: ", countLate);
