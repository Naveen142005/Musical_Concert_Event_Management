
// Data Arrays
const venuesData = [
  {
    id: "madison-square",
    name: "Madison Square Garden",
    location: "New York",
    maxLimit: 20000,
    pricePerHour: 25000,
    rating: 4.7,
    bookedSlots: ["2025-09-20-morning", "2025-01-20-afternoon"],
  },
  {
    id: "royal-albert",
    name: "Royal Albert Hall",
    location: "London",
    maxLimit: 5272,
    pricePerHour: 18000,
    rating: 4.9,
    bookedSlots: ["2025-01-18-night", "2025-01-25-morning"],
  },
  {
    id: "sydney-opera",
    name: "Sydney Opera House",
    location: "Sydney",
    maxLimit: 2679,
    pricePerHour: 22000,
    rating: 4.8,
    bookedSlots: ["2025-01-22-afternoon"],
  },
  {
    id: "carnegie-hall",
    name: "Carnegie Hall",
    location: "New York",
    maxLimit: 2804,
    pricePerHour: 20000,
    rating: 4.6,
    bookedSlots: ["2025-01-16-night"],
  },
  {
    id: "la-scala",
    name: "La Scala",
    location: "Milan",
    maxLimit: 2030,
    pricePerHour: 30000,
    rating: 4.9,
    bookedSlots: ["2025-01-19-morning", "2025-01-24-night"],
  },
  {
    id: "red-rocks",
    name: "Red Rocks Amphitheatre",
    location: "Colorado",
    maxLimit: 9525,
    pricePerHour: 15000,
    rating: 4.8,
    bookedSlots: ["2025-01-17-afternoon"],
  },
  {
    id: "hollywood-bowl",
    name: "Hollywood Bowl",
    location: "Los Angeles",
    maxLimit: 17500,
    pricePerHour: 28000,
    rating: 4.7,
    bookedSlots: ["2025-01-21-morning"],
  },
  {
    id: "wembley-arena",
    name: "Wembley Arena",
    location: "London",
    maxLimit: 12500,
    pricePerHour: 24000,
    rating: 4.5,
    bookedSlots: ["2025-01-23-night"],
  },
]

const bandsData = [
  {
    id: "rock-legends",
    name: "The Rock Legends",
    genre: "Rock",
    members: 5,
    pricePerHour: 35000,
    rating: 4.8,
    bookedSlots: ["2025-09-20-morning", "2025-01-20-night"],
  },
  {
    id: "jazz-masters",
    name: "Jazz Masters Collective",
    genre: "Jazz",
    members: 6,
    pricePerHour: 28000,
    rating: 4.7,
    bookedSlots: ["2025-01-18-afternoon"],
  },
  {
    id: "pop-stars",
    name: "Pop Stars United",
    genre: "Pop",
    members: 4,
    pricePerHour: 42000,
    rating: 4.9,
    bookedSlots: ["2025-01-22-morning", "2025-01-25-night"],
  },
  {
    id: "classical-ensemble",
    name: "Classical Symphony Ensemble",
    genre: "Classical",
    members: 12,
    pricePerHour: 38000,
    rating: 4.6,
    bookedSlots: ["2025-01-16-afternoon"],
  },
  {
    id: "electronic-djs",
    name: "Electronic Beats DJs",
    genre: "Electronic",
    members: 2,
    pricePerHour: 25000,
    rating: 4.5,
    bookedSlots: ["2025-01-19-night"],
  },
  {
    id: "indie-rockers",
    name: "Indie Rock Revolution",
    genre: "Rock",
    members: 4,
    pricePerHour: 30000,
    rating: 4.4,
    bookedSlots: ["2025-01-17-morning"],
  },
  {
    id: "folk-acoustic",
    name: "Folk & Acoustic Duo",
    genre: "Folk",
    members: 2,
    pricePerHour: 18000,
    rating: 4.3,
    bookedSlots: ["2025-01-21-afternoon"],
  },
  {
    id: "metal-band",
    name: "Heavy Metal Thunder",
    genre: "Metal",
    members: 5,
    pricePerHour: 32000,
    rating: 4.7,
    bookedSlots: ["2025-01-23-morning"],
  },
]

const decorationData = [
  {
    id: "luxury-events",
    teamName: "Luxury Events Co.",
    packageType: "Premium",
    pricePerEvent: 85000,
    specialties: ["LED Lighting", "Stage Design", "Floral Arrangements"],
    rating: 4.6,
    bookedSlots: ["2025-09-20-morning", "2025-01-20-afternoon"],
  },
  {
    id: "creative-designs",
    teamName: "Creative Designs Studio",
    packageType: "Luxury",
    pricePerEvent: 120000,
    specialties: ["3D Projections", "Interactive Installations", "Custom Backdrops"],
    rating: 4.8,
    bookedSlots: ["2025-01-18-night"],
  },
  {
    id: "elegant-decor",
    teamName: "Elegant Decor Solutions",
    packageType: "Basic",
    pricePerEvent: 45000,
    specialties: ["Balloon Arrangements", "Basic Lighting", "Fabric Draping"],
    rating: 4.2,
    bookedSlots: ["2025-01-22-morning"],
  },
  {
    id: "spectacular-shows",
    teamName: "Spectacular Shows Inc.",
    packageType: "Premium",
    pricePerEvent: 95000,
    specialties: ["Pyrotechnics", "Laser Shows", "Smoke Effects"],
    rating: 4.7,
    bookedSlots: ["2025-01-16-afternoon", "2025-01-25-night"],
  },
  {
    id: "artistic-visions",
    teamName: "Artistic Visions Team",
    packageType: "Luxury",
    pricePerEvent: 110000,
    specialties: ["Art Installations", "Themed Decorations", "Custom Sculptures"],
    rating: 4.5,
    bookedSlots: ["2025-01-19-morning"],
  },
  {
    id: "budget-decorators",
    teamName: "Budget Friendly Decorators",
    packageType: "Basic",
    pricePerEvent: 35000,
    specialties: ["Simple Lighting", "Paper Decorations", "Basic Setup"],
    rating: 4.0,
    bookedSlots: ["2025-01-17-night"],
  },
  {
    id: "premium-productions",
    teamName: "Premium Productions Ltd.",
    packageType: "Premium",
    pricePerEvent: 88000,
    specialties: ["Video Walls", "Sound Enhancement", "Stage Effects"],
    rating: 4.6,
    bookedSlots: ["2025-01-21-morning"],
  },
  {
    id: "magical-moments",
    teamName: "Magical Moments Decor",
    packageType: "Luxury",
    pricePerEvent: 105000,
    specialties: ["Holographic Displays", "Ambient Lighting", "Luxury Furnishing"],
    rating: 4.4,
    bookedSlots: ["2025-01-23-afternoon"],
  },
]

// Global State
let currentStep = 1
let currentMonth = new Date().getMonth()
let currentYear = new Date().getFullYear()

const bookingData = {
  basicDetails: {},
  selections: {
    venue: null,
    bands: [],
    decoration: null,
    snackCount: 0,
  },
  eventDate: null,
  ticketing: {},
  payment: {},
}

// Pagination state
const paginationState = {
  venues: { currentPage: 1, itemsPerPage: 5, filters: {} },
  bands: { currentPage: 1, itemsPerPage: 5, filters: {} },
  decorations: { currentPage: 1, itemsPerPage: 5, filters: {} },
}

// Field validation states for real-time validation
const validationState = {
  fullName: false,
  email: false,
  mobile: false,
  concertTime: false
}

// Utility Functions
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount)
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let stars = ""

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star text-yellow-400"></i>'
  }
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>'
  }
  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star text-yellow-400"></i>'
  }
  return stars
}

// ENHANCED VALIDATION FUNCTIONS - Real-time step-wise validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone) {
  const phoneRegex = /^\d{7,15}$/
  return phoneRegex.test(phone.replace(/\s+/g, ""))
}

function showError(elementId, message) {
  const element = document.getElementById(elementId)
  const errorDiv = element.parentNode.querySelector(".error-message")
  if (errorDiv) {
    errorDiv.textContent = message
    errorDiv.classList.remove("hidden")
  }
  element.classList.add("border-red-500")
}

function hideError(elementId) {
  const element = document.getElementById(elementId)
  const errorDiv = element.parentNode.querySelector(".error-message")
  if (errorDiv) {
    errorDiv.classList.add("hidden")
  }
  element.classList.remove("border-red-500")
}

