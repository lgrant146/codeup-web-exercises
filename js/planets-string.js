(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split('|');

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetsBreak = planetsArray.join('<br>');
    console.log(planetsBreak);


    var planetsList = "<ul><li>" + planetsArray.join('</li><li>') + "</li>git </ul>";

    console.log(planetsList);

    // var planetsTest = {
    //     set0: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
//     };
//     function makeUL(array) {
//         var list = document.createElement('ul');
//         for (var i = 0; i < array.length; i += 1) {
//             var item = document.createElement('li');
//             item.appendChild(document.createTextNode(array[i]));
//             list.appendChild(item);
//         }
//         return list;
//     }
//     document.getElementById('test').appendChild(makeUL(planetsTest[0]));
})();
