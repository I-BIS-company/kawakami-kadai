let mv = document.querySelector(".intro-container")

function zoomInAnimation() {

    setTimeout(function() {
        mv.classList.add("zoom-in");
    }, 3000)
}

function zoomOutAnimation() {
    
    setTimeout(function() {
        mv.classList.remove("zoom-in");
    }, 6000)
}

zoomInAnimation();
zoomOutAnimation();