var search = document.querySelector(".search-button");
var popup = document.querySelector(".modal-search-form");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var form = popup.querySelector("form");
var aduls = popup.querySelector("[name=aduls]");
var childrens = popup.querySelector("[name=childrens]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("arrival");
} catch (err) {
    isStorageSupport = false;
  }

search.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-none");

    if (storage) {
      arrival.value = storage;
      departure.focus();
    } else {
        arrival.focus();
      }
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !aduls.value || !childrens.value) {
    evt.preventDefault();
    console.log("input parametrs");
  } else {
    if (isStorageSupport) {
      loaclaStorage.setItem("arrival", arrival.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-search-form")) {
      popup.classList.toggle("modal-none");
    }
  }
})
