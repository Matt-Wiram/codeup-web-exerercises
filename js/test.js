function filter(arr) {
    let result = arr.filter(x => {
        if (x % 2 === 0) {
            return x
        }
    })
    return result
}

function objectAdd(arr, str) {
    let result = [...arr];

    result.forEach(x => {
        x.continent = str;
    })



    return result
}