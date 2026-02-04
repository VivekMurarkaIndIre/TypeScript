function add(a, b) {
    return a + b;
}
// when it doesn't return anything, we can use void
function add2(a, b) {
    console.log(a + b);
}
// when we know function will never complete, we can use never
function add3(a, b) {
    throw new Error("This function will never complete");
}
function endlessLoop() {
    while (true) {
        console.log("This function will never complete");
    }
}
function divide(a, b) {
    if (b <= 0)
        throw new Error("This function will never complete");
    return a + b;
}
// here the function might never complete, but we know it will return a number
function divide2(a, b) {
    if (b <= 0)
        throw new Error("This function will never complete");
    return a + b;
}
// To pass a function as a parameter, we can use a function type
function performJob(cb) {
    cb();
}
performJob(function () {
    console.log("Job completed");
});
