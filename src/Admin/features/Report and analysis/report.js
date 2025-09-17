// // Global variables
// const currentDate = new Date(2025, 8, 1) // September 2025
// let chart
// let revenueChart
// let eventTypesChart
// let performanceChart

// // Initialize the dashboard
// document.addEventListener("DOMContentLoaded", () => {
//   // Page load animation
//   setTimeout(() => {
//     document.getElementById("pageLoader").style.opacity = "0"
//     setTimeout(() => {
//       document.getElementById("pageLoader").style.display = "none"
//       document.body.classList.add("page-enter")
//     }, 500)
//   }, 1000)

//   initializeSidebar()
//   initializeProfileDropdown()
//   initializeChart()
// //   initializeCalendar()
//   initializeModal()
//   initializeReportAnalysis()
// })

// // Sidebar functionality
// function initializeSidebar() {
//   const sidebar = document.getElementById("sidebar")
//   const mainContent = document.getElementById("mainContent")
//   const menuToggle = document.getElementById("menuToggle")
//   const closeSidebar = document.getElementById("closeSidebar")
//   const mobileOverlay = document.getElementById("mobileOverlay")

//   // Menu toggle for mobile
//   menuToggle.addEventListener("click", () => {
//     sidebar.classList.add("open")
//     mobileOverlay.classList.remove("hidden")
//   })

//   // Close sidebar
//   closeSidebar.addEventListener("click", () => {
//     sidebar.classList.remove("open")
//     mobileOverlay.classList.add("hidden")
//   })

//   // Close on overlay click
//   mobileOverlay.addEventListener("click", () => {
//     sidebar.classList.remove("open")
//     mobileOverlay.classList.add("hidden")
//   })

//   // Navigation item clicks
//   const navItems = document.querySelectorAll(".nav-item")
//   navItems.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       e.preventDefault()
//       navItems.forEach((nav) => nav.classList.remove("active", "bg-gray-100", "text-black"))
//       navItems.forEach((nav) => nav.classList.add("text-gray-600"))
//       item.classList.add("active", "bg-gray-100", "text-black")
//       item.classList.remove("text-gray-600")

//       const dashboardContent = document.getElementById("dashboardContent")
//       const reportContent = document.getElementById("reportAnalysisContent")
//       const headerTitle = document.querySelector("header h1")
//       const headerSubtitle = document.querySelector("header p")

//       if (item.id === "reportAnalysisNav") {
//         dashboardContent.classList.add("hidden")
//         reportContent.classList.remove("hidden")
//         headerTitle.textContent = "REPORT & ANALYSIS"
//         headerSubtitle.textContent = "Comprehensive analytics and reporting dashboard"
//         // Initialize report charts when switching to report view
//         setTimeout(() => {
//           initializeReportCharts()
//         }, 100)
//       } else {
//         dashboardContent.classList.remove("hidden")
//         reportContent.classList.add("hidden")
//         headerTitle.textContent = "DASHBOARD"
//         headerSubtitle.textContent = "Hello Naveen, Welcome back !"
//       }
//     })
//   })
// }

// // Profile dropdown functionality
// function initializeProfileDropdown() {
//   const profileBtn = document.getElementById("profileBtn")
//   const profileDropdown = document.getElementById("profileDropdown")

//   profileBtn.addEventListener("click", (e) => {
//     e.stopPropagation()
//     profileDropdown.classList.toggle("hidden")
//   })

//   document.addEventListener("click", () => {
//     profileDropdown.classList.add("hidden")
//   })
// }

// // Chart initialization
// function initializeChart() {
//   const ctx = document.getElementById("analyticsChart").getContext("2d")

