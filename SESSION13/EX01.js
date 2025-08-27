let arr = [];

for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  arr.push(randomNumber);
}

console.log(arr);