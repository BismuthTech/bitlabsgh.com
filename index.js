// ------ faq functionality ------ //
const faqsHeads = document.querySelectorAll(".faq-head")

faqsHeads.forEach(faqHead => faqHead.addEventListener("click", () => {
    const isOpen = faqHead.parentElement.classList.toggle("active")

    const answer = faqHead.parentElement.querySelector(".answer")
    answer.style.marginTop = `${isOpen ? "20" : "0"}px`
    answer.style.height = `${isOpen ? answer.scrollHeight : 0}px`
}))


// ------ carousel funtionality ------ //
const carousel = document.getElementById("carousel-images")
const carouselNavs = document.querySelectorAll(".carousel-nav")

function moveCarousel(scrollAmount) {
    carousel.scrollLeft = carousel.scrollLeft + scrollAmount
}

// disable or enable carousel nav buttons based on carousel position //
function navSwitch() {
    carouselNavs.forEach(nav => {
        if (
            (nav.id === "right" && carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) ||
            (nav.id === "left" && carousel.scrollLeft === 0)
        ) {
            nav.classList.remove("active")
        } else {
            nav.classList.add("active")
        }
    })
}

window.addEventListener("resize", navSwitch)

// adding carousel on-click functionality //
carouselNavs.forEach(nav => nav.addEventListener("click", () => {
    if (!nav.classList.contains("active")) return

    // move carousel according to button clicked //
    if (nav.id === "left") {
        moveCarousel(-100)
    } else if (nav.id === "right") {
        moveCarousel(100)
    }

    navSwitch()
}))