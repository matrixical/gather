export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export const data = await (await fetch("resources.json")).json();