const axios = require('axios')
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

//promise all and async await

const fetchGithub = async (url) => {
    try {
        const githubInfo = await axios(url)
        return {
            name: githubInfo.data.name,
            bio: githubInfo.data.bio,
            repos: githubInfo.data.public_repos
        }

    } catch (e) {
        console.log(e)
    }
   
}

const fetchUser = async (names) => {
    const requests = await names.map(name => {
        const url = `https://api.github.com/users/${name}`
        const user = fetchGithub(url)
        return user
    })
    return Promise.all(requests)
}

fetchUser(['ayatmaulana', 'slaveofcode', 'galihcitta'])
.then(user => console.log(JSON.stringify(user)))