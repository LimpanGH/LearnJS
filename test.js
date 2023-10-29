// OBJECTIVE
// 1. Get actual sleep
// 2. Define Ideal sleep
// 3. Calculate debt, or surplus

const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
  }
};
//console.log(getSleepHours('tuesday'));


let getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours( 'thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
//console.log(getActualSleepHours());


let getIdealSleepHours = (hours) => {
  idealHours = hours * 7;
  return idealHours;
}
//console.log(idealSleepHours());


let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    return (`You slept just the right amount of sleep.`);
  } else if (actualSleepHours < idealSleepHours) {
    return (`You slept ${(idealSleepHours - actualSleepHours).toFixed(1)} hours less than you need.`);
  }  else if (actualSleepHours > idealSleepHours) {
    return (`You slept ${(actualSleepHours - idealSleepHours).toFixed(1)} hours more than you need.`);
  } 
  
};
 console.log(calculateSleepDebt());




