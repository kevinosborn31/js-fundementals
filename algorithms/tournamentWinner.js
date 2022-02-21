// Array of pairs representing teams that are competing. And an array containing the results
// of each competition. Function will return the winner of the tournament

function tournamentWinner(competitions, results) {
    let teams = {};
    for (i=0; i < competitions.length; i++) {
        teams[competitions[i][0]] = 0;
        teams[competitions[i][1]] = 0;
    }

    for (i=0; i < competitions.length; i++) {
        const homeTeam = competitions[i][0];
        const awayTeam = competitions[i][1];
        if (results[i] === 0) {
            teams[awayTeam] += 3;
        } 
        if (results[i] === 1) {
            teams[homeTeam] += 3;
        }
    }
    let winningTeam = Object.keys(teams).reduce((a, b) => teams[a] > teams[b] ? a : b);
    return winningTeam;
}