
const home = document.querySelectorAll(".nav-link");
const lightText = document.querySelectorAll(".text-bright");
const contact = document.querySelector("#contact");
const dark = document.querySelectorAll(".dark-background");
const shadowRemove = document.querySelectorAll(".shadow-remove");
const blackBackground = document.querySelectorAll(".black-color");
const addContact = document.querySelector(".contact");
const removeContact = document.querySelector(".contact-remove");
const addMenu = document.querySelector(".menu-add");
const addMainMenu = document.querySelector(".mainnavbar");
const addMenuContent = document.querySelector(".mainnavbar-content");
const removeMenu = document.querySelector(".menu-remove");
const toggleBack = document.querySelector(".toggle-round");
const mainToggler = document.querySelector(".toggle-box");
const body = document.getElementById("body");



contact.addEventListener('click', () => {
    addContact.classList.add("contact-display");
});

removeContact.addEventListener('click', () => {
    addContact.classList.remove("contact-display");
});

addMenu.addEventListener('click', () => {
    addMenuContent.classList.add("mainnavbar-content-display");
    addMainMenu.classList.add("mainnavbar-display");
    
});

removeMenu.addEventListener('click', () => {
    addMainMenu.classList.remove("mainnavbar-display");
    addMenuContent.classList.remove("mainnavbar-content-display");
});


 
    let homeLen, i;
    homeLen = home.length;
    for (i = 0;i < homeLen; i++) {
        const element = home[i];
        element.addEventListener('click', () => {
            addMainMenu.classList.remove("mainnavbar-display");
            addMenuContent.classList.remove("mainnavbar-content-display");
        });
    }

    toggleBack.addEventListener('click', () => {
        toggleBack.classList.toggle("push");
        toggleBack.classList.toggle("toggle-dark-round");
        mainToggler.classList.toggle("toggle-dark");
        Array.from(dark).map((darktext) => {
            darktext.classList.toggle("dark");
        });
        Array.from(lightText).map((lightText) => {
            lightText.classList.toggle("light");
        });
        Array.from(shadowRemove).map((shadowCut) => {
            shadowCut.classList.toggle("shadow");
        });
        Array.from(blackBackground).map((blakBac) => {
            blakBac.classList.toggle("black");
        });
            let homeLen, i;
            homeLen = home.length;
        for (i = 0;i < homeLen; i++) {
            const element = home[i];
            element.classList.toggle("light");
        }   
    });

$(function(){
    $(document).scroll(function(){
        var $nav = $("#navbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
