/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener("click", () => {
        modal(i)
    })
})
modalClose.forEach((mc) => {
    mc.addEventListener("click", () => {
        modalViews.forEach((mv) => {
            mv.classList.remove("active-modal")
        })
    })

})
s.addEventListener("click", () => {

})



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset:true
})

sr.reveal(`.section__subtitle`, { delay: 400 })
sr.reveal(`.section__title`, { delay: 400 })
sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, { delay: 700 })
sr.reveal(`.home__social,.home__scroll`, { delay: 900, origin: "bottom" })
sr.reveal(`.about__img`, { delay: 500, origin: "left" })
sr.reveal(`.about__data`, { delay: 700, origin: "right" })
sr.reveal(`.about__description`, { delay: 1000, origin: "bottom" })
sr.reveal(`.first`, { delay: 700, origin: "left" })
sr.reveal(`.second`, { delay: 700, origin: "right" })
sr.reveal(`.skills__box`, { delay: 1500, origin: "bottom" })
sr.reveal(`.services__card`, { delay: 700, origin: "bottom" })
sr.reveal(`.work__filters`, { delay: 600, origin: "left" })
sr.reveal(`.work__container`, { delay: 700, origin: "bottom" })
sr.reveal(`.swiper`, { delay: 600, origin: "bottom" })
sr.reveal(`.left`, { delay: 700, origin: "left" })
sr.reveal(`.right`, { delay: 700, origin: "right" })