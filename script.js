// Array of my 10 favorite foods
let foods = [
    "Pizza",
    "Tacos",
    "Hamburgers",
    "Spaghetti",
    "Chicken Wings",
    "Sushi",
    "BBQ Ribs",
    "Enchiladas",
    "Fried Chicken",
    "Steak"
];

// Get the list from HTML
let foodList = document.getElementById("foodList");

// Use a loop to display all 10 foods
for (let i = 0; i < foods.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = foods[i];
    foodList.appendChild(listItem);
}