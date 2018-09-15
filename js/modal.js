var search = document.querySelector(".search-button");
var popup = document.querySelector(".modal-search-form");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var aduls = popup.querySelector("[name=aduls]");
var childrens = popup.querySelector("[name=childrens]");
var form = popup.querySelector("form");

if (window.localStorage) {
	var isStorageSupport = true;
} else {
	var isStorageSupport = false;
}

if (isStorageSupport) {
	arrival.value = localStorage.getItem("arrival");
	departure.value = localStorage.getItem("departure");
	aduls.value = localStorage.getItem("aduls");
	childrens.value = localStorage.getItem("childrens");
}

search.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-none");
	if (arrival.value) {
		if (departure.value) {
			if (aduls.value) {
				childrens.focus()
			} else {
				aduls.focus()
			}
		} else {
			departure.focus()
		}
	} else {
		setTimeout (function() {
			arrival.focus();
		}, 1000)
	}
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !aduls.value || !childrens.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    if(isStorageSupport){
      localStorage.setItem("arrival", arrival.value);
      localStorage.setItem("departure", departure.value);
      localStorage.setItem("aduls", aduls.value);
      localStorage.setItem("childrens", childrens.value);
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
