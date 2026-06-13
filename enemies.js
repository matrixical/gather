import { data } from "./data.js";
import { loadItemView } from "./items.js";
import { changeScene } from "./scenes.js";


const enemiesData = data["enemies"];
const enemiesContainer = document.getElementById("enemies-container");

for (const [enemyDataName, enemy] of Object.entries(enemiesData)) {
    const button = document.createElement("button");
    
    button.appendChild(document.createTextNode(enemy["name"]));
    
    enemiesContainer.appendChild(button);
    
    button.onclick = function() {
        loadEnemyView(enemyDataName);
        changeScene("enemies-view");
    };
}


const nameLabel = document.getElementById("enemies-name");
const dropsContainer = document.getElementById("enemies-drops");
const itemsData = data["items"]


export function loadEnemyView(enemyDataName) {
    const enemy = enemiesData[enemyDataName];
    nameLabel.textContent = "ENEMY: " + enemy["name"];
    
    dropsContainer.replaceChildren([]);
    
    const totalWeights = enemy["items_generated"].reduce(
        function(total, currentItem) {
            return total + currentItem["weight"];
        }, 0
    );
    
    for (const drop of enemy["items_generated"]) {
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