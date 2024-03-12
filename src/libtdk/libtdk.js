let g_version = "v8.0.0";

document.querySelectorAll("title, h1 + p").forEach((element) => {
    element.innerHTML = element.innerHTML.replace("${VERSION}", g_version);
});
