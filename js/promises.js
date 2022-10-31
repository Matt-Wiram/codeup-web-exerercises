let key = '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';



let ddate;
let name;
let repoUrl;

fetch('https://api.github.com/users/bmizerany/repos',  {headers: {'Authorization': key}}).then( response => {
    response.json().then( users => {


        let repoUrl = users[0].owner.repos_url
    fetch(repoUrl, {headers: {'Authorization': key}}).then(x => x.json().then(y => {

            let commUrl = y[0].commits_url;
            fetch(commUrl.split('{')[0], {headers: {'Authorization': key}}).then(a => a.json().then(b => {

                ddate = b[0].commit.author.date.split('T')[0]
            }))
        }

    ))

    });
})

setTimeout(function () {


    console.log(ddate)

}, 2000)


function wait(num){
    return new Promise(resolve => {
        setTimeout(resolve, num);

    });
}



wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));