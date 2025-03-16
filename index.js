document.addEventListener("DOMContentLoaded", main);

const ramens = [ {
    id: 1, 
    name: "Instant Ramen",
    description: "A quick affordable meal featuring packaged noodles with a simple broth, chewy noodles and seasoning packet. Can be prepared quickly in the comfort of your own home.",
    restaurant: "N/A. Commercially sold. Prepared at home.", 
    image: "images/instant-2.jpg", 
    rating: 5, 
    comment: "Easy and delicious." }
 ];

 function main() {
    displayRamens();
}

 function displayRamens() {
    const defaultRamen = ramens[0];

    const defaultImage  = document.getElementById("defaultImage");
    const ramenName  = document.getElementById("ramenName");
    const ramenDescription  = document.getElementById("ramenDescription");
    const ramenRestaurant  = document.getElementById("ramenRestaurant");
    const ramenRating  = document.getElementById("ramenRating");
    const ramenComment = document.getElementById("ramenComment");

    defaultImage.src = defaultRamen.image;
    ramenName.textContent = defaultRamen.name;
    ramenDescription.textContent = defaultRamen.description;
    ramenRestaurant.textContent = defaultRamen.restaurant;
    ramenRating.textContent =`${defaultRamen.rating}/10`;
    ramenComment.textContent = defaultRamen.comment;
 }