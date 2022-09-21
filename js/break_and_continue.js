function contAndBreak() {

    for (let i = 0; i < 100; i++) {
        var odd = parseFloat(prompt('Give my an odd number between 1 and 50'));
        if (odd % 2 === 1 && typeof odd === "number") {
            break
        }
    }
    for (let j = 1; j < 51; j++) {
        if (j % 2 === 0) {
          continue;
            if (j === odd) {
                console.log("yikes we skipped " + odd)

            }
            console.log("Here is an odd number " + j)
        }

    }
}
contAndBreak()
