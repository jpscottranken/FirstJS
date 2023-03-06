let milesDriven = parseFloat(prompt("Enter miles driven", "567"))

while (isNaN(milesDriven) || milesDriven <= 0) {
  milesDriven = parseFloat(prompt("Enter miles driven", "567"))
}

let gallonsUsed = parseFloat(prompt("Enter gallons used", "17.8"))

while (isNaN(gallonsUsed) || gallonsUsed <= 0) {
  gallonsUsed = parseFloat(prompt("Enter gallons used", "17.8"))
}

const mpg = milesDriven / gallonsUsed
alert("Miles Driven: " + milesDriven.toFixed(2))
alert("Gallons Used: " + gallonsUsed.toFixed(2))
alert("Miles Per Gallon: " + mpg.toFixed(2))
