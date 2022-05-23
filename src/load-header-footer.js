window.addEventListener("load", async () => {
  let resp = await fetch("/header.html");
  document.getElementById("header").innerHTML = await resp.text();
  resp = await fetch("/footer.html");
  document.getElementById("footer").innerHTML = await resp.text();
});

