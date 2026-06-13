import { data } from "./data.js";
import { loadFishView } from "./fish.js";
import { changeScene } from "./scenes.js";


const biomesData = data["biomes"];
const biomesContainer = document.getElementById("biomes-container");

for (const [biomeDataName, biome] of Object.entries(biomesData)) {
    const button = document.createElement("button");
    
    button.textContent = biome["name"];
    button.style.backgroundColor = "#" + biome["color"];
    
    biomesContainer.appendChild(button);
    
    button.onclick = function() {
        loadBiomeView(biomeDataName);
        changeScene("biomes-view");
    };
}


const nameLabel = document.getElementById("biomes-name");
const idLabel = document.getElementById("biomes-id");
const colorLabel = document.getElementById("biomes-color");
const fishContainer = document.getElementById("biomes-fish");
const fishData = data["fish"];
const itemsData = data["items"];


export function loadBiomeView(biomeDataName) {
    const biome = biomesData[biomeDataName];
    nameLabel.textContent =  "BIOME: "        + biome["name"];
    idLabel.textContent =    "ID: "           + "#" + Object.keys(biomesData).indexOf(biomeDataName);
    colorLabel.textContent = "GROUND COLOR: " + "#" + biome["color"];
    colorLabel.style.color =                    "#" + biome["color"];
    
    fishContainer.replaceChildren([]);
    
    for (const [fishDataName, fish] of Object.entries(fishData)) {
        if (!fish["biomes"].includes("BIOME_" + biomeDataName.toUpperCase()))
            continue;
        
        const button = document.createElement("button");
        button.className = "icon-button";
        
        const fishImage = document.createElement("img");
        fishImage.src = "atlas/split/" + fishDataName + ".png";
        button.appendChild(fishImage);
        
        button.appendChild(document.createTextNode(itemsData[fishDataName]["name"]));
        
        fishContainer.appendChild(button);
        
        button.onclick = function() {
            loadFishView(fishDataName);
            changeScene("fish-view");
        };
    }
    
    if (fishContainer.children.length == 0) {
        fishContainer.appendChild(document.createTextNode("No fish here!"));
    }
}