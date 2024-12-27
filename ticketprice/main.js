function calculateticketprice(age){
    if (age<=12 && age > 0) {
        return "$10";
    }else if ( age >=13 && age <= 17){
        return "$15";
    } else if ( age >= 18) {
        return "$20";
    }
    else {
        return "Invalid age!";
    }
}


console.log(calculateticketprice(32));