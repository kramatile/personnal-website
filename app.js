const boxes = document.querySelectorAll(".box-edu")

window.addEventListener("scroll",checkboxes);

function checkboxes(){
    const triggerBottom = window.innerHeight/5 * 4;
    boxes.forEach((boxe) => {
        const boxtop = boxe.getBoundingClientRect().top;
        if(boxtop < triggerBottom){
            boxe.classList.add("show");
        }
        else{
            boxe.classList.remove("show")
        }
    })
}