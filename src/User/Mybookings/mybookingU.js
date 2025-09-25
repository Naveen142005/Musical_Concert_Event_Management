// Sample booking data - replace with actual data from your backend
const bookingsData = [
    {
        id: 'booking001',
        eventId: 'evt102',
        eventName: 'Electric Nights Festival',
        eventImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&auto=format',
        date: '2025-10-12',
        time: '8:00 PM',
        venue: 'Phoenix Arena, Mumbai',
        band: 'Neon Pulse',
        category: 'Electronic',
        tickets: [
            { type: 'Premium', quantity: 2, price: 2000 },
            { type: 'Gold', quantity: 1, price: 1200 }
        ],
        totalAmount: 5200,
        bookingDate: '2025-09-20',
        status: 'confirmed',
        bookingId: 'TGZ001234'
    },
    {
        id: 'booking002',
        eventId: 'evt105',
        eventName: 'Pop Culture Celebration',
        eventImage: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop&auto=format',
        date: '2025-11-02',
        time: '8:30 PM',
        venue: 'Crystal Palace, Delhi',
        band: 'Vibrant Stars',
        category: 'Pop',
        tickets: [
            { type: 'Silver', quantity: 4, price: 800 }
        ],
        totalAmount: 3200,
        bookingDate: '2025-09-25',
        status: 'confirmed',
        bookingId: 'TGZ001235'
    },
    {
        id: 'booking003',
        eventId: 'evt101',
        eventName: 'Symphony Under the Stars',
        eventImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&auto=format',
        date: '2025-09-15',
        time: '7:00 PM',
        venue: 'Grand Music Hall, Chennai',
        band: 'Orchestra Nova',
        category: 'Classical',
        tickets: [
            { type: 'Premium', quantity: 2, price: 1500 }
        ],
        totalAmount: 3000,
        bookingDate: '2025-08-20',
        status: 'completed',
        bookingId: 'TGZ001230'
    }
];

let currentBookingToCancel = null;
let currentTab = 'current';

// Custom cursor functionality
let na, inside, targetX = -100, targetY = -100, targetX1 = -100, targetY1 = -100;
let currentX = 0, currentY = 0, currentX1 = 0, currentY1 = 0;

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeCursor();
    checkLoginStatus();
    loadBookings();
    setupEventListeners();
});

// Custom cursor setup
function initializeCursor() {
    if (window.innerWidth >= 1024) {
        na = document.getElementById('na');
        inside = document.getElementById('inside');
        
        if (na && inside) {
            na.style.display = 'flex';
            inside.style.display = 'block';
            
            window.addEventListener('mousemove', (event) => {
                targetX = event.clientX - 20;
                targetY = event.clientY - 20;
                targetX1 = event.clientX - 6;
                targetY1 = event.clientY - 6;
            });
            
            animate();
            
            // Add hover effects
            document.querySelectorAll("button, a, [onclick], input, textarea, select").forEach(element => {
                element.addEventListener("mouseenter", () => {
                    document.body.classList.add('cursor-hover');
                });
                element.addEventListener("mouseleave", () => {
                    document.body.classList.remove('cursor-hover');
                });
            });
        }
    }
}

function animate() {
    if (na && inside) {
        currentX = lerp(currentX, targetX, 0.1);
        currentY = lerp(currentY, targetY, 0.1);
        currentX1 = lerp(currentX1, targetX1, 0.15);
        currentY1 = lerp(currentY1, targetY1, 0.15);

        na.style.left = `${currentX}px`;
        na.style.top = `${currentY}px`;
        inside.style.left = `${currentX1}px`;
        inside.style.top = `${currentY1}px`;
    }
    
    requestAnimationFrame(animate);
}

// Profile and authentication
function checkLoginStatus() {
    const currentAudienceId = localStorage.getItem('currentaudienceid');
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    
    if (!currentAudienceId) {
        window.location.href = 'userbookings.html';
        return;
    }
    
    const nameElement = document.getElementById('pname');
    if (nameElement && userData.name) {
        nameElement.textContent = userData.name;
    }
}

function setupEventListeners() {
    // Profile dropdown
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    
    if (profileBtn) {
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('hidden');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!document.getElementById('profileSection').contains(e.target)) {
            profileDropdown.classList.add('hidden');
        }
    });
    
    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentaudienceid');
            localStorage.removeItem('userData');
            window.location.href = 'userbookings.html';
        });
    }
}

// Navigation
function goBack() {
    window.history.back();
}

// Tab switching
function switchTab(tab) {
    currentTab = tab;
    
    const currentTabBtn = document.getElementById('currentTab');
    const pastTabBtn = document.getElementById('pastTab');
    const currentSection = document.getElementById('currentBookingsSection');
    const pastSection = document.getElementById('pastBookingsSection');
    
    if (tab === 'current') {
        currentTabBtn.classList.add('tab-active');
        currentTabBtn.classList.remove('tab-inactive');
        pastTabBtn.classList.add('tab-inactive');
        pastTabBtn.classList.remove('tab-active');
        
        currentSection.classList.remove('hidden');
        pastSection.classList.add('hidden');
    } else {
        pastTabBtn.classList.add('tab-active');
        pastTabBtn.classList.remove('tab-inactive');
        currentTabBtn.classList.add('tab-inactive');
        currentTabBtn.classList.remove('tab-active');
        
        pastSection.classList.remove('hidden');
        currentSection.classList.add('hidden');
    }
}

