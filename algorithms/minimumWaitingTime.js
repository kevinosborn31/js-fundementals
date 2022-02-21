// Given an array representing amounts of time that specific queries take to execute. Only
// one can be executed at a time. Function returns the minimum amount of total wait time
// for all queries.

function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let minimumWait = 0;
    let newQuery = [];
    queries.pop();
    for (i=0; i < queries.length; i++){
        newQuery.push(queries[i])
        minimumWait += newQuery.reduce((a, b) => a + b)
    }
    return minimumWait;
}