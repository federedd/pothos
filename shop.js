const plants = [
  {
    id: 1,
    title: "monstera",
    category: "indoor",
    price: 15.99,
    img: "./plants/monstera.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "fiddleleaf fig",
    category: "indoor",
    price: 13.99,
    img: "./plants/fiddleleaf.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "lemon tree",
    category: "outdoor",
    price: 6.99,
    img: "./plants/lemon-tree.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "tamarind",
    category: "outdoor",
    price: 20.99,
    img: "./plants/tamarind.gif",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
];

const section = document.querySelector(".section");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  displayPlantsItems(plants);
});

function displayPlantsItems(plantItems) {
  let displayPlants = plantItems.map(function (plant) {
    return `  <article class="plant-item">
    <img src=${plant.img} class="photo" />
    <div class="item-info">
      <header>
        <h4>${plant.title}</h4>
        <h4 class="price">£${plant.price}</h4>
      </header>
      <p class="plant-text">
      ${plant.desc}
      </p>
    </div>
  </article>`;
  });
  displayPlants = displayPlants.join("");
  section.innerHTML = displayPlants;
}

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const plantCategory = plants.filter(function (plantItems) {
      if (plantItems.category === category) {
        return plantItems;
      }
    });
    if (category === "all") {
      displayPlantsItems(plants);
    } else {
      displayPlantsItems(plantCategory);
    }
  });
});
