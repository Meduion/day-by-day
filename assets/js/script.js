var btn = document.getElementsByClassName('btn');
var timeBlocks = document.querySelectorAll('.time-block');
var textAreas = document.querySelectorAll('textarea')
var timeslot = [];
var tasksInput = [];

$(document).ready(function () {

  // Jquery call to the currentDay ID to display the dayjs var function in specified format
  setInterval(function() {
  $('#currentDay').text(dayjs().format('MMMM D, YYYY H:mm A'));
  }, 1000);

  blockClass();

  /* This function applies the classes of present, past, and future to the timeBlocks variable if it's id attribute
  aligns with the daysjs 24 hour time format. Using Jquery and the .attr('id') method was found at 
  https://stackoverflow.com/questions/19304343/using-the-id-for-if-condition the top rated answer posted 
  by Mike H.
  */

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

  /*Adds click funtionality to all buttons. Button input is drawn through DOM by accessing the button's
  previousElementSibling which is the text area, and grabs the value from that. The function is 
  ended if the textarea is empty and the button is clicked. It then takes the entered values and stores them to local storage as a key valuepair with the timeslot as the key and the tasksInput as the value. The necessity 
  of creating a pair with a key of the time slot and a value of the user input was suggested by classmate 
  Jarrett Butler.
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

  /* Uses Jquery to target the class .time-block and the .each function to move through them, and creates a
  variable to use to pull the keys from the local storage and write them to the textarea. 
  */
  function displayStorage() {
    $('.time-block').each(function() {
      let displayBox = $(this).attr("id");
      $(this).children('textarea').val(localStorage.getItem(displayBox));
    })
  };
    
displayStorage();  
});