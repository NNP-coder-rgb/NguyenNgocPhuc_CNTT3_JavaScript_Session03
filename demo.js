// Loại vòng lặp biết trước số lần lặp(for)
for (let i = 1; i <= 10; i++) {
  console.log("Hello", i);
}

// cú pháp viết tắt
let i = 1;
for (; i <= 10; ) {
  console.log("Index vị trí thứ: ", i);
  i++;
}

// VÒng lặp không biết trước số lần lặp
// 1. While
let num = 1;
while (num <= 10) {
  console.log("num = ", num);
  num++;
}

// 2. Do ... While
// let pass = "1234";
// let passWord = "";
// while (passWord != "1234") {
//   passWord = prompt("Nhập vào mật khẩu của bạn");
// }

console.log("Đăng nhập thành công");

// Yêu cầu người dùng nhập vào một số cho đến khi nó là một số nguyên
let number = "";
while (number <= 0) {
  number = +prompt("Nhập số");
}

// Vòng lặp do-while
let firstNumber = 1;
do {
  console.log(firstNumber);
  firstNumber++;
} while (firstNumber <= 10);

// Yêu cầu người dung nhập mật khẩu, tối đa 3 lần
let passWord = "";
let count = 0;

// do {
//   passWord = prompt("Nhập mật khẩu của bạn");

//   if (passWord != "1234") {
//     count++;
//     if (count === 3) {
//       console.log("Nhập quá số lần");
//       break;
//     }
//   } else {
//     console.log("Đăng nhập thành công");
//   }
// } while (passWord != "1234" && count <= 3);

// VÒng lặp lồng nhau
// in bảng cửu chương

for (let i = 1; i <= 10; i++) {
  console.log("Bảng cửu chương ", i);

  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = ", i * j);
  }
}
