// promise states --> pending, fufilled, rejected


// Need to always pass in resolve/reject
const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Something went wrong')), 1000);
});

console.log(promise);

setTimeout(() => console.log(promise), 1500);


// Will wait for promise state to change from 'pending'
// Then function returns a promise
promise.then(console.log).catch(error => console.log(error));


const promise2 = Promise.resolve(3);

// Massive then chain example
promise
.then(value => value * 2)
.then(value => value + 1)
.then(value => {
    // Rejects promise, will be caught by .catch below
    throw new Error('Something went wrong');
})
.then(console.log)
.catch (error => {
    console.log('BIG ERROR ALERT' + error)
    return 10;
})
.then(console.log)
// Same as then/catch, but takes no parameters like .then .catch
// Will run regardless of whether it's filled or rejected, as long as it isn't pending
.finally(() => console.log('DONE'));

// Takes in an array of promises
// Will wait for ALL promises to finish, otherwise will just move to catch
Promise.all([
    Promise.resolve(3),
    Promise.reject(5),
    new Promise((res, rej) => setTimeout(() => res(5), 1000))
]).then(console.log).catch(console.log);

// First promise to resolve will be returned. In this case the res(1) will resolve as it has lowest timeout value
Promise.race([
    new Promise((res, rej) => setTimeout(() => res(3), 3000)),
    new Promise((res, rej) => setTimeout(() => res(2), 2000)),
    new Promise((res, rej) => setTimeout(() => res(1), 1000)),
]).then(console.log).catch(console.log);

// Returns first promise that is fufilled
Promise.any([
    new Promise((res, rej) => setTimeout(() => res(3), 3000)),
    new Promise((res, rej) => setTimeout(() => res(2), 2000)),
    new Promise((res, rej) => setTimeout(() => res(1), 1000)),
]).then(console.log).catch(console.log);





const asdf = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Something went wrong')), 1000);
});

