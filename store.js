
let isWeekend = false
let isHoliday = false
let currentTime = 11

if (isWeekend == true || isHoliday == true) {
    return("The store is closed");
  }
  
  else if (currentTime >= 8 && currentTime <= 18 ) { 
     return("The store is open");
  }

  else { 
    console.log("The store is closed")
  }