// Load bookings
function loadBookings() {
    const currentBookings = bookingsData.filter(booking => {
        const eventDate = new Date(booking.date);
        const today = new Date();
        return eventDate >= today && booking.status === 'confirmed';
    });
    
    const pastBookings = bookingsData.filter(booking => {
        const eventDate = new Date(booking.date);
        const today = new Date();
        return eventDate < today || booking.status === 'completed' || booking.status === 'cancelled';
    });
    
    displayBookings(currentBookings, 'currentBookingsGrid');
    displayBookings(pastBookings, 'pastBookingsGrid');
    
    // Update counts
    document.getElementById('currentCount').textContent = `${currentBookings.length} Active Booking${currentBookings.length !== 1 ? 's' : ''}`;
    document.getElementById('pastCount').textContent = `${pastBookings.length} Completed`;
    
    // Show empty state if no bookings
    if (currentBookings.length === 0 && pastBookings.length === 0) {
        document.getElementById('emptyState').classList.remove('hidden');
    }
}

function displayBookings(bookings, containerId) {
    const container = document.getElementById(containerId);
    
    if (bookings.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                    </svg>
                </div>
                <p class="text-slate-500">No ${containerId.includes('current') ? 'upcoming' : 'past'} bookings found</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = bookings.map(booking => createBookingCard(booking)).join('');
}

function createBookingCard(booking) {
    const eventDate = new Date(booking.date);
    const today = new Date();
    const isPastEvent = eventDate < today;
    const canCancel = !isPastEvent && booking.status === 'confirmed';
    
    const statusClass = booking.status === 'confirmed' ? 'status-confirmed' : 
                       booking.status === 'cancelled' ? 'status-cancelled' : 'status-completed';
    
    const statusText = booking.status === 'confirmed' ? 'Confirmed' : 
                      booking.status === 'cancelled' ? 'Cancelled' : 'Completed';
    
    return `
        <div class="card-elegant gentle-hover transition-all duration-300">
            <div class="relative overflow-hidden">
                <img src="${booking.eventImage}" alt="${booking.eventName}" class="w-full h-64 object-cover">
                
                <div class="absolute top-6 left-6">
                    <span class="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur text-slate-700 rounded-full">
                        ${booking.category}
                    </span>
                </div>
                
                <div class="absolute top-6 right-6">
                    <span class="px-3 py-1 text-xs font-semibold ${statusClass} rounded-full">
                        ${statusText}
                    </span>
                </div>
            </div>
            
            <div class="p-8">
                <h3 class="text-2xl font-display font-bold text-slate-900 mb-2 leading-tight">${booking.eventName}</h3>
                <p class="text-sm text-slate-500 mb-4">Booking ID: ${booking.bookingId}</p>
                
                <div class="space-y-3 mb-6">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <span class="text-slate-600">${formatDate(booking.date)} ${booking.time}</span>
                    </div>
                    
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                            </svg>
                        </div>
                        <span class="text-slate-600">${booking.band}</span>
                    </div>
                    
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <span class="text-slate-600">${booking.venue}</span>
                    </div>
                </div>
                
                <!-- Tickets Info -->
                <div class="bg-slate-50 rounded-xl p-4 mb-6">
                    <h4 class="font-semibold text-slate-900 mb-2">Your Tickets</h4>
                    <div class="space-y-1">
                        ${booking.tickets.map(ticket => `
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-slate-600">${ticket.type} × ${ticket.quantity}</span>
                                <span class="font-medium text-slate-900">₹${ticket.price * ticket.quantity}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="border-t border-slate-200 mt-2 pt-2">
                        <div class="flex justify-between items-center font-semibold">
                            <span class="text-slate-900">Total Amount</span>
                            <span class="text-purple-600 text-lg">₹${booking.totalAmount}</span>
                        </div>
                    </div>
                </div>
                
                <div class="flex gap-3">
                    <button onclick="viewBookingDetails('${booking.id}')" class="flex-1 bg-purple-100 text-purple-600 px-4 py-3 rounded-xl font-semibold hover:bg-purple-200 transition-colors flex items-center justify-center">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        View Details
                    </button>
                    
                    ${canCancel ? `
                        <button onclick="openCancellationModal('${booking.id}')" class="bg-red-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center justify-center">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            Cancel
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Booking actions
function viewBookingDetails(bookingId) {
    const booking = bookingsData.find(b => b.id === bookingId);
    if (booking) {
        alert(`Booking Details:\n\nEvent: ${booking.eventName}\nDate: ${formatDate(booking.date)}\nVenue: ${booking.venue}\nAmount: ₹${booking.totalAmount}\nStatus: ${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}`);
    }
}

function openCancellationModal(bookingId) {
    const booking = bookingsData.find(b => b.id === bookingId);
    if (booking) {
        currentBookingToCancel = bookingId;
        document.getElementById('cancellationMessage').textContent = 
            `Are you sure you want to cancel your booking for "${booking.eventName}"? This action cannot be undone.`;
        document.getElementById('cancellationModal').classList.remove('hidden');
    }
}

function closeCancellationModal() {
    document.getElementById('cancellationModal').classList.add('hidden');
    currentBookingToCancel = null;
}

function confirmCancellation() {
    if (currentBookingToCancel) {
        const bookingIndex = bookingsData.findIndex(b => b.id === currentBookingToCancel);
        if (bookingIndex !== -1) {
            bookingsData[bookingIndex].status = 'cancelled';
            
            closeCancellationModal();
            loadBookings(); // Reload the bookings display
            
            // Show success message
            showToast('Booking cancelled successfully', 'success');
        }
    }
}

// Toast notification function
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    }`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.remove('translate-x-full'), 100);
    
    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
