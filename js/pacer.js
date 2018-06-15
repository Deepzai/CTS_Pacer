$(document).ready(function() {
    $("#submitInfo").on("click", function() {
        var currentPercentage = parseInt($("#currentPercentage").val(), 10);
        var outputText = "You are currently: " + currentPercentage + "%";
        var validInput = true;

        switch(true) {
            case isNaN(currentPercentage):
                alterAlert(".output_div", "alert-primary", "alert-danger");
                outputText = "You must enter a valid number (0-100).";
                validInput = false;
                break;
            case (currentPercentage < 0):
                alterAlert(".output_div", "alert-primary", "alert-danger");
                outputText = "You must enter a positive number.";
                validInput = false;
                break;
            case (currentPercentage > 100):
                alterAlert(".output_div", "alert-primary", "alert-danger");
                outputText = "You must enter a number between 0-100.";
                validInput = false;
                break;
        }

        if (validInput) {
            alterAlert(".output_div", "alert-danger", "alert-success");
            animate('#confirm_text', "Is this correct? ", 1250)
            append_confirmation();
            $("#submitInfo").hide();
        }

        animate('#output_text', outputText, 800);

        $('#btn_yes').on("click", function() {
            $("#btn_yes").fadeOut(700);
            $("#btn_no").fadeOut(700);
            $("#confirm_text").fadeOut(600);
            animate('#output_text', "Okay. Working on it...", 1500);
            $('.output_div').addClass("breathing");
            //generate table

            // ajax call to where Video Names are saved
            $.ajax({
                url:'https://www.dropbox.com/s/4r1scr8y5x0ef5f/cts_2018.txt?raw=1',
                success: function (data) {
                    videos = data.split("\n");
                    //videos contains all the data (n-1 where n is video #)
                    alert(videos[322-1])
                }
            });
            
        });
    });
});

function animate(target, output, speed) {
    $(target).hide();
    $(target).fadeOut(speed);
    $(target).text(output);
    $(target).fadeIn(speed);
}

function append_confirmation() {
    var element1 = "<button type='button' class='shift btn btn-primary btn-sm' id='btn_yes'>Yes</button>"
    var element2 = "<button type='button' class='shift btn btn-secondary btn-sm' id='btn_no'>No</button>";
    $('.confirm_div').append(element1, element2);
}

function alterAlert(target, remove, add) {
    $(target).removeClass(remove);
    $(target).addClass(add);
}

function outputText(obj) {
    $.ajax({
        url:'https://www.dropbox.com/s/4r1scr8y5x0ef5f/cts_2018.txt?raw=1',
        success: function (data) {
            obj = data;
        }
    });
}
