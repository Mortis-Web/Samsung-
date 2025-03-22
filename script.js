//DARK AND LIGHT MODE
let lightDark = document.querySelector("#LightDark");

let shower = document.querySelectorAll(".nav-icon-head");
let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
moon.style.display = "none";

const darkTheme = {
  bodyBG: "#121622",
  color: "white",
  bg: "#090b13",
  colorDes: "aqua",
  LightHF: "#090b13",
  text: "Light-Mode",
  sunDisplay: "flex",
  moonDisplay: "none"
};

const lightTheme = {
  bodyBG: "#F3F3F3",
  color: "black",
  bg: "#FDF5E6",
  colorDes: "#00ffd1",
  LightHF: "#F5F5F4",
  text: "Dark-Mode",
  sunDisplay: "none",
  moonDisplay: "flex"
};

document.addEventListener("DOMContentLoaded",()=>{
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme){
    const theme = savedTheme  === "darkTheme" ? darkTheme : lightTheme; 
    applyTheme(theme);
  }
  else{
    applyTheme(darkTheme);
  }

})


lightDark.addEventListener("click", function () {
  const currentTheme =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--bodyBG")
      .trim() === darkTheme.bodyBG ? darkTheme : lightTheme;

      const newTheme = currentTheme === darkTheme ? lightTheme : darkTheme;
      localStorage.setItem("theme", newTheme === darkTheme ? "darkTheme" : "lightTheme");
      applyTheme(newTheme);

});

const applyTheme =(theme)=>{
      document.documentElement.style.setProperty("--bodyBG", theme.bodyBG);
      document.documentElement.style.setProperty("--color", theme.color);
      document.documentElement.style.setProperty("--bg", theme.bg);
      document.documentElement.style.setProperty('--colorDes', theme.colorDes);
      document.documentElement.style.setProperty('--LightHF', theme.LightHF);
      sun.style.display = theme.sunDisplay;
      moon.style.display = theme.moonDisplay;
      shower[1].textContent = theme.text;
      
};

// =============NAV BUTTON===========

const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.matchMedia("(max-width:768px)").matches) {
    if (window.scrollY > 200) {
      goTopBtn.style.display = "flex";
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

// ==================STATIS COUNTER===================
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false;

window.onscroll = function () {
  if (window.scrollY + 200 >= section.offsetTop - 100) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
// ==============DIV SWITCHER================
let switchers = document.querySelectorAll(".oth");
let main = document.getElementById("main");
let first = document.getElementById("first");
let second = document.getElementById("second");
switchers.forEach(function (switcher) {
  switcher.addEventListener("click", function (e) {
    if (e.target.id === "one") {
      main.style.display = "none";
      first.style.display = "flex";
      second.style.display = "none";
    }
    if (e.target.id === "two") {
      main.style.display = "none";
      second.style.display = "flex";
      first.style.display = "none";
    }
    if (e.target.id === "three") {
      main.style.display = "flex";
      main.classList.add("main");
      second.style.display = "none";
      first.style.display = "none";
    }
  });
});

// ===========NAV BAR===========
let nav = document.getElementById("nav-bar");
let navIcons = document.querySelectorAll(".nav-icons");
document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const maxScroll = 300;
  const newOpacity = Math.max(0.75 - scrollPosition / maxScroll, 0.3);
  navIcons[0].style.opacity = newOpacity;
  navIcons[1].style.opacity = newOpacity;
  navIcons[2].style.opacity = newOpacity;
  nav.addEventListener("mouseover", function () {
    navIcons[0].style.opacity = "1";
    navIcons[1].style.opacity = "1";
    navIcons[2].style.opacity = "1";
  });
});
// ==============CHANGE LAN=============
// const translations = {
//   en: {
//     greeting: "Your Dream Website Awaits",
//     headDes: "We create stunning and responsive websites.",
//     learn: "Learn More",
//     h2: "Lorem, ipsum dolor.",
//     p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, illo, aperiam minima ipsa enim at beatae adipisci molestias libero dicta quis veniam officiis. Beatae vitae asperiores eligendi natusLorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, illo, aperiam minima ipsa enim at beatae adipisci molestias libero dicta quis veniam officiis. Beatae vitae asperiores eligendi natusLorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, illo, aperiam minima ipsa enim at beatae adipisci molestias libero dicta quis veniam officiis. Beatae vitae asperiores eligendi natusLorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, illo, aperiam minima ipsa enim at beatae adipisci molestias libero dicta quis veniam officiis. Beatae vitae asperiores eligendi natusLorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, illo, aperiam minima ipsa enim at beatae adipisci molestias libero dicta quis veniam officiis. Beatae vitae asperiores eligendi natusLorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, illo, aperiam minima ipsa enim at beatae adipisci molestias libero dicta quis veniam officiis. Beatae vitae asperiores eligendi natus ipsum.",
//   },

//   ar: {
//     greeting: "موقع أحلامك في انتظارك",
//     headDes: "نحن ننشئ مواقع ويب مذهلة ومتجاوبة",
//     learn: "تعلم المزيد",
//     h2: "لوريم، إيبسوم دولور.",
//     P: "لوم، إيبسوم دولور سيت أميت كونسكتتور أديبيسشينغ إيليت. ريبديندي دولوريمكي، إلو، أبياريام مينيميا إيبسا إينيم أت بيآتي أديبيسشي مولستياز ليبيرو ديكتا كويز فينيام أوفيسييس. بيآتي فيتاي أسبيروريس إليجيندي ناتوسلوم، إيبسوم دولور سيت أميت كونسكتتور أديبيسشينغ إيليت. ريبديندي دولوريمكي، إلو، أبياريام مينيميا إيبسا إينيم أت بيآتي أديبيسشي مولستياز ليبيرو ديكتا كويز فينيام أوفيسييس. بيآتي فيتاي أسبيروريس إليجيندي ناتوسلوم، إيبسوم دولور سيت أميت كونسكتتور أديبيسشينغ إيليت. ريبديندي دولوريمكي، إلو، أبياريام مينيميا إيبسا إينيم أت بيآتي أديبيسشي مولستياز ليبيرو ديكتا كويز فينيام أوفيسييس. بيآتي فيتاي أسبيروريس إليجيندي ناتوسلوم، إيبسوم دولور سيت أميت كونسكتتور أديبيسشينغ إيليت. ريبديندي دولوريمكي، إلو، أبياريام مينيميا إيبسا إينيم أت بيآتي أديبيسشي مولستياز ليبيرو ديكتا كويز فينيام أوفيسييس. بيآتي فيتاي أسبيروريس إليجيندي ناتوسلوم، إيبسوم دولور سيت أميت كونسكتتور أديبيسشينغ إيليت. ريبديندي دولوريمكي، إلو، أبياريام مينيميا إيبسا إينيم أت بيآتي أديبيسشي مولستياز ليبيرو ديكتا كويز فينيام أوفيسييس. بيآتي فيتاي أسبيروريس إليجيندي ن",
//   },
// };

// function changeLanguage(lang) {
//   let elements = document.querySelectorAll("[data-key]");
//   elements.forEach((element) => {
//     let key = element.getAttribute("data-key");
//     element.textContent = translations[lang][key];
//   });
// }

// // Default language on page load
// window.onload = () => changeLanguage("en");
