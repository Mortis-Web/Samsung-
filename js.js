// =============NAV BUTTON===========

const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.matchMedia("(max-width:768px)").matches) {
    if (window.scrollY > 200) {
      goTopBtn.style.display = "flex";
      goTopBtn.style.opacity = "1";
      goTopBtn.classList.add("btn-anim");
    } else {
      goTopBtn.style.display = "none";
    }
  }
}

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ==============HEADER LIST==============
let exit = document.querySelector(".exit-list");
let darkBg = document.querySelector(".overlay");
let list = document.querySelector(".header-list");
let icon = document.querySelector(".log-list");
let section = document.querySelectorAll(".section")
icon.addEventListener("click", function (e) {
  list.style.display = "flex";
  list.classList.remove("re-slide");
  darkBg.style.display = "block";
  document.body.classList.add("remove-scroll");
  section[0].style.zIndex = "-1";
  section[1].style.zIndex = "-1";
  e.stopPropagation();
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".header-list") && !e.target.closest(".log-list")) {
    list.classList.add("re-slide");
    darkBg.style.display = "none";
    document.body.classList.remove("remove-scroll");
    section[0].style.zIndex = "1";
    section[1].style.zIndex = "1";
  }
});

exit.addEventListener("click", function () {
  list.classList.add("re-slide");
  darkBg.style.display = "none";
  document.body.classList.remove("remove-scroll");
  section[0].style.zIndex = "1";
  section[1].style.zIndex = "1";
});

// ========LOADING ANIMATION======
let inputActive = true;
let myInput = document.getElementById("SEARCH-BAR");
let glass = document.querySelector(".glass");
let loader = document.querySelector(".loader");

function loading() {
  glass.style.display = "none";
  loader.style.display = "block";
}

function hideLoading() {
  glass.style.display = "flex";
  loader.style.display = "none";
}

function LoseFocus(e) {
  if (e.key === "Enter" || myInput.value.trim() === "") {
    hideLoading();
  }
}

function handleBlur(e) {
  if (!e.target.closest(".search-bar")) {
    myInput.blur();
    hideLoading();
  }
}

document.addEventListener("click", handleBlur);
myInput.addEventListener("keydown", LoseFocus);

// ===========NAV BAR===========
let nav = document.getElementById("nav-bar");
let navIcons = document.querySelectorAll(".nav-icons");
document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const maxScroll = 300;
  const newOpacity = Math.max(1 - scrollPosition / maxScroll, 0.3);
  navIcons[0].style.opacity = newOpacity;
  navIcons[1].style.opacity = newOpacity;
  navIcons[2].style.opacity = newOpacity;
  nav.addEventListener("mouseover", function () {
    navIcons[0].style.opacity = "1";
    navIcons[1].style.opacity = "1";
    navIcons[2].style.opacity = "1";
  });
});

//CATEGORIE DROPDOWN LIST
let Opened = false;
let arrow = document.getElementById("arrow");
let dropDownList = document.querySelector(".cat-options");
let cat = document.querySelector(".cat");
let ul = document.querySelectorAll(".ul");

cat.addEventListener("click", function (e) {
  if (Opened) {
    arrow.style.rotate = "0deg";
    dropDownList.style.opacity = "0";
    dropDownList.style.display = "none";
  } else {
    arrow.style.rotate = "180deg";
    arrow.style.transition = "0.25s all ease";
    dropDownList.style.opacity = "1";
    dropDownList.style.display = "block";
  }

  Opened = !Opened;
});

// window.addEventListener("scroll", function () {
//   let section2 = document.getElementById("sec3");
//   let hiddenDiv = document.getElementById("nav-bar");

//   let section2Position = section2.getBoundingClientRect();

//   if (section2Position.top < -section2.offsetHeight) {
//     hiddenDiv.style.display = "flex";
//   }

//   else{
//     hiddenDiv.style.display = "none";
//   }

// });
