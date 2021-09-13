// HOMEWORK-3

var form = document.querySelector(".js-form")

var nameInput = document.querySelector(".js-input");

var nameSelect = document.querySelector(".js-select");

var nameOption = document.querySelector(".js-option");

var nameText = document.querySelector(".js-text")


form.addEventListener("submit", function (event) {
      event.preventDefault()


      if (nameSelect.value == "Usd") {
            nameText.textContent = `${nameInput.value / (10613.54).toFixed(3)}$`;

      } else if (nameSelect.value == "Euro") {
            nameText.textContent = `${nameInput.value / (12568.36).toFixed(3)} Euro`;
      } else if (nameSelect.value == "Rub") {
            nameText.textContent = `${nameInput.value / (143.166).toFixed(3)} Rub`;
      } else if (nameSelect.value == "Dinor") {
            nameText.textContent = `${nameInput.value / (28065.91).toFixed(3)} Dinor`;
      }
})