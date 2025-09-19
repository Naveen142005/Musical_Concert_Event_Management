
// ============================================
// STATIC DATA OBJECTS FOR FACILITIES
// TODO: Replace with database queries when backend is ready
// Database structure: venues table, bands table, decoration_teams table, food_providers table
// ============================================

// Venues Data Structure - Future DB Table: venues
const venuesData = [
    {
        id: 'madison-square',
        name: 'Madison Square Garden',
        location: 'New York',
        maxLimit: 20000,
        pricePerHour: 25000,
        bookedSlots: [
            // Format: { startDateTime: '2025-09-17T18:00', endDateTime: '2025-09-17T23:00' }
            // TODO: Fetch from bookings table where venue_id = this.id
        ]
    },
    {
        id: 'crypto-arena',
        name: 'Crypto.com Arena',
        location: 'Los Angeles',
        maxLimit: 21000,
        pricePerHour: 22000,
        bookedSlots: [
            { startDateTime: '2025-09-18T19:00', endDateTime: '2025-09-18T22:00' }
        ]
    },
    {
        id: 'red-rocks',
        name: 'Red Rocks Amphitheatre',
        location: 'Colorado',
        maxLimit: 9525,
        pricePerHour: 15000,
        bookedSlots: []
    },
    {
        id: 'hollywood-bowl',
        name: 'Hollywood Bowl',
        location: 'Los Angeles',
        maxLimit: 17500,
        pricePerHour: 18000,
        bookedSlots: []
    },
    {
        id: 'united-center',
        name: 'United Center',
        location: 'Chicago',
        maxLimit: 23500,
        pricePerHour: 28000,
        bookedSlots: []
    },
    {
        id: 'aa-arena',
        name: 'American Airlines Arena',
        location: 'Miami',
        maxLimit: 19600,
        pricePerHour: 20000,
        bookedSlots: []
    }
];

// Bands Data Structure - Future DB Table: bands
const bandsData = [
    {
        id: 'rock-legends',
        name: 'The Rock Legends',
        genre: 'Rock',
        members: 5,
        pricePerHour: 35000,
        bookedSlots: [
            { startDateTime: '2025-09-18T20:00', endDateTime: '2025-09-18T23:00' }
        ]
    },
    {
        id: 'jazz-masters',
        name: 'Jazz Masters Collective',
        genre: 'Jazz',
        members: 4,
        pricePerHour: 25000,
        bookedSlots: []
    },
    {
        id: 'indie-collective',
        name: 'Indie Sound Collective',
        genre: 'Pop',
        members: 6,
        pricePerHour: 20000,
        bookedSlots: []
    },
    {
        id: 'electronic-fusion',
        name: 'Electronic Fusion',
        genre: 'Electronic',
        members: 3,
        pricePerHour: 30000,
        bookedSlots: []
    },
    {
        id: 'classical-symphony',
        name: 'Classical Symphony Orchestra',
        genre: 'Classical',
        members: 25,
        pricePerHour: 45000,
        bookedSlots: []
    },
    {
        id: 'pop-stars',
        name: 'Pop Stars United',
        genre: 'Pop',
        members: 4,
        pricePerHour: 32000,
        bookedSlots: []
    }
];

// Decoration Teams Data Structure - Future DB Table: decoration_teams
const decorationData = [
    {
        id: 'luxury-events',
        teamName: 'Luxury Events Co.',
        packageType: 'Premium',
        pricePerEvent: 85000,
        specialties: ['LED Lighting', 'Stage Design', 'Floral Arrangements']
    },
    {
        id: 'creative-decor',
        teamName: 'Creative Decor Solutions',
        packageType: 'Standard',
        pricePerEvent: 55000,
        specialties: ['Theme Decoration', 'Balloon Arrangements', 'Basic Lighting']
    },
    {
        id: 'budget-decorators',
        teamName: 'Budget Decorators',
        packageType: 'Basic',
        pricePerEvent: 25000,
        specialties: ['Simple Setup', 'Basic Decor', 'Minimal Lighting']
    },
    {
        id: 'elite-designs',
        teamName: 'Elite Design Studios',
        packageType: 'Premium',
        pricePerEvent: 95000,
        specialties: ['Custom Themes', 'Premium Lighting', 'Designer Setup']
    },
    {
        id: 'standard-events',
        teamName: 'Standard Events Team',
        packageType: 'Standard',
        pricePerEvent: 45000,
        specialties: ['Standard Setup', 'Event Lighting', 'Basic Theming']
    }
];

// Food Providers Data Structure - Future DB Table: food_providers
const foodData = [
    {
        id: 'gourmet-catering',
        teamName: 'Gourmet Catering Services',
        packageType: 'Gourmet',
        pricePerEvent: 125000,
        cuisine: ['International', 'Fine Dining', 'Custom Menus']
    },
    {
        id: 'standard-catering',
        teamName: 'Standard Catering Co.',
        packageType: 'Standard',
        pricePerEvent: 75000,
        cuisine: ['Indian', 'Continental', 'Chinese']
    },
    {
        id: 'snacks-beverages',
        teamName: 'Quick Bites & Beverages',
        packageType: 'Snacks',
        pricePerEvent: 35000,
        cuisine: ['Snacks', 'Beverages', 'Fast Food']
    },
    {
        id: 'premium-dining',
        teamName: 'Premium Dining Experience',
        packageType: 'Gourmet',
        pricePerEvent: 140000,
        cuisine: ['Multi-Cuisine', 'Buffet', 'Live Counters']
    },
    {
        id: 'local-flavors',
        teamName: 'Local Flavors Catering',
        packageType: 'Standard',
        pricePerEvent: 65000,
        cuisine: ['Regional Cuisine', 'Traditional', 'Authentic']
    }
];

// ============================================
// GLOBAL VARIABLES AND STATE MANAGEMENT
// ============================================

let currentStep = 1;
const totalSteps = 5;
let totalCost = 0; // Base service fee
let selectedVenue = null;
let selectedBand = null;
let selectedDecoration = null;
let selectedFood = null;
let eventDurationHours = 0;

// Form validation patterns
const validationPatterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobile: /^[6-9]\d{9}$/
};

// ============================================
// AVAILABILITY FILTERING FUNCTIONS
// TODO: Replace with database queries to check real-time availability
// Query: SELECT * FROM bookings WHERE (venue_id/band_id) AND date_range_overlaps()
// ============================================

