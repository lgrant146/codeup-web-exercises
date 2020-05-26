// let gitHubPromise = fetch( "https://api.github.com/users/lgrant146/events");



function lastCommit (userName){
  let gitHubPromise = fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GITHUB_REPO}})
gitHubPromise.then(response => response.json())
    .then(jsonResponse => console.log((jsonResponse[0].created_at).substr(0,10)));
}


lastCommit(`lgrant146`);

function wait(milliseconds){
    let seconds = milliseconds / 1000;
   return new Promise((resolve, reject) => {
       if (typeof milliseconds === 'number') {
           setTimeout(() => {
               if (milliseconds <= 1000) {
                   resolve(`You'll see this after ${seconds} second`)
               } else {
                   resolve(`You'll see this after ${seconds} seconds`)
               }
           }, milliseconds)
       } else {
           reject(`${milliseconds.toUpperCase()}!?!. What even is this?`)
       }
   })
}


console.log(wait(1000));
wait(2000).then(message => console.log('Promise resolved!', message));
// wait.catch(message => console.log('Promise rejected!', message));
wait('monkey').catch(message => console.log('Promise rejected!', message));