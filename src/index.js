import "./styles.css";
// importing all tabs
import renderHomepage from "./homepage";
import renderMenu from "./menu";


function clearContent() {
    // const content = document.querySelector("#content");
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    } 
}

renderHomepage();
const homeButton = document.querySelector(".home");
homeButton.addEventListener("click" , ( )=> {
    clearContent();
    renderHomepage();
});
const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click", () => {
    clearContent();
    renderMenu();
});