function checkAvailability(item, startDateTime, endDateTime) {
    // Convert datetime strings to Date objects for comparison
    const requestStart = new Date(startDateTime);
    const requestEnd = new Date(endDateTime);

    // Check if any booked slot conflicts with requested time
    return !item.bookedSlots.some(slot => {
        const slotStart = new Date(slot.startDateTime);
        const slotEnd = new Date(slot.endDateTime);

        // Check for overlap: new booking starts before existing ends AND new booking ends after existing starts
        return (requestStart < slotEnd && requestEnd > slotStart);
    });
}

function filterAvailableOptions() {
    const startDateTime = document.getElementById('eventStartDateTime').value;
    const endDateTime = document.getElementById('eventEndDateTime').value;

    if (startDateTime && endDateTime) {
        // Calculate event duration in hours for cost calculation
        const start = new Date(startDateTime);
        const end = new Date(endDateTime);
        eventDurationHours = Math.ceil((end - start) / (1000 * 60 * 60)); // Convert ms to hours

        // Apply filters to all categories
        applyVenueFilters();
        applyBandFilters();
        calculateTotal();
    }
}

// ============================================
// USER FILTER FUNCTIONS
// TODO: Optimize with database indexes on capacity, location, genre, budget columns
// ============================================

function applyVenueFilters() {
    const capacityFilter = document.getElementById('venueCapacityFilter')?.value;
    const locationFilter = document.getElementById('venueLocationFilter')?.value;
    const startDateTime = document.getElementById('eventStartDateTime').value;
    const endDateTime = document.getElementById('eventEndDateTime').value;

    let filteredVenues = venuesData;

    // Filter by availability first (if dates are selected)
    if (startDateTime && endDateTime) {
        filteredVenues = filteredVenues.filter(venue =>
            checkAvailability(venue, startDateTime, endDateTime)
        );
    }

    // Filter by capacity
    if (capacityFilter) {
        filteredVenues = filteredVenues.filter(venue => venue.maxLimit <= parseInt(capacityFilter));
    }

    // Filter by location
    if (locationFilter) {
        filteredVenues = filteredVenues.filter(venue => venue.location === locationFilter);
    }

    renderVenueOptions(filteredVenues);
}

function applyBandFilters() {
    const genreFilter = document.getElementById('bandGenreFilter')?.value;
    const budgetFilter = document.getElementById('bandBudgetFilter')?.value;
    const startDateTime = document.getElementById('eventStartDateTime').value;
    const endDateTime = document.getElementById('eventEndDateTime').value;

    let filteredBands = bandsData;

    // Filter by availability first (if dates are selected)
    if (startDateTime && endDateTime) {
        filteredBands = filteredBands.filter(band =>
            checkAvailability(band, startDateTime, endDateTime)
        );
    }

    // Filter by genre
    if (genreFilter) {
        filteredBands = filteredBands.filter(band => band.genre === genreFilter);
    }

    // Filter by budget (per hour)
    if (budgetFilter) {
        filteredBands = filteredBands.filter(band => band.pricePerHour <= parseInt(budgetFilter));
    }

    renderBandOptions(filteredBands);
}

function applyDecorationFilters() {
    const packageFilter = document.getElementById('decorationPackageFilter')?.value;
    const budgetFilter = document.getElementById('decorationBudgetFilter')?.value;

    let filteredDecoration = decorationData;

    // Filter by package type
    if (packageFilter) {
        filteredDecoration = filteredDecoration.filter(item => item.packageType === packageFilter);
    }

    // Filter by budget
    if (budgetFilter) {
        filteredDecoration = filteredDecoration.filter(item => item.pricePerEvent <= parseInt(budgetFilter));
    }

    renderDecorationOptions(filteredDecoration);
}

function applyFoodFilters() {
    const packageFilter = document.getElementById('foodPackageFilter')?.value;
    const budgetFilter = document.getElementById('foodBudgetFilter')?.value;

    let filteredFood = foodData;

    // Filter by package type
    if (packageFilter) {
        filteredFood = filteredFood.filter(item => item.packageType === packageFilter);
    }

    // Filter by budget
    if (budgetFilter) {
        filteredFood = filteredFood.filter(item => item.pricePerEvent <= parseInt(budgetFilter));
    }

    renderFoodOptions(filteredFood);
}

// ============================================
// DYNAMIC RENDERING FUNCTIONS
// ============================================