// ENHANCED FIELD VALIDATION - Only validate when moving to next field
function validateField(fieldName, value) {
  switch (fieldName) {
    case 'fullName':
      const isValidName = value.trim().length > 0
      validationState.fullName = isValidName
      if (!isValidName) {
        showError('fullName', 'Full name is required')
      } else {
        hideError('fullName')
      }
      return isValidName

    case 'email':
      const isValidEmail = value.trim().length > 0 && validateEmail(value.trim())
      validationState.email = isValidEmail
      if (!value.trim()) {
        showError('email', 'Email is required')
      } else if (!validateEmail(value.trim())) {
        showError('email', 'Please enter a valid email address')
      } else {
        hideError('email')
      }
      return isValidEmail

    case 'mobile':
      const isValidMobile = value.trim().length > 0 && validatePhone(value.trim())
      validationState.mobile = isValidMobile
      if (!value.trim()) {
        showError('mobile', 'Mobile number is required')
      } else if (!validatePhone(value.trim())) {
        showError('mobile', 'Please enter a valid mobile number (7-15 digits)')
      } else {
        hideError('mobile')
      }
      return isValidMobile

    case 'concertTime':
      const selectedTime = document.querySelector('input[name="concertTime"]:checked')
      const isValidTime = selectedTime !== null
      validationState.concertTime = isValidTime
      if (!isValidTime) {
        const errorDiv = document
          .querySelector('input[name="concertTime"]')
          .closest('.grid')
          .parentNode.querySelector('.error-message')
        if (errorDiv) {
          errorDiv.textContent = 'Please select a concert time'
          errorDiv.classList.remove('hidden')
        }
      } else {
        const errorDiv = document
          .querySelector('input[name="concertTime"]')
          .closest('.grid')
          .parentNode.querySelector('.error-message')
        if (errorDiv) {
          errorDiv.classList.add('hidden')
        }
      }
      return isValidTime
  }
  return true
}

// Step Navigation Functions
function updateProgressBar() {
  const progressBar = document.querySelector(".progress-bar")
  const percentage = (currentStep / 7) * 100
  progressBar.style.width = `${percentage}%`

  // Update step indicators
  document.querySelectorAll(".step-indicator").forEach((indicator, index) => {
    const stepNumber = index + 1
    indicator.classList.remove("active", "completed")
    if (stepNumber < currentStep) {
      indicator.classList.add("completed")
    } else if (stepNumber === currentStep) {
      indicator.classList.add("active")
    }
  })
}

function showStep(stepNumber) {
  // Hide all steps
  document.querySelectorAll(".step-content").forEach((step) => {
    step.classList.add("hidden")
  })

  // Show current step
  document.getElementById(`step${stepNumber}`).classList.remove("hidden")
  document.getElementById(`step${stepNumber}`).classList.add("fade-in")

  currentStep = stepNumber

  updateProgressBar()
  updateLiveSummary()

  // FIXED: Force decoration re-render when entering step 3
  if (stepNumber === 3) {
    setTimeout(() => {
      const decorationCheckbox = document.getElementById('wantDecoration')
      if (decorationCheckbox && decorationCheckbox.checked) {
        forceRenderDecorations()
      }
    }, 200)
  }

  // Trigger calendar re-render with proper coloring when entering step 4
  if (stepNumber === 4) {
    setTimeout(() => {
      renderCalendar()
    }, 100)
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Live Summary Update (keeping existing functionality)
function updateLiveSummary() {
  const summaryDiv = document.getElementById("liveSummary")
  let summaryHTML = ""
  let totalCost = 0

  // Basic Details
  if (bookingData.basicDetails.fullName) {
    summaryHTML += `
      <div class="border-b pb-3">
        <h4 class="font-semibold text-gray-800">Event Details</h4>
        <p class="text-sm text-gray-600">${bookingData.basicDetails.fullName}</p>
        <p class="text-sm text-gray-600">${bookingData.basicDetails.email}</p>
        <p class="text-sm text-gray-600">${bookingData.basicDetails.mobile}</p>
        <p class="text-sm text-gray-600 capitalize">${bookingData.basicDetails.concertTime} Session</p>
      </div>`
  }

  // Venue
  if (bookingData.selections.venue) {
    const venue = bookingData.selections.venue
    const venueCost = venue.pricePerHour * 4 // Assuming 4-hour event
    totalCost += venueCost
    summaryHTML += `
      <div class="border-b pb-3">
        <h4 class="font-semibold text-gray-800">Venue</h4>
        <p class="text-sm text-gray-600">${venue.name}</p>
        <p class="text-sm text-gray-600">${venue.location}</p>
        <p class="text-sm font-semibold primary-text">${formatCurrency(venueCost)}</p>
      </div>`
  }

  // Bands
  if (bookingData.selections.bands.length > 0) {
    bookingData.selections.bands.forEach((band) => {
      const bandCost = band.pricePerHour * 4 // Assuming 4-hour event
      totalCost += bandCost
      summaryHTML += `
        <div class="border-b pb-3">
          <h4 class="font-semibold text-gray-800">Band</h4>
          <p class="text-sm text-gray-600">${band.name}</p>
          <p class="text-sm text-gray-600">${band.genre} • ${band.members} members</p>
          <p class="text-sm font-semibold primary-text">${formatCurrency(bandCost)}</p>
        </div>`
    })
  }

  // Decoration
  if (bookingData.selections.decoration) {
    const decoration = bookingData.selections.decoration
    totalCost += decoration.pricePerEvent
    summaryHTML += `
      <div class="border-b pb-3">
        <h4 class="font-semibold text-gray-800">Decoration</h4>
        <p class="text-sm text-gray-600">${decoration.teamName}</p>
        <p class="text-sm text-gray-600">${decoration.packageType} Package</p>
        <p class="text-sm font-semibold primary-text">${formatCurrency(decoration.pricePerEvent)}</p>
      </div>`
  }

  // Snacks
  if (bookingData.selections.snackCount > 0) {
    const snackCost = bookingData.selections.snackCount * 500
    totalCost += snackCost
    summaryHTML += `
      <div class="border-b pb-3">
        <h4 class="font-semibold text-gray-800">Snacks</h4>
        <p class="text-sm text-gray-600">${bookingData.selections.snackCount} boxes</p>
        <p class="text-sm font-semibold primary-text">${formatCurrency(snackCost)}</p>
      </div>`
  }

  // Event Date
  if (bookingData.eventDate) {
    summaryHTML += `
      <div class="border-b pb-3">
        <h4 class="font-semibold text-gray-800">Event Date</h4>
        <p class="text-sm text-gray-600">${formatDate(bookingData.eventDate)}</p>
        <p class="text-sm text-gray-600 capitalize">${bookingData.basicDetails.concertTime} Session</p>
      </div>`
  }

  if (!summaryHTML) {
    summaryHTML = `
      <div class="text-center text-gray-500 py-8">
        <i class="fas fa-clipboard-list text-4xl mb-4"></i>
        <p>Your selections will appear here</p>
      </div>`
  }

  summaryDiv.innerHTML = summaryHTML

  // Update total cost
  if (totalCost > 0) {
    document.getElementById("totalCost").classList.remove("hidden")
    document.getElementById("totalAmount").textContent = formatCurrency(totalCost)

    // Update payment amounts
    document.getElementById("fullAmount").textContent = formatCurrency(totalCost)
    document.getElementById("depositAmount").textContent = formatCurrency(totalCost * 0.5)
  } else {
    document.getElementById("totalCost").classList.add("hidden")
  }
}

// Step 1 Basic Details Validation
function validateStep1() {
  let isValid = true
  const fullName = document.getElementById("fullName").value.trim()
  const email = document.getElementById("email").value.trim()
  const mobile = document.getElementById("mobile").value.trim()
  const concertTime = document.querySelector('input[name="concertTime"]:checked')

  // Reset errors
  ;["fullName", "email", "mobile"].forEach(hideError)

  if (!fullName) {
    showError("fullName", "Full name is required")
    isValid = false
  }

  if (!email) {
    showError("email", "Email is required")
    isValid = false
  } else if (!validateEmail(email)) {
    showError("email", "Please enter a valid email address")
    isValid = false
  }

  if (!mobile) {
    showError("mobile", "Mobile number is required")
    isValid = false
  } else if (!validatePhone(mobile)) {
    showError("mobile", "Please enter a valid mobile number (7-15 digits)")
    isValid = false
  }

  if (!concertTime) {
    const errorDiv = document
      .querySelector('input[name="concertTime"]')
      .closest('.grid')
      .parentNode.querySelector('.error-message')
    if (errorDiv) {
      errorDiv.textContent = "Please select a concert time"
      errorDiv.classList.remove("hidden")
    }
    isValid = false
  }

  if (isValid) {
    bookingData.basicDetails = {
      fullName,
      email,
      mobile,
      concertTime: concertTime.value,
    }
  }

  return isValid
}

// Filtering and Pagination Functions (keeping existing)
function applyFilters(data, filters, type) {
  return data.filter((item) => {
    // Price filter
    if (filters.minPrice && (item.pricePerHour || item.pricePerEvent) < filters.minPrice) return false
    if (filters.maxPrice && (item.pricePerHour || item.pricePerEvent) > filters.maxPrice) return false

    // Location filter for venues
    if (type === "venues" && filters.location && !item.location.toLowerCase().includes(filters.location.toLowerCase())) return false

    // Genre filter for bands
    if (type === "bands" && filters.genre && item.genre !== filters.genre) return false

    // Package type filter for decorations
    if (type === "decorations" && filters.packageType && item.packageType !== filters.packageType) return false

    // Rating filter
    if (filters.minRating && item.rating < filters.minRating) return false

    return true
  })
}

function renderPagination(containerId, totalItems, currentPage, itemsPerPage, onPageChange) {
  const container = document.getElementById(containerId)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) {
    container.innerHTML = ""
    return
  }

  let paginationHTML = ""

  // Previous button
  if (currentPage > 1) {
    paginationHTML += `<button onclick="${onPageChange}(${currentPage - 1})" class="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-all"><i class="fas fa-chevron-left"></i></button>`
  }

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === currentPage
    paginationHTML += `<button onclick="${onPageChange}(${i})" class="px-3 py-2 rounded transition-all ${isActive ? 'primary-bg text-white' : 'bg-gray-200 hover:bg-gray-300'}">${i}</button>`
  }

  // Next button
  if (currentPage < totalPages) {
    paginationHTML += `<button onclick="${onPageChange}(${currentPage + 1})" class="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-all"><i class="fas fa-chevron-right"></i></button>`
  }

  container.innerHTML = paginationHTML
}

