let g_version = "v8.0.0";
let g_navigationMenuOptions = {
    "Basics": ["About", "Reserved Names", "What Is A Terminal"],
    "Structs": ["tdk_Dimensions"],
    "Functions": ["tdk_getWindowDimensions"]
};
let g_navigationMenu = document.querySelector(".navigationMenu");

document.querySelectorAll("title, h1 + p").forEach((element) => {
    element.innerHTML = element.innerHTML.replace("${VERSION}", g_version);
});
g_navigationMenu.innerHTML += `<ul>`;
Object.keys(g_navigationMenuOptions).forEach((section) => {
    g_navigationMenu.innerHTML += `<li>${section}</li><ul>${
        g_navigationMenuOptions[section]
            .map((subSection) => {
                return `<li><a href="${subSection}.html">${subSection}</a></li>`;
            })
            .join("")}</ul>`;
});
g_navigationMenu.innerHTML += `</ul>`;
