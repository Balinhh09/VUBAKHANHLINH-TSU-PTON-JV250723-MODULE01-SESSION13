const inputString = prompt("Mời bạn nhập vào một dãy số (ví dụ: 10,25,5,80,15):");
const numbersArray = inputString.split(',');
let maxNumber = Number(numbersArray[0]); 

for (let i = 1; i < numbers.length; i++) {
  const currentNumber = Number(numbersArray[i]); 
  if (currentNumber > maxNumber) {
    maxNumber = currentNumber;
  }
}

alert("Giá trị lớn nhất trong dãy số là: " + maxNumber);