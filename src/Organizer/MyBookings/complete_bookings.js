
// const eventsBookings = [
//     {
//         organizerId: "1758304065531",
//         bookingId: "TCM-1758304064242",
//         eventName: "Naveen Kumar M's Event",
//         bookedSlots: ["2025-09-26-morning"],
//         organizerName: "Naveen Kumar M",
//         organizerEmail: "valarmath@gmail.com",
//         organizerMobile: "81444787225",
//         venueId: "royal-albert",
//         bandId: "jazz-masters",
//         decorationId: "elegant-decor",
//         foodId: "snacks-beverages",
//         ticketingEnabled: true,
//         ticketPrices: {
//             premiumPrice: 5,
//             goldPrice: 4,
//             silverPrice: 3
//         },
//         totalAmount: 50969000,
//         paymentType: "full",
//         paidAmount: 50969000,
//         pendingAmount: 0,
//         bookingStatus: "confirmed",
//         bookingDate: "2025-09-19T17:47:45.531Z",
//         registrations: {
//             total: 1250,
//             premium: 450,
//             gold: 500,
//             silver: 300
//         },
//         postponeCount: 0,
//         maxPostpones: 1,
//         registeredUsers: [
//             { name: "John Smith", email: "john@example.com", ticketType: "Premium", quantity: 2, amount: 10 },
//             { name: "Sarah Johnson", email: "sarah@example.com", ticketType: "Gold", quantity: 3, amount: 12 },
//             { name: "Mike Wilson", email: "mike@example.com", ticketType: "Silver", quantity: 4, amount: 12 },
//             { name: "Emily Davis", email: "emily@example.com", ticketType: "Premium", quantity: 1, amount: 5 },
//             { name: "David Brown", email: "david@example.com", ticketType: "Gold", quantity: 2, amount: 8 },
//             { name: "Lisa Anderson", email: "lisa@example.com", ticketType: "Silver", quantity: 3, amount: 9 },
//             { name: "Robert Taylor", email: "robert@example.com", ticketType: "Premium", quantity: 2, amount: 10 },
//             { name: "Jennifer White", email: "jennifer@example.com", ticketType: "Gold", quantity: 4, amount: 16 },
//             { name: "Christopher Lee", email: "chris@example.com", ticketType: "Silver", quantity: 2, amount: 6 },
//             { name: "Amanda Garcia", email: "amanda@example.com", ticketType: "Premium", quantity: 3, amount: 15 },
//             { name: "James Miller", email: "james@example.com", ticketType: "Gold", quantity: 1, amount: 4 },
//             { name: "Michelle Rodriguez", email: "michelle@example.com", ticketType: "Silver", quantity: 5, amount: 15 }
//         ]
//     },
//     {
//         organizerId: "1758304065532",
//         bookingId: "TCM-1758304064243",
//         eventName: "Summer Music Festival 2024",
//         bookedSlots: ["2024-08-15-evening"],
//         organizerName: "Sarah Johnson",
//         organizerEmail: "sarah@example.com",
//         organizerMobile: "9876543210",
//         venueId: "madison-square",
//         bandId: "rock-legends",
//         decorationId: "festival-decor",
//         foodId: "premium-catering",
//         ticketingEnabled: true,
//         ticketPrices: {
//             premiumPrice: 8,
//             goldPrice: 6,
//             silverPrice: 4
//         },
//         totalAmount: 75500000,
//         paymentType: "full",
//         paidAmount: 75500000,
//         pendingAmount: 0,
//         bookingStatus: "completed",
//         bookingDate: "2024-07-10T10:30:00.000Z",
//         registrations: {
//             total: 2100,
//             premium: 700,
//             gold: 800,
//             silver: 600
//         },
//         ticketsSold: {
//             total: 2100,
//             premium: 700,
//             gold: 800,
//             silver: 600,
//             revenue: 12600000
//         },
//         registeredUsers: [
//             { name: "Alex Thompson", email: "alex@example.com", ticketType: "Premium", quantity: 2, amount: 16 },
//             { name: "Maria Santos", email: "maria@example.com", ticketType: "Gold", quantity: 3, amount: 18 },
//             { name: "Kevin O'Connor", email: "kevin@example.com", ticketType: "Silver", quantity: 2, amount: 8 }
//         ]
//     }
// ];

let venuesData = [];
let bandsData = [];
let decorationData = [];
let eventsBookings;

async function getData() {
    const APIBASE = 'https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2'
    try {
        const res = await fetch(APIBASE)
        const data = await res.json()
        eventsBookings = data;
        venuesData = data.Venues || []
        bandsData = data.Bands || []
        decorationData = data.Decorations || []
        console.log('Data loaded successfully:', { venuesData, bandsData, decorationData })
        return data
    } catch (error) {
        console.error('Failed to load data:', error)
        // Use fallback empty arrays if API fails
        venuesData = []
        bandsData = []
        decorationData = []
    }

}


