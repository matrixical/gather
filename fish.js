import { loadBiomeView } from "./biomes.js";
import { data } from "./data.js";
import { changeScene } from "./scenes.js";


const fishData = data["fish"];
const itemsData = data["items"];
const fishContainer = document.getElementById("fish-container");

for (const [fishDataName, fish] of Object.entries(fishData)) {
    const button = document.createElement("button");
    button.classList = "icon-button";
    
    const fishImage = document.createElement("img");
    fishImage.src = "atlas/split/" + fishDataName + ".png";
    button.appendChild(fishImage);
    
    const fishItem = itemsData[fishDataName];
    button.appendChild(document.createTextNode(fishItem["name"]));
    
    fishContainer.appendChild(button);
    
    button.onclick = function() {
        loadFishView(fishDataName);
        changeScene("fish-view");
    };
}


const nameLabel = document.getElementById("fish-name");
const familyLabel = document.getElementById("fish-family");
const rarityLabel = document.getElementById("fish-rarity");
const priceLabel = document.getElementById("fish-price");
const descriptionLabel = document.getElementById("fish-description");
const spawnsInContainer = document.getElementById("fish-spawns-in");
const image = document.getElementById("fish-image");

const biomesData = data["biomes"];


export function loadFishView(fishDataName) {
    const fish = fishData[fishDataName];
    const fishItem = itemsData[fishDataName];
    
    nameLabel.textContent = "FISH: " + fishItem["name"];
    familyLabel.textContent = "FAMILY: " + fish["family"];
    rarityLabel.textContent = "RARITY: " + fish["rarity"];
    priceLabel.textContent = "SELL PRICE: " + fishItem["revenue"];
    descriptionLabel.textContent = "DESCRIPTION: " + fishItem["desc"] + fish["notes"];
    
    spawnsInContainer.replaceChildren([]);
    
    for (const biomeNameRaw of fish["biomes"]) {
        const biomeName = biomeNameRaw.split("BIOME_")[1].toLowerCase();
        const biome = biomesData[biomeName];
        const button = document.createElement("button");
        
        button.textContent = biome["name"];
        button.style.backgroundColor = "#" + biome["color"];
        
        spawnsInContainer.appendChild(button);
        
        button.onclick = function() {
            loadBiomeView(biomeName);
            changeScene("biomes-view");
        };
    }
    
    image.src = "atlas/split/" + fishDataName + ".png";
}