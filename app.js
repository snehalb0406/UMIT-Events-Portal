
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".event-card");

  searchInput.addEventListener("keyup", function () {
    const searchText = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const cardText = card.innerText.toLowerCase();

      if (cardText.includes(searchText)) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });

