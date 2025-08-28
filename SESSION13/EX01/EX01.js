let arr = [];

for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 100);
  arr.push(randomNumber);
}

console.log(`Mảng gồm 10 phần tử ngẫu nhiên là: ${arr}`);