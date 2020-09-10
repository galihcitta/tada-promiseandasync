// callback
const sumNumber = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

sumNumber(15, 12, sumNumber => {
    console.log(`Callback: Hasil penjumlahannya adalah ${sumNumber}`)
})

//promise
const substractNumber = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a - b)
        }, 2000)
    })
}

substractNumber(10, 2).then((substract) => {
   return substractNumber(substract, 4)
}).then((substract2) => {
    console.log(`Promise: Hasil pengurangannya adalah ${substract2}`)
}).catch((e) => {
    console.log(e)
})