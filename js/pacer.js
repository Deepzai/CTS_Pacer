$(document).ready(function() {
    $("#submitInfo").on("click", function(){
        var currentPercentage = parseInt($("#currentPercentage").val(), 10);
        var outputText = "You are currently: " + currentPercentage + "%";
        var validInput = true;

        switch(true) {
            case isNaN(currentPercentage):
                outputText = "You must enter a valid number (0-100).";
                validInput = false;
                break;
            case (currentPercentage < 0):
                outputText = "You must enter a positive number.";
                validInput = false;
                break;
            case (currentPercentage > 100):
                outputText = "You must enter a number between 0-100.";
                validInput = false;
                break;
        }
        animate('#output_text', outputText, "slow");

        if (validInput) {
            animate('#confirm_text', "Is this correct? ", "slow")
            append_confirmation();
            $("#submitInfo").toggle();
        }
    });
});

function animate(target, output, speed) {
    $(target).hide();
    $(target).text(output);
    $(target).fadeIn(speed);
}

function append_confirmation() {
    var element1 = "<button class='button1'>Yes</button>"
    var element2 = "<button class='button1'>No</button>";
    $('.confirm_div').append(element1, element2);
}
