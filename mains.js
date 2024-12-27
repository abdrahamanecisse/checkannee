function isleapyear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return true //it's a leap year
    }else if (year % 400 === 0){
        return true; //it's a leap year
    }
    
    else {
      return false; //it's not a leap year
    }
}

console.log(isleapyear(2024)); // true
console.log(isleapyear(1900)); // folse
console.log(isleapyear(2000)); // true
console.log(isleapyear(2023)); // false