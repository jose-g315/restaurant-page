// module for rendering about page

export default function renderAbout() {
    // dom variables
    const content = document.querySelector("#content");
    const about = document.createElement("div");
    const heroPicture = document.createElement("div");
    const mission = document.createElement("div");
    const statement = document.createElement("div");
    const contact = document.createElement("div");

    // adding css classes and text content
    heroPicture.classList.add("hero-image");
    about.classList.add("about-container");
    mission.classList.add("mission")
    statement.classList.add("statement");
    contact.classList.add("contact");

    mission.textContent = "Our Mission";
    statement.textContent = "Here at Texas Steak we strive to be a second home to everybody. When your here you are family. We are committed to providing a world class experience and ensuring that you leave happier and fuller than when you come in. So come on down partner!";
    contact.textContent = "Address: 123 Street St Oak, Texas Email: TexasSteak@gmail.com  Phone: 123-456-7890";

    // appending dom elements to about container and about to the main content container
    about.appendChild(heroPicture);
    about.appendChild(mission);
    about.appendChild(statement);
    about.appendChild(contact);
    content.appendChild(about);
}   