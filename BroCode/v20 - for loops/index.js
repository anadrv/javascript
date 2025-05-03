//for loop = repeat some code a limited amout of time

for (let i = 0; i <= 2; i++) {
    console.log("hello")
}

for(let i = 1; i <= 20; i++) {
    if (i == 13) {
        continue; //skip an iteration - break (exit the loop)
    } else {
        console.log(i);
    }
}