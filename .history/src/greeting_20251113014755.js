export default function pageLoad() {
    const content = document.querySelector("#content");

    content.innerHTML = "";

    const header = document.createElement("h1");
    header.textContent = "Welcome to Suhko Thai!";
    content.appendChild(header);

    const image = document.createElement("src");
    image.src = "../imgs/suhko.avif";
    image.alt = "image";
    content.appendChild(image);

    const desc = document.createElement("p");
    desc.textContent = "Suhko Thai is an absolute gem";
    content.appendChild(desc);

}

