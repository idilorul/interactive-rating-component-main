"use strict";
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const screenTwo = document.querySelector(".screen__two");

document.querySelector(".one").addEventListener("click", function () {
  document.querySelector(".submit").addEventListener("click", function () {
    document.querySelector(".screen__one").classList.add("hidden");
    document.querySelector(".screen__two").classList.remove("hidden");
    document.querySelector(".vote").textContent = 1;
  });
});

document.querySelector(".two").addEventListener("click", function () {
  document.querySelector(".submit").addEventListener("click", function () {
    document.querySelector(".screen__one").classList.add("hidden");
    document.querySelector(".screen__two").classList.remove("hidden");
    document.querySelector(".vote").textContent = 2;
  });
});

document.querySelector(".three").addEventListener("click", function () {
  document.querySelector(".submit").addEventListener("click", function () {
    document.querySelector(".screen__one").classList.add("hidden");
    document.querySelector(".screen__two").classList.remove("hidden");
    document.querySelector(".vote").textContent = 3;
  });
});

document.querySelector(".four").addEventListener("click", function () {
  document.querySelector(".submit").addEventListener("click", function () {
    document.querySelector(".screen__one").classList.add("hidden");
    document.querySelector(".screen__two").classList.remove("hidden");
    document.querySelector(".vote").textContent = 4;
  });
});

document.querySelector(".five").addEventListener("click", function () {
  document.querySelector(".submit").addEventListener("click", function () {
    document.querySelector(".screen__one").classList.add("hidden");
    document.querySelector(".screen__two").classList.remove("hidden");
    document.querySelector(".vote").textContent = 5;
  });
});
