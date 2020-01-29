$(document).ready(function () {

    function dayPlanner() {
        var now = moment();
        var currentDay = $("#currentDay").text(now.format('dddd, MMMM Do, h:mm A'));
        console.log(currentDay);
        var hours = now.hour();
        $(".time-block").each(function () {
            var blockTime = $(this).attr("data-time");
            if (hours > blockTime) {
                $(this).css("background-color", "grey");
            } else if (hours < blockTime) {
                $(this).css("background-color", "green");
            } else {
                $(this).css("background-color", "red");
            }
        })
    };
    
    dayPlanner();

    $(".saveBtn").on("click", function () {
        var timeForWork = $(this).parent().attr("data-time");
        var key = buildKey(timeForWork);
        var reminder = $(this).parent().find("textarea").val();
        localStorage.setItem(key, reminder);
    });

    $(".time-block").each(function () {
        var elementTime = $(this).attr("data-time");
        var key = buildKey(elementTime);
        var currNote = localStorage.getItem(key);
        $(this).find("textarea").val(currNote);
    });

    function buildKey(input) {
        var keyPrefix = moment().format("MMM-Do-YY");
        return `${keyPrefix}-${input}`;
    }

})