let arrayIntergerNumber = [7, 14, 21, 56, 63, 70, 77, 91, 5, 7, 12, 14, 19, 21];
let k = 7;
let count = 0;

for (let i = 0; i < arrayIntergerNumber.length; i++) {
    if (arrayIntergerNumber[i] === k) {
        count++;
    }
}

alert(`${k} xuất hiện ${count} lần.`);
console.log(`Mảng đã cho: `, arrayIntergerNumber)