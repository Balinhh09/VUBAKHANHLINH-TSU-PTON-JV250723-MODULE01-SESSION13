let randomIntergerNumber = [];
let arrayLength = Math.floor(Math.random() * 11) + 10;

for (let i = 0; i <= arrayLength; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomIntergerNumber.push(randomNumber);
}

console.log(randomIntergerNumber);

let oddSum = 0;
let evenSum = 0;

for (let i = 0; i < randomIntergerNumber.length; i++) {
    let currentNumber = randomIntergerNumber[i];
    if (currentNumber % 2 === 0) {
        evenSum += currentNumber;
    } else {
        oddSum += currentNumber;
    }
} 

alert(`Tổng các số chắn trong mảng là: ${evenSum}`);
alert(`Tổng các số lẻ trong mảng là: ${oddSum}`);