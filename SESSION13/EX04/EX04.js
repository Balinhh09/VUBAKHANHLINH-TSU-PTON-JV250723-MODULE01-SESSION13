let inputString = prompt("Mời bạn nhập vào một dãy số (ví dụ: 10,25,5,80,15):");
let numbersArray = inputString.split(',');
let maxNumber = Number(numbersArray[0]); 

for (let i = 1; i < numbersArray.length; i++) {
  let currentNumber = Number(numbersArray[i]); 
  if (currentNumber > maxNumber) {
    maxNumber = currentNumber;
  }
}

alert("Giá trị lớn nhất trong dãy số là: " + maxNumber);