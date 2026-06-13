import { data } from "./data.js";
import { changeScene } from "./scenes.js";
import { tools } from "./tools.js";


const itemsData = data["items"];
const itemsContainer = document.getElementById("items-container");

for (const [itemDataName, item] of Object.entries(itemsData)) {
    if (tools.includes(itemDataName))
        continue;
    
    const button = document.createElement("button");
    button.classList = "icon-button";
    
    const itemImage = document.createElement("img");
    itemImage.src = "atlas/split/" + item["sprite_name"] + ".png";
    button.appendChild(itemImage);
    
    button.appendChild(document.createTextNode(item["name"]));
    
    itemsContainer.appendChild(button);
    
    button.onclick = function() {
        loadItemView(itemDataName);
        changeScene("items-view");
    };
}


const nameLabel = document.getElementById("items-name");
const priceLabel = document.getElementById("items-price");
const descriptionLabel = document.getElementById("items-description");
const image = document.getElementById("items-image");


export function loadItemView(itemDataName) {
    const item = itemsData[itemDataName];
    nameLabel.textContent =        "ITEM: "        + item["name"];
    priceLabel.textContent =       "SELL PRICE: "  + item["revenue"];
    descriptionLabel.textContent = "DESCRIPTION: " + item["desc"];
    image.src = "atlas/split/" + item["sprite_name"] + ".png";
}