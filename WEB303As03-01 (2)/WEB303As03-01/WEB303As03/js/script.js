function fetchTeamDataUsingGetJSON() {
    $.getJSON("team.json", function(data) {
        $.each(data, function(index, member) {
            var memberInfo = "<h2>" + member.name + "</h2>" +
                             "<h5>" + member.position + "</h5>" +
                             "<p>" + member.bio + "</p>";
            $("#team").append(memberInfo);
        });
    });
}

function fetchTeamDataUsingAjax() {
    $("#team").text("Loading...");
    $.ajax({
        type: "GET",
        url: "team.json",
        dataType: "json",
        success: function(data) {
            $("#team").empty(); 
            $.each(data, function(index, member) {
                var memberInfo = "<h2>" + member.name + "</h2>" +
                                 "<h5>" + member.position + "</h5>" +
                                 "<p>" + member.bio + "</p>";
                $("#team").append(memberInfo);
            });
        },
        error: function() {
            $("#team").text("Error: Content could not be retrieved.");
        }
    });
}

$(document).ready(function() {
    fetchTeamDataUsingAjax();
});