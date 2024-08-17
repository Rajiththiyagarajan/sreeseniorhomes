const dots = document.querySelectorAll('.dot');
const wrapper = document.querySelector('.testimonial-wrapper');
const boxes = document.querySelectorAll('.testimonial-box');
let currentIndex = 0;

function updateTransform() {
    const boxWidth = boxes[0].clientWidth + parseInt(window.getComputedStyle(boxes[0]).marginLeft) * 2;
    wrapper.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
}

dots.forEach(dot => {
    dot.addEventListener('click', function () {
        currentIndex = parseInt(this.getAttribute('data-index'));

        dots.forEach(d => d.classList.remove('active'));
        this.classList.add('active');

        updateTransform();
    });
});

window.addEventListener('resize', updateTransform);

window.addEventListener('load', updateTransform);