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
let g_navigationMenu = document.querySelector(".navigation-menu");
let g_tableOfContents = document.querySelector(".table-of-contents");

if (g_tableOfContents)
{
    g_tableOfContents.innerHTML += `<ul>`;
    Object.keys(g_navigationMenuOptions).forEach((key) => {
        g_tableOfContents.innerHTML += `<li><a href="src/${key}/index.html">${key}</a></li>`;
    });
    g_tableOfContents.innerHTML += `</ul>`;
}
