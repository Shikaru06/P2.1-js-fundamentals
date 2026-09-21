const today_date = () => {
let today = new Date();
return today.toISOString(); 
}

console.log(today_date());