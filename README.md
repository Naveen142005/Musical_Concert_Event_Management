# Thigalzhi Event Management System

A web-based **Event Management System** designed to streamline event booking, ticket management, and admin operations for musical concerts and events.  
Built with **HTML, CSS, JavaScript, and Tailwind CSS** with **Mock API** integration for realistic data simulation.

---

## Features

- **Event Management** – Create, update, and manage musical concerts and events
- **Ticket Booking System** – Handle premium, gold, and silver ticket categories
- **Audience Management** – User registration, login, and profile management
- **Admin Dashboard** – Comprehensive analytics and booking management
- **Payment Processing** – Secure payment handling and invoice generation
- **Reports & Analytics** – Generate detailed reports and performance metrics
- **Venue & Band Management** – Manage venues, bands, and event decorations
- **Authentication** – Secure login/logout for admin, organizer, and audience
- **Responsive Design** – Mobile-friendly interface with Tailwind CSS
- **Mock API Integration** – Realistic data simulation for development and testing

---

## Project Structure

Event Management System
├── ASSETS
│   ├── All images
├── CSS
│   └── styles.css
├── JS
│   └── main.js
├── README.md
├── index\_.html
├── pastevent.html
├── src
│   ├── Admin
│   │   └── features
│   │   ├── auth
│   │   ├── backup-restore.html
│   │   ├── content-management.html
│   │   ├── dashboard.html
│   │   ├── events-bookings.html
│   │   ├── feedback.html
│   │   ├── package.json
│   │   ├── payments.html
│   │   ├── query-management.html
│   │   ├── reports.html
│   │   └── ticket-bookings.html
│   ├── Facilities
│   │   ├── Decoration.html
│   │   ├── bands.html
│   │   └── venues.html
│   ├── Organizer
│   │   ├── MyBookings
│   │   │   ├── complete_bookings.html
│   │   │   └── complete_bookings.js
│   │   ├── New_concert-Bookings
│   │   │   ├── concert_booking.html
│   │   │   └── script.js
│   │   ├── Profiles
│   │   │   └── profile.html
│   │   └── tmc.html
│   └── User
│   ├── Bookings
│   │   ├── userbookings.html
│   │   └── userbookings.js
│   ├── MyBookings
│   │   ├── MYBOOKING.js
│   │   └── MYBOOKINGS.html
│   ├── profiles
│   │   ├── profile.html
│   │   └── profile.js
│   └── tmc.html
├── tailwind.config.js
└── userAuth
├── forgot.html
├── login.js
├── login_sign_up.css
└── login_signup.html

---

## Flow
 

## Getting Started
- Open `index_.html` in your browser to access the public site.

## For Event Organizers (Book Entire Concerts)

  ### Sign Up & Login
  - Navigate to the organizer registration page  
  - Create an account with your details  
  - Login to access the organizer portal  

  ### Event Booking Process
  1. Click **Event Booking** from the main dashboard  
  2. Fill in basic event details (name, description, date, time)  
  3. Upload event banner image (stored in Cloudinary)  
  4. Select venue from available options  
  5. Choose band  
  6. Pick decoration package   
  7. Set up ticketing (if selling tickets to public and set ticket per pricing)  
  8. Choose payment method (full or partial)  
  9. Submit booking and receive confirmation  

  ### Manage Your Bookings
  - Click **My Bookings** in the profile menu  
  - View all your event bookings  
  - Check booking status *(Confirmed, Cancelled, Postponed)*  
  - Reschedule the event 
  - View registered users and ticket sales  

## For Audience (Book Concert Tickets)

  ### Browse Events
  - Visit the public site to view available concerts  
  - Browse events by date, venue, or genre  
  - View event details including banner, description, and pricing  

  ### Ticket Booking
  1. Select your preferred event  
  2. Choose ticket type *(Premium, Gold, Silver)*  
  3. Specify quantity needed  
  4. Provide attendee information  
  5. Complete payment process  
  6. Receive booking confirmation  

  ### Manage Your Bookings
  - Click **My Bookings** in the profile menu  
  - View all your event bookings  
  - Check booking status and cancel the tickets 



## For Administrators
    ### Admin Access
    - Use admin credentials to login  
    - Access comprehensive dashboard  
    - Monitor all bookings across the platform  
    - Manage venues, bands, and decoration providers  
    - View financial reports and analytics  
    - Handle booking cancellations and refunds  

## API Integration

### Mock API Configuration

**Base URL:** `https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2`

### API Usage Examples

```javascript
// Fetch all event data
fetch("https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Update booking status
fetch("https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(updatedData),
});
```

---

## Demo Credentials

**Admin Access:**

- Email: admin123@gmail.com
- Password: admin

**Sample Organizer:**

- Email: Naveen@gmail.com
- Password: 121212

**Sample User:**

- Email: Shankar@gmail.com
- Password: 123456

---

## Usage

**For Users(audience):** Browse events, register/login, book tickets, manage bookings  
**For Organizers:** Create events, manage venues and bands, monitor bookings  
**For Admins:** Monitor system, manage all bookings, generate reports, handle content

---

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **API:** Mock API (mockapi.io)
- **Storage:** LocalStorage + Mock API
- **Architecture:** Modular, Component-based

---
