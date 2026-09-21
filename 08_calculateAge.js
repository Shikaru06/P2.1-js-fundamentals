const calculateAge = birthYear => {
    const currentYear = new Date().getFullYear();

    return currentYear - birthYear;
};

console.log(calculateAge(2007));