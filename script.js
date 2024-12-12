const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



let loginSBtn = document.querySelector(".login-side-button");
let signSBtn = document.querySelector(".sign-side-button");
let signPage = document.querySelector(".sign-up");
let loginPage = document.querySelector(".sign-in");

signSBtn.addEventListener("click",function(){
    signPage.style.opacity = "1";
    signPage.style.zIndex = "1000";
    signSBtn.style.opacity = "0";
    loginSBtn.style.zIndex = "10000";
    loginSBtn.style.opacity = "1"; 
    loginPage.style.opacity = "0";
});

loginSBtn.addEventListener("click",function(){
    loginPage.style.opacity = "1";
    loginPage.style.zIndex = "1000";
    loginSBtn.style.opacity = "0"
    signSBtn.style.zIndex = "10000";
    signSBtn.style.opacity = "1";
    signPage.style.opacity = "0";
});
