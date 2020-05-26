// let gitHubPromise = fetch( "https://api.github.com/users/lgrant146/events");



function lastCommit (userName){
  let gitHubPromise = fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GITHUB_REPO}})
gitHubPromise.then(response => response.json())
    .then(jsonResponse => console.log((jsonResponse[0].created_at).substr(0,10)));
}


lastCommit(`lgrant146`);

function waitPromise(milliseconds){
    let seconds = milliseconds / 1000;
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           if (milliseconds <= 1000){
               resolve(`You'll see this after ${seconds} second`)
           } else if(milliseconds > 1000) {
               resolve(`You'll see this after ${seconds} seconds`)
           } else {
               reject(`what even is that you entered?`)
           }
       }, milliseconds)
   })
}
waitPromise(1000).then();
const wait = waitPromise();
console.log(wait);
wait.then(message => console.log('Promise resolved!', message));
wait.catch(message => console.log('Promise rejected!', message));