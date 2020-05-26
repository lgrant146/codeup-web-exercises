// let gitHubPromise = fetch( "https://api.github.com/users/lgrant146/events");



function lastCommit (userName){
  let gitHubPromise = fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GITHUB_REPO}})
gitHubPromise.then(response => response.json())
    .then(jsonResponse => console.log((jsonResponse[0].created_at).substr(0,10)));
}


lastCommit(`lgrant146`);
