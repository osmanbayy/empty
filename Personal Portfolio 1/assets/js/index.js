/* ============ SERVICES MODAL ============= */
const modal = document.querySelectorAll('.services-modal'),
    modalButton = document.querySelectorAll('.services-button'),
    modalClose = document.querySelectorAll('.services-modal-close');

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal');
}

modalButton.forEach((modalButton, index) => {
    modalButton.addEventListener('click', () => {
        activeModal(index);
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal');
        });
    });
});

/* ============ SWIPER TESTOMONIALS ============= */
const swiperTestomonial = new Swiper('.testimonial-swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
    }
});

/* ============ SHOW SCROLL UP ============= */

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);