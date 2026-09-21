function Multiplication_Table(number) {
    for (let index = 0; index <= 10; index++) {
        console.log(`${number} x ${index} = ${number * index}`);
    }
}

Multiplication_Table(1);
Multiplication_Table(2);

for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`);
  Multiplication_Table(i);
  console.log("--------------------------")
}