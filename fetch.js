



/*fetch("mods.json")
    .then(response => response.json())
    .then(value => console.log(value))*/

/*async function addMods() {
    const getTitle = fetch("mods.json")


}*/

function addElement() {
    /*creating the elements*/
    const li1 = document.createElement("li");
    const a1 = document.createElement("a")
    const img1 = document.createElement("img");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    /*placehoder text for test*/
    const testText1 = document.createTextNode("a1");
    const testText2 = document.createTextNode('img1');
    const testText3 = document.createTextNode('p1');
    const testText4 = document.createTextNode('p2');
    const testText5 = document.createTextNode('p3');
    /*adding ids to <a> element and <p1> element*/
    a1.setAttribute("id", "a1");
    p1.setAttribute("id", "p1");

    const ulElement = document.getElementById("ulID");
    ulElement.appendChild(li1);
    li1.appendChild(a1);
    a1.appendChild(testText1);
    /* creating parent child relationship similar to card in index.html*/
    /*const ulElement = document.getElementById("ulID");
    ulElement.appendChild(li1);
    li1.appendChild(a1);
    a1.appendChild(img1, p1, p2, p3)
    img1.setAttribute*/




}

window.addEventListener('DOMContentLoaded', addElement)