// Venue Functions
function renderVenues() {
  const filters = {
    minPrice: Number.parseInt(document.getElementById("venueMinPrice").value) || 0,
    maxPrice: Number.parseInt(document.getElementById("venueMaxPrice").value) || Number.POSITIVE_INFINITY,
    location: document.getElementById("venueLocation").value,
    minRating: Number.parseFloat(document.getElementById("venueMinRating").value) || 0,
  }

  paginationState.venues.filters = filters
  const filteredVenues = applyFilters(venuesData, filters, "venues")
  const startIndex = (paginationState.venues.currentPage - 1) * paginationState.venues.itemsPerPage
  const endIndex = startIndex + paginationState.venues.itemsPerPage
  const paginatedVenues = filteredVenues.slice(startIndex, endIndex)

  const venueList = document.getElementById("venueList")
  venueList.innerHTML = paginatedVenues
    .map(
      (venue) => `
      <div class="item-card bg-white border rounded-lg p-4 cursor-pointer ${bookingData.selections.venue?.id === venue.id ? 'selected' : ''}" onclick="selectVenue('${venue.id}')">
        <h4 class="font-semibold text-lg mb-2">${venue.name}</h4>
        <p class="text-gray-600 mb-2">
          <i class="fas fa-map-marker-alt mr-1"></i>${venue.location}
        </p>
        <p class="text-gray-600 mb-2">
          <i class="fas fa-users mr-1"></i>Capacity: ${venue.maxLimit.toLocaleString()}
        </p>
        <div class="flex items-center mb-2">
          ${generateStars(venue.rating)}
          <span class="ml-2 text-sm text-gray-600">${venue.rating}</span>
        </div>
        <p class="font-semibold primary-text text-lg">${formatCurrency(venue.pricePerHour)}/hour</p>
        <div class="mt-3">
          <button class="w-full primary-bg text-white py-2 rounded-lg hover:bg-purple-700 transition-all">
            ${bookingData.selections.venue?.id === venue.id ? 'Selected' : 'Select Venue'}
          </button>
        </div>
      </div>`
    )
    .join("")

  renderPagination(
    "venuePagination",
    filteredVenues.length,
    paginationState.venues.currentPage,
    paginationState.venues.itemsPerPage,
    "changeVenuePage"
  )
}

function selectVenue(venueId) {
  const venue = venuesData.find((v) => v.id === venueId)
  bookingData.selections.venue = venue
  renderVenues()
  updateLiveSummary()

  // Re-render calendar to update availability colors
  if (currentStep === 4) {
    setTimeout(() => renderCalendar(), 100)
  }
}

function changeVenuePage(page) {
  paginationState.venues.currentPage = page
  renderVenues()
}

// Band Functions
function renderBands() {
  const filters = {
    minPrice: Number.parseInt(document.getElementById("bandMinPrice").value) || 0,
    maxPrice: Number.parseInt(document.getElementById("bandMaxPrice").value) || Number.POSITIVE_INFINITY,
    genre: document.getElementById("bandGenre").value,
    minRating: Number.parseFloat(document.getElementById("bandMinRating").value) || 0,
  }

  paginationState.bands.filters = filters
  const filteredBands = applyFilters(bandsData, filters, "bands")
  const startIndex = (paginationState.bands.currentPage - 1) * paginationState.bands.itemsPerPage
  const endIndex = startIndex + paginationState.bands.itemsPerPage
  const paginatedBands = filteredBands.slice(startIndex, endIndex)

  const bandList = document.getElementById("bandList")
  bandList.innerHTML = paginatedBands
    .map(
      (band) => `
      <div class="item-card bg-white border rounded-lg p-4 cursor-pointer ${bookingData.selections.bands.find(b => b.id === band.id) ? 'selected' : ''}" onclick="selectBand('${band.id}')">
        <h4 class="font-semibold text-lg mb-2">${band.name}</h4>
        <p class="text-gray-600 mb-2">
          <i class="fas fa-music mr-1"></i>${band.genre}
        </p>
        <p class="text-gray-600 mb-2">
          <i class="fas fa-users mr-1"></i>${band.members} members
        </p>
        <div class="flex items-center mb-2">
          ${generateStars(band.rating)}
          <span class="ml-2 text-sm text-gray-600">${band.rating}</span>
        </div>
        <p class="font-semibold primary-text text-lg">${formatCurrency(band.pricePerHour)}/hour</p>
        <div class="mt-3">
          <button class="w-full primary-bg text-white py-2 rounded-lg hover:bg-purple-700 transition-all">
            ${bookingData.selections.bands.find(b => b.id === band.id) ? 'Selected' : 'Select Band'}
          </button>
        </div>
      </div>`
    )
    .join("")

  renderPagination(
    "bandPagination",
    filteredBands.length,
    paginationState.bands.currentPage,
    paginationState.bands.itemsPerPage,
    "changeBandPage"
  )
}

function selectBand(bandId) {
  const band = bandsData.find((b) => b.id === bandId)
  const existingIndex = bookingData.selections.bands.findIndex((b) => b.id === bandId)

  bookingData.selections.bands = [band]

  renderBands()
  updateLiveSummary()

  // Re-render calendar to update availability colors
  if (currentStep === 4) {
    setTimeout(() => renderCalendar(), 100)
  }
}

function changeBandPage(page) {
  paginationState.bands.currentPage = page
  renderBands()
}

