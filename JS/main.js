var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning')

let timeRunning = 3000
let timeAutoNext = 5000

nextBtn.onclick = function () {
    showSlider('next')
}

prevBtn.onclick = function () {
    showSlider('prev')
}

let runTimeOut

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)





function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if (type === 'next') {
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)


}


const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('.icon');
        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';


        document.querySelectorAll('.faq-content').forEach(c => {
            if (c !== content) {
                c.style.maxHeight = '0px';
            }
        });

        document.querySelectorAll('.faq-toggle .icon').forEach(i => {
            if (i !== icon) {
                i.textContent = '+';
                i.classList.remove('text-purple-600', 'rotate-180');
                i.classList.add('text-gray-400');
            }
        });


        if (isOpen) {
            content.style.maxHeight = '0px';
            icon.textContent = '+';
            icon.classList.remove('text-purple-600', 'rotate-180');
            icon.classList.add('text-gray-400');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.textContent = '−';
            icon.classList.remove('text-gray-400');
            icon.classList.add('text-purple-600', 'rotate-180');
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("carouselContainer");
    const dots = document.querySelectorAll("#dotIndicators button");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentSlide = 0;
    const totalSlides = dots.length;
    let autoScroll;

    function updateView() {
        const cardsPerView = window.innerWidth >= 768 ? 3 : 1;
        const cardWidth = 100 / cardsPerView;
        container.style.transform = `translateX(-${currentSlide * cardWidth}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle("bg-purple-500", i === currentSlide);
            dot.classList.toggle("bg-gray-300", i !== currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides;
        updateView();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoScroll() {
        stopAutoScroll();
        autoScroll = setInterval(nextSlide, 4000);
    }

    function stopAutoScroll() {
        if (autoScroll) clearInterval(autoScroll);
    }


    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    dots.forEach((dot, i) => dot.addEventListener("click", () => goToSlide(i)));
    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);
    window.addEventListener("resize", updateView);


    updateView();
    startAutoScroll();
});