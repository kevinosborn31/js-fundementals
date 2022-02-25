const people = ["Kevin", "Ana", "Charles", "Little Girl"];


const sky = "blue";


function peoplePromise(data) {
    return new Promise((resolve, reject) => {
        resolve(data)
        if (sky === "green") {
            reject("Sorry");
        }
    })
};

async function resolvePeoplePromise() {
    try {
        const response = await peoplePromise(people);
        console.log(response);
    } catch (err) {
        console.log("Sorry there is an error")
    }

}


resolvePeoplePromise();
