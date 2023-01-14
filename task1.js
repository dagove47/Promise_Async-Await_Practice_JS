const myBirdayCake = (noCake) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!noCake){
                resolve("We have a cake");
            } else {
                reject(new Error("I am sad, we do not have a cake"));
            }
        }, 2000)
    })
}

console.time("Timer");

myBirdayCake(false)
    .then((result) => {
        console.timeLog("Timer");
        console.log(result);
    })
    .catch((error) => {
        console.timeLog("Timer");
        console.log(error);
    })
    .finally(() => {
        console.log("Party"); // Whether we have cake or not, the party is still on
    })