function renderVenueOptions(venues) {
    const venuesList = document.getElementById('venues-list');
    if (!venuesList) return;

    venuesList.innerHTML = venues.map(venue => {
        const isSelected = selectedVenue?.id === venue.id;

        // Always white background ]
        const cardClass = `p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 bg-white ${isSelected
                ? 'available-item seleced-item  border-green-500 ring-2 ring-green-300'
                : 'available-item hover:shadow-lg hover:border-green-400'
            }`;

        return `
            <div class="${cardClass}" onclick="selectVenue('${venue.id}')">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h5 class="font-bold text-lg text-green-800">${venue.name}</h5>
                        <p class="text-green-700"> ${venue.location}</p>
                        <p class="text-green-700"> Capacity: ${venue.maxLimit.toLocaleString()} guests</p>
                    </div>
                    <div class="text-right">
                        <p class="font-bold text-green-800">₹${venue.pricePerHour.toLocaleString()}/hour</p>
                        ${eventDurationHours > 0
                ? `<p class="text-sm text-green-600">Total: ₹${(venue.pricePerHour * eventDurationHours).toLocaleString()}</p>`
                : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}


function renderBandOptions(bands) {
    const bandsList = document.getElementById('bands-list');
    if (!bandsList) return;

    bandsList.innerHTML = bands.map(band => {
        const isSelected = selectedBand?.id === band.id;
        const cardClass = `p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${isSelected
                ? 'available-item seleced-item border-green-500 ring-2 ring-green-300'
                : 'available-item hover:shadow-lg'
            }`;

        return `
                    <div class="${cardClass}" onclick="selectBand('${band.id}')">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h5 class="font-bold text-lg text-green-800">${band.name}</h5>
                                <p class="text-green-700"> Genre: ${band.genre}</p>
                                <p class="text-green-700"> Members: ${band.members}</p>
                            </div>
                            <div class="text-right">
                                <p class="font-bold text-green-800">₹${band.pricePerHour.toLocaleString()}/hour</p>
                                ${eventDurationHours > 0 ? `<p class="text-sm text-green-600">Total: ₹${(band.pricePerHour * eventDurationHours).toLocaleString()}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `;
    }).join('');
}

function renderDecorationOptions(decorations) {
    const decorationList = document.getElementById('decoration-list');
    if (!decorationList) return;

    decorationList.innerHTML = decorations.map(decoration => {
        const isSelected = selectedDecoration?.id === decoration.id;
        const cardClass = `p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${isSelected
                ? 'available-item seleced-item border-green-500 ring-2 ring-green-300'
                : 'available-item hover:shadow-lg'
            }`;

        return `
                    <div class="${cardClass}" onclick="selectDecoration('${decoration.id}')">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h5 class="font-bold text-lg text-green-800">${decoration.teamName}</h5>
                                <p class="text-green-700"> Package: ${decoration.packageType}</p>
                                <p class="text-green-700 text-sm">Specialties: ${decoration.specialties.join(', ')}</p>
                            </div>
                            <div class="text-right">
                                <p class="font-bold text-green-800">₹${decoration.pricePerEvent.toLocaleString()}</p>
                                <p class="text-sm text-green-600">Per Event</p>
                            </div>
                        </div>
                    </div>
                `;
    }).join('');
}

function renderFoodOptions(foods) {
    const foodList = document.getElementById('food-list');
    if (!foodList) return;

    foodList.innerHTML = foods.map(food => {
        const isSelected = selectedFood?.id === food.id;
        const cardClass = `p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${isSelected
                ? 'available-item  seleced-item border-green-500 ring-2 ring-green-300'
                : 'available-item hover:shadow-lg'
            }`;

        return `
                    <div class="${cardClass}" onclick="selectFood('${food.id}')">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h5 class="font-bold text-lg text-green-800">${food.teamName}</h5>
                                <p class="text-green-700"> Package: ${food.packageType}</p>
                                <p class="text-green-700 text-sm">Cuisine: ${food.cuisine.join(', ')}</p>
                            </div>
                            <div class="text-right">
                                <p class="font-bold text-green-800">₹${food.pricePerEvent.toLocaleString()}</p>
                                <p class="text-sm text-green-600">Per Event</p>
                            </div>
                        </div>
                    </div>
                `;
    }).join('');
}

// ============================================
// SELECTION FUNCTIONS
// ============================================

function selectVenue(venueId) {
    selectedVenue = venuesData.find(venue => venue.id === venueId);
    applyVenueFilters(); // Re-render to show select ion
    calculateTotal();
}

function selectBand(bandId) {
    selectedBand = bandsData.find(band => band.id === bandId);
    applyBandFilters(); // Re-render to show selection
    calculateTotal();
}

function selectDecoration(decorationId) {
    selectedDecoration = decorationData.find(decoration => decoration.id === decorationId);
    applyDecorationFilters(); // Re-render to show selection
    calculateTotal();
}

function selectFood(foodId) {
    selectedFood = foodData.find(food => food.id === foodId);
    applyFoodFilters(); // Re-render to show selection
    calculateTotal();
}

// ============================================
// COST CALCULATION FUNCTIONS - FIXED PERFECTLY
// Total cost = (Venue price per hour × booked hours) + (Band price per hour × booked hours) + 
//              (Decoration package price) + (Food package price) + (Tickets, if chosen)
// ============================================

function calculateTotal() {
    totalCost = 250; // Base service fee

    // Venue cost = price per hour × event duration hours
    if (selectedVenue && eventDurationHours > 0) {
        totalCost += selectedVenue.pricePerHour * eventDurationHours;
    }

    // Band cost = price per hour × event duration hours  
    if (selectedBand && eventDurationHours > 0) {
        totalCost += selectedBand.pricePerHour * eventDurationHours;
    }

    // Decoration cost (fixed per event)
    if (selectedDecoration) {
        totalCost += selectedDecoration.pricePerEvent;
    }

    // Food cost (fixed per event)
    if (selectedFood) {
        totalCost += selectedFood.pricePerEvent;
    }

    // Ticket revenue (if tickets are enabled and sold)
    const enableTicketing = document.getElementById('enableTicketing')?.value;
    if (enableTicketing === 'yes') {
        const tiers = ['premium', 'gold', 'silver'];
        tiers.forEach(tier => {
            const quantity = parseInt(document.getElementById(`${tier}Quantity`)?.value) || 0;
            const price = parseInt(document.getElementById(`${tier}Price`)?.value) || 0;
            totalCost += (quantity * price);
        });
    }

    // Update display
    document.getElementById('sidebar-total').textContent = totalCost.toLocaleString('en-IN');

    return totalCost;
}

// ============================================
// FORM VALIDATION AND STEP MANAGEMENT
// ============================================

function updateStepper() {
    for (let i = 1; i <= totalSteps; i++) {
        const indicator = document.getElementById(`step-${i}-indicator`);
        const stepElement = indicator.parentElement.parentElement;

        indicator.className = indicator.className.replace(/stepper-\w+/g, '');

        if (i < currentStep) {
            indicator.className += " stepper-completed";
            indicator.innerHTML = "✓";
            stepElement.className = stepElement.className.replace(/text-gray-\d+/, "text-green-600");
        } else if (i === currentStep) {
            indicator.className += " stepper-active";
            indicator.innerHTML = i;
            stepElement.className = stepElement.className.replace(/text-gray-\d+/, "text-primary");
        } else {
            indicator.className = "w-10 h-10 bg-gray-100 border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm text-gray-800 font-semibold lg:w-12 lg:h-12";
            indicator.innerHTML = i;
            stepElement.className = stepElement.className.replace(/text-(primary|green-600)/, "text-gray-500");
        }
    }

    // Update progress bar
    const progress = (currentStep / totalSteps) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-percentage').textContent = Math.round(progress) + '%';

    // Update sidebar
    document.querySelector('#sidebar-details').innerHTML = `
                <div class="flex justify-between items-center py-2 border-b border-purple-200">
                    <span class="text-gray-600">Current Step</span>
                    <span class="font-semibold text-purple-800">${currentStep} of ${totalSteps}</span>
                </div>
            `;
}

function showStep(step) {
    // Hide all steps
    for (let i = 1; i <= totalSteps; i++) {
        document.getElementById(`step-${i}`).classList.add('hidden');
    }

    // Show current step with animation
    setTimeout(() => {
        document.getElementById(`step-${step}`).classList.remove('hidden');
        document.getElementById(`step-${step}`).classList.add('animate-fade-in');

        if (step === 4) {
            updateConcertBookingSummary();
        } else if (step === 5) {
            updatePaymentStep();
        }
    }, 150);

    updateStepper();
}

function validateField(fieldId, value) {
    const field = document.getElementById(fieldId);
    if (!field) return true;

    const errorDiv = field.parentElement.querySelector('.error-message');
    let isValid = true;
    let errorMessage = '';

    field.classList.remove('error', 'success');

    if (!value || value.trim() === '') {
        if (field.hasAttribute('required')) {
            isValid = false;
            errorMessage = 'This field is required';
        }
    } else {
        switch (fieldId) {
            case 'name':
                if (!validationPatterns.name.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid name (2-50 characters, letters only)';
                }
                break;
            case 'email':
                if (!validationPatterns.email.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            case 'mobile':
                if (!validationPatterns.mobile.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid 10-digit mobile number';
                }
                break;
            case 'eventStartDateTime':
                const startDate = new Date(value);
                const now = new Date();
                if (startDate < now) {
                    isValid = false;
                    errorMessage = 'Please select a future date and time';
                }
                break;
            case 'eventEndDateTime':
                const endDate = new Date(value);
                const startDateTime = document.getElementById('eventStartDateTime').value;
                if (startDateTime && endDate <= new Date(startDateTime)) {
                    isValid = false;
                    errorMessage = 'End date must be after start date';
                }
                break;
        }
    }

    if (errorDiv) {
        if (!isValid) {
            errorDiv.textContent = errorMessage;
            errorDiv.classList.remove('hidden');
            field.classList.add('error');
        } else {
            errorDiv.classList.add('hidden');
            if (value.trim() !== '') {
                field.classList.add('success');
            }
        }
    }

    return isValid;
}

function validateTicketQuantity(tier) {
    const quantityField = document.getElementById(`${tier}Quantity`);
    const priceField = document.getElementById(`${tier}Price`);
    const errorDiv = document.getElementById(`${tier}-error`);

    if (!quantityField || !priceField || !errorDiv) return true;

    const quantity = parseInt(quantityField.value) || 0;
    const price = parseInt(priceField.value) || 0;

    let isValid = true;
    let errorMessage = '';

    // Clear previous styling
    quantityField.classList.remove('error', 'success');
    priceField.classList.remove('error', 'success');

    if (quantity > 0 && price <= 0) {
        isValid = false;
        errorMessage = `Please enter a valid price for ${tier} tickets`;
        priceField.classList.add('error');
    } else if (quantity > 0 && price > 0) {
        quantityField.classList.add('success');
        priceField.classList.add('success');
    } else if (quantity <= 0 && price > 0) {
        isValid = false;
        errorMessage = `Please enter the number of ${tier} tickets`;
        quantityField.classList.add('error');
    }

    if (!isValid) {
        errorDiv.textContent = errorMessage;
        errorDiv.classList.remove('hidden');
    } else {
        errorDiv.classList.add('hidden');
    }

    calculateTotal();
    return isValid;
}

function validateCurrentStep() {
    const stepRequiredFields = {
        1: [
            { id: 'name', label: 'Name' },
            { id: 'email', label: 'Email' },
            { id: 'mobile', label: 'Mobile' },
            { id: 'eventName', label: 'Event Name' },
            { id: 'eventStartDateTime', label: 'Event Start Date & Time' },
            { id: 'eventEndDateTime', label: 'Event End Date & Time' }
        ],
        2: [
            { id: 'needVenue', label: 'Venue requirement' },
            { id: 'needBands', label: 'Bands requirement' }
        ],
        3: [],
        4: [],
        5: [
            { id: 'paymentType', label: 'Payment option' },
            { id: 'paymentMethod', label: 'Payment method' }
        ]
    };

    const fields = stepRequiredFields[currentStep] || [];
    let isStepValid = true;

    fields.forEach(field => {
        const element = document.getElementById(field.id);
        if (element) {
            const isValid = validateField(field.id, element.value);
            if (!isValid) isStepValid = false;
        }
    });

    // Conditional field validations for step 2
    if (currentStep === 2) {
        const needVenue = document.getElementById('needVenue').value;
        const needBands = document.getElementById('needBands').value;

        if (needVenue === 'yes' && !selectedVenue) {
            isStepValid = false;
            showNotification('Please select an available venue', 'error');
        }

        if (needBands === 'yes' && !selectedBand) {
            isStepValid = false;
            showNotification('Please select an available band', 'error');
        }
    }

    // Ticket validation for step 3
    if (currentStep === 3) {
        const enableTicketing = document.getElementById('enableTicketing').value;
        if (enableTicketing === 'yes') {
            const tiers = ['premium', 'gold', 'silver'];
            let hasValidTickets = false;

            tiers.forEach(tier => {
                const quantity = parseInt(document.getElementById(`${tier}Quantity`).value) || 0;
                const price = parseInt(document.getElementById(`${tier}Price`).value) || 0;

                if (quantity > 0 && price > 0) {
                    hasValidTickets = true;
                } else if (quantity > 0 || price > 0) {
                    validateTicketQuantity(tier);
                    isStepValid = false;
                }
            });

            if (!hasValidTickets && enableTicketing === 'yes') {
                isStepValid = false;
                showNotification('Please enter valid ticket quantities and prices for at least one tier', 'error');
            }




        }
    }

    // Terms acceptance validation for payment step
    if (currentStep === 5) {
        const acceptTerms = document.getElementById('acceptTerms');
        const termsError = document.getElementById('terms-error');
        if (acceptTerms && !acceptTerms.checked) {
            if (termsError) {
                termsError.textContent = 'Please accept the terms and conditions';
                termsError.classList.remove('hidden');
            }
            isStepValid = false;
        } else if (termsError) {
            termsError.classList.add('hidden');
        }
    }

    return isStepValid;
}

function toggleConditionalFields(type) {
    const conditionalFields = {
        'venue': 'needVenue',
        'bands': 'needBands',
        'decoration': 'needDecoration',
        'food': 'needFood',
        'ticketing': 'enableTicketing'
    };

    const selectElement = document.getElementById(conditionalFields[type]);
    const fieldContainer = document.getElementById(`${type}-fields`);

    if (!selectElement || !fieldContainer) return;

    if (selectElement.value === 'yes') {
        fieldContainer.classList.add('show');

        // Initialize options when field becomes visible
        if (type === 'venue') {
            applyVenueFilters();
        } else if (type === 'bands') {
            applyBandFilters();
        } else if (type === 'decoration') {
            applyDecorationFilters();
        } else if (type === 'food') {
            applyFoodFilters();
        }
    } else {
        fieldContainer.classList.remove('show');

        // Clear selections when field is hidden
        if (type === 'venue') {
            selectedVenue = null;
        } else if (type === 'bands') {
            selectedBand = null;
        } else if (type === 'decoration') {
            selectedDecoration = null;
        } else if (type === 'food') {
            selectedFood = null;
        }
    }

    calculateTotal();
}

// ============================================
// CONCERT SUMMARY FUNCTIONS - BEAUTIFUL CONCERT-THEMED DESIGN
// ============================================

function updateConcertBookingSummary() {
    const summaryContainer = document.getElementById('concert-booking-summary');
    if (!summaryContainer) return;

    const eventName = document.getElementById('eventName').value;
    const startDateTime = document.getElementById('eventStartDateTime').value;
    const endDateTime = document.getElementById('eventEndDateTime').value;

    const formatDateTime = (dateTimeStr) => {
        if (!dateTimeStr) return 'Not Set';
        const date = new Date(dateTimeStr);
        return date.toLocaleString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    let summaryHtml = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Event Details Card -->
                    <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border-2 border-blue-200">
                        <h4 class="text-xl font-bold text-blue-800 mb-4 flex items-center">
                            <span class="mr-3 text-2xl "></span>
                            Event Information
                        </h4>
                        <div class="space-y-3 text-blue-700">
                            <div class="flex items-center"><span class="font-semibold mr-2"> Event:</span> ${eventName || 'Not Specified'}</div>
                            <div class="flex items-center"><span class="font-semibold mr-2"> Start:</span> ${formatDateTime(startDateTime)}</div>
                            <div class="flex items-center"><span class="font-semibold mr-2"> End:</span> ${formatDateTime(endDateTime)}</div>
                            <div class="flex items-center"><span class="font-semibold mr-2"> Duration:</span> ${eventDurationHours} hours</div>
                        </div>
                    </div>
                    
                    <!-- Venue & Location Card -->
                    <div class="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 border-2 border-purple-200">
                        <h4 class="text-xl font-bold text-purple-800 mb-4 flex items-center">
                            <span class="mr-3 text-2xl "></span>
                            Venue & Location
                        </h4>
                        <div class="space-y-3 text-purple-700">
                            ${selectedVenue ? `
                                <div class="flex items-center"><span class="font-semibold mr-2">Venue:</span> ${selectedVenue.name}</div>
                                <div class="flex items-center"><span class="font-semibold mr-2">Location:</span> ${selectedVenue.location}</div>
                                <div class="flex items-center"><span class="font-semibold mr-2">Capacity:</span> ${selectedVenue.maxLimit.toLocaleString()} guests</div>
                                <div class="flex items-center"><span class="font-semibold mr-2">Cost:</span> ₹${(selectedVenue.pricePerHour * eventDurationHours).toLocaleString()}</div>
                            ` : `
                                <div class="text-center py-4 text-purple-600">
                                    <span class="text-2xl"></span><br>
                                    No venue selected
                                </div>
                            `}
                        </div>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <!-- Band & Music Card -->
                    <div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border-2 border-green-200">
                        <h4 class="text-xl font-bold text-green-800 mb-4 flex items-center">
                            <span class="mr-3 text-2xl ">🎶</span>
                            Musical Entertainment
                        </h4>
                        <div class="space-y-3 text-green-700">
                            ${selectedBand ? `
                                <div class="flex items-center"><span class="font-semibold mr-2">Band:</span> ${selectedBand.name}</div>
                                <div class="flex items-center"><span class="font-semibold mr-2">Genre:</span> ${selectedBand.genre}</div>
                                <div class="flex items-center"><span class="font-semibold mr-2">Members:</span> ${selectedBand.members}</div>
                                <div class="flex items-center"><span class="font-semibold mr-2">Cost:</span> ₹${(selectedBand.pricePerHour * eventDurationHours).toLocaleString()}</div>
                            ` : `
                                <div class="text-center py-4 text-green-600">
                                    <span class="text-2xl"></span><br>
                                    No band selected
                                </div>
                            `}
                        </div>
                    </div>
                    
                    <!-- Services Card -->
                    <div class="bg-gradient-to-br from-orange-50 to-yellow-100 rounded-xl p-6 border-2 border-orange-200">
                        <h4 class="text-xl font-bold text-orange-800 mb-4 flex items-center">
                            <span class="mr-3 text-2xl "></span>
                            Additional Services
                        </h4>
                        <div class="space-y-3 text-orange-700">
                            ${selectedDecoration ? `
                                <div class="flex items-center"><span class="font-semibold mr-2"> Decoration:</span> ${selectedDecoration.teamName}</div>
                                <div class="flex items-center"><span class="font-semibold mr-2">Package:</span> ${selectedDecoration.packageType}</div>
                                <div class="flex items-center"><span class="font-semibold mr-2">Cost:</span> ₹${selectedDecoration.pricePerEvent.toLocaleString()}</div>
                            ` : ''}
                            ${selectedFood ? `
                                <div class="flex items-center"><span class="font-semibold mr-2">Catering:</span> ${selectedFood.teamName}</div>
                                <div class="flex items-center"><span class="font-semibold mr-2">Package:</span> ${selectedFood.packageType}</div>
                                <div class="flex items-center"><span class="font-semibold mr-2">Cost:</span> ₹${selectedFood.pricePerEvent.toLocaleString()}</div>
                            ` : ''}
                            ${!selectedDecoration && !selectedFood ? `
                                <div class="text-center py-4 text-orange-600">
                                    <span class="text-2xl"></span><br>
                                    No additional services selected
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;

    // Add ticket information if enabled
    const enableTicketing = document.getElementById('enableTicketing')?.value;
    if (enableTicketing === 'yes') {
        const tiers = [
            { name: 'Premium', icon: '', id: 'premium' },
            { name: 'Gold', icon: '', id: 'gold' },
            { name: 'Silver', icon: '', id: 'silver' }
        ];

        let ticketsHtml = '';
        let hasTickets = false;

        tiers.forEach(tier => {
            const quantity = parseInt(document.getElementById(`${tier.id}Quantity`)?.value) || 0;
            const price = parseInt(document.getElementById(`${tier.id}Price`)?.value) || 0;
            if (quantity > 0 && price > 0) {
                hasTickets = true;
                const revenue = quantity * price;
                ticketsHtml += `
                            <div class="flex justify-between items-center p-3 bg-white rounded-lg border border-purple-200">
                                <div class="flex items-center">
                                    <span class="mr-2 text-xl">${tier.icon}</span>
                                    <div>
                                        <div class="font-semibold text-purple-700">${tier.name} Tickets</div>
                                        
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="font-bold text-purple-800">₹${revenue.toLocaleString()}</div>
                                </div>
                            </div>
                        `;
            }
        });

        if (hasTickets) {
            summaryHtml += `
                        <div class="mt-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-6 border-2 border-purple-200">
                            <h4 class="text-xl font-bold text-purple-800 mb-4 flex items-center">
                                <span class="mr-3 text-2xl "></span>
                                Ticket Sales Information
                            </h4>
                            <div class="space-y-3">
                                ${ticketsHtml}
                            </div>
                        </div>
                    `;
        }
    }

    // Add final cost summary
    summaryHtml += `
                <div class="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 border-2 border-green-300">
                    <h4 class="text-xl font-bold text-green-800 mb-4 flex items-center">
                        <span class="mr-3 text-2xl "></span>
                        Investment Breakdown
                    </h4>
                    <div class="space-y-2 text-green-700">
                        <div class="flex justify-between"><span> Base Service Fee:</span><span class="font-semibold">₹10,000</span></div>
                        ${selectedVenue ? `<div class="flex justify-between"><span> Venue (${eventDurationHours}h):</span><span class="font-semibold">₹${(selectedVenue.pricePerHour * eventDurationHours).toLocaleString()}</span></div>` : ''}
                        ${selectedBand ? `<div class="flex justify-between"><span Band (${eventDurationHours}h):</span><span class="font-semibold">₹${(selectedBand.pricePerHour * eventDurationHours).toLocaleString()}</span></div>` : ''}
                        ${selectedDecoration ? `<div class="flex justify-between"><span> Decoration:</span><span class="font-semibold">₹${selectedDecoration.pricePerEvent.toLocaleString()}</span></div>` : ''}
                        ${selectedFood ? `<div class="flex justify-between"><span> Catering:</span><span class="font-semibold">₹${selectedFood.pricePerEvent.toLocaleString()}</span></div>` : ''}
                        <div class="border-t-2 border-green-400 pt-3 mt-3">
                            <div class="flex justify-between text-xl font-bold text-green-900">
                                <span> Total Investment:</span>
                                <span>₹${totalCost.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;

    summaryContainer.innerHTML = summaryHtml;
}

function updatePaymentStep() {
    calculateTotal();
    document.getElementById('grandTotal').textContent = totalCost.toLocaleString('en-IN');
    document.getElementById('final-payment-amount').textContent = totalCost.toLocaleString('en-IN');
}

function updatePaymentAmount() {
    const paymentType = document.getElementById('paymentType').value;
    const paymentDisplay = document.getElementById('payment-amount-display');
    const paymentBreakdown = document.getElementById('payment-breakdown');
    const finalAmount = document.getElementById('final-payment-amount');

    if (paymentType) {
        paymentDisplay.classList.remove('hidden');

        let paymentAmount = totalCost;
        let breakdownText = '';

        switch (paymentType) {
            case 'full':
                paymentAmount = totalCost;
                breakdownText = `<p class="font-bold text-lg"> Total Amount: ₹${totalCost.toLocaleString('en-IN')}</p>`
                break;
            case 'partial':
                paymentAmount = Math.floor(totalCost / 2);
                let remaining = totalCost - paymentAmount
                paymentAmount = Math.floor(totalCost / 2);
                remaining = totalCost - paymentAmount;
                breakdownText = `
                            <p class="font-bold text-lg">💳 Pay 50% now: ₹${paymentAmount.toLocaleString('en-IN')}</p>
                            <p class="text-blue-600 font-medium">✅ Pay 50% now, balance to be paid later.</p>
                            <p class="text-sm text-blue-600 mt-2">Remaining Balance: ₹${remaining.toLocaleString('en-IN')}</p>
                            <p class="text-xs text-blue-500 mt-1">Balance payment due before event date</p>
                        `;
                break;
        }

        paymentBreakdown.innerHTML = breakdownText;
        finalAmount.textContent = paymentAmount.toLocaleString('en-IN');
    } else {
        paymentDisplay.classList.add('hidden');
        finalAmount.textContent = '0';
    }
}

// ============================================
// NOTIFICATION SYSTEM
// TODO: Replace with backend notification service (email/SMS)
// ============================================

function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    const bgColor = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500'
    }[type] || 'bg-blue-500';

    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-0 ${bgColor} text-white max-w-sm`;

    const icon = {
        success: '',
        error: '',
        info: '',
        warning: ''
    }[type] || '';

    notification.innerHTML = `
                <div class="flex items-center space-x-2">
                    <span class="text-lg">${icon}</span>
                    <span class="font-medium">${message}</span>
                </div>
            `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);

    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// // ============================================
// STEP NAVIGATION FUNCTIONS
// ============================================

function nextStep() {
    if (validateCurrentStep() && currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
        calculateTotal();

        // Show progress notification
        const stepNames = ['Personal Info', 'Event Essentials', 'Extras & Tickets', 'Summary', 'Payment'];
        // showNotification(`🎉 ${stepNames[currentStep ]} completed! Moving to step ${currentStep}`, 'success');
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);

        // showNotification(`↩️ Returned to step ${currentStep}`, 'info');
    }
}

// ============================================
// PAYMENT PROCESSING FUNCTION
// TODO: Integrate with real payment gateway (Stripe, Razorpay, PayPal)
// Replace with actual payment API calls
// ============================================

// API Configuration


// Update your existing makePayment function - add this line after showSuccessfulBooking()
function makePayment() {
    if (!validateCurrentStep()) {
        return;
    }

    const paymentType = document.getElementById('paymentType').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    let finalPaymentAmount = totalCost;
    if (paymentType === 'partial') {
        finalPaymentAmount = Math.floor(totalCost / 2);
    }

    // Show processing state
    const paymentButton = document.querySelector('button[onclick="makePayment()"]');
    const originalText = paymentButton.innerHTML;
    paymentButton.innerHTML = 'Processing Payment...';
    paymentButton.disabled = true;

    // Simulate payment processing
    setTimeout(async () => {
        // Simulate successful payment (90% success rate for demo)
        const isPaymentSuccessful = Math.random() > 0.1;

        if (isPaymentSuccessful) {
            // Payment successful - save to API
            const bookingId = await saveBookingToAPI();

            // Show success message
            showSuccessfulBooking(finalPaymentAmount, paymentType);
            console.log(getBookingDetailsString());

            // Log the booking ID if saved successfully
            if (bookingId) {
                console.log('Booking saved with ID:', bookingId);
            }
        } else {
            // Payment failed - restore button and show error
            paymentButton.innerHTML = originalText;
            paymentButton.disabled = false;
            showNotification('❌ Payment failed. Please try again or use a different payment method.', 'error', 5000);
        }
    }, 2500);
}


function showSuccessfulBooking(paidAmount, paymentType) {
    const eventName = document.getElementById('eventName').value;
    const startDateTime = document.getElementById('eventStartDateTime').value;
    const formattedDate = new Date(startDateTime).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    // Create booking confirmation
    let confirmationMessage = `Concert Booking Confirmed!\n\n`;
    confirmationMessage += `Event: ${eventName}\n`;
    confirmationMessage += ` Date: ${formattedDate}\n`;

    if (selectedVenue) {
        confirmationMessage += `Venue: ${selectedVenue.name}, ${selectedVenue.location}\n`;
    }

    if (selectedBand) {
        confirmationMessage += `Band: ${selectedBand.name} (${selectedBand.genre})\n`;
    }

    if (paymentType === 'partial') {
        const remainingAmount = totalCost - paidAmount;
        confirmationMessage += `Advance Paid: ₹${paidAmount.toLocaleString('en-IN')}\n`;
        confirmationMessage += `Balance Due: ₹${remainingAmount.toLocaleString('en-IN')}\n`;
        confirmationMessage += `Balance payment required before event date\n\n`;
    } else {
        confirmationMessage += `Total Paid: ₹${paidAmount.toLocaleString('en-IN')}\n\n`;
    }

    confirmationMessage += `Your concert is ready to rock!\n`;
    confirmationMessage += `Get ready for an amazing show!\n\n`;
    confirmationMessage += `Confirmation details sent to your email.\n`;
    confirmationMessage += `Keep your booking confirmation handy.`;

    // Show success animation and message
    showNotification('✅ Payment Successful! Booking Confirmed!', 'success', 4000);

    alert(confirmationMessage);
    // setTimeout(() => {

    //     // TODO: In real implementation:
    //     // 1. Send confirmation email
    //     // 2. Create booking record in database
    //     // 3. Update venue/band availability
    //     // 4. Generate booking reference number
    //     // 5. Send SMS confirmation
    //     // 6. Integrate with calendar systems

    //     // Reset form for new booking
    //     if (confirm('🎵 Would you like to make another concert booking?')) {
    //         resetForm();
    //     } else {
    //         window.location.href = '/dashboard'; // Redirect to user dashboard
    //     }
    // }, 1500);
}

// function resetForm() {
//     // Reset all form fields and selections
//     currentStep = 1;
//     selectedVenue = null;
//     selectedBand = null;
//     selectedDecoration = null;
//     selectedFood = null;
//     totalCost = 10000;
//     eventDurationHours = 0;

//     // Reset all form inputs
//     const form = document.querySelector('form') || document.body;
//     const inputs = form.querySelectorAll('input, select, textarea');
//     inputs.forEach(input => {
//         if (input.type === 'checkbox' || input.type === 'radio') {
//             input.checked = false;
//         } else {
//             input.value = '';
//         }
//         input.classList.remove('error', 'success');
//     });

//     // Hide all conditional fields
//     document.querySelectorAll('.conditional-field').forEach(field => {
//         field.classList.remove('show');
//     });

//     // Reset error messages
//     document.querySelectorAll('.error-message').forEach(error => {
//         error.classList.add('hidden');
//     });

//     // Show first step
//     showStep(1);
//     calculateTotal();

//     showNotification('🔄 Form reset for new booking', 'info');
// }

// ============================================
// INITIALIZATION AND EVENT LISTENERS
// TODO: Move to separate initialization file when using modules
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the form
    showStep(1);
    calculateTotal();

    // Set minimum datetime to current time + 2 hours (booking lead time)
    const now = new Date();
    now.setHours(now.getHours() + 2); // Minimum 2 hour lead time
    const minDateTime = now.toISOString().slice(0, 16);

    document.getElementById('eventStartDateTime').min = minDateTime;
    document.getElementById('eventEndDateTime').min = minDateTime;

    // Initialize filter options
    applyVenueFilters();
    applyBandFilters();
    applyDecorationFilters();
    applyFoodFilters();

    // Add real-time validation listeners
    ['name', 'email', 'mobile', 'eventName', 'eventStartDateTime', 'eventEndDateTime'].forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', function () {
                validateField(fieldId, this.value);
            });

            field.addEventListener('input', function () {
                // Remove error styling on input to give immediate feedback
                if (this.classList.contains('error')) {
                    validateField(fieldId, this.value);
                }
            });
        }
    });

    // Add datetime change listeners for availability filtering
    document.getElementById('eventStartDateTime').addEventListener('change', filterAvailableOptions);
    document.getElementById('eventEndDateTime').addEventListener('change', filterAvailableOptions);

    // Add payment type change listener
    const paymentTypeSelect = document.getElementById('paymentType');
    if (paymentTypeSelect) {
        paymentTypeSelect.addEventListener('change', updatePaymentAmount);
    }

    // Keyboard navigation support
    // document.addEventListener('keydown', function(e) {
    //     if (e.ctrlKey || e.metaKey) {
    //         switch(e.key) {
    //             case 'ArrowRight':
    //                 e.preventDefault();
    //                 nextStep();
    //                 break;
    //             case 'ArrowLeft':
    //                 e.preventDefault();
    //                 prevStep();
    //                 break;
    //         }
    //     }
    // });

    // Initialize tooltips for better UX
    // initializeTooltips();

    // Show welcome message
    showNotification('Welcome to Thigalzhi® Concert Booking!', 'info', 4000);
});

// function initializeTooltips() {
//     // Add helpful tooltips for better user experience
//     const tooltips = {
//         'eventStartDateTime': 'Select when your concert should begin',
//         'eventEndDateTime': 'Select when your concert should end',
//         'premiumQuantity': 'Premium tickets offer the best seats and exclusive perks',
//         'goldQuantity': 'Gold tickets provide excellent viewing with great amenities',
//         'silverQuantity': 'Silver tickets offer good viewing at an affordable price'
//     };

//     Object.entries(tooltips).forEach(([id, text]) => {
//         const element = document.getElementById(id);
//         if (element) {
//             element.title = text;
//         }
//     });
// }

// ============================================
// AUTO-SAVE FUNCTIONALITY (OPTIONAL)
// TODO: Implement auto-save to prevent data loss
// ============================================



// ============================================
// UTILITY FUNCTIONS FOR ENHANCED UX
// ============================================

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatDateTime(dateTime) {
    if (!dateTime) return '';
    return new Date(dateTime).toLocaleString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function validatePhoneNumber(phone) {
    // Indian phone number validation
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    return indianPhoneRegex.test(phone.replace(/\D/g, ''));
}

function validateSaleStart() {
    const eventStart = new Date(document.getElementById("eventStartDateTime").value);
    const saleStart = new Date(document.getElementById("saleStartDate").value);
    const now = new Date();

    let errorMessage = "";

    if (document.getElementById("saleStartDate").value) {
        if (saleStart < now) {
            errorMessage = "❌ Sale start cannot be in the past.";
            document.getElementById('mybtn').disabled = true;
        } else if (saleStart >= eventStart) {
            errorMessage = "❌ Sale start must be before the event start.";
            document.getElementById('mybtn').disabled = true;
        }
        else {
            document.getElementById('mybtn').disabled = false;
        }
    }

    const saleStartErrorEl = document.getElementById("saleStartError");
    saleStartErrorEl.textContent = errorMessage;
    saleStartErrorEl.classList.toggle("hidden", !errorMessage);
}

// Attach listener
document.getElementById("saleStartDate").addEventListener("change", validateSaleStart);



function getBookingDetailsString() {
    const eventName = document.getElementById('eventName').value || 'Not specified';
    const startDateTime = document.getElementById('eventStartDateTime').value || 'Not set';
    const endDateTime = document.getElementById('eventEndDateTime').value || 'Not set';

    const venueId = selectedVenue ? selectedVenue.id : 'Not selected';
    const bandId = selectedBand ? selectedBand.id : 'Not selected';
    const decorationId = selectedDecoration ? selectedDecoration.id : 'Not selected';
    const foodId = selectedFood ? selectedFood.id : 'Not selected';

    const enableTicketing = document.getElementById('enableTicketing')?.value === 'yes';
    let ticketDetails = 'No tickets configured';

    if (enableTicketing) {
        const premiumAmount = (parseInt(document.getElementById('premiumQuantity')?.value) || 0) * (parseInt(document.getElementById('premiumPrice')?.value) || 0);
        const goldAmount = (parseInt(document.getElementById('goldQuantity')?.value) || 0) * (parseInt(document.getElementById('goldPrice')?.value) || 0);
        const silverAmount = (parseInt(document.getElementById('silverQuantity')?.value) || 0) * (parseInt(document.getElementById('silverPrice')?.value) || 0);

        ticketDetails = `Premium: ₹${premiumAmount.toLocaleString()}, Gold: ₹${goldAmount.toLocaleString()}, Silver: ₹${silverAmount.toLocaleString()}`;
    }

    const totalAmount = calculateTotal();
    const paymentType = document.getElementById('paymentType')?.value || 'full';
    const pendingAmount = paymentType === 'partial' ? totalAmount - Math.floor(totalAmount / 2) : 0;

    return `
THIGALZHI® CONCERT BOOKING DETAILS
==================================
Event Name: ${eventName}
Start DateTime: ${startDateTime}
End DateTime: ${endDateTime}

Service IDs:
- Venue ID: ${venueId}
- Band ID: ${bandId}
- Decoration ID: ${decorationId}
- Food ID: ${foodId}

Ticket Information:
- Ticket Enabled: ${enableTicketing}
- ${ticketDetails}

Payment Summary:
- Total Amount: ₹${totalAmount.toLocaleString()}
- Payment Type: ${paymentType === 'partial' ? '50% Advance' : 'Full Payment'}
- Pending Amount: ₹${pendingAmount.toLocaleString()}
==================================
    `;
}







const API_URL = "https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2";

// Function to save booking to API (only ticket prices, no quantities)
async function saveBookingToAPI() {
    try {
        // Create booking object
        const bookingDetails = {
            organizerId:localStorage.getItem('currentOrganizerId'),
            bookingId: Date.now().toString(),
            eventName: document.getElementById('eventName').value || '',
            startDateTime: document.getElementById('eventStartDateTime').value || '',
            endDateTime: document.getElementById('eventEndDateTime').value || '',

            // User Details
            organizerName: document.getElementById('name').value || '',
            organizerEmail: document.getElementById('email').value || '',
            organizerMobile: document.getElementById('mobile').value || '',

            // Service IDs
            venueId: selectedVenue ? selectedVenue.id : null,
            bandId: selectedBand ? selectedBand.id : null,
            decorationId: selectedDecoration ? selectedDecoration.id : null,
            foodId: selectedFood ? selectedFood.id : null,

            // Ticket Information - Only Prices (no quantities)
            ticketingEnabled: document.getElementById('enableTicketing')?.value === 'yes',
            ticketPrices: {
                premiumPrice: parseInt(document.getElementById('premiumPrice')?.value) || 0,
                goldPrice: parseInt(document.getElementById('goldPrice')?.value) || 0,
                silverPrice: parseInt(document.getElementById('silverPrice')?.value) || 0
            },

            // Payment Information
            totalAmount: totalCost,
            paymentType: document.getElementById('paymentType')?.value || 'full',
            paidAmount: 0,
            pendingAmount: 0,

            // Status
            bookingStatus: 'confirmed',
            bookingDate: new Date().toISOString()
        };

        // Calculate payment amounts
        if (bookingDetails.paymentType === 'partial') {
            bookingDetails.paidAmount = Math.floor(bookingDetails.totalAmount / 2);
            bookingDetails.pendingAmount = bookingDetails.totalAmount - bookingDetails.paidAmount;
        } else {
            bookingDetails.paidAmount = bookingDetails.totalAmount;
            bookingDetails.pendingAmount = 0;
        }

        // Fetch current API data
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const apiData = await response.json();

        // Ensure EventsBookings array exists
        if (!apiData.EventsBookings) {
            apiData.EventsBookings = [];
        }

        // Add new booking to EventsBookings array
        apiData.EventsBookings.push(bookingDetails);

        // Update API with new data   
        const updateResponse = await fetch(API_URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(apiData)
        });

        if (!updateResponse.ok) throw new Error('Failed to save booking');

        console.log('Booking saved to API:', bookingDetails);
        showNotification('✅ Booking saved to database!', 'success');

        return bookingDetails.bookingId;

    } catch (error) {
        console.error('Error saving booking:', error);
        showNotification('❌ Failed to save booking. Please try again.', 'error');
        return null;
    }
}
