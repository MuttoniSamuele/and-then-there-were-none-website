async function loadHtml(path, parentId) {
  let resp = await fetch(path);
  if (resp.status === 200) {
    document.getElementById(parentId).innerHTML = await resp.text();
    return true;
  }
  return false;
}

window.addEventListener("load", async () => {
  const url = window.location.href.split("/");
  if (url[url.length-2] === "pages") {
    await loadHtml("../header.html", "header");
    await loadHtml("../footer.html", "footer");
  } else {
    await loadHtml("./header.html", "header");
    await loadHtml("./footer.html", "footer");  
  }
});