//   chart = new window.Chart(ctx, {
//     type: "line",
//     data: {
//       labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//       datasets: [
//         {
//           label: "User Activity",
//           data: [12, 19, 8, 15, 25, 18, 22, 28, 15, 20, 18, 25],
//           borderColor: "#3b82f6",
//           backgroundColor: "rgba(59, 130, 246, 0.1)",
//           borderWidth: 2,
//           fill: true,
//           tension: 0.4,
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         legend: {
//           display: false,
//         },
//       },
//       scales: {
//         y: {
//           beginAtZero: true,
//           grid: {
//             color: "#f3f4f6",
//           },
//         },
//         x: {
//           grid: {
//             color: "#f3f4f6",
//           },
//         },
//       },
//     },
//   })

//   // Year selector
//   document.getElementById("yearSelect").addEventListener("change", (e) => {
//     // Update chart data based on selected year
//     const year = e.target.value
//     // In a real app, you would fetch data for the selected year
//     chart.update()
//   })
// }

// // Calendar functionality
// function initializeCalendar() {
//   renderCalendar()

//   document.getElementById("prevMonth").addEventListener("click", () => {
//     currentDate.setMonth(currentDate.getMonth() - 1)
//     renderCalendar()
//   })

//   document.getElementById("nextMonth").addEventListener("click", () => {
//     currentDate.setMonth(currentDate.getMonth() + 1)
//     renderCalendar()
//   })
// }

// function renderCalendar() {
//   const calendar = document.getElementById("calendar")
//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ]

//   // Update month title
//   const monthTitle = document.querySelector(".bg-white.p-6.rounded-xl.border.border-gray-200 h3")
//   if (monthTitle) {
//     monthTitle.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
//   }

//   // Clear calendar
//   calendar.innerHTML = ""

//   // Add day headers
//   const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
//   dayHeaders.forEach((day) => {
//     const header = document.createElement("div")
//     header.className = "calendar-header"
//     header.textContent = day
//     calendar.appendChild(header)
//   })

//   // Get first day of month and number of days
//   const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
//   const lastDay = new Date(currentDate.get  FullYear(), currentDate.getMonth() + 1, 0)
//   const startDate = new Date(firstDay)
//   startDate.setDate(startDate.getDate() - firstDay.getDay())

//   // Generate calendar days
//   for (let i = 0; i < 42; i++) {
//     const date = new Date(startDate)
//     date.setDate(startDate.getDate() + i)

//     const dayElement = document.createElement("div")
//     dayElement.className = "calendar-day"
//     dayElement.textContent = date.getDate()

//     // Add classes for styling
//     if (date.getMonth() !== currentDate.getMonth()) {
//       dayElement.classList.add("other-month")
//     }

//     if (date.toDateString() === new Date().toDateString()) {
//       dayElement.classList.add("today")
//     }

//     // Add events indicator (random for demo)
//     if (Math.random() > 0.7) {
//       dayElement.classList.add("has-events")
//     }

//     // Add event listeners
//     dayElement.addEventListener("click", () => openModal(date))
//     dayElement.addEventListener("mouseenter", (e) => showTooltip(e, date))
//     dayElement.addEventListener("mouseleave", hideTooltip)

//     calendar.appendChild(dayElement)
//   }
// }

// // Tooltip functionality
// function showTooltip(e, date) {
//   const tooltip = document.getElementById("tooltip")
//   const eventsCount = Math.floor(Math.random() * 10) + 1

//   tooltip.textContent = `${eventsCount} events booked`
//   tooltip.style.left = e.pageX + 10 + "px"
//   tooltip.style.top = e.pageY - 30 + "px"
//   tooltip.classList.remove("hidden")
// }

// function hideTooltip() {
//   document.getElementById("tooltip").classList.add("hidden")
// }

// // Modal functionality
// function initializeModal() {
//   const modal = document.getElementById("calendarModal")
//   const closeModal = document.getElementById("closeModal")

//   closeModal.addEventListener("click", () => {
//     closeModalFunction()
//   })

//   modal.addEventListener("click", (e) => {
//     if (e.target === modal) {
//       closeModalFunction()
//     }
//   })
// }

// function openModal(date) {
//   const modal = document.getElementById("calendarModal")
//   const modalContent = document.getElementById("modalContent")
//   const modalTitle = document.getElementById("modalTitle")

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ]

