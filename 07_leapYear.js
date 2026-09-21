const leap_year = year => {
    return year % 4 === 0 && year % 100 !== 0;
};

console.log(leap_year(2024));