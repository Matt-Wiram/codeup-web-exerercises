const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//filter

const usersObj = users.filter(x => {
    let java = 'java';
    if (x.languages.length >= 3) {
        return x.languages
    }
    else {
        return x.languages.push(java)
    }

})
//map
const usersEmails = users.map(x => {
    return x.email
})
//reduce
let years = []
users.forEach(x => years.push(x.yearsOfExperience))
const userTotalExp = years.reduce((a, b) => {
    return a + b
}, 0);
const userAvExp = userTotalExp / users.length;

//reduce 2
let emails = [];

users.forEach(x => emails.push(x.email));

let longestEmail = emails.reduce((a, b) => {
    if (a.length >= b.length) {
        b = a
        return b
    }
    return b
}, 0)

//reduce 3
let names = users.map(x =>  x.name)
let nameObject = names.reduce((name, index) => {
    return name + ", " + index
}, "")
console.log('This is your instructors:' + nameObject)

