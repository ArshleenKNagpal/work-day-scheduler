let currentDay = $('#currentDay');
let container = $('.container');
let saveButtonEl = $('.col-1.fas.fa-save');
let textArea = $('.textarea');




function todaysDate() {
let today = moment().format('dddd MMMM Do');
currentDay.text(today);
}


saveButtonEl.on('click',function(){
console.log(saveButtonEl)

    // let textArea = $('');
    // textArea.text();
    // saveButtonEl.append(textArea)
    // console.log(textArea.value);

})


todaysDate()
