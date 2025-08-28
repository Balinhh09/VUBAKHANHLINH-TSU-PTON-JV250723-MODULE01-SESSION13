let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let inputNumber = Number(prompt("Mời nhập vào một số: "));

if (isNaN(inputNumber)) {
  alert("Đây không phải là một số hợp lệ. Vui lòng nhập lại!");
} else {
  if (numbers.includes(inputNumber)) {
    alert("Bingo!");
  } else {
    alert("Chúc bạn may mắn lần sau!");
  }
}