const settings = {
    theme: "dark",
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: "bold",
    fontColor: "red",
}

type Settings = typeof settings;

function getSettings(settings: Settings) {
    return settings;
}
// just don't use the same variable name as the parameter name
function getSettings2(s: typeof settings) {
    return s;
}

console.log(getSettings(settings));