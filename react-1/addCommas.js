/* Write a function called addCommas which accepts a number and converts it into a string formatted with commas added for readability. */

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


module.exports = addCommas;