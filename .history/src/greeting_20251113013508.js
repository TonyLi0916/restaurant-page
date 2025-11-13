export default function pageLoad() {
    const content = document.querySelector("#content");

    content.innerHTML = "";

    const header = document.createElement("h");
    header.textContent = "Welcome to Suhko Thai!";
    content.appendChild(header);

    const image = document.createElement("i");
    image.src = "../imgs/suhko.avif";
    image.alt = "image";

    const desc = document.createElement("d");
    desc.textContent = "Suhko Thai is an absolute gem";
    