//   modalTitle.textContent = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

//   modal.classList.remove("hidden")
//   setTimeout(() => {
//     modalContent.classList.add("modal-enter")
//     modalContent.style.opacity = "1"
//     modalContent.style.transform = "scale(1)"
//   }, 10)
// }

// function closeModalFunction() {
//   const modal = document.getElementById("calendarModal")
//   const modalContent = document.getElementById("modalContent")

//   modalContent.classList.remove("modal-enter")
//   modalContent.classList.add("modal-exit")

//   setTimeout(() => {
//     modal.classList.add("hidden")
//     modalContent.classList.remove("modal-exit")
//     modalContent.style.opacity = "0"
//     modalContent.style.transform = "scale(0.95)"
//   }, 300)
// }

// function initializeReportAnalysis() {
//   // Download PDF functionality
//   document.getElementById("downloadPDF").addEventListener("click", () => {
//     // Simulate PDF download
//     const link = document.createElement("a")
//     link.href =
//       "data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKEV2ZW50IE1hbmFnZW1lbnQgUmVwb3J0KQovQ3JlYXRvciAoRXZlbnQgTWFuYWdlbWVudCBTeXN0ZW0pCi9Qcm9kdWNlciAoRXZlbnQgTWFuYWdlbWVudCBTeXN0ZW0pCi9DcmVhdGlvbkRhdGUgKEQ6MjAyNTA5MTYxMjAwMDBaKQo+PgplbmRvYmoKCjIgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDMgMCBSCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgWzQgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCgo1IDAgb2JqCjw8Ci9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgoxMDAgNzAwIFRkCihFdmVudCBNYW5hZ2VtZW50IFJlcG9ydCkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAxNzQgMDAwMDAgbiAKMDAwMDAwMDIyMSAwMDAwMCBuIAowMDAwMDAwMjc4IDAwMDAwIG4gCjAwMDAwMDAzNzggMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDIgMCBSCj4+CnN0YXJ0eHJlZgo0NzIKJSVFT0Y="
//     link.download = "event-management-report.pdf"
//     link.click()

//     // Show success message
//     showNotification("PDF report downloaded successfully!", "success")
//   })

//   // Download CSV functionality
//   document.getElementById("downloadCSV").addEventListener("click", () => {
//     const csvData = [
//       ["Metric", "Current Month", "Previous Month", "Change"],
//       ["Total Bookings", "136", "124", "+9.7%"],
//       ["Revenue", "$45,230", "$42,100", "+7.4%"],
//       ["New Organizers", "45", "38", "+18.4%"],
//       ["Total Audience", "450", "420", "+7.1%"],
//       ["Customer Satisfaction", "4.8/5", "4.7/5", "+2.1%"],
//     ]

//     const csvContent = csvData.map((row) => row.join(",")).join("\n")
//     const blob = new Blob([csvContent], { type: "text/csv" })
//     const url = window.URL.createObjectURL(blob)
//     const link = document.createElement("a")
//     link.href = url
//     link.download = "event-management-report.csv"
//     link.click()
//     window.URL.revokeObjectURL(url)

//     // Show success message
//     showNotification("CSV report downloaded successfully!", "success")
//   })
// }

// function initializeReportCharts() {
//   // Revenue Chart
//   const revenueCtx = document.getElementById("revenueChart")
//   if (revenueCtx && !revenueChart) {
//     revenueChart = new window.Chart(revenueCtx.getContext("2d"), {
//       type: "bar",
//       data: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
//         datasets: [
//           {
//             label: "Revenue",
//             data: [32000, 28000, 35000, 42000, 38000, 45000, 48000, 52000, 45230],
//             backgroundColor: "rgba(34, 197, 94, 0.8)",
//             borderColor: "rgb(34, 197, 94)",
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//           legend: {
//             display: false,
//           },
//         },
//         scales: {
//           y: {
//             beginAtZero: true,
//             grid: {
//               color: "#f3f4f6",
//             },
//           },
//           x: {
//             grid: {
//               color: "#f3f4f6",
//             },
//           },
//         },
//       },
//     })
//   }

