export default function pageLoad() {
    const content = document.querySelector("#content");

    content.innerHTML = "";

    const header = document.createElement("h");
    header.textContent = "Welcome to Suhko Thai!";
    content.appendChild(header);
}


