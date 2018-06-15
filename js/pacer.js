$(document).ready(function() {
    $("#submitInfo").on("click", function(){
        var currentPercentage = parseInt($("#currentPercentage").val(), 10);

        var data = ((isNaN(currentPercentage) || currentPercentage < 0)
        ? "stop breaking me. enter a proper number."
        : ("Currently: " + currentPercentage + "%"))

        $('#output').text(data);
    });
});
