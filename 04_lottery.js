let number;

const random_number = (min, max) => {
    return Math.round(Math.random() * max) + min;
};

for (let i = 0; i < 10; i++) {
    number = random_number(0, 99999).toString();
    while(number.length < 5){
        number = "0" + number;
    }

    console.log(number);

}