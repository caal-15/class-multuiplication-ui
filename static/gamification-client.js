function updateLeaderBoard() {
    $.ajax({
        url: "http://localhost:8082/leaders"
    }).then(function(data) {
        $('#leaderboard-body').empty();
        data.forEach(function(row) {
            $('#leaderboard-body').append('<tr><td>' + row.userAlias + '</td>' +
                '<td>' + row.totalScore + '</td>');
        });
    });
}

function updateStats(userAlias) {
    $.ajax({
        url: "http://localhost:8082/stats?userAlias=" + userAlias,
        success: function(data) {
            $('#stats-div').show();
            $('#stats-user-id').empty().append(userAlias);
            $('#stats-score').empty().append(data.score);
            $('#stats-badges').empty().append(data.badges.join());
        },
        error: function(data) {
            $('#stats-div').show();
            $('#stats-user-id').empty().append(userId);
            $('#stats-score').empty().append(0);
            $('#stats-badges').empty();
        }
    });
}

$(document).ready(function() {

    updateLeaderBoard();

    $("#refresh-leaderboard").click(function( event ) {
        updateLeaderBoard();
    });

});
