import { capitalize } from "./data.js";


const sceneData = {
    "biomes": {
        "containerScene": document.getElementById("biomes"),
        "viewScene": document.getElementById("biomes-view"),
    },
    "resources": {
        "containerScene": document.getElementById("resources"),
        "viewScene": document.getElementById("resources-view"),
    },
    "items": {
        "containerScene": document.getElementById("items"),
        "viewScene": document.getElementById("items-view"),
    },
    "tools": {
        "containerScene": document.getElementById("tools"),
        "viewScene": document.getElementById("tools-view"),
    },
    "enemies": {
        "containerScene": document.getElementById("enemies"),
        "viewScene": document.getElementById("enemies-view"),
    },
    "fish": {
        "containerScene": document.getElementById("fish"),
        "viewScene": document.getElementById("fish-view"),
    },
};

let currentScene = "homepage";
const sceneHistory = ["homepage"];


const homeScene = document.getElementById("homepage");
const homeContainer = document.getElementById("homepage-container");

for (const [sceneName, scene] of Object.entries(sceneData)) {
    const button = document.createElement("button");
    button.textContent = capitalize(sceneName);
    
    homeContainer.appendChild(button);
    
    button.onclick = changeScene.bind(null, sceneName);
}


const backButton = document.getElementById("back-button");
backButton.onclick = function() {
    changeScene(sceneHistory.at(-1));
    sceneHistory.pop();
};


export function changeScene(sceneName) {
    if (sceneHistory.at(-1) != currentScene)
        sceneHistory.push(currentScene);
    
    document.getElementById(currentScene).style.display = "none";
    currentScene = sceneName;
    document.getElementById(currentScene).style.display = "";
    
    backButton.style.display = currentScene == "homepage" ? "none" : "";
}