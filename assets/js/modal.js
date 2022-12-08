// REGISTER MODAL REMOTE
var regisBtn = document.querySelector(".js-regis-btn");
var modalRegis = document.querySelector(".js-modal-regis");
var modalRegisContainer = document.querySelector(".js-modal-regis__body");
var regisReturnBtn = document.querySelector(".js-regis-return");
var modalSwitchToLogin = document.querySelector(".js-switch-login");
var modalSwitchToRegis = document.querySelector(".js-switch-regis");

// Hàm hiện modal bằng cách thêm class open vào
function showRegisModal() {
    modalRegis.classList.add("open");
}
// Hàm ẩn modal bằng cách remove class open khỏi modal
function closeRegisModal() {
    modalRegis.classList.remove("open");
}
// Bắt sự kiện click chuột để show modal
regisBtn.addEventListener("click", showRegisModal);
// Click chuột vào nút trở lại để ẩn modal
regisReturnBtn.addEventListener("click", closeRegisModal);
// Bắt sự kiện click chuột bên ngoài modal để ẩn modal
modalRegis.addEventListener("click", closeRegisModal);
modalRegisContainer.addEventListener("click", function (event) {
    event.stopPropagation();
});

// LOGIN MODAL REMOTE
var loginBtn = document.querySelector(".js-login-btn");
var modalLogin = document.querySelector(".js-modal-login");
var modalLoginContainer = document.querySelector(".js-modal-login__body");
var loginReturnBtn = document.querySelector(".js-login-return");

// Hàm hiện modal bằng cách thêm class open vào
function showLoginModal() {
    modalLogin.classList.add("open");
}
// Hàm ẩn modal bằng cách remove class open khỏi modal
function closeLoginModal() {
    modalLogin.classList.remove("open");
}

// Bắt sự kiện click chuột để show modal
loginBtn.addEventListener("click", showLoginModal);
// Click chuột vào nút trở lại để ẩn modal
loginReturnBtn.addEventListener("click", closeLoginModal);
// Bắt sự kiện click chuột bên ngoài modal để ẩn modal
modalLogin.addEventListener("click", closeLoginModal);
modalLoginContainer.addEventListener("click", function (event) {
    event.stopPropagation();
});

// SWITCH BUTTON REMOTE
function switchToLogin() {
    modalRegis.classList.remove("open");
    modalLogin.classList.add("open");
}
function switchToRegis() {
    modalLogin.classList.remove("open");
    modalRegis.classList.add("open");
}
modalSwitchToLogin.addEventListener("click", switchToLogin);
modalSwitchToRegis.addEventListener("click", switchToRegis);