document.addEventListener("DOMContentLoaded", main);

const ramens = [ {
    /* { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" } */

    id: 1, 
    name: "Instant Ramen",
    description: "A quick affordable meal featuring packaged noodles with a simple broth, chewy noodles and seasoning packet. Can be prepared quickly in the comfort of your own home.",
    restaurant: "N/A. Commercially sold. Prepared at home.", 
    image: "images/instant-2.jpg", 
    rating: 5, 
    comment: "Easy and delicious." },

    {
        id: 2,
        name: "Miso Ramen",
        description: "Thick curly ramen noodles in a rich, savoury miso-based broth (soybean paste) with a topping of grilled chicken, soy-marinated eggs green chillies and wheel of lime.",
        restaurant: "Menya",
        image: "images/miso.png",
        rating: 9.5,
        comment: "So flavourful and so rich!"
    },

    {
        id: 3,
        name: "Miso Ramen",
        description: "Thick curly ramen noodles in a rich, savoury miso-based broth (soybean paste) with a topping of grilled chicken, soy-marinated eggs green chillies and wheel of lime.",
        restaurant: "Menya",
        image: "images/miso.png",
        rating: 9.5,
        comment: "So flavourful and so rich!"
    },

    {
        id: 4,
        name: "Miso Ramen",
        description: "Thick curly ramen noodles in a rich, savoury miso-based broth (soybean paste) with a topping of grilled chicken, soy-marinated eggs green chillies and wheel of lime.",
        restaurant: "Menya",
        image: "images/miso.png",
        rating: 9.5,
        comment: "So flavourful and so rich!"
    },


    {
        id: 5,
        name: "Miso Ramen",
        description: "Thick curly ramen noodles in a rich, savoury miso-based broth (soybean paste) with a topping of grilled chicken, soy-marinated eggs green chillies and wheel of lime.",
        restaurant: "Menya",
        image: "images/miso.png",
        rating: 9.5,
        comment: "So flavourful and so rich!"
    },


    {
        id: 6,
        name: "Miso Ramen",
        description: "Thick curly ramen noodles in a rich, savoury miso-based broth (soybean paste) with a topping of grilled chicken, soy-marinated eggs green chillies and wheel of lime.",
        restaurant: "Menya",
        image: "images/miso.png",
        rating: 9.5,
        comment: "So flavourful and so rich!"
    },


    {
        id: 7,
        name: "Miso Ramen",
        description: "Thick curly ramen noodles in a rich, savoury miso-based broth (soybean paste) with a topping of grilled chicken, soy-marinated eggs green chillies and wheel of lime.",
        restaurant: "Menya",
        image: "images/miso.png",
        rating: 9.5,
        comment: "So flavourful and so rich!"
    },


    {
        id: 8,
        name: "Miso Ramen",
        description: "Thick curly ramen noodles in a rich, savoury miso-based broth (soybean paste) with a topping of grilled chicken, soy-marinated eggs green chillies and wheel of lime.",
        restaurant: "Menya",
        image: "images/miso.png",
        rating: 9.5,
        comment: "So flavourful and so rich!"
    },

    {
        id: 9,
        name: "Miso Ramen",
        description: "Thick curly ramen noodles in a rich, savoury miso-based broth (soybean paste) with a topping of grilled chicken, soy-marinated eggs green chillies and wheel of lime.",
        restaurant: "Menya",
        image: "images/miso.png",
        rating: 9.5,
        comment: "So flavourful and so rich!"
    },


    {
        id: 10,
        name: "Miso Ramen",
        description: "Thick curly ramen noodles in a rich, savoury miso-based broth (soybean paste) with a topping of grilled chicken, soy-marinated eggs green chillies and wheel of lime.",
        restaurant: "Menya",
        image: "images/miso.png",
        rating: 9.5,
        comment: "So flavourful and so rich!"
    }
 ];

function main() {

    //Default Ramen display details
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }

    displayRamens();
    setupCarousel();
    addSubmitListener();
}

function displayRamens() {
    
    //New additions display
    const ramenMenu = document.getElementById("ramenMenu");
    ramenMenu.innerHTML = "";

    ramens.forEach((ramen) => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.dataset.id = ramen.id;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img)
    });
 
}

function handleClick(ramen) {
    document.getElementById("defaultImage").src = ramen.image;
    document.getElementById("ramenName").textContent = ramen.name;
    document.getElementById("ramenDescription").textContent = ramen.description;
    document.getElementById("ramenRestaurant").textContent = ramen.restaurant;
    document.getElementById("ramenRating").textContent = `${ramen.rating}/10`;
    document.getElementById("ramenComment").textContent = ramen.comment;
}

function setupCarousel() {
    const ramenMenu = document.getElementById("ramenMenu");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("click", () => {
        ramenMenu.scrollBy({ left: -150, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        ramenMenu.scrollBy({ left: 150, behavior: "smooth" });
    });
}

function addSubmitListener() {
    const form = document.querySelector("form");

}