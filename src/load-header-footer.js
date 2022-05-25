async function loadHtml(path, parentId) {
  let resp = await fetch(path);
  if (resp.status === 200) {
    const parent = document.getElementById(parentId);
    if (parent) {
      parent.innerHTML = await resp.text();
    }
  }
}

window.addEventListener("load", async () => {
  await loadHtml("header.html", "header");
  await loadHtml("footer.html", "footer");
  await loadHtml("trailer.html", "trailer-container");
});
