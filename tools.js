import { data } from "./data.js";
import { changeScene } from "./scenes.js";


export const tools = ["axe", "pickaxe", "bow", "rod", "hammer", "shovel", "sword"];

const toolsData = data["items"];
const toolsContainer = document.getElementById("tools-container");

for (const [toolDataName, tool] of Object.entries(toolsData)) {
    if (!tools.includes(toolDataName))
        continue;
    
    const button = document.createElement("button");
    
    button.appendChild(document.createTextNode(tool["name"]));
    
    toolsContainer.appendChild(button);
    
    button.onclick = function() {
        loadToolView(toolDataName);
        changeScene("tools-view");
    };
}


const nameLabel = document.getElementById("tools-name");
const priceLabel = document.getElementById("tools-price");
const descriptionLabel = document.getElementById("tools-description");
const subdescriptionLabel = document.getElementById("tools-subdescription");
const upgradeLabel = document.getElementById("tools-upgrade-label");
const upgradeSlider = document.getElementById("tools-upgrade");
const upgradeCostLabel = document.getElementById("tools-upgrade-cost");
const upgradeXpLabel = document.getElementById("tools-upgrade-xp");
const damageLabel = document.getElementById("tools-damage");
const image = document.getElementById("tools-image");


export function loadToolView(toolDataName) {
    const tool = toolsData[toolDataName];
    nameLabel.textContent = "TOOL: " + tool["name"];
    descriptionLabel.textContent = "DESCRIPTION: " + tool["desc"];
    subdescriptionLabel.textContent = tool["sub_desc"];
    
    upgradeSlider.oninput = updateToolLevelLabels.bind(null, tool);
    updateToolLevelLabels(tool);
}


function updateToolLevelLabels(tool) {
    upgradeLabel.textContent = "UPGRADE: " + upgradeSlider.value;
    
    const toolData = tool["tool_data"];
    const upgradeIndex = upgradeSlider.value - 1;
    upgradeCostLabel.textContent = "UPGRADE COST: " + toolData["upgrade_coin_costs"][upgradeIndex];
    upgradeXpLabel.textContent = "UPGRADE XP: " + toolData["upgrade_xp_rewards"][upgradeIndex];
    damageLabel.textContent = "DAMAGE: " + toolData["upgrade_damages"][upgradeIndex] + "*";
    
    image.src = "atlas/split/" + tool["sprite_name"].replace(/_\d$/, "") + "_" + Math.min(upgradeSlider.value, 4) + ".png";
}