//   // Event Types Chart
//   const eventTypesCtx = document.getElementById("eventTypesChart")
//   if (eventTypesCtx && !eventTypesChart) {
//     eventTypesChart = new window.Chart(eventTypesCtx.getContext("2d"), {
//       type: "doughnut",
//       data: {
//         labels: ["Conferences", "Weddings", "Concerts", "Corporate", "Others"],
//         datasets: [
//           {
//             data: [35, 25, 20, 15, 5],
//             backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"],
//             borderWidth: 2,
//             borderColor: "#ffffff",
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//           legend: {
//             position: "bottom",
//             labels: {
//               padding: 20,
//               usePointStyle: true,
//             },
//           },
//         },
//       },
//     })
//   }

//   // Performance Chart
//   const performanceCtx = document.getElementById("performanceChart")
//   if (performanceCtx && !performanceChart) {
//     performanceChart = new window.Chart(performanceCtx.getContext("2d"), {
//       type: "line",
//       data: {
//         labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//         datasets: [
//           {
//             label: "Bookings",
//             data: [28, 35, 42, 31],
//             borderColor: "#3b82f6",
//             backgroundColor: "rgba(59, 130, 246, 0.1)",
//             tension: 0.4,
//             fill: true,
//           },
//           {
//             label: "Revenue (x1000)",
//             data: [12, 15, 18, 14],
//             borderColor: "#10b981",
//             backgroundColor: "rgba(16, 185, 129, 0.1)",
//             tension: 0.4,
//             fill: true,
//           },
//           {
//             label: "Customer Satisfaction",
//             data: [4.2, 4.5, 4.8, 4.6],
//             borderColor: "#f59e0b",
//             backgroundColor: "rgba(245, 158, 11, 0.1)",
//             tension: 0.4,
//             fill: true,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//           legend: {
//             position: "top",
//           },
//         },
//         scales: {
//           y: {
//             beginAtZero: true,
//             grid: {
//               color: "#f3f4f6",
//             },
//           },
//           x: {
//             grid: {
//               color: "#f3f4f6",
//             },
//           },
//         },
//       },
//     })
//   }

//   // Revenue timeframe selector
//   document.getElementById("revenueTimeframe").addEventListener("change", (e) => {
//     const timeframe = e.target.value
//     let newLabels, newData

//     switch (timeframe) {
//       case "quarterly":
//         newLabels = ["Q1", "Q2", "Q3", "Q4"]
//         newData = [95000, 125000, 145000, 135000]
//         break
//       case "yearly":
//         newLabels = ["2021", "2022", "2023", "2024", "2025"]
//         newData = [380000, 420000, 480000, 520000, 450000]
//         break
//       default:
//         newLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
//         newData = [32000, 28000, 35000, 42000, 38000, 45000, 48000, 52000, 45230]
//     }

//     revenueChart.data.labels = newLabels
//     revenueChart.data.datasets[0].data = newData
//     revenueChart.update()
//   })
// }

// function showNotification(message, type = "info") {
//   const notification = document.createElement("div")
//   notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full ${
//     type === "success" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
//   }`
//   notification.innerHTML = `
//     <div class="flex items-center">
//       <i class="fas ${type === "success" ? "fa-check-circle" : "fa-info-circle"} mr-2"></i>
//       ${message}
//     </div>
//   `

//   document.body.appendChild(notification)

//   setTimeout(() => {
//     notification.classList.remove("translate-x-full")
//   }, 100)

//   setTimeout(() => {
//     notification.classList.add("translate-x-full")
//     setTimeout(() => {
//       document.body.removeChild(notification)
//     }, 300)
//   }, 3000)
// }

// // Add smooth scrolling for better UX
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault()
//     const target = document.querySelector(this.getAttribute("href"))
//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       })
//     }
//   })
// })