// FIXED DECORATION FUNCTIONS - Forced rendering with proper error handling
function forceRenderDecorations() {
  const decorationList = document.getElementById("decorationList")
  const decorationPagination = document.getElementById("decorationPagination")

  // Check if elements exist
  if (!decorationList || !decorationPagination) {
    console.error('Decoration elements not found, retrying...')
    setTimeout(() => forceRenderDecorations(), 500)
    return
  }

  // Show loading state
  decorationList.innerHTML = `
    <div class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      <span class="ml-3 text-gray-600">Loading decoration teams...</span>
    </div>`

  // Force render with multiple retry attempts
  let retryCount = 0
  const maxRetries = 3

  const attemptRender = () => {
    try {
      console.log('Attempting decoration render, attempt:', retryCount + 1)

      const minPriceEl = document.getElementById("decorationMinPrice")
      const maxPriceEl = document.getElementById("decorationMaxPrice")
      const packageTypeEl = document.getElementById("decorationPackageType")
      const minRatingEl = document.getElementById("decorationMinRating")

      const filters = {
        minPrice: minPriceEl ? (Number.parseInt(minPriceEl.value) || 0) : 0,
        maxPrice: maxPriceEl ? (Number.parseInt(maxPriceEl.value) || Number.POSITIVE_INFINITY) : Number.POSITIVE_INFINITY,
        packageType: packageTypeEl ? packageTypeEl.value : '',
        minRating: minRatingEl ? (Number.parseFloat(minRatingEl.value) || 0) : 0,
      }

      paginationState.decorations.filters = filters
      const filteredDecorations = applyFilters(decorationData, filters, "decorations")
      const startIndex = (paginationState.decorations.currentPage - 1) * paginationState.decorations.itemsPerPage
      const endIndex = startIndex + paginationState.decorations.itemsPerPage
      const paginatedDecorations = filteredDecorations.slice(startIndex, endIndex)

      const decorationHTML = paginatedDecorations
        .map(
          (decoration) => `
          <div class="item-card bg-white border rounded-lg p-4 cursor-pointer ${bookingData.selections.decoration?.id === decoration.id ? 'selected' : ''}" onclick="selectDecoration('${decoration.id}')">
            <h4 class="font-semibold text-lg mb-2">${decoration.teamName}</h4>
            <p class="text-gray-600 mb-2">
              <i class="fas fa-gem mr-1"></i>${decoration.packageType} Package
            </p>
            <div class="flex items-center mb-2">
              ${generateStars(decoration.rating)}
              <span class="ml-2 text-sm text-gray-600">${decoration.rating}</span>
            </div>
            <div class="mb-2">
              <p class="text-sm text-gray-600 font-medium">Specialties:</p>
              <div class="flex flex-wrap gap-1 mt-1">
                ${decoration.specialties
                  .map((specialty) => `<span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">${specialty}</span>`)
                  .join("")}
              </div>
            </div>
            <p class="font-semibold primary-text text-lg">${formatCurrency(decoration.pricePerEvent)}</p>
            <div class="mt-3">
              <button class="w-full primary-bg text-white py-2 rounded-lg hover:bg-purple-700 transition-all">
                ${bookingData.selections.decoration?.id === decoration.id ? 'Selected' : 'Select Team'}
              </button>
            </div>
          </div>`
        )
        .join("")

      // Check if we have content to render
      if (decorationHTML.trim() === '') {
        decorationList.innerHTML = `
          <div class="text-center py-8 text-gray-500">
            <i class="fas fa-exclamation-circle text-4xl mb-4"></i>
            <p>No decoration teams match your criteria</p>
          </div>`
      } else {
        decorationList.innerHTML = decorationHTML
      }

      // Render pagination
      renderPagination(
        "decorationPagination",
        filteredDecorations.length,
        paginationState.decorations.currentPage,
        paginationState.decorations.itemsPerPage,
        "changeDecorationPage"
      )

      console.log('Decoration render successful!')

    } catch (error) {
      console.error('Decoration render failed:', error)
      retryCount++

      if (retryCount < maxRetries) {
        console.log(`Retrying decoration render in 300ms... (${retryCount}/${maxRetries})`)
        setTimeout(attemptRender, 300)
      } else {
        decorationList.innerHTML = `
          <div class="text-center py-8 text-red-500">
            <i class="fas fa-exclamation-triangle text-4xl mb-4"></i>
            <p>Failed to load decoration teams. Please refresh the page.</p>
            <button onclick="forceRenderDecorations()" class="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Try Again
            </button>
          </div>`
      }
    }
  }

  // Start the render attempt after a small delay
  setTimeout(attemptRender, 250)
}

function renderDecorations() {
  forceRenderDecorations()
}

function selectDecoration(decorationId) {
  const decoration = decorationData.find((d) => d.id === decorationId)
  bookingData.selections.decoration = decoration
  forceRenderDecorations()
  updateLiveSummary()

  // Re-render calendar to update availability colors
  if (currentStep === 4) {
    setTimeout(() => renderCalendar(), 100)
  }
}

function changeDecorationPage(page) {
  paginationState.decorations.currentPage = page
  forceRenderDecorations()
}

// FIXED CALENDAR FUNCTIONS - Enhanced availability checking with red color state
function renderCalendar() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ]

  document.getElementById("currentMonth").textContent = `${monthNames[currentMonth]} ${currentYear}`

  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const calendarGrid = document.getElementById("calendarGrid")

  calendarGrid.innerHTML = ""

  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    calendarGrid.innerHTML += `<div></div>`
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    const isAvailable = checkAvailability(dateString)
    const isSelected = bookingData.eventDate === dateString
    const isPast = new Date(dateString) < new Date().setHours(0, 0, 0, 0)

    let cellClass = "calendar-cell p-3 text-center rounded-lg cursor-pointer border transition-all duration-200 hover:shadow-md"
    const cellContent = day

    if (isPast) {
      cellClass += " bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
    } else if (isSelected) {
      cellClass += " selected bg-purple-600 text-white border-purple-700 shadow-lg"
    } else if (isAvailable) {
      cellClass += " available bg-green-100 hover:bg-green-200 text-green-800 border-green-300 hover:border-green-400"
    } else {
      // FIXED: Red color state for unavailable dates with proper styling
      cellClass += " unavailable bg-red-100 hover:bg-red-200 text-red-800 border-red-300 hover:border-red-400 cursor-pointer"
    }

    calendarGrid.innerHTML += `
      <div class="${cellClass}" onclick="${isPast ? '' : `selectDate('${dateString}')`}" 
           data-date="${dateString}" 
           title="${isPast ? 'Past date' : (isAvailable ? 'Available' : 'Some items unavailable - click to see alternatives')}">
        ${cellContent}
      </div>`
  }
}

function checkAvailability(dateString) {
  const timeSlot = bookingData.basicDetails.concertTime
  if (!timeSlot) return true // If no time selected, assume available

  const fullDateSlot = `${dateString}-${timeSlot}`

  // Check if all selected items are available
  const selectedItems = [
    bookingData.selections.venue,
    ...bookingData.selections.bands,
    bookingData.selections.decoration,
  ].filter((item) => item !== null)

  if (selectedItems.length === 0) return true // No items selected, all dates available

  // Return false if ANY item is unavailable (this will trigger red color)
  return selectedItems.every((item) => !item.bookedSlots.includes(fullDateSlot))
}

function selectDate(dateString) {
  const isAvailable = checkAvailability(dateString)

  if (isAvailable) {
    bookingData.eventDate = dateString
    document.getElementById("nextStep4").disabled = false
    document.getElementById("alternativesPanel").classList.add("hidden")
    renderCalendar()
    updateLiveSummary()
  } else {
    // ENHANCED: Show alternatives with edit options
    showAlternatives(dateString)
  }
}

// ENHANCED ALTERNATIVES FUNCTION - Edit options for replacing items
function showAlternatives(dateString) {
  const timeSlot = bookingData.basicDetails.concertTime
  const fullDateSlot = `${dateString}-${timeSlot}`
  const alternativesPanel = document.getElementById("alternativesPanel")
  const alternativesList = document.getElementById("alternativesList")

  let alternativesHTML = `
    <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <i class="fas fa-exclamation-triangle text-red-400"></i>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">Some items are unavailable for ${formatDate(dateString)}</h3>
          <div class="mt-2 text-sm text-red-700">
            <p>Select alternative options below or choose a different date.</p>
          </div>
        </div>
      </div>
    </div>`

  // Check venue alternatives
  if (bookingData.selections.venue && bookingData.selections.venue.bookedSlots.includes(fullDateSlot)) {
    const availableVenues = venuesData.filter(
      (venue) => venue.id !== bookingData.selections.venue.id && !venue.bookedSlots.includes(fullDateSlot)
    )

    if (availableVenues.length > 0) {
      alternativesHTML += `
        <div class="mb-6">
          <div class="flex justify-between items-center mb-3">
            <h5 class="font-semibold text-red-800">Your venue is unavailable - Choose an alternative:</h5>
            <button onclick="editSelection('venue')" class="text-purple-600 hover:text-purple-800 text-sm">
              <i class="fas fa-edit mr-1"></i>Edit Selection
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${availableVenues
              .slice(0, 4)
              .map(
                (venue) => `
                <div class="bg-white p-3 rounded border cursor-pointer hover:bg-green-50 hover:border-green-300 transition-all" onclick="replaceVenue('${venue.id}', '${dateString}')">
                  <div class="flex justify-between items-start">
                    <div class="flex-1">
                      <p class="font-medium text-gray-900">${venue.name}</p>
                      <p class="text-sm text-gray-600">${venue.location}</p>
                      <p class="text-sm font-semibold text-green-600">${formatCurrency(venue.pricePerHour)}/hour</p>
                    </div>
                    <button class="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded hover:bg-green-200">
                      Replace
                    </button>
                  </div>
                </div>`
              )
              .join("")}
          </div>
        </div>`
    }
  }

  // Check band alternatives
  const unavailableBands = bookingData.selections.bands.filter((band) => 
    band.bookedSlots.includes(fullDateSlot)
  )

  if (unavailableBands.length > 0) {
    unavailableBands.forEach((unavailableBand) => {
      const availableBands = bandsData.filter(
        (band) => !bookingData.selections.bands.find((b) => b.id === band.id) && !band.bookedSlots.includes(fullDateSlot)
      )

      if (availableBands.length > 0) {
        alternativesHTML += `
          <div class="mb-6">
            <div class="flex justify-between items-center mb-3">
              <h5 class="font-semibold text-red-800">"${unavailableBand.name}" is unavailable - Choose an alternative:</h5>
              <button onclick="editSelection('band', '${unavailableBand.id}')" class="text-purple-600 hover:text-purple-800 text-sm">
                <i class="fas fa-edit mr-1"></i>Edit Selection
              </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${availableBands
                .slice(0, 4)
                .map(
                  (band) => `
                  <div class="bg-white p-3 rounded border cursor-pointer hover:bg-green-50 hover:border-green-300 transition-all" onclick="replaceBand('${unavailableBand.id}', '${band.id}', '${dateString}')">
                    <div class="flex justify-between items-start">
                      <div class="flex-1">
                        <p class="font-medium text-gray-900">${band.name}</p>
                        <p class="text-sm text-gray-600">${band.genre}</p>
                        <p class="text-sm font-semibold text-green-600">${formatCurrency(band.pricePerHour)}/hour</p>
                      </div>
                      <button class="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded hover:bg-green-200">
                        Replace
                      </button>
                    </div>
                  </div>`
                )
                .join("")}
            </div>
          </div>`
      }
    })
  }

  // Check decoration alternatives
  if (bookingData.selections.decoration && bookingData.selections.decoration.bookedSlots.includes(fullDateSlot)) {
    const availableDecorations = decorationData.filter(
      (decoration) => decoration.id !== bookingData.selections.decoration.id && !decoration.bookedSlots.includes(fullDateSlot)
    )

    if (availableDecorations.length > 0) {
      alternativesHTML += `
        <div class="mb-6">
          <div class="flex justify-between items-center mb-3">
            <h5 class="font-semibold text-red-800">Your decoration team is unavailable - Choose an alternative:</h5>
            <button onclick="editSelection('decoration')" class="text-purple-600 hover:text-purple-800 text-sm">
              <i class="fas fa-edit mr-1"></i>Edit Selection
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${availableDecorations
              .slice(0, 4)
              .map(
                (decoration) => `
                <div class="bg-white p-3 rounded border cursor-pointer hover:bg-green-50 hover:border-green-300 transition-all" onclick="replaceDecoration('${decoration.id}', '${dateString}')">
                  <div class="flex justify-between items-start">
                    <div class="flex-1">
                      <p class="font-medium text-gray-900">${decoration.teamName}</p>
                      <p class="text-sm text-gray-600">${decoration.packageType}</p>
                      <p class="text-sm font-semibold text-green-600">${formatCurrency(decoration.pricePerEvent)}</p>
                    </div>
                    <button class="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded hover:bg-green-200">
                      Replace
                    </button>
                  </div>
                </div>`
              )
              .join("")}
          </div>
        </div>`
    }
  }

  alternativesList.innerHTML = alternativesHTML
  alternativesPanel.classList.remove("hidden")
}

// ENHANCED EDIT FUNCTIONS - Allow reselection without restarting
function editSelection(type, itemId = null) {
  switch (type) {
    case 'venue':
      bookingData.selections.venue = null
      showStep(2) // Go back to venue selection
      // Auto-expand venue section
      setTimeout(() => {
        document.getElementById('wantVenue').checked = true
        document.getElementById('venueSection').classList.remove('hidden')
        renderVenues()
      }, 100)
      break

    case 'band':
      if (itemId) {
        // Remove specific band
        bookingData.selections.bands = bookingData.selections.bands.filter(b => b.id !== itemId)
      } else {
        // Remove all bands
        bookingData.selections.bands = []
      }
      showStep(2) // Go back to band selection
      // Auto-expand band section
      setTimeout(() => {
        document.getElementById('wantBand').checked = true
        document.getElementById('bandSection').classList.remove('hidden')
        renderBands()
      }, 100)
      break

    case 'decoration':
      bookingData.selections.decoration = null
      showStep(3) // Go back to decoration selection
      // Auto-expand decoration section
      setTimeout(() => {
        document.getElementById('wantDecoration').checked = true
        document.getElementById('decorationSection').classList.remove('hidden')
        forceRenderDecorations()
      }, 100)
      break
  }
  updateLiveSummary()
}

function replaceVenue(newVenueId, dateString) {
  const newVenue = venuesData.find((v) => v.id === newVenueId)
  bookingData.selections.venue = newVenue
  selectDate(dateString)
  updateLiveSummary()
}

function replaceBand(oldBandId, newBandId, dateString) {
  const oldBandIndex = bookingData.selections.bands.findIndex((b) => b.id === oldBandId)
  const newBand = bandsData.find((b) => b.id === newBandId)

  if (oldBandIndex > -1) {
    bookingData.selections.bands[oldBandIndex] = newBand
  }

  selectDate(dateString)
  updateLiveSummary()
}

function replaceDecoration(newDecorationId, dateString) {
  const newDecoration = decorationData.find((d) => d.id === newDecorationId)
  bookingData.selections.decoration = newDecoration
  selectDate(dateString)
  updateLiveSummary()
}

// Ticketing Validation (keeping existing)
function validateTicketBookingDate(bookingDate) {
    const element = document.getElementById('ticketBookingDate');
    
    // Clear previous errors
    hideError('ticketBookingDate');
    
    if (!bookingDate) {
        showError('ticketBookingDate', 'Booking date is required');
        return false;
    }
    
    const bookingDateTime = new Date(bookingDate);
    const now = new Date();
    const eventDate = new Date(bookingData.eventDate);
    
    // Check if booking date is in the past
    if (bookingDateTime <= now) {
        showError('ticketBookingDate', 'Booking date must be in the future');
        return false;
    }
    
    // Check if booking date is after event date
    if (bookingDateTime >= eventDate) {
        showError('ticketBookingDate', 'Booking date must be before the event date');
        return false;
    }
    
    // If validation passes, show success feedback
    hideError('ticketBookingDate');
    
    // Optional: Show success indicator
    element.classList.remove('border-red-500');
    element.classList.add('border-green-500');
    
    // Remove success border after 2 seconds
    setTimeout(() => {
        element.classList.remove('border-green-500');
    }, 2000);
    
    return true;
}

// Update the existing validateTicketing function to use the new immediate validator
function validateTicketing() {
    if (!document.getElementById('provideTickets').checked) {
        return true; // Skip validation if not providing tickets
    }
    
    let isValid = true;
    const platinumPrice = Number.parseFloat(document.getElementById('platinumPrice').value);
    const goldPrice = Number.parseFloat(document.getElementById('goldPrice').value);
    const silverPrice = Number.parseFloat(document.getElementById('silverPrice').value);
    const bookingDate = document.getElementById('ticketBookingDate').value;
    
    // Reset errors
    ['platinumPrice', 'goldPrice', 'silverPrice', 'ticketBookingDate'].forEach(id => {
        const element = document.getElementById(id);
        const errorDiv = element.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.classList.add('hidden');
            element.classList.remove('border-red-500');
        }
    });
    
    // Validate prices
    if (!platinumPrice || platinumPrice <= 0) {
        showError('platinumPrice', 'Platinum price is required');
        isValid = false;
    }
    if (!goldPrice || goldPrice <= 0) {
        showError('goldPrice', 'Gold price is required');
        isValid = false;
    }
    if (!silverPrice || silverPrice <= 0) {
        showError('silverPrice', 'Silver price is required');
        isValid = false;
    }
    
    // Validate price hierarchy (recommended)
    if (platinumPrice && goldPrice && silverPrice) {
        if (platinumPrice <= goldPrice) {
            showError('platinumPrice', 'Platinum should be higher than Gold');
            isValid = false;
        }
        if (goldPrice <= silverPrice) {
            showError('goldPrice', 'Gold should be higher than Silver');
            isValid = false;
        }
    }
    
    // Use the immediate validator for booking date
    if (!validateTicketBookingDate(bookingDate)) {
        isValid = false;
    }
    
    if (isValid) {
        bookingData.ticketing = {
            provideTickets: true,
            platinumPrice,
            goldPrice,
            silverPrice,
            bookingDate,
        };
    }
    
    return isValid;
}

// Summary Generation (keeping existing)
function generateSummary() {
  const summaryContent = document.getElementById("summaryContent")
  let totalCost = 0
  let summaryHTML = `
    <div class="bg-gray-50 p-6 rounded-lg">
      <h3 class="font-semibold text-lg mb-4">Event Information</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p><strong>Name:</strong> ${bookingData.basicDetails.fullName}</p>
          <p><strong>Email:</strong> ${bookingData.basicDetails.email}</p>
          <p><strong>Mobile:</strong> ${bookingData.basicDetails.mobile}</p>
        </div>
        <div>
          <p><strong>Event Date:</strong> ${formatDate(bookingData.eventDate)}</p>
          <p><strong>Time Slot:</strong> ${bookingData.basicDetails.concertTime.charAt(0).toUpperCase() + bookingData.basicDetails.concertTime.slice(1)}</p>
        </div>
      </div>
    </div>`

  // Venue
  if (bookingData.selections.venue) {
    const venue = bookingData.selections.venue
    const venueCost = venue.pricePerHour * 4
    totalCost += venueCost

    summaryHTML += `
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="font-semibold text-lg mb-4">Venue</h3>
        <div class="flex justify-between items-start">
          <div>
            <p class="font-medium">${venue.name}</p>
            <p class="text-gray-600">${venue.location}</p>
            <p class="text-gray-600">Capacity: ${venue.maxLimit.toLocaleString()}</p>
            <div class="flex items-center mt-1">
              ${generateStars(venue.rating)}
              <span class="ml-2 text-sm">${venue.rating}</span>
            </div>
          </div>
          <div class="text-right">
            <p class="font-semibold primary-text text-lg">${formatCurrency(venueCost)}</p>
            <p class="text-sm text-gray-500">4 hours</p>
          </div>
        </div>
        <button onclick="showStep(2)" class="mt-3 text-purple-600 hover:text-purple-800 text-sm">
          <i class="fas fa-edit mr-1"></i>Edit
        </button>
      </div>`
  }

  // Bands
  if (bookingData.selections.bands.length > 0) {
    bookingData.selections.bands.forEach((band) => {
      const bandCost = band.pricePerHour * 4
      totalCost += bandCost

      summaryHTML += `
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="font-semibold text-lg mb-4">Band</h3>
          <div class="flex justify-between items-start">
            <div>
              <p class="font-medium">${band.name}</p>
              <p class="text-gray-600">${band.genre} • ${band.members} members</p>
              <div class="flex items-center mt-1">
                ${generateStars(band.rating)}
                <span class="ml-2 text-sm">${band.rating}</span>
              </div>
            </div>
            <div class="text-right">
              <p class="font-semibold primary-text text-lg">${formatCurrency(bandCost)}</p>
              <p class="text-sm text-gray-500">4 hours</p>
            </div>
          </div>
          <button onclick="showStep(2)" class="mt-3 text-purple-600 hover:text-purple-800 text-sm">
            <i class="fas fa-edit mr-1"></i>Edit
          </button>
        </div>`
    })
  }

  // Decoration
  if (bookingData.selections.decoration) {
    const decoration = bookingData.selections.decoration
    totalCost += decoration.pricePerEvent

    summaryHTML += `
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="font-semibold text-lg mb-4">Decoration</h3>
        <div class="flex justify-between items-start">
          <div>
            <p class="font-medium">${decoration.teamName}</p>
            <p class="text-gray-600">${decoration.packageType} Package</p>
            <div class="flex flex-wrap gap-1 mt-2">
              ${decoration.specialties
                .map((specialty) => `<span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">${specialty}</span>`)
                .join("")}
            </div>
            <div class="flex items-center mt-2">
              ${generateStars(decoration.rating)}
              <span class="ml-2 text-sm">${decoration.rating}</span>
            </div>
          </div>
          <div class="text-right">
            <p class="font-semibold primary-text text-lg">${formatCurrency(decoration.pricePerEvent)}</p>
          </div>
        </div>
        <button onclick="showStep(3)" class="mt-3 text-purple-600 hover:text-purple-800 text-sm">
          <i class="fas fa-edit mr-1"></i>Edit
        </button>
      </div>`
  }

  // Snacks
  if (bookingData.selections.snackCount > 0) {
    const snackCost = bookingData.selections.snackCount * 500
    totalCost += snackCost

    summaryHTML += `
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="font-semibold text-lg mb-4">Snacks</h3>
        <div class="flex justify-between items-start">
          <div>
            <p class="font-medium">${bookingData.selections.snackCount} Snack Boxes</p>
            <p class="text-gray-600">Each box serves ~10 people</p>
          </div>
          <div class="text-right">
            <p class="font-semibold primary-text text-lg">${formatCurrency(snackCost)}</p>
            <p class="text-sm text-gray-500">₹500 per box</p>
          </div>
        </div>
        <button onclick="showStep(3)" class="mt-3 text-purple-600 hover:text-purple-800 text-sm">
          <i class="fas fa-edit mr-1"></i>Edit
        </button>
      </div>`
  }

  // Ticketing
  if (bookingData.ticketing.provideTickets) {
    summaryHTML += `
      <div class="bg-gray-50 p-6 rounded-lg">
        <h3 class="font-semibold text-lg mb-4">Ticketing</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center">
            <div class="bg-yellow-100 p-3 rounded-lg">
              <i class="fas fa-crown text-yellow-600 text-2xl mb-2"></i>
              <p class="font-semibold">Platinum</p>
              <p class="text-lg font-bold">${formatCurrency(bookingData.ticketing.platinumPrice)}</p>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 p-3 rounded-lg">
              <i class="fas fa-medal text-gray-600 text-2xl mb-2"></i>
              <p class="font-semibold">Gold</p>
              <p class="text-lg font-bold">${formatCurrency(bookingData.ticketing.goldPrice)}</p>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-orange-100 p-3 rounded-lg">
              <i class="fas fa-award text-orange-600 text-2xl mb-2"></i>
              <p class="font-semibold">Silver</p>
              <p class="text-lg font-bold">${formatCurrency(bookingData.ticketing.silverPrice)}</p>
            </div>
          </div>
        </div>
        <p class="mt-4 text-sm text-gray-600">
          <i class="fas fa-calendar-check mr-1"></i>
          Booking opens: ${new Date(bookingData.ticketing.bookingDate).toLocaleString()}
        </p>
        <button onclick="showStep(5)" class="mt-3 text-purple-600 hover:text-purple-800 text-sm">
          <i class="fas fa-edit mr-1"></i>Edit
        </button>
      </div>`
  }

  // Total Cost
  summaryHTML += `
    <div class="bg-purple-50 border-2 border-purple-200 p-6 rounded-lg">
      <div class="flex justify-between items-center">
        <h3 class="text-xl font-bold">Total Event Cost</h3>
        <p class="text-3xl font-bold primary-text">${formatCurrency(totalCost)}</p>
      </div>
      <p class="text-sm text-gray-600 mt-2">
        * This is the estimated cost for organizing your event. Payment options available in the next step.
      </p>
    </div>`

  summaryContent.innerHTML = summaryHTML
}

// Payment Processing (keeping existing)
// function processPayment(event) {
  
//   const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')
//   const paymentAmount = document.querySelector('input[name="paymentAmount"]:checked')

//   if (!paymentMethod) {
//     const errorDiv = document
//       .querySelector('input[name="paymentMethod"]')
//       .closest('.grid')
//       .parentNode.querySelector('.error-message')
//     if (errorDiv) {
//       errorDiv.textContent = "Please select a payment method"
//       errorDiv.classList.remove("hidden")
//     }
//     return false
//   }

//   // Calculate final amount
//   let totalCost = 0
//   if (bookingData.selections.venue) totalCost += bookingData.selections.venue.pricePerHour * 4
//   bookingData.selections.bands.forEach((band) => (totalCost += band.pricePerHour * 4))
//   if (bookingData.selections.decoration) totalCost += bookingData.selections.decoration.pricePerEvent
//   totalCost += bookingData.selections.snackCount * 500

//   const finalAmount = paymentAmount.value === "deposit" ? totalCost * 0.5 : totalCost

//   // Store payment data
//   bookingData.payment = {
//     method: paymentMethod.value,
//     amount: finalAmount,
//     type: paymentAmount.value,
//     timestamp: new Date().toISOString(),
//   }

//   // Create final booking object
//   const finalBooking = {
//     bookingId: `TCM-${Date.now()}`,
//     basicDetails: bookingData.basicDetails,
//     selections: {
//       venue: bookingData.selections.venue,
//       bands: bookingData.selections.bands,
//       decoration: bookingData.selections.decoration,
//       snackCount: bookingData.selections.snackCount,
//     },
//     eventDate: bookingData.eventDate,
//     eventTime: bookingData.basicDetails.concertTime,
//     ticketing: bookingData.ticketing,
//     payment: bookingData.payment,
//     totalCost: totalCost,
//     createdAt: new Date().toISOString(),
//   }

//   // Console output as requested
//   console.log("=== CONCERT BOOKING CONFIRMATION ===")
//   console.log(JSON.stringify(finalBooking, null, 2))
//   console.log("\n=== BOOKING SUMMARY ===")
//   console.log(`Booking ID: ${finalBooking.bookingId}`)
//   console.log(`Customer: ${finalBooking.basicDetails.fullName} (${finalBooking.basicDetails.email})`)
//   console.log(`Event Date: ${formatDate(finalBooking.eventDate)} - ${finalBooking.eventTime.charAt(0).toUpperCase() + finalBooking.eventTime.slice(1)}`)

//   if (finalBooking.selections.venue) {
//     console.log(`Venue: ${finalBooking.selections.venue.name}, ${finalBooking.selections.venue.location}`)
//   }

//   if (finalBooking.selections.bands.length > 0) {
//     finalBooking.selections.bands.forEach((band) => {
//       console.log(`Band: ${band.name} (${band.genre})`)
//     })
//   }

//   if (finalBooking.selections.decoration) {
//     console.log(`Decoration: ${finalBooking.selections.decoration.teamName} - ${finalBooking.selections.decoration.packageType}`)
//   }

//   if (finalBooking.selections.snackCount > 0) {
//     console.log(`Snacks: ${finalBooking.selections.snackCount} boxes`)
//   }

//   console.log(`Total Cost: ${formatCurrency(finalBooking.totalCost)}`)
//   console.log(`Payment: ${formatCurrency(finalBooking.payment.amount)} via ${finalBooking.payment.method.toUpperCase()} (${finalBooking.payment.type === 'deposit' ? '50% Deposit' : 'Full Payment'})`)
//   console.log("=== END BOOKING CONFIRMATION ===")

//   // Show success modal
//   document.getElementById("successModal").classList.remove("hidden")

//   return true
// }

/**
 * Submit booking data to MockAPI
 * @param {Object} bookingData - The complete booking data object
 * @returns {Promise} - API response promise
 */
async function submitToMockAPI(bookingData) {
    const apiUrl = 'https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2';
    
    try {
        // First, fetch the current data from the API
        const currentResponse = await fetch(apiUrl);
        const currentData = await currentResponse.json();
        
        // Format the booked slot
        const bookedSlot = `${bookingData.eventDate}-${bookingData.eventTime.toLowerCase()}`;
        
        // Prepare the booking data
        const newBooking = {
            organizerId: Date.now().toString(),
            bookingId: bookingData.bookingId || `TCM-${Date.now()}`,
            eventName: bookingData.basicDetails.fullName + "'s Event",
            bookedSlots: [bookedSlot],
            organizerName: bookingData.basicDetails.fullName,
            organizerEmail: bookingData.basicDetails.email,
            organizerMobile: bookingData.basicDetails.mobile,
            venueId: bookingData.selections.venue ? bookingData.selections.venue.id : null,
            bandId: bookingData.selections.bands.length > 0 ? bookingData.selections.bands[0].id : null,
            decorationId: bookingData.selections.decoration ? bookingData.selections.decoration.id : null,
            foodId: bookingData.selections.snackCount > 0 ? "snacks-beverages" : null,
            ticketingEnabled: bookingData.ticketing.provideTickets || false,
            ticketPrices: {
                premiumPrice: bookingData.ticketing.platinumPrice || 0,
                goldPrice: bookingData.ticketing.goldPrice || 0,
                silverPrice: bookingData.ticketing.silverPrice || 0
            },
            totalAmount: bookingData.totalCost,
            paymentType: bookingData.payment.type === 'deposit' ? 'partial' : 'full',
            paidAmount: bookingData.payment.amount,
            pendingAmount: bookingData.payment.type === 'deposit' ? 
                (bookingData.totalCost - bookingData.payment.amount) : 0,
            bookingStatus: "confirmed",
            bookingDate: new Date().toISOString()
        };
        
        // Add the new booking to existing EventsBookings array
        const updatedData = {
            ...currentData,
            EventsBookings: [...(currentData.EventsBookings || []), newBooking]
        };
        
        // Send PUT request to update the API
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('✅ Booking submitted to MockAPI successfully!');
        return result;
        
    } catch (error) {
        console.error('❌ Error submitting to MockAPI:', error);
        throw error;
    }
}

// Add this to your existing processPayment function
async function processPayment() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentAmount = document.querySelector('input[name="paymentAmount"]:checked');
    
    if (!paymentMethod) {
        const errorDiv = document
            .querySelector('input[name="paymentMethod"]')
            .closest('.grid')
            .parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.textContent = 'Please select a payment method';
            errorDiv.classList.remove('hidden'); 
        }
        return false;
    }

    // Calculate final amount
    let totalCost = 0;
    if (bookingData.selections.venue) {
        totalCost += bookingData.selections.venue.pricePerHour * 4;
    }
    bookingData.selections.bands.forEach(band => {
        totalCost += band.pricePerHour * 4;
    });
    if (bookingData.selections.decoration) {
        totalCost += bookingData.selections.decoration.pricePerEvent;
    }
    totalCost += bookingData.selections.snackCount * 500;

    const finalAmount = paymentAmount.value === 'deposit' ? totalCost * 0.5 : totalCost;

    bookingData.payment = {
        method: paymentMethod.value,
        amount: finalAmount,
        type: paymentAmount.value,
        timestamp: new Date().toISOString(),
    };

    const finalBooking = {
        bookingId: `TCM-${Date.now()}`,
        basicDetails: bookingData.basicDetails,
        selections: {
            venue: bookingData.selections.venue,
            bands: bookingData.selections.bands,
            decoration: bookingData.selections.decoration,
            snackCount: bookingData.selections.snackCount,
        },
        eventDate: bookingData.eventDate,
        eventTime: bookingData.basicDetails.concertTime,
        ticketing: bookingData.ticketing,
        payment: bookingData.payment,
        totalCost: totalCost,
        createdAt: new Date().toISOString(),
    };

    try {
        // Submit to MockAPI
        await submitToMockAPI(finalBooking);
        document.getElementById('successModal').classList.remove('hidden');
        return true;
    } catch (error) {
        alert('Failed to submit booking. Please try again.');
        return false;
    }
}



// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Step 1 - Basic Details
  showStep(2)
  document.getElementById("nextStep1").addEventListener("click", () => {
    if (validateStep1()) {
      showStep(2)
    }
  })

  // ENHANCED REAL-TIME VALIDATION - Only validate when moving to next field
  document.getElementById("fullName").addEventListener("blur", function() {
    validateField('fullName', this.value)
  })

  document.getElementById("email").addEventListener("blur", function() {
    validateField('email', this.value)
  })

  document.getElementById("mobile").addEventListener("blur", function() {
    validateField('mobile', this.value)
  })

  // Clear errors when typing (but don't validate)
  document.getElementById("fullName").addEventListener("input", function() {
    if (this.value.trim()) hideError('fullName')
  })

  document.getElementById("email").addEventListener("input", function() {
    if (this.value.trim()) hideError('email')
  })

  document.getElementById("mobile").addEventListener("input", function() {
    if (this.value.trim()) hideError('mobile')
  })

  // Radio button styling and validation
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", function() {
      // Update custom radio styling
      const radioGroup = document.querySelectorAll(`input[name="${this.name}"]`)
      radioGroup.forEach((r) => {
        const customRadio = r.parentNode.querySelector(".radio-custom div")
        const parentLabel = r.parentNode
        if (r.checked) {
          if (customRadio) customRadio.classList.remove("hidden")
          parentLabel.classList.add("border-purple-500", "bg-purple-50")
        } else {
          if (customRadio) customRadio.classList.add("hidden")
          parentLabel.classList.remove("border-purple-500", "bg-purple-50")
        }
      })

      // Validate concert time selection
      if (this.name === 'concertTime') {
        validateField('concertTime', this.value)
      }
    })
  })

const ticketBookingDateInput = document.getElementById('ticketBookingDate');
    
    if (ticketBookingDateInput) {
        ticketBookingDateInput.addEventListener('change', function() {
            validateTicketBookingDate(this.value);
        });
        
        ticketBookingDateInput.addEventListener('blur', function() {
            validateTicketBookingDate(this.value);
        });
    }

  // Step 2 - Venues & Bands
  document.getElementById("prevStep2").addEventListener("click", () => showStep(1))

  document.getElementById('nextStep2').addEventListener('click', function() {
    if (checkStep2() && validateStep2()) {
        showStep(3);
    }
});

  // Venue toggle
  document.getElementById("wantVenue").addEventListener("change", function() {
    const venueSection = document.getElementById("venueSection")
    if (this.checked) {
      venueSection.classList.remove("hidden")
      renderVenues()
    } else {
      venueSection.classList.add("hidden")
      bookingData.selections.venue = null
      updateLiveSummary()
    }
  })

  // Band toggle
  document.getElementById("wantBand").addEventListener("change", function() {
    const bandSection = document.getElementById("bandSection")
    if (this.checked) {
      bandSection.classList.remove("hidden")
      renderBands()
    } else {
      bandSection.classList.add("hidden")
      bookingData.selections.bands = []
      updateLiveSummary()
    }
  })

  // Venue filters
  ;["venueMinPrice", "venueMaxPrice", "venueLocation", "venueMinRating"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      paginationState.venues.currentPage = 1
      renderVenues()
    })
  })

  // Band filters
  ;["bandMinPrice", "bandMaxPrice", "bandGenre", "bandMinRating"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      paginationState.bands.currentPage = 1
      renderBands()
    })
  })

  // Step 3 - Extras
  document.getElementById("prevStep3").addEventListener("click", () => showStep(2))
  // document.getElementById("nextStep3").addEventListener("click", () => showStep(4))

  // Decoration toggle - FIXED with proper error handling
  document.getElementById("wantDecoration").addEventListener("change", function() {
    const decorationSection = document.getElementById("decorationSection")
    if (this.checked) {
      decorationSection.classList.remove("hidden")
      // Force render with delay to ensure DOM is ready
      setTimeout(() => {
        forceRenderDecorations()
      }, 100)
    } else {
      decorationSection.classList.add("hidden")
      bookingData.selections.decoration = null
      updateLiveSummary()
    }
  })

  // Food toggle
  document.getElementById("wantFood").addEventListener("change", function() {
    const foodSection = document.getElementById("foodSection")
    if (this.checked) {
      foodSection.classList.remove("hidden")
    } else {
      foodSection.classList.add("hidden")
      bookingData.selections.snackCount = 0
      document.getElementById("snackCount").value = ""
      updateLiveSummary()
    }
  })

  // Snack count input
  document.getElementById("snackCount").addEventListener("input", function() {
    bookingData.selections.snackCount = Number.parseInt(this.value) || 0
    updateLiveSummary()
  })

  // Decoration filters - FIXED to trigger force render
  ;["decorationMinPrice", "decorationMaxPrice", "decorationPackageType"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      paginationState.decorations.currentPage = 1
      forceRenderDecorations()
    })
  })

  // Step 4 - Calendar
  document.getElementById("prevStep4").addEventListener("click", () => showStep(3))
  document.getElementById("nextStep4").addEventListener("click", () => showStep(5))

  document.getElementById("prevMonth").addEventListener("click", () => {
    currentMonth--
    if (currentMonth < 0) {
      currentMonth = 11
      currentYear--
    }
    renderCalendar()
  })

  document.getElementById("nextMonth").addEventListener("click", () => {
    currentMonth++
    if (currentMonth > 11) {
      currentMonth = 0
      currentYear++
    }
    renderCalendar()
  })

  // Step 5 - Ticketing
  document.getElementById("prevStep5").addEventListener("click", () => showStep(4))
  document.getElementById("nextStep5").addEventListener("click", () => {
    if (validateTicketing()) {
      generateSummary()
      showStep(6)
    }
  })

  document.getElementById("provideTickets").addEventListener("change", function() {
    const ticketingSection = document.getElementById("ticketingSection")
    if (this.checked) {
      ticketingSection.classList.remove("hidden")
    } else {
      ticketingSection.classList.add("hidden")
      bookingData.ticketing = { provideTickets: false }
    }
  })

  // Step 6 - Summary
  document.getElementById("prevStep6").addEventListener("click", () => showStep(5))
  document.getElementById("nextStep6").addEventListener("click", () => showStep(7))

  // Step 7 - Payment
  document.getElementById("prevStep7").addEventListener("click", () => showStep(6))
  document.getElementById("completeBooking").addEventListener("click", (event) => {
    if (processPayment(event)) {
      // Payment successful
    }
  })

  // Success modal
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("successModal").classList.add("hidden")
    // Optionally reset the form or redirect
    location.reload()
  })

  // Initialize calendar
  renderCalendar()

  // Initialize live summary
  updateLiveSummary()
})

// Make functions globally available for onclick handlers
window.selectVenue = selectVenue
window.changeVenuePage = changeVenuePage
window.selectBand = selectBand
window.changeBandPage = changeBandPage
window.selectDecoration = selectDecoration
window.changeDecorationPage = changeDecorationPage
window.selectDate = selectDate
window.replaceVenue = replaceVenue
window.replaceBand = replaceBand
window.replaceDecoration = replaceDecoration
window.editSelection = editSelection
window.showStep = showStep
window.forceRenderDecorations = forceRenderDecorations


// Updated Step 2 Validation - Must select items if said "YES"
function validateStep2() {
    let isValid = true;
    let errorMessages = [];
    
    const wantVenue = document.getElementById('wantVenue').checked;
    const wantBand = document.getElementById('wantBand').checked;
    
    // If user wants venue but hasn't selected one
    if (wantVenue && !bookingData.selections.venue) {
        isValid = false;
        errorMessages.push('Please select a venue or uncheck "Do you want a venue?"');
        
        // Highlight venue section
        const venueSection = document.getElementById('venueSection');
        venueSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        venueSection.style.border = '2px solid red';
        venueSection.style.borderRadius = '8px';
        
        setTimeout(() => {
            venueSection.style.border = '';
        }, 3000);
    }
    
    // If user wants band but hasn't selected one
    if (wantBand && bookingData.selections.bands.length === 0) {
        isValid = false;
        errorMessages.push('Please select a band or uncheck "Do you want a band?"');
        
        // Highlight band section
        const bandSection = document.getElementById('bandSection');
        bandSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        bandSection.style.border = '2px solid red';
        bandSection.style.borderRadius = '8px';
        
        setTimeout(() => {
            bandSection.style.border = '';
        }, 3000);
    }
    
    // Show error messages
    if (!isValid) {
        showStepValidationError(errorMessages);
    }
    
    return isValid;
}

// Updated Step 3 Validation - Must select items if said "YES"
function validateStep3() {
    let isValid = true;
    let errorMessages = [];
    
    const wantDecoration = document.getElementById('wantDecoration').checked;
    const wantFood = document.getElementById('wantFood').checked;
    
    // If user wants decoration but hasn't selected one
    if (wantDecoration && !bookingData.selections.decoration) {
        isValid = false;
        errorMessages.push('Please select a decoration team or uncheck "Do you want decorations?"');
        
        // Highlight decoration section
        const decorationSection = document.getElementById('decorationSection');
        decorationSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        decorationSection.style.border = '2px solid red';
        decorationSection.style.borderRadius = '8px';
        
        setTimeout(() => {
            decorationSection.style.border = '';
        }, 3000);
    }
    
    // If user wants food but hasn't entered count
    if (wantFood && bookingData.selections.snackCount === 0) {
        isValid = false;
        errorMessages.push('Please enter number of snack boxes or uncheck "Do you want food/snacks?"');
        
        // Highlight food section and focus input
        const foodSection = document.getElementById('foodSection');
        const snackCountInput = document.getElementById('snackCount');
        
        foodSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        snackCountInput.style.border = '2px solid red';
        snackCountInput.focus();
        
        setTimeout(() => {
            snackCountInput.style.border = '';
        }, 3000);
    }
    
    // Show error messages
    if (!isValid) {
        showStepValidationError(errorMessages);
    }
    
    return isValid;
}

// Helper function to show validation errors
function showStepValidationError(messages) {
    // Create or update error notification
    let errorDiv = document.getElementById('stepValidationError');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'stepValidationError';
        errorDiv.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg shadow-lg z-50 max-w-md';
        document.body.appendChild(errorDiv);
    }
    
    errorDiv.innerHTML = `
        <div class="flex">
            <div class="flex-shrink-0">
                <i class="fas fa-exclamation-triangle text-red-400"></i>
            </div>
            <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800">
                    Selection Required
                </h3>
                <div class="mt-2 text-sm text-red-700">
                    ${messages.map(msg => `<p>• ${msg}</p>`).join('')}
                </div>
            </div>
            <button onclick="hideStepValidationError()" class="ml-auto text-red-400 hover:text-red-600">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    errorDiv.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideStepValidationError();
    }, 5000);
}

