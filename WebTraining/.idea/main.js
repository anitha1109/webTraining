let magic = 5;

magic = magic * magic;
console.log("Magic is: " + magic); //don't need this for now

function helloWorld() {
    alert("Hello World"); //don't need this for now
}

var z = 5;
var x = 3;
var y = x * y; //don't need this for now

function myFunction() {
    var x = document.getElementById("demo");
    x.style.color = "red";
} // don't need this for now


/*function generator() {
    var firstPart = ["The Coldness of", "The Journey to", "Altered by", "A Parallel of", "The Return of",];
    var secondPart = ["the Coming Order", "the Relationship of Command", "Evil Androids", "Cybernetic Brain",];
    var name = firstPart[Math.floor(Math.random() * firstPart.length)] + " " +
        secondPart[Math.floor(Math.random() * secondPart.length)];
    if (document.getElementById("name")) {
        document.getElementById("placeholder").removeChild(document.getElementById("name"));
    }
    var element = document.createElement("div");
    element.setAttribute("id", "name");
    element.appendChild(document.createTextNode(name));
    document.getElementById("placeholder").appendChild(element);
}
*/


/*function gnerator() {
//word list
    var firstPart = ["The Coldness of", "The Journey of", "Altered by", "A Parallel of", "A Paradise of",];
    var secondPart = ["the Coming Order", "the Relationship of Command", "Evil Androids", "the delicious Foodland",];
    //generate (name);
    var name = firstPart[Math.floor(Math.random() * firstPart.lenght)] + " "
        + secondPart[Math.floor(Math.random() * secondPart.lenght)];

    if (document.getElementById("name")) {
        document.getElementById("placeholder").removeChild(document.getElementById("name"));
    }

    var element = document.createElement("div")
    element.setAttribute("id", "name");
    element.appendChild(document.createTextNode(name));
    document.getElementById("placeholder").appendChild(element);
}
*/

var quotes = ['The Way To Get Started Is To Quit Talking And Begin Doing. \n By Walt Disney',
    'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. <br> By Winston Churchill',
    'Don\'t Let Yesterday Take Up Too Much Of Today. <br> By Will Rogers',
    'You Learn More From Failure Than From Success.Do not Let It Stop You. Failure Builds Character. <br> By Unknown',
    'It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up. <br> Inspirational Quote By Vince Lombardi',
    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. By Og Mandino',
    'We May Encounter Many Defeats But We Must Not Be Defeated. By Maya Angelou',
    'Knowing Is Not Enough - We Must Apply. Wishing Is Not Enough - We Must Do. By Johann Wolfgang Von Goethe',
    'Imagine Your Life Is Perfect In Every Respect. What Would It Look Like? By Brian Tracy',
    'We Generate Fears While We Sit. We Overcome Them By Action. By Dr. Henry Link']


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
