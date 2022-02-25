const apiData = {
    name: "Kevin",
    age: 21,
    occupation: "Software Engineers",
    company: "Atlassian"
}



function getBackEndData(data) {
    return new Promise((resolve, reject) => {
        if (!data) {
            reject("Sorry there is no data");
        }
        resolve(data);
    });
}


const dataPromise = getBackEndData(apiData);
console.log(dataPromise);

async function resolveDataPromise() {
    try {
        console.log(await dataPromise);
    } catch (err) {
        console.log(`There is an error, additional output below: ${err}`);
    }
}

resolveDataPromise();