const person = {
    isHuman: true
};

const child = Object.create(person, {
    maxAge: {
        value: 18,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

Object.setPrototypeOf(child, person);


const john = Object.create(child);
john.name = 'john';

const funcProto = Object.getPrototypeOf(() => {});


const arrayProto = Object.getPrototypeOf([]);
console.log(Object.getOwnPropertyNames(funcProto));