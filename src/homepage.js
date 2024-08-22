// module for rendering the homepage


export  default function renderHomepage() {
    // dom variables
    const content = document.querySelector("#content");
    const homepage = document.createElement("div");
    const name = document.createElement("div");
    const promo = document.createElement("div");
    const pictureOne = document.createElement("div");
    const pictureTwo = document.createElement("div");
    const pictureThree = document.createElement("div");

    // adding css classes and text content
    homepage.classList.add("home-page"); 
    name.classList.add("name");
    promo.classList.add("promo");  
    pictureOne.classList.add("picture");
    pictureOne.classList.add("one");
    pictureTwo.classList.add("picture");
    pictureTwo.classList.add("two");
    pictureThree.classList.add("picture");
    pictureThree.classList.add("three");

    name.textContent = "Texas Steak";
    promo.textContent = "Hello Welcome To Texas Steak! The Best Steak House in Texas and the Country!"

    // appending dom elements to the homepage container and homepage to main content container
    homepage.appendChild(name);
    homepage.appendChild(promo);
    homepage.appendChild(pictureOne);
    homepage.appendChild(pictureTwo);
    homepage.appendChild(pictureThree);
    content.appendChild(homepage);
}

/* <div class="home-page">
    <div class="name">Texas Stake</div>
    <div class="promo">Hello Welcome To Texas Stake! <br> The Best Stake House in Texas and the Country!</div>
    <div class="picture one">Image by <a href="https://pixabay.com/users/ray_shrewsberry-7673058/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8683863">Ray Shrewsberry •</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8683863">Pixabay</a></div>
    <div class="picture two">Image by <a href="https://pixabay.com/users/kyraxys-41857870/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8771203">Leo</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8771203">Pixabay</a></div>
    <div class="picture three">Image by <a href="https://pixabay.com/users/eismannhans-5686/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8606240">Hans Schwarzkopf</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8606240">Pixabay</a></div>
</div> */