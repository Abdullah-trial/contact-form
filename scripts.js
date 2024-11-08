"use strict";

// INPUT DATA
const firstNameInput = document.querySelector(".first-name-input");
const lastNameInput = document.querySelector(".last-name-input");
const emailInput = document.querySelector(".email-input");
const messageInput = document.querySelector(".message-input");
const termsInput = document.querySelector(".terms-checkbox");
const enquiryRadioBtn = document.querySelector(".enquiry-radio-btn");
const requestRadioBtn = document.querySelector(".request-radio-btn");
const btnSubmit = document.querySelector(".btn-submit");
///
const radioInputs = document.querySelectorAll(".radio-label");
const queryContainer = document.querySelector(".query-input-container");

// FUNCTIONS

const checkErrState = function (DOMElement, testCase, ...msgAndClass) {
  const [errorMsg, givenClass] = msgAndClass;
  const errMsg = `<span class="error-msg ${givenClass}">${errorMsg}</span>`;
  if (testCase) {
    document.querySelector(`.${givenClass}`)
      ? ""
      : DOMElement.insertAdjacentHTML("afterend", errMsg);
    document.querySelector(`.${givenClass}`).classList.remove("no-error-msg");
  } else {
    if (document.querySelector(`.${givenClass}`))
      document.querySelector(`.${givenClass}`).classList.add("no-error-msg");
  }
};
const textErrMsgFunc = function (inputElement, errorMsg, givenClass) {
  checkErrState(inputElement, inputElement.value === "", errorMsg, givenClass);
};

const checkboxErrMsgFunc = function (inputElement, errorMsg, givenClass) {
  checkErrState(
    document.querySelector(".terms-label"),
    !inputElement.checked,
    errorMsg,
    givenClass
  );
};

const RadioBtnErrMsgFunc = function (
  inputElement,
  inputElement2,
  errorMsg,
  givenClass
) {
  checkErrState(
    document.querySelector(".query-input-container"),
    !inputElement.checked && !inputElement2.checked,
    errorMsg,
    givenClass
  );
};

// DOM EVENTLISTENERS
btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  textErrMsgFunc(
    firstNameInput,
    "This field is required",
    "first-name-error-msg"
  );
  textErrMsgFunc(
    lastNameInput,
    "This field is required",
    "last-name-error-msg"
  );
  textErrMsgFunc(
    emailInput,
    "Please enter a valid email address",
    "email-error-msg"
  );
  textErrMsgFunc(messageInput, "This field is required", "message-error-msg");
  checkboxErrMsgFunc(termsInput, "This field is required", "terms-error-msg");
  RadioBtnErrMsgFunc(
    enquiryRadioBtn,
    requestRadioBtn,
    "Please select a query type",
    "query-error-msg"
  );
});

queryContainer.addEventListener("click", function (e) {
  radioInputs.forEach((el) => el.classList.remove("add-bg-color"));
  if (e.target.textContent === "") {
    e.target.parentNode.classList.toggle("add-bg-color");
  }
});
