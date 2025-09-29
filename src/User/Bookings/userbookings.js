//   // Enhanced Events Data with Music-Related Content
// let eventsData = [
//     {
//         id: "evt101",
//         name: "Symphony Under the Stars",
//         date: "2025-10-05",
//         time: "7:00 PM",
//         band: "Orchestra Nova",
//         venue: "Grand Music Hall, Chennai",
//         image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&auto=format",
//         category: "Classical",
//         description: "Experience the magic of classical music under a starlit sky with Chennai's premier orchestra",
//         duration: "2 hours 30 minutes",
//         tickets: { premium: 1500, gold: 1000, silver: 500 },
//         availableTickets: 120
//     },
//     {
//         id: "evt102",
//         name: "Electric Nights Festival",
//         date: "2025-10-12",
//         time: "8:00 PM",
//         band: "Neon Pulse",
//         venue: "Phoenix Arena, Mumbai",
//         image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&auto=format",
//         category: "Electronic",
//         description: "A high-energy electronic music festival featuring cutting-edge sounds and visual spectacles",
//         duration: "4 hours",
//         tickets: { premium: 2000, gold: 1200, silver: 700 },
//         availableTickets: 8
//     },
//     {
//         id: "evt103",
//         name: "Jazz & Soul Evening",
//         date: "2025-10-18",
//         time: "7:30 PM",
//         band: "Smooth Operators",
//         venue: "Blue Note Club, Bangalore",
//         image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=600&fit=crop&auto=format",
//         category: "Jazz",
//         description: "An intimate evening of smooth jazz and soulful melodies in Bangalore's premier jazz venue",
//         duration: "2 hours 15 minutes",
//         tickets: { premium: 1200, gold: 800, silver: 400 },
//         availableTickets: 35
//     },
//     {
//         id: "evt104",
//         name: "Acoustic Dreams",
//         date: "2025-10-25",
//         time: "6:30 PM",
//         band: "Strings & Stories",
//         venue: "Harmony Gardens, Pune",
//         image: "https://images.unsplash.com/photo-1481715169005-a45cb3e67163?w=800&h=600&fit=crop&auto=format",
//         category: "Acoustic",
//         description: "Unplugged acoustic performances in a beautiful garden setting with storytelling elements",
//         duration: "2 hours",
//         tickets: { premium: 1000, gold: 650, silver: 350 },
//         availableTickets: 0
//     },
//     {
//         id: "evt105",
//         name: "Pop Culture Celebration",
//         date: "2025-11-02",
//         time: "8:30 PM",
//         band: "Vibrant Stars",
//         venue: "Crystal Palace, Delhi",
//         image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop&auto=format",
//         category: "Pop",
//         description: "A celebration of contemporary pop music with chart-topping hits and spectacular performances",
//         duration: "3 hours",
//         tickets: { premium: 2200, gold: 1400, silver: 800 },
//         availableTickets: 95
//     },
//     {
//         id: "evt106",
//         name: "Rock Revolution",
//         date: "2025-11-08",
//         time: "9:00 PM",
//         band: "Thunder Strike",
//         venue: "Metal Arena, Hyderabad",
//         image: "https://images.unsplash.com/photo-1571266028243-d220c6ae6ee8?w=800&h=600&fit=crop&auto=format",
//         category: "Rock",
//         description: "High-octane rock concert featuring powerful guitar riffs and thunderous drum beats",
//         duration: "2 hours 45 minutes",
//         tickets: { premium: 1800, gold: 1100, silver: 600 },
//         availableTickets: 25
//     },
//     {
//         id: "evt107",
//         name: "Classical Fusion Night",
//         date: "2025-11-15",
//         time: "7:00 PM",
//         band: "Heritage Ensemble",
//         venue: "Royal Theatre, Mumbai",
//         image: "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=800&h=600&fit=crop&auto=format",
//         category: "Fusion",
//         description: "A unique blend of classical Indian music with modern arrangements and instruments",
//         duration: "2 hours 20 minutes",
//         tickets: { premium: 1600, gold: 950, silver: 550 },
//         availableTickets: 65
//     },
//     {
//         id: "evt108",
//         name: "Indie Showcase",
//         date: "2025-11-22",
//         time: "8:00 PM",
//         band: "Alternative Minds",
//         venue: "Underground Club, Kolkata",
//         image: "https://images.unsplash.com/photo-1564103049-e7fc7ddf52bb?w=800&h=600&fit=crop&auto=format",
//         category: "Indie",
//         description: "Discover emerging independent artists and alternative sounds in an intimate venue setting",
//         duration: "2 hours 30 minutes",
//         tickets: { premium: 1300, gold: 750, silver: 450 },
//         availableTickets: 3
//     }
// ];

let eventsData;
let filteredEvents;
async function getData() {
    try {
        console.log("🚀 getData started - showing skeleton");
        showLoadingSkeleton();
        const data = await fetch('https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2');
        const res = await data.json();
        console.log('API Response:', res);

        // Create lookup maps
        const venueMap = Object.fromEntries(res.Venues.map(v => [v.id, v.name]));
        const bandMap = Object.fromEntries(res.Bands.map(b => [b.id, b.name]));
        const decorMap = Object.fromEntries(res.Decorations.map(d => [d.id, d.name]));

        const eventBookings = res.EventsBookings;
        console.log('Event Bookings:', eventBookings);
        // const today = new Date().toISOString().split("T")[0];
        const today = new Date(); // current datetime
        // Transform API data to match frontend format


        eventsData = eventBookings.map((item, index) => {
            let date, timeRaw;

            // Safe access to bookedSlots with null/undefined checks
            if (item.bookedSlots && Array.isArray(item.bookedSlots) && item.bookedSlots.length > 0) {
                let slot = item.bookedSlots[0];
                if (slot && typeof slot === 'string') {
                    let parts = slot.split("-");
                    timeRaw = parts.pop(); // last part = time
                    date = parts.join("-"); // rest = date
                }
            }

            // Time mapping with safe access
            const timeMap = {
                morning: "Morning",
                afternoon: "Afternoon",
                night: "Night"
            };

            // Debug logging for specific event
            if (item.eventName === "Mokka Event") {
                console.log(date, timeRaw, "hello");
            }

            // Safe time mapping with fallback
            const time = timeMap[timeRaw?.toLowerCase()] || "N/A";

            // Convert time text to 24h hour
            const hourMap = { Morning: 7, Afternoon: 12, Night: 18 };
            const eventHour = hourMap[time] || 0;

            // Build event datetime with proper date validation
            let eventDateTime = new Date();
            if (date && date !== "N/A") {
                try {
                    eventDateTime = new Date(date);
                    // Check if date is valid
                    if (isNaN(eventDateTime.getTime())) {
                        eventDateTime = new Date(); // fallback to current date
                    }
                } catch (error) {
                    console.error("Date parsing error:", error);
                    eventDateTime = new Date(); // fallback to current date
                }
            }

            eventDateTime.setHours(eventHour, 0, 0, 0); // set hour, minutes, seconds, ms

            // Simple past/future check with safe property access
            console.log(item.bookingStatus);

            const isPast = eventDateTime < today || item.bookingStatus === "cancelled";

            // Define fallback maps if not already defined
            const safeBandMap = bandMap || {};
            const safeVenueMap = venueMap || {};
            const safeDecorMap = decorMap || {};

            return {
                id: item.bookingId || `evt${index + 1}`,
                name: item.eventName || "Unnamed Event",
                date: date || item.bookingDate?.slice(0, 10) || "2025-10-01",
                time: time,
                band: safeBandMap[item.bandId] || "Unknown Band",
                venue: safeVenueMap[item.venueId] || "Unknown Venue",
                decoration: safeDecorMap[item.decorId] || null,
                category: item.category || "General",
                description: item.eventDescription || "An amazing musical event",
                duration: item.duration || "2 hours",
                image: item.image || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&auto=format",
                tickets: {
                    premium: item.ticketPrices?.premiumPrice || 1500,
                    gold: item.ticketPrices?.goldPrice || 1000,
                    silver: item.ticketPrices?.silverPrice || 500
                },
                availableTickets: item.availableTickets || 100,
                isPast: isPast
            };
        });

        filteredEvents = [...eventsData];
        // console.log('Transformed Events Data:', apiEventsData);
        console.log("🎯 Hiding skeleton and showing data");
        //
        displayEvents();
        // eventsData = apiEventsData;
        // Start the app with API data
        // startapp(apiEventsData);


    } catch (error) {
        hideLoadingSkeleton();
        console.error('Error fetching events data:', error);
        console.log('Using static fallback data');
        // Fallback to static data if API fails
        // startapp(staticEventsData);
    }
}

