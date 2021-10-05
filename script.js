let currentDay = $('#currentDay');


function todaysDate() {
let today = moment().format('dddd MMM, Do');
currentDay.text(today);
}





todaysDate()
