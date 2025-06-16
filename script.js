var isDate = function (input) {
  const date = new Date(input);
  return Object.prototype.toString.call(input) === "[object Date]" && !isNaN(input.getTime())
    || typeof input === "string" && !isNaN(date.getTime())
    || typeof input === "number" && !isNaN(date.getTime());
};


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
