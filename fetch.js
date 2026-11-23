
/*map for mod information(temporary, only for testing and learning. ultimate goal is to get this same information from a json file)*/
/*const mod1 = {
    "Title": "Vehicle Armor Crafting",
    "Creator": "sugar_mama_",
    "Image": "https://images.steamusercontent.com/ugc/12958559004751687701/8EFC1AA5D6D4D0F79D28A2D683582C6ADCDCA2C8/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    "Description": "Allows players to craft and install improvised armor on vehicles to protect windows, hoods, and trunks from damage.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3800858172"
};*/

/*fetch("mods.json")
    .then(response => response.json())
    .then(value => console.log(value))*/

/*async function addMods() {
    const getTitle = fetch("mods.json")


}*/

function generateAllCards() {
    /*creating the elements
    const li1 = document.createElement("li");
    const a1 = document.createElement("a")
    const img1 = document.createElement("img");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    /*adding ids to elements
    li1.setAttribute("id", "li1")
    a1.setAttribute("id", "a1");
    img1.setAttribute("id", "img1")
    p1.setAttribute("id", "p1");
    p2.setAttribute("id", "p2");
    p3.setAttribute("id", "p3");

    /*const p2Text = document.createTextNode("By:")
    p2.append(document.createTextNode("By: "))

    const ulElement = document.getElementById("ulID");
    ulElement.appendChild(li1);
    li1.appendChild(a1);
    a1.appendChild(img1);
    a1.appendChild(p1);
    a1.appendChild(p2);
    a1.appendChild(p3);*/

    
    fetch("mods.json")
    .then(response => response.json())
    .then(mods => {
        for (let i = 0; i < mods.length; i++) {
            /*creating the elements*/
            const li1 = document.createElement("li");
            const a1 = document.createElement("a")
            const img1 = document.createElement("img");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            /*adding ids to elements*/
            li1.setAttribute("id", "li1")
            a1.setAttribute("id", "a1");
            img1.setAttribute("id", "img1")
            p1.setAttribute("id", "p1");
            p2.setAttribute("id", "p2");
            p3.setAttribute("id", "p3");

            const ulElement = document.getElementById("ulID");
            ulElement.appendChild(li1);
            li1.appendChild(a1);
            a1.appendChild(img1);
            a1.appendChild(p1);
            a1.appendChild(p2);
            a1.appendChild(p3);
            /*pulling mod information from json and adding them*/

            a1.setAttribute('href', mods[i].url);
            img1.setAttribute('src', mods[i].Image)
            p1.append(mods[i].Title)
            p2.append("By: " + mods[i].Creator)
            p3.append(mods[i].Description)
        }
    })



}

window.addEventListener('DOMContentLoaded', generateAllCards)

function generateFeaturedCards () {
    fetch("mods.json")
    .then(response => response.json())
    .then(mods => {
        for (let i = 0; i < 3; i++) {
            /*creating the elements*/
            const li1 = document.createElement("li");
            const a1 = document.createElement("a")
            const img1 = document.createElement("img");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            /*adding ids to elements*/
            li1.setAttribute("id", "featuredli" + i)
            a1.setAttribute("id", "featureda" + i);
            img1.setAttribute("id", "featuredimg" + i)
            p1.setAttribute("id", "featuredp1" + i);
            p2.setAttribute("id", "featuredp2" + i);
            p3.setAttribute("id", "featuredp3" + i);
            li1.setAttribute("class", "featuredCardClassLi")
            
            const ulElement = document.getElementById("ulID");
            ulElement.appendChild(li1);
            li1.appendChild(a1);
            a1.appendChild(img1);
            a1.appendChild(p1);
            a1.appendChild(p2);
            a1.appendChild(p3);
            /*pulling mod information from json and adding them*/
            
            const randomMod = Math.floor(Math.random() * mods.length)
                
            a1.setAttribute('href', mods[randomMod].url);
            img1.setAttribute('src', mods[randomMod].Image)
            p1.append(mods[randomMod].Title)
            p2.append("By: " + mods[randomMod].Creator)
            p3.append(mods[randomMod].Description)
            
        }
    })
    
}

window.addEventListener('DOMContentLoaded', generateFeaturedCards)

/*fetch("mods.json")
    .then(response => response.json())
    .then(value => )*/
    /*link and image attributes from universal object(at the top of page)*/
    
    
    /*a1.setAttribute("href", mod1.url)
    img1.setAttribute('src', mod1.Image)
    p1.append(mod1.Title)
    p2.append(mod1.Creator)
    p3.append(mod1.Description)*/

    /*test to pull data from json*/

   /*{
        a1.append(mods.url[0])
        img1.append(mods.Image[0])
        p1.append(mods.Title[0])
        p2.append(mods.Creator[0])
        p3.append(mods.Description[0])
    })*/
/*
function fetchModData() {
    fetch("mods.json")
    .then(response => response.json())
    .then((data) => {
        a1.append(mods.url[0])
        img1.append(mods.Image[0])
        p1.append(mods.Title[0])
        p2.append(mods.Creator[0])
        p3.append(mods.Description[0])
    })

}*/
/*map for mod information(temporary, only for testing and learning. ultimate goal is to get this same information from a json file)*/
/*const mod1 = {
    "Title": "Vehicle Armor Crafting",
    "Creator": "sugar_mama_",
    "Image": "https://images.steamusercontent.com/ugc/12958559004751687701/8EFC1AA5D6D4D0F79D28A2D683582C6ADCDCA2C8/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    "Description": "Allows players to craft and install improvised armor on vehicles to protect windows, hoods, and trunks from damage.",
    "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3800858172"
};*/

/*fetch("mods.json")
    .then(response => response.json())
    .then(value => console.log(value))*/

/*async function addMods() {
    const getTitle = fetch("mods.json")


}*/

