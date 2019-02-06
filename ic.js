// Create a h1 element with "Teacher". Next create a button with "Next". Given the array ["Kenn", "Kevin", "Erin] iterate through the names when the button is clicked.

names = ["Kenn", "Kevin", "Erin"];
function nameIteration() {

}
    for(var i = 0 ; i <= names.length; i++)
    {
        console.log(names[i])
    }

    var btn = document.querySelector("button");
    btn.addEventListener("clicked",nameIteration);

// Create a simple grid system as seen in the attached picture. Make a button in the main section that can add a “*” to a p element and change the background color to yellow each time it's pressed. Use classlist to change the color. Once it's yellow it would stay yellow.
function addToPElement() {
    console.log("test")


}
var button = document.querySelector("#btn2");
button.addEventListener("click", addToPElement);