



/*fetch("mods.json")
    .then(response => response.json())
    .then(value => console.log(value))*/

/*async function addMods() {
    const getTitle = fetch("mods.json")


}*/

function addElement() {
    const li1 = document.createElement("li");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    /*placehoder text for test*/
    const testText1 = document.createTextNode("p1");
    const testText2 = document.createTextNode('p2');

  

    const ulElement = document.getElementById("ulID");
    ulElement.appendChild(li1)
    li1.appendChild(p1)
    p1.appendChild(testText1)
    /*li.appendChild(p1, p2,)*/



}

window.addEventListener('DOMContentLoaded', addElement)


