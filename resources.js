import { capitalize, data } from "./data.js";
import { loadItemView } from "./items.js";
import { changeScene } from "./scenes.js";


const resourcesData = data["resources"];
const resourcesContainer = document.getElementById("resources-container");

for (const [resourceDataName, resource] of Object.entries(resourcesData)) {
    const button = document.createElement("button");
    button.classList = "icon-button";
    
    const resourceImage = document.createElement("img");
    resourceImage.src = "atlas/split/" + resource["sprite_names"][0] + ".png";
    button.appendChild(resourceImage);
    
    button.appendChild(document.createTextNode(resource["name"]));
    
    resourcesContainer.appendChild(button);
    
    button.onclick = function() {
        loadResourceView(resourceDataName);
        changeScene("resources-view");
    };
}


const nameLabel = document.getElementById("resources-name");
const typeLabel = document.getElementById("resources-type");
const healthLabel = document.getElementById("resources-health");
const dropsContainer = document.getElementById("resources-drops");
const itemsData = data["items"];
const imagesContainer = document.getElementById("resources-images");


function loadResourceView(resourceDataName) {
    const resource = resourcesData[resourceDataName];
    nameLabel.textContent =   "RESOURCE: " + resource["name"];
    typeLabel.textContent =   "TYPE: "     + capitalize(resource["type"]);
    healthLabel.textContent = "HEALTH: "   + resource["hp"];
    
    imagesContainer.replaceChildren([]);
    
    for (const spriteName of resource["sprite_names"]) {
        const image = document.createElement("img");
        image.src = "atlas/split/" + spriteName + ".png";
        
        imagesContainer.appendChild(image);
    }
    
    dropsContainer.replaceChildren([]);
    
    const totalWeights = resource["items_generated"].reduce(
        function(total, currentItem) {
            return total + currentItem["weight"];
        }, 0
    );
    
    for (const drop of resource["items_generated"]) {
        const button = document.createElement("button");
        
        button.appendChild(document.createTextNode(itemsData[drop["item"]]["name"]));
        button.appendChild(document.createElement("br"));
        button.appendChild(document.createTextNode((drop["weight"] / totalWeights * 100).toFixed(2) + "%"));
        
        dropsContainer.appendChild(button);
        
        button.onclick = function() {
            loadItemView(drop["item"]);
            changeScene("items-view");
        };
    }
    
    if (dropsContainer.children.length == 0)
        dropsContainer.appendChild(document.createTextNode("No drops!"));
}