function formatSlot(slot) {
    const [year, month, day, time] = slot.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[month - 1]} ${day}, ${year} - ${time[0].toUpperCase() + time.slice(1)}`;
}

async function startApp() {
    const eventData = await getData();
    APP(eventData);
}

function getStatusClass(status) {
    switch(status) {
        case 'confirmed': return 'text-success';
        case 'postponed': return 'text-warning';
        case 'cancelled': return 'text-destructive';
        case 'completed': return 'text-primary';
        default: return 'text-success';
    }
}



function APP(eventData) {
    venuesData = eventData.Venues;
    bandsData = eventData.Bands;
    decorationData = eventData.Decorations;

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set to start of today for accurate comparison

    // Separate current and past bookings
    const currentBookings = [];
    const pastBookings = [];
    console.log(eventsBookings);
    
    eventsBookings.EventsBookings.forEach(booking => {
        if (booking.bookedSlots && booking.bookedSlots.length > 0) {
            const eventDateStr = booking.bookedSlots[0].split('-').slice(0, 3).join('-');
            const eventDate = new Date(eventDateStr);
            eventDate.setHours(0, 0, 0, 0);

            if (eventDate < currentDate || booking.bookingStatus === 'cancelled') {
                pastBookings.push(booking);
            } else {
                currentBookings.push(booking);
            }
        }
    });

    // Render current bookings
    const currentContainer = document.getElementById('currentBookings');
    if (currentContainer) {
        currentContainer.innerHTML = '';
        
        if (currentBookings.length === 0) {
            currentContainer.innerHTML = `
                <div class="text-center py-12">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-card-foreground mb-2">No Upcoming Events</h3>
                    <p class="text-muted-foreground">You don't have any current or upcoming bookings.</p>
                </div>
            `;
        } else {
            currentBookings.forEach((booking, index) => {
                const card = createCurrentEventCard(booking, index);
                currentContainer.appendChild(card);
            });
        }
    }

    // Render past bookings
    const pastContainer = document.getElementById('pastBookings');
    if (pastContainer) {
        pastContainer.innerHTML = '';
        
        if (pastBookings.length === 0) {
            pastContainer.innerHTML = `
                <div class="text-center py-12">
                    <div class="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-card-foreground mb-2">No Past Events</h3>
                    <p class="text-muted-foreground">Your completed and past events will appear here.</p>
                </div>
            `;
        } else {
            pastBookings.forEach((booking, index) => {
                const card = createPastEventCard(booking, index);
                pastContainer.appendChild(card);
            });
        }
    }
    setTimeout(() => {
        currentBookings.forEach(booking => {
            if (booking.bookingStatus == 'postponed' ) {
                const postponeButtons = document.querySelectorAll(`button[onclick="postponeEvent('${booking.bookingId}')"]`);
                postponeButtons.forEach(button => {
                    button.style.display = 'none';
                });
            }
        });
    }, 200);
    updateStatistics(currentBookings, pastBookings);
}

function createCurrentEventCard(booking, index) {
    const venue = venuesData.find(v => v.id === booking.venueId);
    const band = bandsData.find(b => b.id === booking.bandId);

    const formattedDate = new Date(booking.bookedSlots[0].split('-').slice(0, 3).join('-')).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    const timeSlot = booking.bookedSlots[0].split('-')[3];

    const card = document.createElement('div');
    card.className = `bg-card rounded-xl p-4 sm:p-6 border border-border premium-shadow status-${booking.bookingStatus} relative`;
    card.id = `card_${booking.bookingId}`;
    
    // Your existing current booking card HTML here
    card.innerHTML = `
        <div class="mobile-menu-icon sm:hidden">
            <button onclick="toggleMenu('menu${index+1}')" class="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors border border-border shadow-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01"></path>
                </svg>
            </button>
            <div id="menu${index+1}" class="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg premium-shadow-lg hidden z-20">
                <button onclick="viewRegistrations('${booking.bookingId}')" class="w-full text-left px-4 py-2 hover:bg-accent rounded-t-lg transition-colors" style="display: ${booking.ticketingEnabled ? 'block' : 'none'}">View Registrations</button>
                <button onclick="postponeEvent('${booking.bookingId}')" class="w-full text-left px-4 py-2 hover:bg-accent transition-colors">Postpone Event</button>
                <button onclick="cancelEvent('${booking.bookingId}')" class="w-full text-left px-4 py-2 hover:bg-destructive/20 text-destructive rounded-b-lg transition-colors">Cancel Event</button>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row lg:items-start justify-between space-y-4 lg:space-y-0 mb-4">
            <div class="flex-1">
                <h3 class="text-lg sm:text-xl font-semibold text-card-foreground mb-2">${booking.eventName}</h3>
                <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-muted-foreground mb-3">
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span id="eventDate_${booking.bookingId}">${formattedDate} - ${timeSlot.charAt(0).toUpperCase() + timeSlot.slice(1)}</span>
                    </span>
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span id="venueName_${booking.bookingId}" class="venue-name">${venue?.name || ''}</span>
                    </span>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm">
                    <span id="eventStatus_${booking.bookingId}" class="${getStatusClass(booking.bookingStatus)} font-medium">${getStatusText(booking.bookingStatus)}</span>
                    <span id="bandName_${booking.bookingId}" class="text-muted-foreground band-name">${band?.name || ''}</span>
                    <span class="text-primary font-semibold">₹${booking.totalAmount.toLocaleString()}</span>
                </div>
            </div>

            <div class="flex items-center space-x-2">
                <button onclick="viewDetails('${booking.bookingId}')" class="px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
                    View Details
                </button>
                <div class="relative hidden sm:block">
                    <button onclick="toggleMenu('menu${index+1}_desktop')" class="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01"></path>
                        </svg>
                    </button>
                    <div id="menu${index+1}_desktop" class="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg premium-shadow-lg hidden z-10">
                        <button onclick="viewRegistrations('${booking.bookingId}')" class="w-full text-left px-4 py-2 hover:bg-accent rounded-t-lg transition-colors" style="display: ${booking.ticketingEnabled ? 'block' : 'none'}">View Registrations</button>
                        <button onclick="postponeEvent('${booking.bookingId}')" class="w-full text-left px-4 py-2 hover:bg-accent transition-colors">Postpone Event</button>
                        <button onclick="cancelEvent('${booking.bookingId}')" class="w-full text-left px-4 py-2 hover:bg-destructive/20 text-destructive rounded-b-lg transition-colors">Cancel Event</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    return card;
}



document.addEventListener('DOMContentLoaded', () => {
    startApp();
});











// Generate availability data starting from tomorrow morning ONLY
function generateAvailabilityData() {
    const availability = {};
    const today = new Date(); // current date
    const daysToGenerate = 30;

    // Helper: collect all booked slots for a resource
    const getBookedMap = (data) => {
        const map = {};
        data.forEach(item => {
            item.bookedSlots.forEach(slot => {
                map[slot] = true;
            });
        });
        return map;
    };

    const venueBooked = getBookedMap(venuesData);
    const bandBooked = getBookedMap(bandsData);
    const decorBooked = getBookedMap(decorationData);

    for (let i = 0; i < daysToGenerate; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);
        const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD

        availability[dateStr] = {
            morning: {
                venue: !venueBooked[`${dateStr}-morning`],
                band: !bandBooked[`${dateStr}-morning`],
                decoration: !decorBooked[`${dateStr}-morning`]
            },
            afternoon: {
                venue: !venueBooked[`${dateStr}-afternoon`],
                band: !bandBooked[`${dateStr}-afternoon`],
                decoration: !decorBooked[`${dateStr}-afternoon`]
            },
            night: {
                venue: !venueBooked[`${dateStr}-night`],
                band: !bandBooked[`${dateStr}-night`],
                decoration: !decorBooked[`${dateStr}-night`]
            }
        };
    }

    return availability;
}



