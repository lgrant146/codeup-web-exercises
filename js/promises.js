let gitHubPromise = fetch( "https://api.github.com/users/lgrant146/events");

gitHubPromise.then(response => response.json())
    .then(jsonResponse => (console.log(jsonResponse)));
