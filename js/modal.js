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
    popup.classList.remove("modal-error");
    popup.classList.toggle("modal-none");

    if (storage) {
      arrival.value = storage;
      setTimeout(function() {
	       departure.focus();
       }, 1000);
    } else {
        setTimeout(function() {
            arrival.focus();
        }, 1000);
      }
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !aduls.value || !childrens.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      loaclaStorage.setItem("arrival", arrival.value);
    } else {
      if (isStorageSupport) {
        loaclaStorage.setItem("departure", departure.value);
      } else {
        if (isStorageSupport) {
          loaclaStorage.setItem("aduls", aduls.value);
        } else {
          if (isStorageSupport) {
            loaclaStorage.setItem("childrens", childrens.value);
          }
        }
      }
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
