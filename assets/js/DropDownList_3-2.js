

const optionMenu_03 = document.querySelector(".select-menu_03"),
selectBtn_03 = optionMenu_03.querySelector(".select-btn_03"),
options_03 = optionMenu_03.querySelectorAll(".option_03");
sBtn_text_03 = optionMenu_03.querySelector(".select_text_03");

selectBtn_03.addEventListener("click", () => optionMenu_03.classList.toggle("active"));

options_03.forEach(option_03 =>{
option_03.addEventListener("click",()=> {
let selectedOption_03 = option_03.querySelector(".options-text_03").innerText;
sBtn_text_03.innerText = selectedOption_03;
optionMenu_03.classList.toggle("active");
})
});