const availabilityData = generateAvailabilityData();

let currentBookingId = null;
let currentPostponePage = 0;
const daysPerPage = 3;
let currentSortColumn = '';
let sortDirection = 'asc';

// Back to home function
function goHome() {
    // Replace 'index.html' with your actual home page URL
    showNotification('Redirecting to home page...', 'success');
    setTimeout(() => {
        window.location.href = '/index.html'; // Change this to your home page URL
    }, 1000);
}

// Notification system
function showNotification(message, type = 'success') {
    const container = document.getElementById('notificationContainer');
    const notificationId = 'notification_' + Date.now();

    const notification = document.createElement('div');
    notification.id = notificationId;
    notification.className = `notification bg-card border border-border rounded-lg premium-shadow-lg p-4 ${type === 'success' ? 'border-l-4 border-l-success' : type === 'warning' ? 'border-l-4 border-l-warning' : 'border-l-4 border-l-destructive'}`;

    notification.innerHTML = `
                <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0">
                        <svg class="w-5 h-5 ${type === 'success' ? 'text-success' : type === 'warning' ? 'text-warning' : 'text-destructive'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            ${type === 'success' ?
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>' :
            type === 'warning' ?
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>' :
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'
        }
                        </svg>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm font-medium text-card-foreground">${message}</p>
                    </div>
                    <button onclick="hideNotification('${notificationId}')" class="flex-shrink-0 p-1 hover:bg-accent rounded transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            `;

    container.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideNotification(notificationId);
    }, 3000);
}

function hideNotification(notificationId) {
    const notification = document.getElementById(notificationId);
    if (notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

// Tab switching
document.getElementById('currentTab').addEventListener('click', () => switchTab('current'));
document.getElementById('pastTab').addEventListener('click', () => switchTab('past'));

function switchTab(tab) {
    const currentTab = document.getElementById('currentTab');
    const pastTab = document.getElementById('pastTab');
    const currentBookings = document.getElementById('currentBookings');
    const pastBookings = document.getElementById('pastBookings');

    if (tab === 'current') {
        currentTab.className = 'px-4 sm:px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium transition-all premium-shadow';
        pastTab.className = 'px-4 sm:px-6 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-accent transition-all';
        currentBookings.classList.remove('hidden');
        pastBookings.classList.add('hidden');
    } else {
        pastTab.className = 'px-4 sm:px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium transition-all premium-shadow';
        currentTab.className = 'px-4 sm:px-6 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-accent transition-all';
        pastBookings.classList.remove('hidden');
        currentBookings.classList.add('hidden');
    }
}

// Menu toggle
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.classList.toggle('hidden');

    // Close other menus
    document.querySelectorAll('[id*="menu"]').forEach(m => {
        if (m.id !== menuId) {
            m.classList.add('hidden');
        }
    });
}

// Close menus when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('[onclick*="toggleMenu"]') && !e.target.closest('[id*="menu"]')) {
        document.querySelectorAll('[id*="menu"]').forEach(m => {
            m.classList.add('hidden');
        });
    }
});

