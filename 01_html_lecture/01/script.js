const toggle = document.querySelector("#toggleButton");
const toggleLabel = document.querySelector("#toggleLabel");

toggle.addEventListener("change", toggleChanged);

function toggleChanged(){
    if(toggle.checked){
        document.body.classList.add("dark-mode");
        toggleLabel.innerText = "Dark Mode";
    }
    else{
        document.body.classList.remove("dark-mode");
        toggleLabel.innerText = "Light Mode";
    }
}