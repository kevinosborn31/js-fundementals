async function tester() {
    try {
        const value = await new Promise((res, rej) => setTimeout(() => res(3), 1000));
        console.log(value);
    } catch (err) {
        console.log(err);
    }

}

tester();