// Helper function to hide validation errors
function hideStepValidationError() {
    const errorDiv = document.getElementById('stepValidationError');
    if (errorDiv) {
        errorDiv.classList.add('hidden');
    }
}

// Update the existing nextStep2 event listener
document.getElementById('nextStep2').addEventListener('click', function() {
    if (validateStep2() && checkStep2()) {
        showStep(3);
    }
});

// Update the existing nextStep3 event listener  
document.getElementById('nextStep3').addEventListener('click', function() {
    if (validateStep3()) {
        showStep(4);
    }
});

// Make the function globally available
window.hideStepValidationError = hideStepValidationError;

function checkStep2() {
    const hasSelection = bookingData.selections.venue || bookingData.selections.bands.length > 0;
    const nextBtn = document.getElementById('nextStep2');
    
    // nextBtn.disabled = !hasSelection;
    console.log("sdsd");
    
    
    // Show notification popup when no selection
    if (!hasSelection && currentStep === 2) {
    // Create or update notification
    let notification = document.getElementById('step2Notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'step2Notification';
        notification.className = `
            fixed top-40 left-4 right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 
            md:max-w-md bg-gradient-to-r from-orange-500 to-red-500 text-white 
            px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-2xl z-50 
            flex items-center space-x-3 animate-bounce
            border-l-4 border-orange-300 backdrop-blur-sm
        `;
        document.body.appendChild(notification);
    }
    
    notification.innerHTML = `
        <div class="flex-shrink-0">
            <i class="fas fa-exclamation-triangle text-xl text-orange-200"></i>
        </div>
        <div class="flex-1">
            <p class="font-medium text-sm md:text-base">Selection Required</p>
            <p class="text-xs md:text-sm text-orange-100 mt-1">
                Please select at least one venue or band to continue
            </p>
        </div>
        <button onclick="document.getElementById('step2Notification').classList.add('hidden')" 
                class="text-orange-200 hover:text-white transition-colors">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    notification.classList.remove('hidden');
    notification.style.animation = 'slideInUp 0.3s ease-out';
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease-in';
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 300);
    }, 4000);
} else {
    // Hide notification if selection exists
    const notification = document.getElementById('step2Notification');
    if (notification) {
        notification.style.animation = 'slideOutDown 0.3s ease-in';
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 300);
    }
}

    
    return hasSelection;
}
