fetch("https://striveschool-api.herokuapp.com/books")
  .then((books) => {
    if (books.ok) {
      return books.json();
    }
  })
  .then((books) => {
    const row = document.getElementById("rowDiv");
    console.log(books);

    books.forEach((book) => {
      const col = document.createElement("div");
      col.classList.add("col");
      const card = document.createElement("div");
      card.classList.add("card");
      const h3 = document.createElement("h3");
      h3.innerText = book.title;
      const img = document.createElement("img");
      img.src = book.img;
      img.classList.add("img-fluid");
      const p = document.createElement("p");
      img.classList.add("fs-5");
      p.innerText = "price: " + book.price;
      const button1 = document.createElement("button");
      button1.type = "submit";
      button1.classList.add("btn", "btn-primary");
      button1.innerText = "Compra";
      const button2 = document.createElement("button");
      button2.type = "submit";
      button2.classList.add("btn", "btn-warning");
      button2.innerText = "Scarta";
      row.appendChild(col);
      col.appendChild(card);
      card.appendChild(img);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(button1);
      card.appendChild(button2);
    });
  })
  .catch((error) => console.log(error));

const deleteCard = function () {
  let allDeleteButtons = document.querySelectorAll(".btn-warning");
  for (let i = 0; i < allDeleteButtons.length; i++) {
    allDeleteButtons[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
};

const addToCart = function () {
  let allAddButtons = document.querySelectorAll(".btn-primary");
  let list = document.getElementById("navbarDropdown");
  let cardHeading = document.querySelectorAll("h3").innerText;
  for (let i = 0; i < allAddButtons.length; i++) {
    allAddButtons[i].addEventListener("click", function () {
      list.appendChild(`
          <li><a class="dropdown-item" href="#">${cardHeading}</a></li>
          `);
    });
  }
};

const handleSubmit = function (e) {
  e.preventDefault();
  deleteCard();
  addToCart();
};

window.onload = function () {
  let form = document.querySelector("button");
  form.addEventListener("submit", handleSubmit);
};
