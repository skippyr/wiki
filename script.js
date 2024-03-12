let g_navigationMenuOptions = {
    "libtdk": {
        "Home": [
            ["About", "about"],
            ["What Is A Terminal", "what-is-a-terminal"],
            ["Terminal Components", "terminal-components"]
        ],
        "Structs": ["tdk_Coordinate", "tdk_Dimensions"],
        "Functions": ["tdk_getWindowDimensions", "tdk_getCursorCoordinate", "tdk_isTTY"]
    }
};
let g_tableOfContents = document.querySelector(".table-of-contents");
let g_navigationMenu = document.querySelector(".navigation-menu");

if (g_tableOfContents)
{
    g_tableOfContents.innerHTML += `<ul>`;
    Object.keys(g_navigationMenuOptions).forEach((key) => {
        g_tableOfContents.innerHTML += `<li><a href="src/${key}/index.html">${key}</a></li>`;
    });
    g_tableOfContents.innerHTML += `</ul>`;
}
if (g_navigationMenu)
{
    g_navigationMenu.innerHTML += `<ul>`;
    Object.keys(g_navigationMenuOptions[g_name]).forEach((key) => {
        g_navigationMenu.innerHTML += `<li>${key}</li><ul>`;
        g_navigationMenuOptions[g_name][key].forEach((subKey) => {
            g_navigationMenu.innerHTML += Array.isArray(subKey)
                ? `<li><a href="index.html#${subKey[1]}">${subKey[0]}</a></li>`
                : `<li><a href="${subKey}.html">${subKey}</a></li>`;
        });
        g_navigationMenu.innerHTML += `</ul>`;
    });
    g_navigationMenu.innerHTML += `</ul>`;
}
