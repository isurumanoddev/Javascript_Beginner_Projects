const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isReady = true;
        isReady ? resolve("Yes ,Ready") : reject("NO , Not Ready");

    }, 2000)
});

const getSoup = async () => {
    try {
        const soup = await promise1;
        console.log(soup);
    } catch (error) {
        console.log(error)
    }


};
getSoup().then(value => console.log(value))