// Enhanced table sorting functionality
function sortTable(column, tableId) {
    const booking = eventsBookings.EventsBookings.find(b => b.bookingId === currentBookingId);
    if (!booking || !booking.registeredUsers) return;

    // Toggle sort direction
    if (currentSortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortColumn = column;
        sortDirection = 'asc';
    }

    // Sort the data
    let sortedUsers = [...booking.registeredUsers];
    sortedUsers.sort((a, b) => {
        let valueA = a[column];
        let valueB = b[column];

        // Handle numeric sorting for amount
        if (column === 'amount') {
            valueA = parseFloat(valueA);
            valueB = parseFloat(valueB);
        } else {
            // String comparison for names
            valueA = valueA.toString().toLowerCase();
            valueB = valueB.toString().toLowerCase();
        }

        if (sortDirection === 'asc') {
            return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
            return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
    });

    // Update the table
    renderSortedTable(sortedUsers, tableId);
    updateSortHeaders(column);
}

function renderSortedTable(sortedUsers, tableId) {
    const tableBody = document.querySelector(`#${tableId} tbody`);
    if (!tableBody) return;

    let html = '';
    sortedUsers.forEach((user, index) => {
        let ticketTypeClass = '';
        if (user.ticketType.toLowerCase() === 'premium') {
            ticketTypeClass = 'bg-success/20 text-success';
        } else if (user.ticketType.toLowerCase() === 'gold') {
            ticketTypeClass = 'bg-warning/20 text-warning';
        } else {
            ticketTypeClass = 'bg-accent/50 text-accent-foreground';
        }

        html += `
                    <tr class="border-b border-border/50 table-row animate-fade-in" style="animation-delay: ${index * 0.05}s">
                        <td class="py-3 font-medium">${user.name}</td>
                        <td class="py-3 text-muted-foreground break-all hidden sm:table-cell">${user.email}</td>
                        <td class="py-3">
                            <span class="px-2 py-1 ${ticketTypeClass} rounded text-xs font-medium">${user.ticketType}</span>
                        </td>
                        <td class="py-3 text-center font-medium hidden sm:table-cell">${user.quantity}</td>
                        <td class="py-3 font-semibold text-primary">₹${user.amount}</td>
                    </tr>
                `;
    });

    tableBody.innerHTML = html;
}

function updateSortHeaders(sortedColumn) {
    // Remove all sort indicators
    document.querySelectorAll('.sortable-header').forEach(header => {
        header.classList.remove('sorted-asc', 'sorted-desc');
    });

    // Add sort indicator to current column
    const currentHeader = document.querySelector(`[onclick*="'${sortedColumn}'"]`);
    if (currentHeader) {
        currentHeader.classList.add(sortDirection === 'asc' ? 'sorted-asc' : 'sorted-desc');
    }
}

// View Details function with updated event date display

function viewDetails(bookingId) {
    const booking = eventsBookings.EventsBookings.find(b => b.bookingId === bookingId);
    if (!booking) return;

    // Fetch related data
    const venue = venuesData.find(v => v.id === booking.venueId);
    const band = bandsData.find(b => b.id === booking.bandId);
    const decoration = decorationData.find(d => d.id === booking.decorationId);

    // Format the event date from bookedSlots
    const slotDate = booking.bookedSlots[0].split('-');
    const dateStr = slotDate.slice(0, 3).join('-');
    const timeSlot = slotDate[3];
    const formattedDate = new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    const formattedTime = timeSlot.charAt(0).toUpperCase() + timeSlot.slice(1);

    // Build content sections conditionally
    let content = `
        <div class="space-y-6">
            <!-- Basic Event Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-4">
                    <h4 class="text-lg font-semibold text-card-foreground border-b border-border pb-2">Event Information</h4>
                    <div class="space-y-2">
                        <p><span class="text-muted-foreground">Booking ID:</span> <span class="font-mono text-primary">${booking.bookingId}</span></p>
                        <p><span class="text-muted-foreground">Event Name:</span> <span class="font-medium">${booking.eventName}</span></p>
                        <p><span class="text-muted-foreground">Status:</span> <span class="font-medium ${booking.bookingStatus === 'cancelled' ? 'text-destructive' : booking.bookingStatus === 'postponed' ? 'text-warning' : 'text-success'}">${booking.bookingStatus.charAt(0).toUpperCase() + booking.bookingStatus.slice(1)}</span></p>

                        <p><span class="text-muted-foreground">Event Date:</span> <span class="font-medium" id="detailEventDate${booking.bookingId}">${formattedDate} - ${formattedTime}</span></p>
                        <p><span class="text-muted-foreground">Booking Date:</span> <span class="font-medium">${new Date(booking.bookingDate).toLocaleDateString()}</span></p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h4 class="text-lg font-semibold text-card-foreground border-b border-border pb-2">Organizer Details</h4>
                    <div class="space-y-2">
                        <p><span class="text-muted-foreground">Name:</span> <span class="font-medium">${booking.organizerName}</span></p>
                        <p><span class="text-muted-foreground">Email:</span> <span class="font-medium">${booking.organizerEmail}</span></p>
                        <p><span class="text-muted-foreground">Mobile:</span> <span class="font-medium">${booking.organizerMobile}</span></p>
                        <p><span class="text-muted-foreground">Payment Type:</span> <span class="font-medium">${booking.paymentType.charAt(0).toUpperCase() + booking.paymentType.slice(1)}</span></p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">`;

    // Venue Section (Always shown as it's required)
    if (venue) {
        content += `
                <div class="space-y-4">
                    <h4 class="text-lg font-semibold text-card-foreground border-b border-border pb-2">Venue</h4>
                    <div class="space-y-2">
                        <p><span class="text-muted-foreground">Name:</span> <span class="font-medium">${venue.name}</span></p>
                        <p><span class="text-muted-foreground">Location:</span> <span class="font-medium">${venue.location}</span></p>
                        <p><span class="text-muted-foreground">Capacity:</span> <span class="font-medium">${venue.maxLimit?.toLocaleString()}</span></p>
                    </div>
                </div>`;
    }

    // Band Section (Only if band is selected)
    if (band) {
        content += `
                <div class="space-y-4">
                    <h4 class="text-lg font-semibold text-card-foreground border-b border-border pb-2">Band</h4>
                    <div class="space-y-2">
                        <p><span class="text-muted-foreground">Name:</span> <span class="font-medium">${band.name}</span></p>
                        <p><span class="text-muted-foreground">Genre:</span> <span class="font-medium">${band.genre}</span></p>
                        <p><span class="text-muted-foreground">Rating:</span> <span class="font-medium">${band.rating}/5</span></p>
                    </div>
                </div>`;
    }

    // Decoration Section (Only if decoration is selected)
    if (decoration) {
        content += `
                <div class="space-y-4">
                    <h4 class="text-lg font-semibold text-card-foreground border-b border-border pb-2">Decoration</h4>
                    <div class="space-y-2">
                        <p><span class="text-muted-foreground">Team:</span> <span class="font-medium">${decoration.teamName}</span></p>
                        <p><span class="text-muted-foreground">Package:</span> <span class="font-medium">${decoration.packageType}</span></p>
                        <p><span class="text-muted-foreground">Price:</span> <span class="font-medium">₹${decoration.pricePerEvent?.toLocaleString()}</span></p>
                    </div>
                </div>`;
    }

    content += `
            </div>`;

    // Ticket Sales Section (Only for completed events with ticket sales data)
    if (booking.bookingStatus === 'completed' && booking.ticketsSold) {
        content += `
            <div class="space-y-4">
                <h4 class="text-lg font-semibold text-card-foreground border-b border-border pb-2">Ticket Sales Performance</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                        <p><span class="text-muted-foreground">Total Tickets Sold:</span> <span class="font-bold text-primary text-xl">${booking.ticketsSold.total.toLocaleString()}</span></p>
                        <p><span class="text-muted-foreground">Premium Sold:</span> <span class="font-medium text-success">${booking.ticketsSold.premium.toLocaleString()}</span></p>
                        <p><span class="text-muted-foreground">Gold Sold:</span> <span class="font-medium text-warning">${booking.ticketsSold.gold.toLocaleString()}</span></p>
                        <p><span class="text-muted-foreground">Silver Sold:</span> <span class="font-medium text-muted-foreground">${booking.ticketsSold.silver.toLocaleString()}</span></p>
                    </div>
                    <div class="space-y-2">
                        <p><span class="text-muted-foreground">Total Revenue:</span> <span class="font-bold text-primary text-xl">₹${booking.ticketsSold.revenue.toLocaleString()}</span></p>
                        <p><span class="text-muted-foreground">Venue Capacity:</span> <span class="font-medium">${venue?.maxLimit?.toLocaleString()}</span></p>
                        <p><span class="text-muted-foreground">Occupancy Rate:</span> <span class="font-medium text-success">${venue ? Math.round((booking.ticketsSold.total / venue.maxLimit) * 100) : 0}%</span></p>
                    </div>
                </div>
            </div>`;
    }

    // Financial Details Section
    content += `
            <div class="space-y-4">
                <h4 class="text-lg font-semibold text-card-foreground border-b border-border pb-2">Financial Details</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                        <p><span class="text-muted-foreground">Total Amount:</span> <span class="font-bold text-primary text-xl">₹${booking.totalAmount.toLocaleString()}</span></p>
                        <p><span class="text-muted-foreground">Paid Amount:</span> <span class="font-medium text-success">₹${booking.paidAmount.toLocaleString()}</span></p>
                        <p><span class="text-muted-foreground">Pending Amount:</span> <span class="font-medium ${booking.pendingAmount > 0 ? 'text-warning' : 'text-success'}">₹${booking.pendingAmount.toLocaleString()}</span></p>
                    </div>`;

    // Ticket Prices Section (Only if ticketing is enabled)
    if (booking.ticketingEnabled && (booking.ticketPrices.premiumPrice > 0 || booking.ticketPrices.goldPrice > 0 || booking.ticketPrices.silverPrice > 0)) {
        content += `
                    <div class="space-y-2">
                        <h5 class="font-medium text-card-foreground">Ticket Prices</h5>
                        <p><span class="text-muted-foreground">Premium:</span> <span class="font-medium">₹${booking.ticketPrices.premiumPrice}</span></p>
                        <p><span class="text-muted-foreground">Gold:</span> <span class="font-medium">₹${booking.ticketPrices.goldPrice}</span></p>
                        <p><span class="text-muted-foreground">Silver:</span> <span class="font-medium">₹${booking.ticketPrices.silverPrice}</span></p>
                    </div>`;
    }

    content += `
                </div>
            </div>
        </div>`;

    // Inject content and show modal
    document.getElementById('detailContent').innerHTML = content;
    document.getElementById('detailModal').classList.remove('hidden');
}


// Enhanced View Registrations with sortable table
function viewRegistrations(bookingId) {
    const booking = eventsBookings.EventsBookings.find(b => b.bookingId === bookingId);
    console.log(booking);
    
    if (!booking.registrations) {
        return;
    }

    if (!booking) return;

    currentBookingId = bookingId;
    currentSortColumn = '';
    sortDirection = 'asc';

    let tableContent = `
                <div class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div class="bg-primary/10 rounded-lg p-6 text-center border border-primary/20">
                            <div class="text-3xl font-bold text-primary counter-animation" id="totalCounter">${booking.registrations.total}</div>
                            <div class="text-sm text-muted-foreground mt-1">Total Tickets Sold</div>
                        </div>
                        <div class="bg-success/10 rounded-lg p-6 text-center border border-success/20">
                            <div class="text-3xl font-bold text-success counter-animation" id="premiumCounter">${booking.registrations.premium}</div>
                            <div class="text-sm text-muted-foreground mt-1">Premium Tickets</div>
                        </div>
                        <div class="bg-warning/10 rounded-lg p-6 text-center border border-warning/20">
                            <div class="text-3xl font-bold text-warning counter-animation" id="goldCounter">${booking.registrations.gold}</div>
                            <div class="text-sm text-muted-foreground mt-1">Gold Tickets</div>
                        </div>
                        <div class="bg-accent/50 rounded-lg p-6 text-center border border-accent">
                            <div class="text-3xl font-bold text-accent-foreground counter-animation" id="silverCounter">${booking.registrations.silver}</div>
                            <div class="text-sm text-muted-foreground mt-1">Silver Tickets</div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <h4 class="text-lg font-semibold text-card-foreground">Registered Users</h4>
                            <div class="text-sm text-muted-foreground">
                                Click column headers to sort
                            </div>
                        </div>
                        <div class="bg-secondary/50 rounded-lg p-4">
                            <div class="overflow-x-auto">
                                <table id="registrationsTable" class="w-full mobile-table">
                                    <thead>
                                        <tr class="border-b border-border">
                                            <th class="text-left py-3 px-2 text-muted-foreground sortable-header sorted-asc" onclick="sortTable('name', 'registrationsTable')">
                                                Name
                                            </th>
                                            <th class="text-left py-3 px-2 text-muted-foreground hidden sm:table-cell">Email</th>
                                            <th class="text-left py-3 px-2 text-muted-foreground">Ticket Type</th>
                                            <th class="text-center py-3 px-2 text-muted-foreground hidden sm:table-cell">Quantity</th>
                                            <th class="text-left py-3 px-2 text-muted-foreground sortable-header sorted-asc" onclick="sortTable('amount', 'registrationsTable')">
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                `;

    // Render initial table with fixed variable usage
    booking.registeredUsers.forEach((user, index) => {
        let ticketTypeClass = '';
        if (user.ticketType.toLowerCase() === 'premium') {
            ticketTypeClass = 'bg-success/20 text-success';
        } else if (user.ticketType.toLowerCase() === 'gold') {
            ticketTypeClass = 'bg-warning/20 text-warning';
        } else {
            ticketTypeClass = 'bg-accent/50 text-accent-foreground';
        }

        tableContent += `
                    <tr class="border-b border-border/50 table-row" style="animation-delay: ${index * 0.05}s">
                        <td class="py-3 px-2 font-medium">${user.name}</td>
                        <td class="py-3 px-2 text-muted-foreground break-all hidden sm:table-cell">${user.email}</td>
                        <td class="py-3 px-2">
                            <span class="px-2 py-1 ${ticketTypeClass} rounded text-xs font-medium">${user.ticketType}</span>
                        </td>
                        <td class="py-3 px-2 text-center font-medium hidden sm:table-cell">${user.quantity}</td>
                        <td class="py-3 px-2 font-semibold text-primary">₹${user.amount}</td>
                    </tr>
                `;
    });

    const finalContent = tableContent + `
                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-4 pt-4 border-t border-border text-center">
                                <div class="text-sm text-muted-foreground mb-2">
                                    Showing ${booking.registeredUsers.length} of ${booking.registrations.total} registered users
                                </div>
                                <button class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm">
                                    Load More Registrations
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

    document.getElementById('registrationContent').innerHTML = finalContent;
    document.getElementById('registrationModal').classList.remove('hidden');

    // Animate counters
    setTimeout(() => {
        animateCounter('totalCounter', booking.registrations.total);
        animateCounter('premiumCounter', booking.registrations.premium);
        animateCounter('goldCounter', booking.registrations.gold);
        animateCounter('silverCounter', booking.registrations.silver);
    }, 100);
}

// Animate counter
function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (!element) return;
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 40);
}

function postponeEvent(bookingId) {
    const booking = eventsBookings.EventsBookings.find(b => b.bookingId === bookingId);
    if (!booking) return;

    // Check if already postponed maximum times
    if (booking.postponeCount >= booking.maxPostpones) {
        showNotification('This event has already been postponed the maximum number of times allowed.', 'error');
        return;
    }

    currentBookingId = bookingId;
    currentPostponePage = 0;

    const currentSlot = booking.bookedSlots[0];
    renderPostponeModal(booking, currentSlot);
}

function renderPostponeModal(booking, currentSlot) {
    const availableDates = Object.keys(availabilityData);
    const startIndex = currentPostponePage * daysPerPage;
    const endIndex = Math.min(startIndex + daysPerPage, availableDates.length);
    const currentDates = availableDates.slice(startIndex, endIndex);

    let availabilityHTML = '';

    currentDates.forEach(date => {
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });

        availabilityHTML += `
                    <div class="space-y-3">
                        <h5 class="font-semibold text-card-foreground">${formattedDate}</h5>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                `;

        ['morning', 'afternoon', 'night'].forEach(timeSlot => {
            const slotKey = `${date}-${timeSlot}`;
            const isCurrentSlot = slotKey === currentSlot;
            const availability = availabilityData[date][timeSlot];

            let isAvailable = true;
            let conflictItems = [];

            if (booking.venueId && !availability.venue) {
                isAvailable = false;
                conflictItems.push('Venue');
            }
            if (booking.bandId && !availability.band) {
                isAvailable = false;
                conflictItems.push('Band');
            }
            if (booking.decorationId && !availability.decoration) {
                isAvailable = false;
                conflictItems.push('Decoration');
            }

            const buttonClass = isCurrentSlot ?
                'bg-muted text-muted-foreground cursor-not-allowed' :
                (isAvailable ?
                    'availability-available hover:bg-success/30 cursor-pointer' :
                    'availability-booked cursor-not-allowed');

            availabilityHTML += `
                        <div class="p-4 rounded-lg border-2 ${buttonClass}" 
                             ${(!isCurrentSlot && isAvailable) ? `onclick="selectNewSlot('${slotKey}')"` : ''}>
                            <div class="font-medium capitalize">${timeSlot}</div>
                            <div class="text-xs mt-2 space-y-1">
                    `;

            // Show only relevant availability based on booking
            if (booking.venueId) {
                availabilityHTML += `
                            <div class="flex items-center justify-between">
                                <span>Venue</span>
                                <span class="${availability.venue ? 'text-success' : 'text-destructive'}">${availability.venue ? '✓' : '✗'}</span>
                            </div>
                        `;
            }
            if (booking.bandId) {
                availabilityHTML += `
                            <div class="flex items-center justify-between">
                                <span>Band</span>
                                <span class="${availability.band ? 'text-success' : 'text-destructive'}">${availability.band ? '✓' : '✗'}</span>
                            </div>
                        `;
            }
            if (booking.decorationId) {
                availabilityHTML += `
                            <div class="flex items-center justify-between">
                                <span>Decor</span>
                                <span class="${availability.decoration ? 'text-success' : 'text-destructive'}">${availability.decoration ? '✓' : '✗'}</span>
                            </div>
                        `;
            }

            availabilityHTML += `
                            </div>
                            ${isCurrentSlot ?
                    '<div class="text-xs text-muted-foreground mt-2">Current Slot</div>' :
                    (!isAvailable && !isCurrentSlot ?
                        `<div class="text-xs text-destructive mt-2">Conflicts: ${conflictItems.join(', ')}</div>` : ''
                    )}
                        </div>
                    `;
        });

        availabilityHTML += `
                        </div>
                    </div>
                `;
    });

    const paginationHTML = `
                <div class="flex items-center justify-between pt-4 border-t border-border">
                    <div class="text-sm text-muted-foreground">
                        <span class="inline-block w-3 h-3 bg-success/20 border-2 border-success rounded mr-2"></span>Available
                        <span class="inline-block w-3 h-3 bg-destructive/20 border-2 border-destructive rounded mr-2 ml-4"></span>Booked
                    </div>
                    <div class="flex items-center space-x-2">
                        <button onclick="changePostponePage(-1)" ${currentPostponePage === 0 ? 'disabled' : ''} 
                                class="pagination-btn px-3 py-1 bg-secondary text-secondary-foreground rounded hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            Previous
                        </button>
                        <span class="text-sm text-muted-foreground">
                            ${currentPostponePage + 1} of ${Math.ceil(availableDates.length / daysPerPage)}
                        </span>
                        <button onclick="changePostponePage(1)" ${endIndex >= availableDates.length ? 'disabled' : ''} 
                                class="pagination-btn px-3 py-1 bg-secondary text-secondary-foreground rounded hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            Next
                        </button>
                    </div>
                </div>
            `;

    const content = `
                <div class="space-y-6">
                    <div class="bg-warning/10 border border-warning/20 rounded-lg p-4">
                        <div class="flex items-center space-x-2">
                            <svg class="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                            </svg>
                            <div>
                                <p class="font-medium text-warning">Current Event: ${booking.eventName}</p>
                                <p class="text-sm text-muted-foreground">Currently scheduled for ${new Date(currentSlot.split('-').slice(0, 3).join('-')).toLocaleDateString()} - ${currentSlot.split('-')[3]}</p>
                                <p class="text-xs text-muted-foreground mt-1">Postpones remaining: ${booking.maxPostpones - booking.postponeCount}</p>
                                <p class="text-xs text-success mt-1">🗓️ New dates start from tomorrow morning onwards</p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h4 class="text-lg font-semibold text-card-foreground">Select New Time Slot (Starting Tomorrow)</h4>
                        <div class="space-y-6">
                            ${availabilityHTML}
                        </div>
                    </div>

                    ${paginationHTML}
                </div>
            `;

    document.getElementById('postponeContent').innerHTML = content;
    document.getElementById('postponeModal').classList.remove('hidden');
}

function changePostponePage(direction) {
    const booking = eventsBookings.EventsBookings.find(b => b.bookingId === currentBookingId);
    if (!booking) return;

    const totalPages = Math.ceil(Object.keys(availabilityData).length / daysPerPage);
    const newPage = currentPostponePage + direction;

    if (newPage >= 0 && newPage < totalPages) {
        currentPostponePage = newPage;
        const currentSlot = booking.bookedSlots[0];
        renderPostponeModal(booking, currentSlot);
    }
}

// Select new slot
function selectNewSlot(slotKey) {
    const booking = eventsBookings.EventsBookings.find(b => b.bookingId === currentBookingId);
    if (!booking) return;

    const [date, timeSlot] = [slotKey.split('-').slice(0, 3).join('-'), slotKey.split('-')[3]];
    const formattedDate = new Date(date).toLocaleDateString();

    // Show confirmation modal
    const confirmContent = `
                <div class="text-center">
                    <div class="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-card-foreground mb-2">Confirm Postponement</h3>
                    <p class="text-muted-foreground mb-2">Move event to:</p>
                   <span class="${booking.bookingStatus === 'cancelled' ? 'text-destructive' : 'text-success'} font-medium">${booking.bookingStatus.charAt(0).toUpperCase() + booking.bookingStatus.slice(1)}</span>

                    <p class="text-sm text-muted-foreground mb-6">
                        ${booking.registrations.total} users are already registered. They will receive notification about the schedule change and can request refunds if needed.
                    </p>
                    <div class="flex space-x-3">
                        <button onclick="closeModal('postponeModal')" class="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors">
                            Cancel
                        </button>
                        <button onclick="confirmPostpone('${slotKey}')" class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                            Confirm Postponement
                        </button>
                    </div>
                </div>
            `;

    document.getElementById('postponeContent').innerHTML = confirmContent;
}

async function confirmPostpone(newSlot) {
    const booking = eventsBookings.EventsBookings.find(b => b.bookingId === currentBookingId);
    if (!booking) return;

    const oldSlot = booking.bookedSlots[0];

    try {
        // Show loading state
        showNotification('Updating event schedule...', 'loading');

        // Fetch current API data
        const response = await fetch('https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2');
        const apiData = await response.json();

        // Update the specific booking in API data
        const bookingIndex = apiData.EventsBookings.findIndex(b => b.bookingId === currentBookingId);
        if (bookingIndex !== -1) {
            apiData.EventsBookings[bookingIndex].bookedSlots = [newSlot];
            apiData.EventsBookings[bookingIndex].postponeCount += 1;
            apiData.EventsBookings[bookingIndex].bookingStatus = 'postponed';
        }

        // Remove old slot from resources
        removeOldSlotFromResources(apiData, oldSlot, booking);
        
        // Add new slot to resources
        addNewSlotToResources(apiData, newSlot, booking);

        // Update Mock API
        await updateMockAPI(apiData);

        // Update local data
        booking.bookedSlots = [newSlot];
        booking.postponeCount += 1;
        booking.bookingStatus = 'postponed';

        const postponeButtons = document.querySelectorAll(`button[onclick="postponeEvent('${currentBookingId}')"]`);
        postponeButtons.forEach(button => {
            button.style.display = 'none';
        });

        console.log(`Event ${currentBookingId} postponed to ${newSlot}`);
        
        closeModal('postponeModal');
        updateBookingCard(currentBookingId);
        showNotification('Event successfully postponed! All registered users have been notified. Database updated.', 'success');

    } catch (error) {
        console.error('Error updating postponement:', error);
        showNotification('Failed to update event schedule. Please try again.', 'error');
    }
}


function updateBookingCard(bookingId) {
    const booking = eventsBookings.EventsBookings.find(b => b.bookingId === bookingId);
    if (!booking) return;

 

    // Update main card date
    const mainDateElement = document.getElementById(`eventDate_${bookingId}`);
    if (mainDateElement && booking.bookedSlots[0]) {
        const newSlot = booking.bookedSlots[0];
        const [date, timeSlot] = [newSlot.split('-').slice(0, 3).join('-'), newSlot.split('-')[3]];
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        mainDateElement.textContent = `${formattedDate} - ${timeSlot.charAt(0).toUpperCase() + timeSlot.slice(1)}`;
    }

    // Update detail modal date if open
    const detailDateElement = document.getElementById(`detailEventDate_${bookingId}`);
    if (detailDateElement && booking.bookedSlots[0]) {
        const newSlot = booking.bookedSlots[0];
        const [date, timeSlot] = [newSlot.split('-').slice(0, 3).join('-'), newSlot.split('-')[3]];
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        detailDateElement.textContent = `${formattedDate} - ${timeSlot.charAt(0).toUpperCase() + timeSlot.slice(1)}`;
    }

    // Update status
    const statusElement = document.getElementById(`eventStatus_${bookingId}`);
    if (statusElement && booking.bookingStatus === 'postponed') {
        statusElement.className = 'text-warning font-medium';
        statusElement.textContent = 'Postponed';

        // Update card class
        const card = statusElement.closest('.status-confirmed, .status-postponed');
        if (card) {
            card.className = card.className.replace('status-confirmed', 'status-postponed');
        }
    }
}

// API Update Functions
async function updateMockAPI(updatedData) {
    const APIBASE = 'https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2';
    
    try {
        const response = await fetch(APIBASE, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating Mock API:', error);
        throw error;
    }
}

// Remove old slot from venue, band, decoration booked slots
function removeOldSlotFromResources(apiData, oldSlot, booking) {
    // Remove from venue
    if (booking.venueId) {
        const venue = apiData.Venues.find(v => v.id === booking.venueId);
        if (venue && venue.bookedSlots) {
            venue.bookedSlots = venue.bookedSlots.filter(slot => slot !== oldSlot);
        }
    }

    // Remove from band
    if (booking.bandId) {
        const band = apiData.Bands.find(b => b.id === booking.bandId);
        if (band && band.bookedSlots) {
            band.bookedSlots = band.bookedSlots.filter(slot => slot !== oldSlot);
        }
    }

    // Remove from decoration
    if (booking.decorationId) {
        const decoration = apiData.Decorations.find(d => d.id === booking.decorationId);
        if (decoration && decoration.bookedSlots) {
            decoration.bookedSlots = decoration.bookedSlots.filter(slot => slot !== oldSlot);
        }
    }
}

// Add new slot to venue, band, decoration booked slots
function addNewSlotToResources(apiData, newSlot, booking) {
    // Add to venue
    if (booking.venueId) {
        const venue = apiData.Venues.find(v => v.id === booking.venueId);
        if (venue) {
            if (!venue.bookedSlots) venue.bookedSlots = [];
            venue.bookedSlots.push(newSlot);
        }
    }

    // Add to band
    if (booking.bandId) {
        const band = apiData.Bands.find(b => b.id === booking.bandId);
        if (band) {
            if (!band.bookedSlots) band.bookedSlots = [];
            band.bookedSlots.push(newSlot);
        }
    }

    // Add to decoration
    if (booking.decorationId) {
        const decoration = apiData.Decorations.find(d => d.id === booking.decorationId);
        if (decoration) {
            if (!decoration.bookedSlots) decoration.bookedSlots = [];
            decoration.bookedSlots.push(newSlot);
        }
    }
}


function cancelEvent(bookingId) {
    const booking = eventsBookings.EventsBookings.find(b => b.bookingId === bookingId);
    if (!booking) return;

    currentBookingId = bookingId;
    document.getElementById('cancelWarningText').textContent = booking.registrations.total.toLocaleString() + ' users';
    document.getElementById('cancelModal').classList.remove('hidden');
}

async function confirmCancel() {
    const booking = eventsBookings.EventsBookings.find(b => b.bookingId === currentBookingId);
    if (!booking) return;

    const oldSlot = booking.bookedSlots[0];

    try {
        // Show loading state
        showNotification('Cancelling event...', 'loading');

        // Fetch current API data
        const response = await fetch('https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2');
        const apiData = await response.json();

        // Update the specific booking in API data
        const bookingIndex = apiData.EventsBookings.findIndex(b => b.bookingId === currentBookingId);
        if (bookingIndex !== -1) {
            apiData.EventsBookings[bookingIndex].bookingStatus = 'cancelled';
        }

        // Remove cancelled slot from resources (frees up availability)
        removeOldSlotFromResources(apiData, oldSlot, booking);

        // Update Mock API
        await updateMockAPI(apiData);

        // Update local data
        booking.bookingStatus = 'cancelled';

        console.log(`Event ${currentBookingId} cancelled`);
        
        closeModal('cancelModal');
        moveBookingToPast(currentBookingId);
        showNotification('Event successfully cancelled! All registered users will receive full refunds. Database updated.', 'success');

    } catch (error) {
        console.error('Error updating cancellation:', error);
        showNotification('Failed to cancel event. Please try again.', 'error');
    }
}


function moveBookingToPast(bookingId) {
    const booking = eventsBookings.EventsBookings.find(b => b.bookingId === bookingId);
    console.log(bookingId + "hello");

    if (!booking) return;

    // Get the current card
    const currentCard = document.getElementById(`card_${bookingId}`);
    if (!currentCard) return;

    // Add exit animation
    currentCard.classList.add('card-exit');

    // After animation completes, move to past events
    setTimeout(() => {
        // Remove from current bookings
        const currentBookingsDiv = document.getElementById('currentBookings');
        currentCard.remove();

        // Create new card for past events
        const pastBookingsDiv = document.getElementById('pastBookings');
        const pastCard = createPastEventCard(booking);

        // Add to past events with enter animation
        // pastCard.classList.add('card-enter');
        pastBookingsDiv.appendChild(pastCard);

        // Check if current bookings is empty
        if (currentBookingsDiv.children.length === 0) {
            currentBookingsDiv.innerHTML = `
                        <div class="text-center py-12">
                            <div class="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold text-foreground mb-2">No Current Bookings</h3>
                            <p class="text-muted-foreground">All your bookings have been completed or cancelled.</p>
                        </div>
                    `;
        }
    }, 500);
}

function createPastEventCard(booking, index) {
    const venue = venuesData.find(v => v.id === booking.venueId);
    const band = bandsData.find(b => b.id === booking.bandId);

    const formattedDate = new Date(booking.bookedSlots[0].split('-').slice(0, 3).join('-')).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    const timeSlot = booking.bookedSlots[0].split('-')[3];

    const card = document.createElement('div');
    
    // Determine card status class
    let statusClass = 'status-completed';
    if (booking.bookingStatus === 'cancelled') statusClass = 'status-cancelled';
    else if (booking.bookingStatus === 'postponed') statusClass = 'status-postponed';
    
    card.className = `bg-card rounded-xl p-4 sm:p-6 border border-border premium-shadow ${statusClass} relative`;
    card.innerHTML = `
        <!-- Mobile Menu Button (limited actions for past events) -->
        <div class="mobile-menu-icon sm:hidden">
            <button onclick="toggleMenu('pastMenu${index+1}')" class="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors border border-border shadow-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01"></path>
                </svg>
            </button>
            <div id="pastMenu${index+1}" class="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg premium-shadow-lg hidden z-20">
                <button onclick="viewDetails('${booking.bookingId}')" class="w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors">View Details</button>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row lg:items-start justify-between space-y-4 lg:space-y-0 mb-4">
            <div class="flex-1">
                <h3 class="text-lg sm:text-xl font-semibold text-card-foreground mb-2">${booking.eventName}</h3>
                <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-muted-foreground mb-3">
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        ${formattedDate} - ${timeSlot.charAt(0).toUpperCase() + timeSlot.slice(1)}
                    </span>
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        ${venue?.name || ''}
                    </span>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm">
                    <span class="${getStatusClass(booking.bookingStatus)} font-medium">${getStatusText(booking.bookingStatus)}</span>
                    <span class="text-muted-foreground">${band?.name || ''}</span>
                    <span class="text-primary font-semibold">₹${booking.totalAmount.toLocaleString()}</span>
                </div>
            </div>

            <!-- Always visible View Details button in Past Events -->
            <div class="flex items-center space-x-2">
                <button onclick="viewDetails('${booking.bookingId}')" class="px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
                    View Details
                </button>
            </div>
        </div>
    `;

    return card;
}
function getStatusClass(status) {
    switch(status) {
        case 'confirmed': return 'text-success';
        case 'postponed': return 'text-warning';
        case 'cancelled': return 'text-destructive';
        case 'completed': return 'text-primary';
        default: return 'text-success';
    }
}

function getStatusText(status) {
    switch(status) {
        case 'confirmed': return 'Confirmed';
        case 'postponed': return 'Postponed';
        case 'cancelled': return 'Cancelled';
        case 'completed': return 'Completed';
        default: return 'Confirmed';
    }
}

function updateStatistics(currentBookings, pastBookings) {
    // Update any statistics or counters
    console.log(`Current Bookings: ${currentBookings.length}`);
    console.log(`Past Bookings: ${pastBookings.length}`);
}


// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    // currentBookingId = null;
}

// Close modals when clicking backdrop
document.querySelectorAll('[id*="Modal"]').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Enhanced My Bookings Dashboard loaded successfully');
});
