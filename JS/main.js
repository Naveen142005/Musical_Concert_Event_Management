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




// document.getElementById('openModalBtn').addEventListener('click', async () => {
//     console.log("naveen");
//     document.getElementById('modalOverlay').classList.remove('hidden')
//     async function injectComponent(file, rootId) {
//         const res = await fetch(file);
//         const html = await res.text();
//         document.getElementById(rootId).innerHTML = html;
//     }

//     // Inject sidebar and nxavbar components
//     await Promise.all([
//         injectComponent('./src/User/login_signup.html', 'modalOverlay')]);


// })


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



    const loginBtn = document.getElementById('profilelogin');
    const profileSection = document.getElementById('profileSection');
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    const logoutBtn = document.getElementById('logoutBtn');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const mobileFacilities = document.getElementById('mobileFacilities');
    const mobileFacilitiesMenu = document.getElementById('mobileFacilitiesMenu');
    const mobileEvents = document.getElementById('mobileEvents');
    const mobileEventsMenu = document.getElementById('mobileEventsMenu');

    localStorage.setItem('redirecturl', window.location.href);

    document.getElementById('profileBtn').addEventListener('click', () => {

        document.getElementById('profileDropdown').classList.remove('hidden');
    })


    // Check authentication state on page load
    // mainBtn
    let currentOrganizerId = localStorage.getItem('currentorganizerId');
    let currentAudienceId = localStorage.getItem('currentaudienceId');

   

    if (currentAudienceId) {
        document.getElementById('BookBtn').innerText = 'Go to Events'
    }

    function checkAuthState() {
        const currentOrganizerId = localStorage.getItem('currentorganizerId');
        const currentAudienceId = localStorage.getItem('currentaudienceId');
        console.log(currentAudienceId);
        console.log(currentOrganizerId);

        if (currentOrganizerId || currentAudienceId) {

            document.getElementById('support_1').style.display = 'block';
            document.getElementById('support_2').style.display = 'block';
            // User is authenticated - show profile
            loginBtn.classList.add('hidden');
            profileSection.classList.remove('hidden');

            if (localStorage.getItem('currentaudienceId')) {
                document.getElementById('username').innerText = localStorage.getItem('currentaudienceName')
                document.getElementById('role').innerText = 'Audience';
            }
            else if (localStorage.getItem('currentorganizerId')) {
                document.getElementById('username').innerText = localStorage.getItem('currentorganizerName')
                document.getElementById('role').innerText = 'Organizer';
            }
        } else {
            // User is not authenticated - show login
            loginBtn.classList.remove('hidden');
            profileSection.classList.add('hidden');
        }
    }

    // Profile dropdown toggle
    let profileDropdownOpen = false;

    profileBtn?.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        profileDropdownOpen = !profileDropdownOpen;

        if (profileDropdownOpen) {
            profileDropdown.classList.remove('opacity-0', 'invisible', 'scale-95');
            profileDropdown.classList.add('opacity-100', 'visible', 'scale-100');
        } else {
            profileDropdown.classList.add('opacity-0', 'invisible', 'scale-95');
            profileDropdown.classList.remove('opacity-100', 'visible', 'scale-100');
        }
    });

    // Close profile dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (profileDropdownOpen && !profileSection.contains(e.target)) {
            profileDropdownOpen = false;
            profileDropdown.classList.add('opacity-0', 'invisible', 'scale-95');
            profileDropdown.classList.remove('opacity-100', 'visible', 'scale-100');
        }
    });

    // Logout functionality

    // Mobile menu functionality
    mobileMenuBtn?.addEventListener('click', function () {
        mobileMenu.classList.remove('-translate-x-full');
    });

    closeMobileMenu?.addEventListener('click', function () {
        mobileMenu.classList.add('-translate-x-full');
    });

    // Mobile dropdown toggles
    mobileFacilities?.addEventListener('click', function () {
        const isOpen = !mobileFacilitiesMenu.classList.contains('hidden');
        const arrow = this.querySelector('svg');

        if (isOpen) {
            mobileFacilitiesMenu.classList.add('hidden');
            arrow.classList.remove('rotate-180');
        } else {
            mobileFacilitiesMenu.classList.remove('hidden');
            arrow.classList.add('rotate-180');
        }
    });

    mobileEvents?.addEventListener('click', function () {
        const isOpen = !mobileEventsMenu.classList.contains('hidden');
        const arrow = this.querySelector('svg');

        if (isOpen) {
            mobileEventsMenu.classList.add('hidden');
            arrow.classList.remove('rotate-180');
        } else {
            mobileEventsMenu.classList.remove('hidden');
            arrow.classList.add('rotate-180');
        }
    });

    logoutBtn.addEventListener('click', () => {
        console.log("hello");

        const currentOrganizerId = localStorage.getItem('currentorganizerId');
        const currentAudienceId = localStorage.getItem('currentaudienceId');

        if (currentAudienceId) localStorage.removeItem('currentaudienceId');
        else if (currentOrganizerId) localStorage.removeItem('currentorganizerId')
        loginBtn.classList.remove('hidden');
        profileSection.classList.add('hidden');
        document.getElementById('support_1').style.display = 'none';
        document.getElementById('support_2').style.display = 'none';

    })

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.add('-translate-x-full');
        }
    });

    // Initialize authentication state
    checkAuthState();

     document.getElementById('mainBtn').addEventListener('click', () => {
        const currentOrganizerId = localStorage.getItem('currentorganizerId');
        const currentAudienceId = localStorage.getItem('currentaudienceId');

        if (currentAudienceId) {
            window.location.href = '/src/User/Bookings/userbookings.html';
        }
        else if (currentOrganizerId) {
            window.location.href = '/src/Organizer/New_concert-Bookings/concert_booking.html'
        }
    })

    console.log(document.getElementById('profileidxbtn'));
     
    document.getElementById('profileidxbtn').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const currentOrganizerId = localStorage.getItem('currentorganizerId');
        const currentAudienceId = localStorage.getItem('currentaudienceId');
        if (currentAudienceId) {
            window.location.href = '/src/User/profiles/profile.html';
        }
        else {
            window.location.href = '/src/Organizer/Profiles/profile.html';
        }
    })

    document.getElementById('bookingsbtn').addEventListener('click', () => {
         const currentOrganizerId = localStorage.getItem('currentorganizerId');
        const currentAudienceId = localStorage.getItem('currentaudienceId');
        // alert(currentAudienceId)
        
        if (currentAudienceId) {
            window.location.href = '/src/User/MyBookings/MYBOOKINGS.html'
        }
        else {
            window.location.href = "src/Organizer/MyBookings/complete_bookings.html"
        }
    })

    

});