// Application State

let displayedEvents = 50;
let currentBookingEvent = null;
let searchTimeout = null;
let ticketSelections = {};

// Navigation History
let navigationHistory = [];
// Initialize Application
document.addEventListener('DOMContentLoaded', function () {

    const signInBtn = document.getElementById('signInBtn');
    const profileBtn = document.getElementById('profileBtn');
    const profileName = document.getElementById('pname');
    console.log("helloooo");


    if (localStorage.getItem('currentaudienceId') || localStorage.getItem('currentorganizerId')) {
        console.log("hkhkjh");
        console.log(localStorage.getItem('currentorganizerId') + localStorage.getItem('currentorganizerName'));

        signInBtn.classList.add('hidden');
        profileBtn.classList.remove('hidden');
        if (localStorage.getItem('currentaudienceName'))
            profileName.innerText = localStorage.getItem('currentaudienceName')
        else
            profileName.innerText = localStorage.getItem('currentorganizerName')
    }
    // else if (localStorage.getItem('currentorganizerId')) {
    //     signInBtn.classList.add('hidden');
    //     profileBtn.classList.remove('hidden');
    //     profileName.innerText = localStorage.getItem('currentorganizerName')
    // }
    feather.replace();


    // Store initial page in history
    navigationHistory.push({
        page: 'main',
        timestamp: Date.now()
    });
    getData();
});



// Enhanced Back Button Functionality
function goBack() {
    if (navigationHistory.length > 1) {
        navigationHistory.pop(); // Remove current page
        const previousPage = navigationHistory[navigationHistory.length - 1];

        if (previousPage.page === 'main') {
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
            showToast('Navigated back to main page', 'info');
        }
    } else {
        // If no history, go to top of current page
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast('Already on main page', 'info');
    }
}




// Setup Event Listeners
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('loadMoreBtn').addEventListener('click', loadMoreEvents);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeBookingModal();
            closeLoginModal();
            closeSuccessModal();
            closePaymentModal();

        }
    });
}


// Loading Skeleton
function showLoadingSkeleton() {
    // Hide actual content first
    const eventsContainer = document.getElementById('eventsContainer');
    if (eventsContainer) {
        eventsContainer.classList.add('hidden');
    }

    const skeleton = document.getElementById('loadingSkeleton');
    if (!skeleton) {
        console.error('Loading skeleton element not found');
        return;
    }

    skeleton.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        skeleton.innerHTML += `
            <div class="card-elegant stagger-animation" style="--stagger-delay: ${i * 100}ms;">
                <div class="w-full h-64 skeleton-shimmer"></div>
                <div class="p-8">
                    <div class="w-3/4 h-7 skeleton-shimmer rounded-xl mb-4"></div>
                    <div class="w-1/2 h-5 skeleton-shimmer rounded-lg mb-3"></div>
                    <div class="w-2/3 h-5 skeleton-shimmer rounded-lg mb-6"></div>
                    <div class="w-full h-14 skeleton-shimmer rounded-2xl"></div>
                </div>
            </div>
        `;
    }

    skeleton.classList.remove('hidden');
}

function hideLoadingSkeleton() {
    const skeleton = document.getElementById('loadingSkeleton');
    if (skeleton) {
        skeleton.classList.add('hidden');
    }

    // Show actual content
    const eventsContainer = document.getElementById('eventsContainer');
    if (eventsContainer) {
        eventsContainer.classList.remove('hidden');
    }
}
// Enhanced Display Events with Perfect Spacing and Alignment

// Update the displayEvents function with Hero Icons
// Add this function to your JavaScript file

// Function to retrieve all bookings from localStorage
function getMyBookings() {
    console.log("__________________________________________");
    
    try {
        // Get stored bookings from localStorage
        const storedBookings = localStorage.getItem('TicketBookings');
        
        if (!storedBookings) {
            console.log('No bookings found in localStorage');
            return [];
        }

        // Parse the stored JSON
        const rawBookings = JSON.parse(storedBookings);
        
        // Transform raw booking data to your desired format
        const formattedBookings = rawBookings.map((booking, index) => {
            // Find the event details from eventsData
            const eventDetails = eventsData.find(event => event.id === booking.BookingId);
            
            if (!eventDetails) {
                console.warn(`Event not found for booking ID: ${booking.BookingId}`);
                return null;
            }

            // Calculate total amount based on ticket type and quantity
            let totalAmount = 0;
            const tickets = [];

            if (booking.type === 'premium' && booking.quantity > 0) {
                totalAmount = eventDetails.tickets.premium * booking.quantity;
                tickets.push({ 
                    type: 'Premium', 
                    quantity: booking.quantity, 
                    price: eventDetails.tickets.premium 
                });
            } else if (booking.type === 'gold' && booking.quantity > 0) {
                totalAmount = eventDetails.tickets.gold * booking.quantity;
                tickets.push({ 
                    type: 'Gold', 
                    quantity: booking.quantity, 
                    price: eventDetails.tickets.gold 
                });
            } else if (booking.type === 'silver' && booking.quantity > 0) {
                totalAmount = eventDetails.tickets.silver * booking.quantity;
                tickets.push({ 
                    type: 'Silver', 
                    quantity: booking.quantity, 
                    price: eventDetails.tickets.silver 
                });
            }

            // Generate booking reference if not exists
            const bookingId = `TGZ${String(index + 1).padStart(6, '0')}`;

            return {
                id: `booking${String(index + 1).padStart(3, '0')}`,
                eventId: booking.BookingId,
                eventName: eventDetails.name,
                eventImage: eventDetails.image,
                date: eventDetails.date,
                time: eventDetails.time,
                venue: eventDetails.venue,
                band: eventDetails.band,
                category: eventDetails.category,
                tickets: tickets,
                totalAmount: totalAmount,
                bookingDate: new Date().toISOString().split('T')[0], // Current date as booking date
                status: 'confirmed',
                bookingId: bookingId,
                username: booking.username || 'Guest',
                userEmail: booking.useremail || ''
            };
        }).filter(booking => booking !== null); // Remove any null entries

        return formattedBookings;
    } catch (error) {
        console.error('Error retrieving bookings:', error);
        return [];
    }
}

// Function to get a specific booking by ID
function getBookingById(bookingId) {
    const allBookings = getMyBookings();
    return allBookings.find(booking => booking.bookingId === bookingId);
}

