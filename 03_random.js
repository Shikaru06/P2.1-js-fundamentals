const random_number = (min, max) => {
    return Math.round(Math.random() * max) + min;
};

for (let i = 0; i < 10; i++) {
    console.log(random_number(0, 99999));
}

for (let i = 0; i < 10; i++) {
    console.log(random_number(10, 40));
}

for (let i = 0; i < 10; i++) {
    console.log(random_number(18, 90));
}

for (let i = 0; i < 10; i++) {
    console.log(random_number(1980, 2020));
}