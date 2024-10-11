"use strict";
// ẨN HIỆN THÔNG TIN

const sectioncontent = document.querySelector(".section-content");
sectioncontent.classList.add("hidden");
const erroremail = document.querySelector(".error-email");
erroremail.style.color = "grey";

const btnSumbit = document.querySelector(".btn-submit");
btnSumbit.addEventListener("click", function () {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const check = emailValue.match(regex);
  const submitEmail = document.querySelector(".submit-email");

  if (check) {
    sectioncontent.style.display = "block";
    submitEmail.style.display = "none";
    erroremail.innerHTML = "";
  } else {
    erroremail.innerHTML = "Please enter valid email!";
    erroremail.style.color = "red";
  }
});

// AN HIEN JOB INFO

const viewinfo = document.querySelectorAll(".job-info");
const viewmore = document.querySelectorAll(".view-button");
for (let i = 0; i < viewinfo.length; i++) {
  const item = viewinfo[i];
  item.addEventListener("mouseover", function () {
    viewmore[i].classList.remove("hidden");
  });
  item.addEventListener("mouseout", function () {
    viewmore[i].classList.add("hidden");
  });
}
const hidden = document.querySelectorAll(".info-hidden");
for (let j = 0; j < hidden.length; j++) {
  const infohidden = hidden[j];

  const btnclick = viewmore[j];
  btnclick.addEventListener("click", function () {
    if (btnclick.innerHTML.includes("More")) {
      infohidden.classList.remove("hidden");
      btnclick.innerHTML = `<button class="btn btn-warning button">View Less</button>`;
    } else {
      infohidden.classList.add("hidden");
      btnclick.innerHTML = `<button class="btn btn-warning button">View More</button>`;
    }
  });
}
