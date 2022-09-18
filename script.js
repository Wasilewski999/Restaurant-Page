//MENU//
const kebab_button = document.querySelector(".k");
const dodatki_button = document.querySelector(".d");
const napoje_button = document.querySelector(".n");
const sekcja_kebab = document.querySelector(".kebabs");
const sekcja_dodatki = document.querySelector(".dodatki");
const sekcja_napoje = document.querySelector(".napoje");
sekcja_dodatki.style.display = "none";
sekcja_napoje.style.display = "none";
dodatki_button.addEventListener("click", ()=> {
    sekcja_dodatki.style.display = "contents";
    sekcja_kebab.style.display = "none";
    dodatki_button.style.color = "orange";
    napoje_button.style.color = "white";
    kebab_button.style.color = "white";
});
napoje_button.addEventListener("click", ()=> {
    sekcja_napoje.style.display = "contents";
    sekcja_dodatki.style.display = "none";
    dodatki_button.style.color = "white";
    kebab_button.style.color = "white";
    napoje_button.style.color = "orange";
});
kebab_button.addEventListener("click", ()=> {
    sekcja_kebab.style.display = "contents";
    sekcja_dodatki.style.display = "none";
    sekcja_napoje.style.display = "none";
    kebab_button.style.color = "orange";
    napoje_button.style.color = "white";
    dodatki_button.style.color = "white";
});

//SLIDER//
const sliderContainer = document.querySelector(".slider");
var slide = document.querySelector(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const opinions = [
    "Smakowite jedzenie",
    "Najlepszy kebab w Warszawie",
    "Fantastyczna obsługa",
    "Czekałam godzinę na kebaba a i tak przyjechał gorący :D",
    "Najlepsze mięso :D Kurczak przepyszny"
];
var opacity = [
    {opacity: 0},
    {opacity: 0.5},
    {opacity: 1}
]
var time = {
    duration: 1500,
    iterations: 1

}
slide.innerHTML = opinions[0];
let i = 0;
nextBtn.addEventListener("click", nextOpinion);
function nextOpinion(){
    i++;
    slide.innerHTML = opinions[i];
    if(i + 1 >= opinions.length){
        i=-1;
    }
    slide.animate(opacity, time);
}

