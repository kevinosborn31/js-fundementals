
console.log(this);


const button = document.querySelector('button');


button.addEventListener('click', logThis);

function logThis() {
    console.log(this);
}


const obj = {
    num: 10,
    logThis,
}

obj.logThis();