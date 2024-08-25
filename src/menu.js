// module for rendering the menu

// importing food data
import { menuItems } from "./food-data";

export default function renderMenu() {
    // dom variables
    const content = document.querySelector("#content");
    const menu = document.createElement("div");
    const appetizers = document.createElement("div");
    const entrees = document.createElement("div");
    const desserts = document.createElement("div");
    const drinks = document.createElement("div");

    // adding css classes and text content
    menu.classList.add("menu-container");
    appetizers.classList.add("section-container");
    entrees.classList.add("section-container");
    desserts.classList.add("section-container");
    drinks.classList.add("section-container");

    appetizers.textContent = "Appetizers";
    entrees.textContent = "Entrees";
    desserts.textContent = "Desserts";
    drinks.textContent = "Drinks";

    // looping through food data to create dom elements and 
    menuItems.forEach((item) => {
        // dom variables
        const name = document.createElement("p");
        const description = document.createElement("p");
        const price = document.createElement("p");
        const itemContainer = document.createElement("div");

       // adding css classes and text content
        name.classList.add("food-name");
        description.classList.add("description");
        price.classList.add("price");
        itemContainer.classList.add("item-container");

        name.textContent = item.name;
        description.textContent = item.description;
        price.textContent = item.price;
        
        // appending item attributes to container
        itemContainer.appendChild(name);
        itemContainer.appendChild(description);
        itemContainer.appendChild(price);

        // appending to the correct menu section based on type
        if (item.type === "appetizer") {
            appetizers.appendChild(itemContainer);
            
        } else if(item.type === "entree") {
            entrees.appendChild(itemContainer);

        } else if (item.type === "dessert") {
            desserts.appendChild(itemContainer);

        } else if (item.type === "drink") {
            drinks.appendChild(itemContainer);
        }


        
    });
    
    // appending all sections menu and menu to main content container
    menu.appendChild(appetizers);
    menu.appendChild(entrees);
    menu.appendChild(desserts);
    menu.appendChild(drinks);
    content.appendChild(menu);
}