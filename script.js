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

function createTitle()
{
    let title = document.querySelector("title");
    let type = title.getAttribute("data-type");
    if (title.innerHTML === "Home Page")
    {
        title.innerHTML += ` | Wiki`;
        return;
    }
    else if (title.innerHTML === g_name)
    {
        title.innerHTML += ` (${g_version}) | Wiki`;
        return;
    }
    title.innerHTML += ` ${type[0].toUpperCase() + type.slice(1)} | ${g_name} (${g_version}) | Wiki`;
}
function createTableOfContents()
{
    let tableOfContents = document.querySelector(".table-of-contents");
    if (tableOfContents)
    {
        tableOfContents.innerHTML += `<ul>`;
        Object.keys(g_navigationMenuOptions).forEach((key) => {
            tableOfContents.innerHTML += `<li><a href="src/${key}/index.html">${key}</a></li>`;
        });
        tableOfContents.innerHTML += `</ul>`;
    }
}
function createNavigationMenu()
{
    let navigationMenu = document.querySelector(".navigation-menu");
    if (navigationMenu)
    {
        navigationMenu.innerHTML += `<a href="../../index.html">Go Back To Main Page</a>`;
        navigationMenu.innerHTML += `<ul>`;
        Object.keys(g_navigationMenuOptions[g_name]).forEach((key) => {
            navigationMenu.innerHTML += `<li>${key}</li><ul>`;
            g_navigationMenuOptions[g_name][key].forEach((subKey) => {
                navigationMenu.innerHTML += Array.isArray(subKey)
                    ? `<li><a href="index.html#${subKey[1]}">${subKey[0]}</a></li>`
                    : `<li><a href="${subKey}.html">${subKey}</a></li>`;
            });
            navigationMenu.innerHTML += `</ul>`;
        });
        navigationMenu.innerHTML += `</ul>`;
    }
}

createTitle();
createTableOfContents();
createNavigationMenu();
