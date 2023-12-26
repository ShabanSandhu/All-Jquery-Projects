
// variables declerations
let modalForStopWatch = $("#modalForStopWatch")
let hours = $("#hours")
let minutes = $("#minutes")
let seconds = $("#seconds")
let btnForPlay = $("#btnForPlay")
let btnForStop = $("#btnForStop")
let btnForReset = $("#btnForReset")
var timerInterval; // Variable to hold the timer interval
var elapsedSeconds = 0; // Variable to keep track of elapsed time in seconds
var elapsedMinutes = 0;
var elapsedHoures = 0;
// end variables declerations



$(document).ready(function () {
    debugger
    modalForStopWatch.show()
    modalForStopWatch.addClass("overlay")

    $(".btn-close").click(
        function () {
            modalForStopWatch.hide()
            modalForStopWatch.removeClass("overlay")
        }
    )

})



// this funtion for sec
function updateTimerForSec() {
    if (elapsedSeconds < 60) {
        elapsedSeconds++;
    } else {
        elapsedSeconds = 0; // Reset the timer to 0 when it reaches 60 seconds
        if (elapsedMinutes < 60) {
            elapsedMinutes++
            if(elapsedMinutes <= 9)
            {
            minutes.text("0"+elapsedMinutes+":")
            }
            else{
                minutes.text(elapsedMinutes)
            }
        }
        else {
            elapsedMinutes = 0;
            if (elapsedHoures < 12) {
                elapsedHoures++
                if (elapsedHoures <= 9)
                {
                hours.text("0"+elapsedHoures+":")
                }
                else{
                    hours.text(elapsedHoures)                    
                }
            }
        }
    }
    if(elapsedSeconds <= 9)
    {
        seconds.text("0"+elapsedSeconds);
    }
    else{
        seconds.text(elapsedSeconds);
    }
    
}
// end 



btnForPlay.click(function () {
    debugger
    if (!timerInterval) {
        timerInterval = setInterval(updateTimerForSec, 1000); // Update the timer every 1000 milliseconds (1 second)
    }
});


// stop btn work
btnForStop.click(function() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
});
// end stop btn


// reset btn working
btnForReset.click(function() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedSeconds = 0;
    elapsedMinutes = 0;
    elapsedHoures = 0;
    seconds.text("0"+elapsedSeconds);
    minutes.text("0"+elapsedMinutes+":")
    hours.text("0"+elapsedHoures+":")
}); 
// end 