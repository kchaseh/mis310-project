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