// Function to get bookings for current user
function getCurrentUserBookings() {
    const currentUsername = localStorage.getItem('currentaudienceName');
    if (!currentUsername) {
        console.log('No user logged in');
        return [];
    }

    const allBookings = getMyBookings();
    return allBookings.filter(booking => booking.username === currentUsername);
}

// Function to display all bookings (for testing)
function displayMyBookings() {
    const bookings = getMyBookings();
    
    console.log(`Found ${bookings.length} booking(s):`);
    
    bookings.forEach((booking, index) => {
        console.log(`\n--- Booking ${index + 1} ---`);
        console.log('Booking Data:', booking);
    });
    
    return bookings;
}

// Initialize and check for existing bookings
function initializeBookingsSystem() {
    // Ensure TicketBookings exists in localStorage
    if (!localStorage.getItem('TicketBookings')) {
        localStorage.setItem('TicketBookings', JSON.stringify([]));
        console.log('Initialized empty TicketBookings array in localStorage');
    }
    
    // Display current bookings
    const bookings = getMyBookings();
    console.log('Current bookings:', bookings);
    
    return bookings;
}

// Usage Examples:
// const myBookings = getMyBookings();
// const userBookings = getCurrentUserBookings();
// const specificBooking = getBookingById('TGZ000001');




function getTicketBadgeClass(availableTickets) {
    if (availableTickets === 0) {
        return 'bg-red-500/90 text-white';
    } else if (availableTickets <= 10) {
        return 'bg-orange-500/90 text-white';
    } else if (availableTickets <= 50) {
        return 'bg-yellow-500/90 text-white';
    } else {
        return 'bg-green-500/90 text-white';
    }
}

