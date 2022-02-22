const person = {
    firstName: 'Kevin',
    lastName: 'Osborn',
    age: 21,
    isAwesome: true,
    friends: ['Adam', 'Matt', 'Ana'],
    [mykey]: 1234,
    'multi word key': 0,
};

console.log(person.firstName);
console.log(person['multi-word-key'])


person.friends[1] = 'N/A';

console.log(person.friends);

person.job = 'Software Engineer';


delete person.isAwesome;


if (person.isAwesome) {
    person.job = 'Awesomeness';
}


console.log({} === {}); // should be false


// Object constructor

const obj = new Object();

obj.name = 'Kevin';

console.log(obj);


function Website(name, rating, isAwesome) {
    this.name = name;
    this.rating = rating;
    this.founders = founders;
}


const google = new Website();

const facebook = new Website();

const bing = new Website();

