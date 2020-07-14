let feedbackOpen = document.querySelector(".popup-open");
let feedbackPopup = document.querySelector(".popup-feedback");
let feedbackClose = feedbackPopup.querySelector(".popup-close");
let feedbackForm = feedbackPopup.querySelector(".feedback__form");
let addresseeName = feedbackPopup.querySelector(".addressee-name");
let addresseeEmail = feedbackPopup.querySelector(".addressee-email");
let feedbackLetter = feedbackPopup.querySelector(".feedback-letter");

let slider = document.querySelector(".slider");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

feedbackOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("popup-feedback--show");
    if (storageName) {
        addresseeName.value = storageName;
        addresseeEmail.focus();

        if (storageEmail) {
            addresseeEmail.value = storageEmail;
            feedbackLetter.focus();
        } else {
            addresseeEmail.focus();
        }

    } else {
        addresseeName.focus();
    }

});

feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("popup-feedback--show");
    feedbackPopup.classList.remove("popup-feedback--error");
});

feedbackForm.addEventListener("submit", function(evt) {
    if (!addresseeName.value || !addresseeEmail.value || !feedbackLetter.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("popup-feedback--error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("popup-feedback--error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", addresseeName.value);
            localStorage.setItem("email", addresseeEmail.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (feedbackPopup.classList.contains("popup-feedback--show")) {
            evt.preventDefault();
            feedbackPopup.classList.remove("popup-feedback--show");
            feedbackPopup.classList.remove("popup-feedback--error");
        }
    }
})

/*Слайдер*/