function displayEvents() {
    const grid = document.getElementById('eventsGrid');
    const eventsToShow = filteredEvents.slice(0, displayedEvents);

    // Generate the HTML content
    const htmlContent = eventsToShow.map((event, index) => `
        <div class="h-fit card-elegant gentle-hover content-fade-in stagger-animation" 
             style="--stagger-delay: ${index * 150}ms; ${event.isPast ? 'display:none;' : ''}" >
            <div class="relative overflow-hidden rounded-t-2xl">
                <img src="${event.image}" 
                     alt="${event.name}" 
                     class="w-full h-48 sm:h-56 md:h-64 object-cover image-elegant" 
                     loading="lazy">
                
                <!-- Category badge -->
                <div class="absolute top-4 left-4">
                    <span class="px-3 py-1 text-xs font-body font-semibold bg-white/90 backdrop-blur text-slate-700 rounded-full">
                        ${event.category}
                    </span>
                </div>

                <!-- Available tickets badge -->
                <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 text-xs font-body font-semibold ${getTicketBadgeClass(event.availableTickets)} backdrop-blur rounded-full flex items-center space-x-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                        </svg>
                        <span class="text-xs">${event.availableTickets === 0 ? 'Sold Out' : event.availableTickets + ' left'}</span>
                    </span>
                </div>

                <!-- Sold out overlay -->
                ${event.availableTickets === 0 ? `
                    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <div class="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl">
                            SOLD OUT
                        </div>
                    </div>
                ` : ''}
            </div>
            
            <div class="p-4 sm:p-6 md:p-8 flex flex-col h-full">
                <div class="flex-grow">
                    <h3 class="text-lg sm:text-xl md:text-2xl font-display font-bold text-slate-900 element-spacing leading-tight mb-2">${event.name}</h3>
                    <p class="font-body text-slate-600 element-spacing text-sm leading-relaxed mb-4 line-clamp-2">${event.description}</p>
                    
                    <div class="space-y-2 sm:space-y-3 text-spacing mb-6">
                        <div class="vertical-center">
                            <div class="icon-wrapper">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <span class="font-body text-slate-600 text-sm truncate">${formatDate(event.date)} ${event.time}</span>
                        </div>
                        
                        <div class="vertical-center">
                            <div class="icon-wrapper">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                                </svg>
                            </div>
                            <span class="font-body text-slate-600 text-sm truncate">${event.band}</span>
                        </div>
                        
                        <div class="vertical-center">
                            <div class="icon-wrapper">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <span class="font-body text-slate-600 text-sm truncate">${event.venue}</span>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
                    <div class="flex-shrink-0">
                        <p class="font-body text-slate-500 text-sm mb-1">Starting from</p>
                        <p class="text-xl sm:text-2xl font-display font-bold price-highlight">₹${event.tickets.silver}</p>
                    </div>
                    <button onclick="handleBookingClick('${event.id}')" 
                        class="button-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl font-display center transition-all duration-300 text-sm sm:text-base w-full sm:w-auto flex-shrink-0 ${event.availableTickets === 0 ? 'opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400' : ''}"
                        ${event.availableTickets === 0 ? 'disabled' : ''}>
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                        </svg>
                        ${event.availableTickets === 0 ? 'Sold Out' : 'Book Now'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Insert HTML into DOM
    grid.innerHTML = htmlContent;

    // Use requestAnimationFrame to wait for DOM rendering to complete
    requestAnimationFrame(() => {
        // This runs after the browser has painted the DOM
        requestAnimationFrame(() => {
            // Double RAF ensures rendering is completely done
            hideLoadingSkeleton();
            
            // Handle load more button
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (loadMoreBtn) {
                loadMoreBtn.classList.toggle('hidden', displayedEvents >= filteredEvents.length);
            }
            
            console.log('✅ Events displayed and skeleton hidden');
        });
    });
}


// Authentication check function
function checkUserAuthentication() {
    const currentOrganizerId = localStorage.getItem('currentorganizerId');
    const currentAudienceId = localStorage.getItem('currentaudienceId');


    if (currentOrganizerId) {
        showAuthMessage('Organizers cannot book tickets. Please login as an audience member to book tickets.', 'warning');
        // return { authenticated: true, userType: 'organizer' };
    }
    if (!currentOrganizerId && !currentAudienceId) {
        showAuthMessage('Please login as an audience', 'warning');
        return { authenticated: false, userType: null };
    }

    if (currentAudienceId) {
        return { authenticated: true, userType: 'audience' };
    }

    return { authenticated: false, userType: null };
}

// Handle booking click with authentication check
function handleBookingClick(eventId) {
    const auth = checkUserAuthentication();
    if (auth.userType === 'audience') {
        // Valid audience user - proceed with booking
        openBookingModal(eventId);
        return;
    }
}

// Show authentication message function
function showAuthMessage(message, type = 'info') {
    // Create or get existing message container
    let messageContainer = document.getElementById('auth-message-container');

    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.id = 'auth-message-container';
        messageContainer.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 z-50';
        document.body.appendChild(messageContainer);
    }

    // Message styling based on type
    const messageStyles = {
        info: 'bg-blue-500 border-blue-600',
        warning: 'bg-orange-500 border-orange-600',
        error: 'bg-red-500 border-red-600',
        success: 'bg-green-500 border-green-600'
    };

    const iconStyles = {
        info: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
               </svg>`,
        warning: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                  </svg>`,
        error: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>`,
        success: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>`
    };

    // Create message HTML
    const messageHtml = `
        <div class="auth-message ${messageStyles[type]} text-white px-6 py-4 rounded-xl shadow-2xl border-2 flex items-center space-x-3 max-w-md backdrop-blur-sm animate-slide-down">
            <div class="flex-shrink-0">
                ${iconStyles[type]}
            </div>
            <div class="flex-1">
                <p class="font-semibold text-sm">${message}</p>
            </div>
            <button onclick="closeAuthMessage()" class="flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
    `;

    messageContainer.innerHTML = messageHtml;

    // Auto-hide after 5 seconds
    setTimeout(() => {
        closeAuthMessage();
    }, 5000);
}

// Close authentication message
function closeAuthMessage() {
    const messageContainer = document.getElementById('auth-message-container');
    if (messageContainer) {
        messageContainer.innerHTML = '';
    }
}

// Add CSS for the slide-down animation
const authMessageStyles = `
    <style>
        .animate-slide-down {
            animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .auth-message {
            animation: slideDown 0.3s ease-out;
        }
    </style>
`;

// Add the styles to the document head
document.head.insertAdjacentHTML('beforeend', authMessageStyles);



function handleSearch(e) {
    
    
    const query = e.target.value.toLowerCase().trim();
    const loader = document.getElementById('searchLoader');
    
    if (loader) {
        loader.classList.remove('hidden');
    }

    if (searchTimeout) clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        if (loader) 
            loader.classList.add('hidden');
        
        filteredEvents = query === '' ? [...eventsData] :
            eventsData.filter(event =>
                event.name.toLowerCase().includes(query) ||
                event.band.toLowerCase().includes(query) ||
                event.venue.toLowerCase().includes(query) ||
                event.category.toLowerCase().includes(query) ||
                event.description.toLowerCase().includes(query)
        );

        displayedEvents = 6;
        updateEventCount();

        if (filteredEvents.length === 0) 
            showNoResults();
         else {
            hideNoResults();
            displayEvents();
        }
    }, 400);
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    filteredEvents = [...eventsData];
    displayedEvents = 6;
    hideNoResults();
    displayEvents();
    updateEventCount();
}

function showNoResults() {
    document.getElementById('eventsContainer').classList.add('hidden');
    document.getElementById('loadMoreBtn').classList.add('hidden');
    document.getElementById('noResults').classList.remove('hidden');
}

function hideNoResults() {
    document.getElementById('noResults').classList.add('hidden');
    document.getElementById('eventsContainer').classList.remove('hidden');
}

function updateEventCount() {
    // document.getElementById('eventCount').textContent = filteredEvents.length;
}

function loadmoreevents() {
    displayedEvents += 6;
    console.log("hhel");

    displayEvents();
}



function populateBookingModal(event) {
    // Enhanced event information with proper spacing
    document.getElementById('modalEventInfo').innerHTML = `
                <div class="glass-surface rounded-2xl p-6">
                    <div class="flex items-start space-x-6">
                        <img src="${event.image}" alt="${event.name}" class="w-32 h-32 rounded-2xl object-cover elegant-shadow">
                        <div class="flex-1">
                            <div class="vertical-center element-spacing">
                                <span class="px-3 py-1 text-xs font-body font-semibold bg-purple-100 text-purple-800 rounded-full mr-3">
                                    ${event.category}
                                </span>
                                <span class="vertical-center text-sm text-slate-600">
                                    <i data-feather="clock" class="w-4 h-4 mr-1"></i>
                                    ${event.duration}
                                </span>
                            </div>
                            <h4 class="text-2xl font-display font-bold text-slate-900 element-spacing">${event.name}</h4>
                            <p class="font-body text-slate-600 element-spacing leading-relaxed">${event.description}</p>
                            <div class="space-y-2">
                                <div class="vertical-center">
                                    <i data-feather="calendar" class="w-4 h-4 text-purple-600 mr-3"></i>
                                    <span class="font-body text-slate-600">${formatDate(event.date)} • ${event.time}</span>
                                </div>
                                <div class="vertical-center">
                                    <i data-feather="music" class="w-4 h-4 text-purple-600 mr-3"></i>
                                    <span class="font-body text-slate-600">${event.band}</span>
                                </div>
                                <div class="vertical-center">
                                    <i data-feather="map-pin" class="w-4 h-4 text-purple-600 mr-3"></i>
                                    <span class="font-body text-slate-600">${event.venue}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

    // Enhanced ticket selection interface with proper alignment
    const ticketTypes = [
        {
            type: 'premium',
            name: 'Premium Experience',
            description: 'VIP seating with backstage access and complimentary refreshments',
            icon: 'star',
            features: ['VIP Seating', 'Backstage Access', 'Meet & Greet', 'Premium Refreshments']
        },
        {
            type: 'gold',
            name: 'Gold Package',
            description: 'Premium seating with bar access and priority entry',
            icon: 'award',
            features: ['Premium Seating', 'Bar Access', 'Priority Entry', 'Complimentary Drinks']
        },
        {
            type: 'silver',
            name: 'Silver Access',
            description: 'Great seats with standard amenities and venue access',
            icon: 'ticket',
            features: ['Good Seating', 'Standard Access', 'Venue Facilities', 'Program Guide']
        }
    ];

    document.getElementById('ticketOptions').innerHTML = ticketTypes.map(ticket => `
                <div class="surface-elevated rounded-2xl p-6 border minimal-border smooth-transition hover:border-purple-200">
                    <div class="proper-alignment element-spacing">
                        <div class="vertical-center flex-1">
                            <div class="icon-wrapper">
                                <i data-feather="${ticket.icon}" class="w-5 h-5 text-purple-600"></i>
                            </div>
                            <div class="flex-1">
                                <h5 class="text-xl font-display font-bold text-slate-900 element-spacing">${ticket.name}</h5>
                                <p class="font-body text-slate-600 element-spacing">${ticket.description}</p>
                                <div class="flex flex-wrap gap-2 element-spacing">
                                    ${ticket.features.map(feature =>
        `<span class="px-2 py-1 text-xs bg-purple-50 text-purple-700 rounded-lg">${feature}</span>`
    ).join('')}
                                </div>
                                <p class="text-2xl font-display font-bold price-highlight">₹${event.tickets[ticket.type]}</p>
                            </div>
                        </div>
                        <div class="vertical-center space-x-4">
                            <button onclick="updateTicketQuantity('${ticket.type}', -1)" 
                                    class="quantity-button ${ticketSelections[ticket.type] === 0 ? 'opacity-40' : ''}" 
                                    ${ticketSelections[ticket.type] === 0 ? 'disabled' : ''}>
                                <i data-feather="minus" class="w-4 h-4"></i>
                            </button>
                            <span id="quantity-${ticket.type}" class="w-8 text-center text-xl font-display font-bold text-slate-900">0</span>
                            <button onclick="updateTicketQuantity('${ticket.type}', 1)" 
                                    class="quantity-button">
                                <i data-feather="plus" class="w-4 h-4 text-purple-600"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

    updateBookingSummary();
    setTimeout(() => feather.replace(), 100);
}

function updateTicketQuantity(ticketType, change) {
    const newQuantity = Math.max(0, Math.min(10, ticketSelections[ticketType] + change));
    ticketSelections[ticketType] = newQuantity;

    document.getElementById(`quantity-${ticketType}`).textContent = newQuantity;

    // Update button states
    const minusBtn = document.querySelector(`button[onclick*="'${ticketType}', -1"]`);
    minusBtn.disabled = newQuantity === 0;
    minusBtn.classList.toggle('opacity-40', newQuantity === 0);

    updateBookingSummary();
}

// Enhanced Booking Summary with Live Updates and Perfect Alignment
function updateBookingSummary() {
    const summary = document.getElementById('bookingSummary');
    const totalAmountEl = document.getElementById('totalAmount');
    const checkoutBtn = document.getElementById('checkoutBtn');

    let summaryHTML = '';
    let totalAmount = 0;
    let totalTickets = 0;

    Object.entries(ticketSelections).forEach(([type, quantity]) => {
        if (quantity > 0) {
            const price = currentBookingEvent.tickets[type];
            const subtotal = price * quantity;
            totalAmount += subtotal;
            totalTickets += quantity;

            summaryHTML += `
                        <div class="proper-alignment p-3 bg-white/50 rounded-lg">
                            <div class="vertical-center">
                                <i data-feather="ticket" class="w-4 h-4 text-purple-600 mr-2"></i>
                                <span class="font-body text-slate-700">${type.charAt(0).toUpperCase() + type.slice(1)} × ${quantity}</span>
                            </div>
                            <span class="font-display font-bold text-slate-900">₹${subtotal.toLocaleString()}</span>
                        </div>
                    `;
        }
    });

    if (summaryHTML === '') {
        summaryHTML = `
                    <div class="text-center py-8 text-slate-400">
                        <i data-feather="ticket" class="w-12 h-12 mx-auto element-spacing opacity-50"></i>
                        <p>Select tickets to see your booking summary</p>
                    </div>
                `;
    }

    summary.innerHTML = summaryHTML;
    totalAmountEl.textContent = `₹${totalAmount.toLocaleString()}`;

    checkoutBtn.disabled = totalTickets === 0;
    checkoutBtn.classList.toggle('opacity-40', totalTickets === 0);

    if (totalTickets > 0) {
        checkoutBtn.querySelector('span').innerHTML = `
                    <i data-feather="credit-card" class="w-5 h-5 mr-2"></i>
                    Pay ₹${totalAmount.toLocaleString()} (${totalTickets} ticket${totalTickets > 1 ? 's' : ''})
                `;
        setTimeout(() => feather.replace(), 100);
    }
}

// Enhanced Payment Processing
function proceedToCheckout() {
    const totalTickets = Object.values(ticketSelections).reduce((sum, qty) => sum + qty, 0);
    if (totalTickets === 0) return;

    closeBookingModal();
    document.getElementById('paymentModal').classList.remove('hidden');

    // Start payment processing animation
    processPayment();
    showBookingSuccessMessage(currentEvent, selectedTickets, totalAmount);

}

// Enhanced processPayment function
function processPayment() {
    const steps = ['step1', 'step2', 'step3', 'step4'];
    const progressBar = document.getElementById('paymentProgress');
    let currentStep = 0;

    function activateNextStep() {
        if (currentStep < steps.length) {
            document.getElementById(steps[currentStep]).classList.add('active');
            const progress = ((currentStep + 1) / steps.length) * 100;
            progressBar.style.width = progress + '%';

            setTimeout(() => {
                document.getElementById(steps[currentStep]).classList.add('completed');
                document.getElementById(steps[currentStep]).classList.remove('active');
                currentStep++;

                if (currentStep < steps.length) {
                    setTimeout(activateNextStep, 500);
                } else {
                    // Payment completed - calculate total and show success
                    setTimeout(() => {
                        const totalAmount = calculateTotalAmount();
                        closePaymentModal();

                        // Replace line 582 with this:
                        setTimeout(() => {
                            closePaymentModal();

                            // Get data directly from page elements
                            const eventTitle = document.querySelector('.modal-title, h2, h1')?.textContent || 'Concert Event';
                            const totalPriceElement = document.getElementById('summaryTotal') || document.getElementById('totalAmount');
                            const totalPrice = totalPriceElement ? totalPriceElement.textContent.replace(/[₹,]/g, '') : '1000';

                            // Count tickets from inputs
                            let ticketCount = 0;
                            document.querySelectorAll('input[type="number"]').forEach(input => {
                                ticketCount += parseInt(input.value) || 0;
                            });

                            // Force update the success modal
                            const modal = document.getElementById('successModal');
                            if (modal) {
                                modal.classList.remove('hidden');

                                setTimeout(() => {
                                    document.getElementById('bookingReference').textContent = localStorage.getItem('tid');
                                    document.getElementById('successEventName').textContent = eventTitle;
                                    document.getElementById('successEventDate').textContent = new Date().toLocaleDateString();
                                    document.getElementById('successEventVenue').textContent = 'Concert Venue';
                                    // Super simple ticket count fix
                                    let ticketCount = 0;
                                    document.querySelectorAll('input[type="number"], .ticket-quantity').forEach(input => {
                                        ticketCount += parseInt(input.value) || 0;
                                    });

                                    // If no tickets found, check for any visible numbers
                                    if (ticketCount === 0) {
                                        const numbers = document.body.textContent.match(/\b[1-9]\d*\b/g);
                                        if (numbers) {
                                            ticketCount = parseInt(numbers.find(n => parseInt(n) < 10)) || 1;
                                        }
                                    }

                                    console.log('Ticket count found:', ticketCount);
                                    // document.getElementById('successTicketCount').textContent = ticketCount + ' tickets';

                                    // document.getElementById('successTotalAmount').textContent = '₹' + totalPrice;

                                    document.getElementById('successModalContent').classList.remove('scale-95', 'opacity-0');
                                    document.getElementById('successModalContent').classList.add('scale-100', 'opacity-100');
                                }, 100);
                            }

                            showToast('🎉 Booking Successful!', 'success');
                        }, 1500);


                    }, 1500);
                }
            }, 1500);
        }
    }


    setTimeout(activateNextStep, 500);
}

// Calculate total amount function
function calculateTotalAmount() {
    if (!currentEvent || !selectedTickets) return 0;

    let total = 0;
    Object.entries(selectedTickets).forEach(([type, count]) => {
        if (count > 0) {
            total += currentEvent.tickets[type] * count;
        }
    });
    return total;
}


function closePaymentModal() {
    document.getElementById('paymentModal').classList.add('hidden');

    // Reset payment steps
    const steps = ['step1', 'step2', 'step3', 'step4'];
    steps.forEach(stepId => {
        const step = document.getElementById(stepId);
        step.classList.remove('active', 'completed');
    });

    // Reset progress bar
    document.getElementById('paymentProgress').style.width = '0%';

}

// Show Success Modal
// Updated function with error checking
// Fixed function with debugging and proper value updates// Fixed function that forces DOM updates
function showBookingSuccessMessage(eventData, ticketData, totalAmount) {
    console.log('🎯 showBookingSuccessMessage called');
    console.log('📊 eventData:', eventData);
    console.log('🎫 ticketData:', ticketData);
    console.log('💰 totalAmount:', totalAmount);

    const modal = document.getElementById('successModal');
    if (!modal) {
        console.error('❌ Success modal not found');
        return;
    }

    // Generate booking reference
    const bookingRef = 'TZ' + Math.random().toString(36).substr(2, 8).toUpperCase();

    // Force show modal first
    modal.classList.remove('hidden');
    console.log('✅ Modal shown');

    // Wait for modal to be visible, then update content
    setTimeout(() => {
        console.log('🔄 Updating modal content...');

        // Update booking reference
        const bookingRefElement = document.getElementById('bookingReference');
        if (bookingRefElement) {
            bookingRefElement.textContent = bookingRef;
            console.log('✅ Updated booking ref:', bookingRef);
        } else {
            console.error('❌ bookingReference element not found');
        }

        // Update event name
        const eventNameElement = document.getElementById('successEventName');
        if (eventNameElement && eventData) {
            eventNameElement.textContent = eventData.name || 'Concert Event';
            console.log('✅ Updated event name:', eventData.name);
        } else {
            console.error('❌ successEventName element not found or no eventData');
        }

        // Update event date
        const eventDateElement = document.getElementById('successEventDate');
        if (eventDateElement && eventData) {
            const dateText = `${formatDate(eventData.date)} ${eventData.time}`;
            eventDateElement.textContent = dateText;
            console.log('✅ Updated date:', dateText);
        }

        // Update venue
        const venueElement = document.getElementById('successEventVenue');
        if (venueElement && eventData) {
            venueElement.textContent = eventData.venue || 'Venue';
            console.log('✅ Updated venue:', eventData.venue);
        }

        // Calculate and update ticket count
        let totalTickets = 0;
        if (ticketData && typeof ticketData === 'object') {
            Object.values(ticketData).forEach(count => {
                if (typeof count === 'number' && count > 0) {
                    totalTickets += count;
                }
            });
        }

        const ticketCountElement = document.getElementById('successTicketCount');
        if (ticketCountElement) {
            ticketCountElement.textContent = `${totalTickets} ticket${totalTickets !== 1 ? 's' : ''}`;
            console.log('✅ Updated ticket count:', totalTickets);
        }

        // Update total amount
        const totalAmountElement = document.getElementById('successTotalAmount');
        if (totalAmountElement) {
            totalAmountElement.textContent = `₹${totalAmount || 0}`;
            console.log('✅ Updated total amount:', totalAmount);
        }

        // Force DOM refresh by triggering reflow
        modal.offsetHeight;

        console.log('🎉 All updates completed!');

    }, 100);

    // Animate modal
    setTimeout(() => {
        const content = document.getElementById('successModalContent');
        if (content) {
            content.classList.remove('scale-95', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
        }
    }, 150);

    // Store booking data
    window.currentBookingRef = bookingRef;
    window.currentBookingData = {
        event: eventData,
        tickets: ticketData,
        total: totalAmount,
        reference: bookingRef,
        bookingDate: new Date().toISOString()
    };

    showToast('🎉 Ticket Booked Successfully!', 'success');
}


// Helper function to get total tickets
function getTotalTickets(ticketData) {
    if (!ticketData || typeof ticketData !== 'object') return 0;

    let total = 0;
    Object.values(ticketData).forEach(count => {
        if (typeof count === 'number' && count > 0) {
            total += count;
        }
    });
    return total;
}

// Helper function to format date
function formatDate(dateString) {
    if (!dateString) return 'Date';

    try {
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (error) {
        console.error('Error formatting date:', error);
        return dateString;
    }
}

// Close success modal
function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    const content = document.getElementById('successModalContent');

    if (content) {
        content.classList.remove('scale-100', 'opacity-100');
        content.classList.add('scale-95', 'opacity-0');
    }

    setTimeout(() => {
        if (modal) {
            modal.classList.add('hidden');
        }
    }, 300);
}

// Download ticket function
function downloadTicket() {
    if (!window.currentBookingData) {
        showToast('No booking data found', 'error');
        return;
    }

    const booking = window.currentBookingData;
    const ticketContent = `
THIGALZHI® CONCERT TICKET
========================

Event: ${booking.event.name}
Artist: ${booking.event.band}
Date: ${formatDate(booking.event.date)} ${booking.event.time}
Venue: ${booking.event.venue}

Booking Reference: ${booking.reference}
Total Amount: ₹${booking.total}
Booking Date: ${new Date(booking.bookingDate).toLocaleDateString()}

------------------------
Thank you for choosing Thigalzhi®
Premium Concert Experience
------------------------
    `;

    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Thigalzhi-Ticket-${booking.reference}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Ticket downloaded successfully!', 'success');
    closeSuccessModal();
}



// Close Success Modal
function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    const content = document.getElementById('successModalContent');

    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Download Ticket Function
function downloadTicket() {
    if (!window.currentBookingData) {
        showToast('No booking data found', 'error');
        return;
    }

    const booking = window.currentBookingData;

    // Create ticket content
    const ticketContent = `
THIGALZHI® CONCERT TICKET
========================

Event: ${booking.event.name}
Artist: ${booking.event.band}
Date: ${formatDate(booking.event.date)} ${booking.event.time}
Venue: ${booking.event.venue}

Booking Reference: ${booking.reference}
Total Amount: ₹${booking.total}
Booking Date: ${new Date(booking.bookingDate).toLocaleDateString()}

TICKET DETAILS:
${formatTicketDetails(booking.tickets)}

------------------------
Thank you for choosing Thigalzhi®
Premium Concert Experience
------------------------
    `;

    // Create and download file
    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Thigalzhi-Ticket-${booking.reference}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Ticket downloaded successfully!', 'success');
    closeSuccessModal();
}

// Helper Functions
function getTotalTickets(ticketData) {
    let total = 0;
    Object.values(ticketData).forEach(count => {
        total += count;
    });
    return total;
}

function formatTicketDetails(ticketData) {
    let details = '';
    Object.entries(ticketData).forEach(([type, count]) => {
        if (count > 0) {
            details += `${type.charAt(0).toUpperCase() + type.slice(1)}: ${count} ticket(s)\n`;
        }
    });
    return details;
}

function formatDate(dateString) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}


function downloadTickets() {
    showToast('Downloading your concert tickets...', 'info');
    // Simulate ticket download
    setTimeout(() => {
        showToast('Tickets downloaded successfully!', 'success');
    }, 1500);
}

// Utility Functions
function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

function toggleFavorite(eventId) {
    showToast('Added to your favorites!', 'success');
}

// Modal Controls
function closeBookingModal() {
    document.getElementById('bookingModal').classList.add('hidden');
    document.getElementById('liveSummaryContainer').classList.add('hidden');
    document.body.style.overflow = '';
    currentBookingEvent = null;
    ticketSelections = {};
}

function clsbtn() {

    document.getElementById('loginModal').classList.add('hidden');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.add('hidden');
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hidden');
}

function simulateLogin() {
    localStorage.setItem('currentaudienceName', 'user_' + Math.random().toString(36).substr(2, 9));
    closeLoginModal();
    showToast('Welcome to Thigalzhi®! You are now signed in.', 'success');

    const loginBtn = document.getElementById('loginBtn');
    loginBtn.innerHTML = '<i data-feather="log-out" class="w-4 h-4"></i><span>Sign Out</span>';
    loginBtn.onclick = function () {
        localStorage.removeItem('currentaudienceName');
        this.innerHTML = '<i data-feather="user" class="w-4 h-4"></i><span>Sign In</span>';
        this.onclick = null;
        showToast('You have been signed out.', 'info');
    };
    setTimeout(() => feather.replace(), 100);
}

// Enhanced Toast System
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toastId = 'toast_' + Date.now();

    const styles = {
        success: 'border-green-200 text-green-800',
        error: 'border-red-200 text-red-800',
        info: 'border-blue-200 text-blue-800',
        warning: 'border-yellow-200 text-yellow-800'
    };

    const icons = {
        success: 'check-circle',
        error: 'x-circle',
        info: 'info',
        warning: 'alert-circle'
    };

    const toast = document.createElement('div');
    toast.id = toastId;
    toast.className = `toast-elegant ${styles[type]} p-4 shadow-lg flex items-center space-x-3`;
    toast.innerHTML = `
                <i data-feather="${icons[type]}" class="w-5 h-5 flex-shrink-0"></i>
                <span class="font-body">${message}</span>
                <button onclick="removeToast('${toastId}')" class="ml-2 opacity-60 hover:opacity-100">
                    <i data-feather="x" class="w-4 h-4"></i>
                </button>
            `;

    container.appendChild(toast);
    feather.replace();

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => removeToast(toastId), 5000);
}

function removeToast(toastId) {
    const toast = document.getElementById(toastId);
    if (toast) {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }
}

// Initialize login state
document.addEventListener('DOMContentLoaded', function () {
    const currentUser = localStorage.getItem('currentaudienceName');
    if (currentUser) {
        const loginBtn = document.getElementById('loginBtn');
        loginBtn.innerHTML = '<i data-feather="log-out" class="w-4 h-4"></i><span>Sign Out</span>';
        loginBtn.onclick = function () {
            localStorage.removeItem('currentaudienceName');
            this.innerHTML = '<i data-feather="user" class="w-4 h-4"></i><span>Sign In</span>';
            this.onclick = null;
            showToast('You have been signed out.', 'info');
        };
    }
});

// Global variables for responsive booking
let selectedTickets = [];
let currentEvent = null;

// Mobile summary toggle functionality
function toggleMobileSummary() {
    const content = document.getElementById('mobileSummaryContent');
    const icon = document.getElementById('summaryToggleIcon');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.setAttribute('data-feather', 'chevron-down');
    } else {
        content.classList.add('hidden');
        icon.setAttribute('data-feather', 'chevron-up');
    }
    feather.replace();
}

// Enhanced openBookingModal function that uses eventsData
function openBookingModal(eventId) {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentaudienceName');
    if (!currentUser) {
        // document.getElementById('loginModal').classList.remove('hidden');
        return;
    }

    // Find event in eventsData array
    const event = eventsData.find(e => e.id === eventId);
    if (!event) {
        console.error('Event not found:', eventId);
        return;
    }

    currentEvent = event;
    selectedTickets = [];

    // Show modal
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Reset mobile summary to collapsed state
    document.getElementById('mobileSummaryContent').classList.add('hidden');
    document.getElementById('summaryToggleIcon').setAttribute('data-feather', 'chevron-up');

    // Load event data into modal
    loadEventDataIntoModal(event, eventId);

    // Initialize summary
    updateBookingSummary();

    // Initialize feather icons
    setTimeout(() => feather.replace(), 100);
}

// Load event data into the booking modal
function loadEventDataIntoModal(event, id) {
    // Populate event info
    console.log(event + "  ehelooojdkj");

    localStorage.setItem('selectedEventId', id)
    document.getElementById('modalEventInfo').innerHTML = `
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6">
            <div class="flex items-start space-x-4">
                <img src="${event.image}" alt="${event.name}" class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl shadow-lg">
                <div class="flex-1">
                    <h4 class="text-xl sm:text-2xl font-bold text-slate-900 mb-2">${event.name}</h4>
                    <div class="space-y-1 text-sm text-slate-600">
                        <div class="flex items-center space-x-2">
                            <i data-feather="calendar" class="w-4 h-4"></i>
                            <span>${formatDate(event.date)}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i data-feather="clock" class="w-4 h-4"></i>
                            <span>${event.time}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i data-feather="map-pin" class="w-4 h-4"></i>
                            <span>${event.venue}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i data-feather="music" class="w-4 h-4"></i>
                            <span>${event.band}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Generate ticket options
    const ticketTypes = [
        { type: 'premium', name: 'Premium Experience', description: 'VIP seating with backstage access and complimentary refreshments', icon: 'star' },
        { type: 'gold', name: 'Gold Package', description: 'Premium seating with bar access and priority entry', icon: 'award' },
        { type: 'silver', name: 'Silver Access', description: 'Great seats with standard amenities and venue access', icon: 'circle' }
    ];

    const ticketOptionsHtml = ticketTypes.map(ticket => {
        const price = event.tickets[ticket.type];
        return `
            <div class="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div class="flex justify-between items-center">
                    <div class="flex-1">
                        <div class="flex items-center space-x-2 mb-2">
                            <i data-feather="${ticket.icon}" class="w-5 h-5 text-purple-600"></i>
                            <h5 class="text-lg font-semibold text-slate-900">${ticket.name}</h5>
                        </div>
                        <p class="text-sm text-slate-600 mb-2">${ticket.description}</p>
                        <p class="text-xl font-bold text-purple-600">₹${price}</p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button onclick="changeQuantity('${ticket.type}', ${price}, -1)" class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 disabled:opacity-50" >
                            <i data-feather="minus" class="w-4 h-4"></i>
                        </button>
                        <span id="qty-${ticket.type}" class="font-semibold text-slate-900 min-w-[2rem] text-center">0</span>
                        <button onclick="changeQuantity('${ticket.type}', ${price}, 1)" class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-200">
                            <i data-feather="plus" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('ticketOptions').innerHTML = ticketOptionsHtml;
    feather.replace();
}

// Change ticket quantity
function changeQuantity(ticketType, price, change) {
    const qtyElement = document.getElementById(`qty-${ticketType}`);

    let currentQty = parseInt(qtyElement.textContent) || 0;
    let newQty = Math.max(0, Math.min(10, currentQty + change));

    qtyElement.textContent = newQty;

    // Update selectedTickets array
    const existingIndex = selectedTickets.findIndex(t => t.type === ticketType);
    if (existingIndex >= 0) {
        if (newQty > 0) {
            selectedTickets[existingIndex].quantity = newQty;
        } else {
            selectedTickets.splice(existingIndex, 1);
        }
    } else if (newQty > 0) {
        selectedTickets.push({ type: ticketType, price: price, quantity: newQty });
    }

    // Update button states
    const minusBtn = document.querySelector(`button[onclick*="${ticketType}, -1"]`);
    if (minusBtn) {
        minusBtn.disabled = newQty === 0;
    }

    updateBookingSummary();
}

document.getElementById('desktopBookButton').addEventListener('click', () => {
    let total = document.getElementById('desktopTotalAmount').innerText;
    document.getElementById('successTotalAmount').innerText = total;

    let p = Number(document.getElementById('qty-premium').innerText);
    let g = Number(document.getElementById('qty-gold').innerText);
    let s = Number(document.getElementById('qty-silver').innerText);

    document.getElementById('successTicketCount').innerText = p + g + s;

    let name = localStorage.getItem('currentaudienceName');
    let email = localStorage.getItem('currentaudienceEmail');

    let newBookings = [];
    let id = localStorage.getItem('selectedEventId');
    let aid = 'TZ' + Math.random().toString(36).substr(2, 8).toUpperCase()
    localStorage.setItem('tid', aid);
    // Find the selected event from eventsData
    let selectedEvent = eventsData.find(event => event.id === id);
    
    // Extract event details
    let eventName = selectedEvent ? selectedEvent.name : '';
    let eventDate = selectedEvent ? selectedEvent.date : '';
    let eventTime = selectedEvent ? selectedEvent.time : '';
    let eventImage = selectedEvent ? selectedEvent.image : '';
    let eventVenue = selectedEvent ? selectedEvent.venue : '';
    let eventBand = selectedEvent ? selectedEvent.band : '';
    let eventCategory = selectedEvent ? selectedEvent.category : '';

    let pq = document.getElementById('Premium') ? document.getElementById('Premium').innerText : '';
    let gq = document.getElementById('Gold') ? document.getElementById('Gold').innerText : '';
    let sq = document.getElementById('Silver') ? document.getElementById('Silver').innerText : '';

    if (p > 0) newBookings.push({ 
        BookingId: id, 
        username: name, 
        useremail: email, 
        type: "premium", 
        total: pq, 
        quantity: p,
        eventName: eventName,
        eventDate: eventDate,
        eventTime: eventTime,
        eventImage: eventImage,
        eventVenue: eventVenue,
        eventBand: eventBand,
        eventCategory: eventCategory,
        aid:aid
    });
    
    if (g > 0) newBookings.push({ 
        BookingId: id, 
        username: name, 
        useremail: email, 
        type: "gold", 
        total: gq, 
        quantity: g,
        eventName: eventName,
        eventDate: eventDate,
        eventTime: eventTime,
        eventImage: eventImage,
        eventVenue: eventVenue,
        eventBand: eventBand,
        eventCategory: eventCategory,
        aid:aid
    });
    
    if (s > 0) newBookings.push({ 
        BookingId: id, 
        username: name, 
        useremail: email, 
        type: "silver", 
        total: sq, 
        quantity: s,
        eventName: eventName,
        eventDate: eventDate,
        eventTime: eventTime,
        eventImage: eventImage,
        eventVenue: eventVenue,
        eventBand: eventBand,
        eventCategory: eventCategory,
        aid:aid
    });

    let currentTicketBookings = JSON.parse(localStorage.getItem('TicketBookings')) || [];
    currentTicketBookings.push(...newBookings);

    localStorage.setItem('TicketBookings', JSON.stringify(currentTicketBookings));

    console.log("Bookings saved:", currentTicketBookings);
    initializeBookingsSystem();
});


document.getElementById('mobileBookButton').addEventListener('click', () => {
    document.getElementById('successTotalAmount').innerText = document.getElementById('desktopTotalAmount').innerText;
    let p = document.getElementById('qty-premium').innerText;
    let g = document.getElementById('qty-gold').innerText
    let s = document.getElementById('qty-silver').innerText


    console.log("hwlloooo");

    console.log(p);
    // console.log(typeof p);

    initializeBookingsSystem();
    document.getElementById('successTicketCount').innerText = Number(p) + Number(g) + Number(s);
})
// Update summary for both mobile and desktop
function updateBookingSummary() {
    const total = selectedTickets.reduce((sum, ticket) => sum + (ticket.quantity * ticket.price), 0);

    // Update totals
    document.getElementById('mobileTotalAmount').textContent = `₹${total}`;
    document.getElementById('desktopTotalAmount').textContent = `₹${total}`;

    const mobileDetails = document.getElementById('mobileSummaryDetails');
    const desktopDetails = document.getElementById('desktopSummaryDetails');

    // Clear existing content
    mobileDetails.innerHTML = '';
    desktopDetails.innerHTML = '';

    if (selectedTickets.length === 0 || total === 0) {
        const emptyState = `
            <div class="text-center text-slate-500 py-8">
                <i data-feather="ticket" class="w-8 h-8 mx-auto mb-2 text-slate-400"></i>
                <p>Select tickets to see summary</p>
            </div>
        `;
        mobileDetails.innerHTML = emptyState;
        desktopDetails.innerHTML = emptyState;

        document.getElementById('desktopBookButton').disabled = true;
        document.getElementById('mobileBookButton').disabled = true;
    } else {
        // Populate summary details
        selectedTickets.forEach(ticket => {
            if (ticket.quantity > 0) {
                const ticketName = ticket.type.charAt(0).toUpperCase() + ticket.type.slice(1);
                const ticketHTML = `
                    <div class="flex justify-between items-center py-2 border-b border-slate-200">
                        <div>
                            <p class="font-medium text-slate-900">${ticketName}</p>
                            <p class="text-sm text-slate-600">${ticket.quantity} × ₹${ticket.price}</p>
                        </div>
                        <span class="font-semibold text-slate-900 " id = "${ticketName}">₹${ticket.quantity * ticket.price}</span>
                    </div>
                `;
                mobileDetails.innerHTML += ticketHTML;
                desktopDetails.innerHTML += ticketHTML;
            }
        });

        document.getElementById('desktopBookButton').disabled = false;
        document.getElementById('mobileBookButton').disabled = false;
    }

    feather.replace();
}

// Proceed to payment
function proceedToPayment() {
    if (selectedTickets.length === 0) return;
    const desktopTermsAccepted = document.getElementById('desktopTermsCheckbox')?.checked;
    const mobileTermsAccepted = document.getElementById('mobileTermsCheckbox')?.checked;

    if (!desktopTermsAccepted && !mobileTermsAccepted) {
        alert('Please accept the Terms and Conditions to proceed');
        return;
    }
    const desktopPaymentMethod = document.getElementById('paymentMethodSelect')?.value;
    const mobilePaymentMethod = document.getElementById('mobilePaymentMethodSelect')?.value;

    const selectedMethod = desktopPaymentMethod || mobilePaymentMethod;

    if (!selectedMethod) {
        alert('Please select a payment method');
        return;
    }

    if (selectedTickets.length === 0) {
        return;
    }

    closeBookingModal();

    // Your payment logic here
    document.getElementById('paymentModal').classList.remove('hidden');
    processPayment();

    closeBookingModal();
    // You can add your payment logic here
    // For now, we'll simulate the payment process
    document.getElementById('paymentModal').classList.remove('hidden');
    processPayment();
}

// Enhanced closeBookingModal function  
function closeBookingModal() {
    document.getElementById('bookingModal').classList.add('hidden');
    document.body.style.overflow = '';
    selectedTickets = [];
    currentEvent = null;
}



// Profile dropdown functionality
function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('hidden');

    // Close dropdown when clicking outside
    if (!dropdown.classList.contains('hidden')) {
        setTimeout(() => {
            document.addEventListener('click', closeProfileDropdownOnOutsideClick);
        }, 100);
    }
}

function closeProfileDropdownOnOutsideClick(event) {
    const dropdown = document.getElementById('profileDropdown');
    const profileBtn = document.getElementById('profileBtn');

    if (!dropdown.contains(event.target) && !profileBtn.contains(event.target)) {
        dropdown.classList.add('hidden');
        document.removeEventListener('click', closeProfileDropdownOnOutsideClick);
    }
}

// Update the simulateLogin function to show profile button
function simulateLogin() {
    localStorage.setItem('currentaudienceName', 'user_' + Math.random().toString(36).substr(2, 9));
    closeLoginModal();
    showToast('Welcome to Thigalzhi! You are now signed in.', 'success');

    // Hide sign in button and show profile button
    document.getElementById('signInBtn').classList.add('hidden');
    document.getElementById('profileBtn').classList.remove('hidden');

    setTimeout(() => feather.replace(), 100);
}

// Handle logout
function handleLogout() {
    localStorage.removeItem('currentaudienceName');

    // Hide profile button and show sign in button
    document.getElementById('profileBtn').classList.add('hidden');
    document.getElementById('profileDropdown').classList.add('hidden');
    document.getElementById('signInBtn').classList.remove('hidden');

    showToast('You have been signed out successfully.', 'info');

    // Remove outside click listener
    document.removeEventListener('click', closeProfileDropdownOnOutsideClick);

    setTimeout(() => feather.replace(), 100);
}

// Add function to open login modal
function openLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

// Initialize login state on page load
document.addEventListener('DOMContentLoaded', function () {
    const currentUser = localStorage.getItem('currentaudienceId');
    if (currentUser) {
        // User is logged in, show profile button
        document.getElementById('signInBtn').classList.add('hidden');
        document.getElementById('profileBtn').classList.remove('hidden');
    } else {
        // User is not logged in, show sign in button
        document.getElementById('signInBtn').classList.remove('hidden');
        document.getElementById('profileBtn').classList.add('hidden');
    }

    setTimeout(() => feather.replace(), 100);
});

// Close dropdown when pressing Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.getElementById('profileDropdown').classList.add('hidden');
        document.removeEventListener('click', closeProfileDropdownOnOutsideClick);
    }
});



// const redirecting_url = localStorage.getItem('redirecturl');

localStorage.setItem('redirecturl', window.location.href);
