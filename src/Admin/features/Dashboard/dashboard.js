// Global variables
let currentDate = new Date(2025, 8, 1) // September 2025
let chart

// Initialize the dashboard
document.addEventListener("DOMContentLoaded", () => {
  // Page load animation
  setTimeout(() => {
    document.getElementById("pageLoader").style.opacity = "0"
    setTimeout(() => {
      document.getElementById("pageLoader").style.display = "none"
      document.body.classList.add("page-enter")
    }, 500)
  }, 1000)

  initializeSidebar()
  initializeProfileDropdown()
//   initializeChart()
  initializeCalendar()
  initializeModal()
})

// Sidebar functionality
function initializeSidebar() {
  const sidebar = document.getElementById("sidebar")
  const mainContent = document.getElementById("mainContent")
  const menuToggle = document.getElementById("menuToggle")
  const closeSidebar = document.getElementById("closeSidebar")
  const mobileOverlay = document.getElementById("mobileOverlay")

  // Menu toggle for mobile
  menuToggle.addEventListener("click", () => {
    sidebar.classList.add("open")
    mobileOverlay.classList.remove("hidden")
  })

  // Close sidebar
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("open")
    mobileOverlay.classList.add("hidden")
  })

  // Close on overlay click
  mobileOverlay.addEventListener("click", () => {
    sidebar.classList.remove("open")
    mobileOverlay.classList.add("hidden")
  })

  // Navigation item clicks
  const navItems = document.querySelectorAll(".nav-item")
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      navItems.forEach((nav) => nav.classList.remove("active", "bg-gray-100", "text-black"))
      navItems.forEach((nav) => nav.classList.add("text-gray-600"))
      item.classList.add("active", "bg-gray-100", "text-black")
      item.classList.remove("text-gray-600")
    })
  })
}

// Profile dropdown functionality
function initializeProfileDropdown() {
  const profileBtn = document.getElementById("profileBtn")
  const profileDropdown = document.getElementById("profileDropdown")

  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    profileDropdown.classList.toggle("hidden")
  })

  document.addEventListener("click", () => {
    profileDropdown.classList.add("hidden")
  })
}

// Chart initialization
function initializeChart() {
  const ctx = document.getElementById("analyticsChart").getContext("2d")
  chart = new window.Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Event Planner",
          data: [12, 19, 8, 15, 25, 18, 22, 28, 15, 20, 18, 25],
          backgroundColor: "rgba(59, 130, 246, 0.7)",   // solid blue
          borderColor: "#2563eb", // deep blue border
          borderWidth: 1,
          borderRadius: 6, // rounded bars
        },
        {
          label: "Audience",
          data: [1, 13, 18, 5, 45, 58, 2, 20, 5, 0, 18, 55],
          backgroundColor: "rgba(16, 185, 129, 0.7)",   // teal green
          borderColor: "#059669", // deep green border
          borderWidth: 1,
          borderRadius: 6,
        }
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true, // ✅ show legend
          labels: {
            color: "#374151", // gray-700 text
            font: {
              size: 13,
              weight: "500",
            },
            usePointStyle: true,
            pointStyle: "roundRect",
          },
        },
        tooltip: {
          backgroundColor: "#111827", // dark tooltip
          titleColor: "#f9fafb",
          bodyColor: "#d1d5db",
          cornerRadius: 6,
          padding: 10,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "#e5e7eb", // lighter gray grid
          },
          ticks: {
            color: "#374151", // gray-700 text
            font: {
              size: 12,
            },
          },
        },
        x: {
          grid: {
            display: false, // ✅ remove vertical grid lines for clarity
          },
          ticks: {
            color: "#374151",
            font: {
              size: 12,
            },
          },
        },
      },
    },
  })
}

// Calendar functionality
function initializeCalendar() {
  renderCalendar()
}


document.getElementById("prevMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1)
    console.log(currentDate)
    renderCalendar()
  })

  document.getElementById("nextMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1)
    console.log(currentDate)

    renderCalendar()
})



function renderCalendar() {
  const calendar = document.getElementById("calendar")
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ]

  // Update month title
  let monthTitle = document.getElementById('MonthTitle')
  if (monthTitle) {
    monthTitle.innerHTML = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
  }


  // Clear calendar
  calendar.innerHTML = ""


  const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  dayHeaders.forEach((day) => {
    const header = document.createElement("div")
    header.className = "calendar-header"
    header.textContent = day
    calendar.appendChild(header)
  })

  // Number of days in current month
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

  // Get first day of current month (Sun = 0, Mon = 1, etc.)
  const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  // Add blank spaces before day 1
  for (let i = 0; i < firstDayIndex; i++) {
    const blank = document.createElement("div")
    blank.className = "calendar-day empty"
    calendar.appendChild(blank)
  }

  // Render actual days of the month (1 → 30/31/28/29)
  for (let day = 1; day <= lastDay; day++) {
    const dayElement = document.createElement("div")
    dayElement.className = "calendar-day"
    dayElement.textContent = day

    // Today highlight
    const today = new Date()
    if (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    ) {
      dayElement.classList.add("today")
    }

    // Add fake random events for demo
    if (Math.random() > 0.5) {
      dayElement.classList.add("has-events")
    }

    // Hover → show tooltip
    dayElement.addEventListener("mouseenter", (e) => showTooltip(e, new Date(currentDate.getFullYear(), currentDate.getMonth(), day)))
    dayElement.addEventListener("mouseleave", hideTooltip)

    // Click → open modal
    dayElement.addEventListener("click", () => openModal(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)))

    calendar.appendChild(dayElement)
  }
}


// Tooltip functionality
function showTooltip(e, date) {
  const tooltip = document.getElementById("tooltip")
  const eventsCount = Math.floor(Math.random() * 10) + 1

  tooltip.textContent = `${eventsCount} events booked`
  tooltip.style.left = e.pageX + 10 + "px"
  tooltip.style.top = e.pageY - 30 + "px"
  tooltip.classList.remove("hidden")
}

function hideTooltip() {
  document.getElementById("tooltip").classList.add("hidden")
}

// Modal functionality
function initializeModal() {
  const modal = document.getElementById("calendarModal")
  const closeModal = document.getElementById("closeModal")

  closeModal.addEventListener("click", () => {
    closeModalFunction()
  })

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModalFunction()
    }
  })
}

function openModal(date) {
  const modal = document.getElementById("calendarModal")
  const modalContent = document.getElementById("modalContent")
  const modalTitle = document.getElementById("modalTitle")

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  modalTitle.textContent = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

  modal.classList.remove("hidden")
  setTimeout(() => {
    modalContent.classList.add("modal-enter")
    modalContent.style.opacity = "1"
    modalContent.style.transform = "scale(1)"
  }, 10)
}

function closeModalFunction() {
  const modal = document.getElementById("calendarModal")
  const modalContent = document.getElementById("modalContent")

  modalContent.classList.remove("modal-enter")
  modalContent.classList.add("modal-exit")

  setTimeout(() => {
    modal.classList.add("hidden")
    modalContent.classList.remove("modal-exit")
    modalContent.style.opacity = "0"
    modalContent.style.transform = "scale(0.95)"
  }, 300)
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
