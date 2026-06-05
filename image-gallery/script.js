const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    document.querySelector(".active").classList.remove("active");
    button.classList.add("active");

    const name = button.dataset.name;

    cards.forEach(card => {

      if(name === "all" || card.dataset.name === name){
        card.style.display = "block";
      }
      else{
        card.style.display = "none";
      }

    });

  });
});

const search = document.getElementById("search");

search.addEventListener("keyup", () => {

  const value = search.value.toLowerCase();

  cards.forEach(card => {

    const category = card.dataset.name.toLowerCase();

    if(category.includes(value)){
      card.style.display = "block";
    }
    else{
      card.style.display = "none";
    }

  });

});

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {

  card.addEventListener("click", () => {

    lightbox.style.display = "flex";

    lightboxImg.src = card.querySelector("img").src;

  });

});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
  else{
    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }

});
