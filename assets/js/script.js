// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var nineAM = document.getElementById('9');
var tenAM = document.getElementById('10');
var elevenAM = document.getElementById('11');
var twelvePM = document.getElementById('12');
var onePM = document.getElementById('13');
var twoPM = document.getElementById('14');
var threePM = document.getElementById('15');
var fourPM = document.getElementById('16');
var fivePM = document.getElementById('17');
var btn = document.getElementsByClassName('btn');
var timeBlocks = document.querySelectorAll('.time-block');
var textAreas = document.querySelectorAll('textarea')


var timeslot = [];
var tasksInput = [];

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


/*Adds click funtionality to all buttons. Button input is drawn through DOM by accessing the button's
 previousElementSibling which is the text area, and grabs the value from that. The function is 
 supposed to end if the textarea is empty and the button is clicked but it's currently still logging
 an empty input. It then takes the entered values and stores them to local storage as a key value
 pair with the timeslot as the key and the tasksInput as the value. The necessity of creating a pair
 with a key of the time slot and a value of the user input was suggested by classmate Jarrett
 Butler.
*/
  $(btn).click(function(event) {
  event.preventDefault();
  tasksInput = this.previousElementSibling.value;
  timeSlot = this.parentElement.getAttribute('id');
  if (tasksInput == '') {
    return;
  }
  localStorage.setItem(timeSlot, tasksInput);
  console.log(timeSlot);
  console.log(tasksInput);
});

function displayStorage() {
  for (var i = 0; i < timeBlocks.length; i++) {
    if ($(timeBlocks[i]).attr('id') == localStorage.getItem(i)) {
      console.log(timeBlocks[i].children[1]);
    }
    // $(textAreas[i]).text(localStorage.getItem(i))
  }
};
console.log(textAreas);
displayStorage();

  // This function applies the classes of present, past, and future to the timeBlocks variable if it's id attribute aligns with the daysjs 24 hour time format. Using Jquery and the .attr('id') method was found at https://stackoverflow.com/questions/19304343/using-the-id-for-if-condition the top rated answer posted by Mike H.
  function blockClass() {
    for (var i = 0; i < timeBlocks.length; i++) {
      if ($(timeBlocks[i]).attr('id') == dayjs().format('H')) {
       $(timeBlocks[i]).addClass("present");
      } else if ($(timeBlocks[i]).attr('id') < dayjs().format('H')) {
        $(timeBlocks[i]).addClass("past");
      } else {
        $(timeBlocks[i]).addClass("future");
      }
    };
  }
  blockClass();
  
  // Jquery call to the currentDay ID to display the dayjs var function in specified format
  setInterval(function() {
    // var today = dayjs();
  $('#currentDay').text(dayjs().format('MMMM D, YYYY H:mm A'));
  }, 1000);
});
