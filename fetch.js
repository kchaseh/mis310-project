



/*fetch("mods.json")
    .then(response => response.json())
    .then(value => console.log(value))*/

/*async function addMods() {
    const getTitle = fetch("mods.json")


}*/

function addElement() {
    const li = document.createElement("li");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    /*placehoder text for test*/
    const testText1 = document.createTextNode("p1");
    const testText2 = document.createTextNode('p2');

    li.appendChild(testText1);

    const ulElement = document.getElementById("ulID");
    document.body.insertBefore(li, ulElement);

    /*li.appendChild(p1, p2,)*/



}

window.addEventListener('DOMContentLoaded', addElement)


