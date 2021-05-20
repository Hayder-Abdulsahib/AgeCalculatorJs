// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.  

// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  let roundedYear, roundedMonth, roundedDay;
  if (Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day)) {
    return true;
  }
  else
    return false;
}




// This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year, month, day) {
  let now = new Date();
  let trueMonth = month - 1;
  let birth = new Date(year, trueMonth, day);
  let difference = new Date(now - birth);
  let hisYear = difference.getUTCFullYear();
  let age = Math.abs(hisYear - 1970);

  if (age >= 18) return true;
  else return false;
}




function calculateAgeFn(year, month, day) {
  if (checkParamsFn(year, month, day)) {
    if (checkOverEighteenFn(year, month, day)) {
      let now = new Date();
      let trueMonth = month - 1;
      let birth = new Date(year, trueMonth, day);
      let difference = new Date(now - birth);
      let hisYear = difference.getUTCFullYear();
      let age = Math.abs(hisYear - 1970);
      return Math.round(age);
    }
    else return "error: age smaller that 18"
  }
  else return "error: invalid date"


}





// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;

