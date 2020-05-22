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
// let trilingual = users.filter((user) => user.languages.length > 2);
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

let longestEmailObject = users.reduce(function (a, b){
    return a.email.length > b.email.length ? a : b;
});
let longestEmail = longestEmailObject.email;
console.log(longestEmail);

let arrayOfUsers =  users.reduce(function (finalString, instructor, index){
    if(index < users.length - 1) {
        return   `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1, instructor.name.length).toLowerCase()}, `
    } else {
        return `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1, instructor.name.length).toLowerCase()} `, "Your instructors are: "
    }

    });



console.log(arrayOfUsers);

let uniqueLanguages = users.reduce((lList, user) => {
    for (let language of user.languages) {
        if (!lList.includes(language)) {
            lList.push(language);
        }
    }
    return lList;
}, []);

console.log(uniqueLanguages);