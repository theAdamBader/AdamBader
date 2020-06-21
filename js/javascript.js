//HAMBURGER MENU
document.getElementById("strokes").addEventListener("click", toggleFunc);
document.querySelector(".link-lists").addEventListener("click", toggleFunc);

function toggleFunc(){
    var menu= document.getElementById("strokes");
    menu.classList.toggle('active');

    var styling = document.getElementById("nav-overlay");

    if(styling.style.width === "100%")
    {
        styling.style.width = "0%";
    } else {
        styling.style.width = "100%";
    }

    var blur = document.getElementById("blur");
    blur.classList.toggle('active');
}

//==========================================================================================================================//

//NIGHT MODE
let darkMode = localStorage.getItem("dark-mode");
const darkModeToggle = document.querySelector("#negative");

const enableDarkMode = () => {

    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");

}

const disableDarkMode = () => {

    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", null);

}

if(darkMode === "enabled"){
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if(darkMode !== "enabled"){
        enableDarkMode();
    }else{disableDarkMode();}

})

//==========================================================================================================================//

//MOB VERSION
let darkMob = localStorage.getItem("dark-mode");
const darkModeToggleMob = document.querySelector("#negative-mob");

const enableDarkModeMob = () => {

    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");

}

const disableDarkModeMob = () => {

    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", null);

}

if(darkMob === "enabled"){
    enableDarkModeMob();
}

    darkModeToggleMob.addEventListener("click", () => {
    darkMob = localStorage.getItem("dark-mode");

    if(darkMob !== "enabled"){
        enableDarkModeMob();
    }else{disableDarkModeMob();}

})