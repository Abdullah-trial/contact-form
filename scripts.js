"use strict";

// INPUT DATA
const firstNameInput = document.querySelector(".first-name-input");
const lastNameInput = document.querySelector(".last-name-input");
const emailInput = document.querySelector(".email-input");
const queryEl = document.getElementsByName("query-type");

const messageInput = document.querySelector(".message-input");
const termsInput = document.querySelector("terms-input");
const btnSubmit = document.querySelector(".btn-submit");
// ERROR MESSAGES VARIABLES
const firstNameErrMsg = document.querySelector(".first-name-msg");
const lastNameErrMsg = document.querySelector(".last-name-msg");
const emailErrMsg = document.querySelector(".email-msg");
const queryErrMsg = document.querySelector(".query-msg");
const messageErrMsg = document.querySelector(".message-msg");
const termsErrMsg = document.querySelector(".terms-msg");

///
const radioInputs = document.querySelectorAll(".radio-label");

const queryContainer = document.querySelector(".query-input-container");

// DOM EVENTLISTENERS
btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  firstNameInput.value !== ""
    ? firstNameErrMsg.classList.add("no-error")
    : firstNameErrMsg.classList.remove("no-error");
});

queryContainer.addEventListener("click", function (e) {
  radioInputs.forEach((el) => el.classList.remove("add-bg-color"));
  if (e.target.textContent === "") {
    e.target.parentNode.classList.toggle("add-bg-color");
  }
});
