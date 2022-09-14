function showMultiplacationTable(num) {
    for (let i = 1; i < 11; i++) {
        console.log(num * i)
    }
}
showMultiplacationTable(8);

function isEvenOrOdd() {

    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 200) + 20;
        if (random % 2 === 0) {
            console.log(random + " is even")
        }
        else {
            console.log(random + " is odd")
        }
    }
}
isEvenOrOdd();

function addNumtoString() {
    for (let i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i))

    }
}
addNumtoString();

function minusFrom100() {
    for (let i = 100; i > 0; i -= 5) {
        console.log(i)
    }
}
minusFrom100();

