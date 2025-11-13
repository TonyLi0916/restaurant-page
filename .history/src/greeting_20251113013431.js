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
    desc.textContent = "Suhko Thai is an absolute gem! From the moment you step in, the cozy vibe and friendly staff make you feel at home. The flavors are bold and authentic — every dish bursts with fresh ingredients and perfectly balanced spices. Whether you’re craving classic pad Thai, spicy curry, or something adventurous, Suhko Thai never disappoints. Simply put, it’s a must-visit for anyone who loves amazing Thai food!"



