 // 下拉式選單

 const optionMenu = document.querySelector(".select-menu"),
 selectBtn = optionMenu.querySelector(".select-btn"),
 options = optionMenu.querySelectorAll(".option");
 sBtn_text = optionMenu.querySelector(".select_text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option =>{
option.addEventListener("click",()=> {
 let selectedOption = option.querySelector(".options-text").innerText;
 sBtn_text.innerText = selectedOption;
 optionMenu.classList.toggle("active");
})
});


const optionMenu_02 = document.querySelector(".select-menu_02"),
selectBtn_02 = optionMenu_02.querySelector(".select-btn_02"),
options_02 = optionMenu_02.querySelectorAll(".option_02");
sBtn_text_02 = optionMenu_02.querySelector(".select_text_02");

selectBtn_02.addEventListener("click", () => optionMenu_02.classList.toggle("active"));

options_02.forEach(option_02 =>{
option_02.addEventListener("click",()=> {
let selectedOption_02 = option_02.querySelector(".options-text_02").innerText;
sBtn_text_02.innerText = selectedOption_02;
optionMenu_02.classList.toggle("active");
})
});


