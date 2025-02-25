const age = 61;
const price = 500;

if ( age <= 12){
    console.log("You can eat free");
}
else if (age >= 60) {
    //40% discount
    const discount = price * 40/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price);
}