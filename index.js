// Code your solution here

// Array of drivers
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

/* findMatching - returns all drivers that match the passed in name', function () {
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby */

function findMatching(array, name){
    //The filter() method creates a new array filled with
    // elements that pass a test provided by a function
    return array.filter(function (driver){
        return driver.toLowerCase() === name.toLowerCase()
    })
};
findMatching(drivers, 'Bobby')

/* fuzzyMatch function takes an array of drivers' names and 
a string as arguments for querying the array, and returns all 
drivers whose names begin with the provided letters.
returns a driver if beginning provided letters match
does not return drivers if only middle or ending letters match
does not return drivers if only middle or ending letters match
 */
function fuzzyMatch(array, name){
    return array.filter(function (driver){
        return driver.toLowerCase().substring(0, name.length) === name.toLowerCase()
    })
};
fuzzyMatch(drivers, 'Bobby')

//matchName - This function takes an array of driver objects and a
// string as arguments. Each driver object has two properties: name and hometown. The function should return each element 
//whose name property matches the provided string argument.

function matchName(drivers, argument) {
    return drivers.filter(function (driver) {
        return driver.name === argument
    })
};
