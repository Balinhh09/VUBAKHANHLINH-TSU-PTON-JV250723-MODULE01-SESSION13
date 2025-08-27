const inputString = prompt("Mời bạn nhập vào một dãy số, cách nhau bằng dấu phẩy (ví dụ: 1,2,3,4,5):");
const numbersArray = inputString.split(',');
numbersArray.reverse();

console.log("Mảng sau khi được đảo ngược là:", numbersArray);