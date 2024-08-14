let color_text = document.querySelector(".text_color").children;
let input = color_text[1].children[0];
input.value = "#b2fefa";
let textarea = color_text[0];
let button = document.querySelector("button");
let button2 = document.querySelectorAll(".buttons");
let right_container = document.querySelector(".right-container");

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('textarea');
    mainContainer.classList.add('animate__animated', 'animate__bounceIn');
    
    mainContainer.addEventListener('animationend', () => {
        mainContainer.classList.remove('animate__animated', 'animate__bounceIn');
    }, { once: true });
});

button.addEventListener("click",()=>{
    if(color_text[0].value === ""){
        alert("Write something Here");
        textarea.classList.add("animate__animated", "animate__shakeX");
        textarea.addEventListener("animationend", () => {
            textarea.classList.remove("animate__animated", "animate__shakeX");
        }, { once: true });
        return;
    }
    addnotes(color_text[0].value,input.value)
    color_text[0].value="";
    document.querySelector(".notes-container").style.display = "none";
});
function addnotes(notes,color){
    div1 = document.createElement('div');
    div1.innerHTML = `<p>${notes}</p> <button class="buttons">X</button>`;
    div1.classList.add('note');
    div1.style.backgroundColor = `${color}`;
    right_container.appendChild(div1);
    removeNote(); 
}
function removeNote(){
    button2 = document.querySelectorAll(".buttons");
    button2.forEach((val)=>{
        val.addEventListener("click",()=>{
            val.parentElement.remove();
        })
    })
}
const button1 = document.querySelector(".button button");

button.addEventListener("mouseover", () => {
    button1.classList.add("animate__animated", "animate__pulse");
});

button.addEventListener("animationend", () => {
    button1.classList.remove("animate__animated", "animate__pulse");
});