let currentDay = $('#currentDay');
let container = $('.container');
let saveButtonEl = $('.col-1.fas.fa-save');
let textArea = $('.textarea');




function todaysDate() {
let today = moment().format('dddd MMMM Do');
currentDay.text(today);
}


saveButtonEl.on('click',function(){

    const text = $(this).siblings("textarea").val();
    const time = $(this).siblings("div").text();
  
    console.log(text);
    console.log(time);
  
    // localStorage.setItem(time, text);

    localStorage.setItem("tasks", JSON.stringify(time, text));

    // let userInput = JSON.parse(localStorage.getItem(time, text))

})





todaysDate()
