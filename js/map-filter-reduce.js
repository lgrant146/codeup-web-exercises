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

let trilingual = users.filter(function(user){
    return user.languages.length > 2
});
console.log(trilingual);

let emails = users.map(function(user){
   return user.email
});
console.log(emails);

let TotalYearsOfExperience = users.reduce((total, user) => {
        return total + user.yearsOfExperience;
}, 0);

let averageExperience = TotalYearsOfExperience/ users.length;
console.log(TotalYearsOfExperience);
console.log(averageExperience);