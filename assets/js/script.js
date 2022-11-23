// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var nineAM = document.getElementById('#09');
var tenAM = document.getElementById('#10');
var elevenAM = document.getElementById('#11');
var twelvePM = document.getElementById('#12');
var onePM = document.getElementById('#13');
var twoPM = document.getElementById('#14');
var threePM = document.getElementById('#15');
var fourPM = document.getElementById('#16');
var fivePM = document.getElementById('#17');
var btn = document.getElementById('.btn');
var timeBlocks = document.querySelectorAll('.time-block');

var today = dayjs();

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  

  // This function applies the classes of present, past, and future to the timeBlocks variable if it's id attribute aligns with the daysjs 24 hour time format. Using Jquery and the .attr('id') method was found at https://stackoverflow.com/questions/19304343/using-the-id-for-if-condition the top rated answer posted by Mike H.
  function blockClass() {
    for (var i = 0; i < timeBlocks.length; i++) {
      if ($(timeBlocks[i]).attr('id') == today.format('HH')) {
       $(timeBlocks[i]).addClass("present");
      } else if ($(timeBlocks[i]).attr('id') < today.format('HH')) {
        $(timeBlocks[i]).addClass("past");
      } else {
        $(timeBlocks[i]).addClass("future");
      }
    };
  }
  blockClass();
  
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

  // TODO: Add code to display the current date in the header of the page.
  
  
  // Jquery call to the currentDay ID to display the dayjs var function in specified format
  $('#currentDay').text(today.format('MMMM D, YYYY HH:mm A'));
});
