let currentDay = $('#currentDay');
let saveButtonEl = $('.col-1.fas.fa-save');
let textArea = $('.textarea');


function todaysDate() {
    let today = moment().format('dddd MMMM Do');
    currentDay.text(today);
}


saveButtonEl.on('click', function () {
    let text = $(this).siblings("textarea").val();
    // let time = $(this).siblings("div").text();

         

    let time = $(this).siblings("div").attr("id");
    localStorage.setItem(time, text);
    
    console.log(text);
    console.log(time);
    console.log("thank you, your " + text + " has been saved");
})




// HIGHLIGHTING ROW BASED ON TIMES

let checkTime = function () {

    //Get Current time
    let currentTime = moment().format('hh');


    let time = $(".description");

    //loop through taskarea classes
    for (let i = 0; i < time.length; i++) {


        //Get element i's ID as a string
        let elementID = $(time[i].id);

        //get element by ID
        let manipID = document.getElementById(time[i].id)

        //remove any old classes from element
        elementID.removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }

        let userInput = localStorage.getItem(time[i].id)
         
        if(userInput){
            time[i].value = userInput
    
    }
}
}

todaysDate()
checkTime()
console.log(moment().format('hh'))
console.log($(this).siblings("div").text())

