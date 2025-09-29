# Thigalzhi Event Management System

A web-based **Event Management System** designed to streamline event booking, ticket management, and admin operations for musical concerts and events.  
Built with **HTML, CSS, JavaScript, and Tailwind CSS** with **Mock API** integration for realistic data simulation.

***

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

***

## Project Structure

```
THIGALZHI/
├── ASSETS/                        # Static assets
├── CSS/                          # Stylesheets
│   └── styles.css               # Custom styles
├── JS/                          # Shared JavaScript
│   └── main.js                 # Main application logic
├── src/                         # Source code
│   ├── Admin/                   # Admin panel modules
│   │   └── features/            # Admin feature modules
│   │       ├── auth/            # Authentication system
│   │       ├── backup-restore.html # Data backup functionality
│   │       ├── content-management.html # Content management
│   │       ├── dashboard.html   # Admin dashboard
│   │       ├── events-bookings.html # Event booking management
│   │       ├── feedback.html    # User feedback management
│   │       ├── payments.html    # Payment processing
│   │       ├── query-management.html # Query handling
│   │       ├── reports.html     # Analytics and reports
│   │       └── ticket-bookings.html # Ticket management
│   │
│   ├── Organizer/               # Organizer-specific features
│   │   ├── MyBookings/          # Organizer booking management
│   │   │   ├── complete_bookings.html
│   │   │   └── complete_bookings.js
│   │   ├── New_concert-Bookings/ # New concert creation
│   │   │   ├── concert_booking.html
│   │   │   └── script.js
│   │   ├── Profiles/            # Organizer profiles
│   │   │   └── profile.html
│   │   └── tmc.html            # Terms for organizers
│   │
│   ├── Facilities/              # Venue and service management
│   │   ├── bands.html           # Band management
│   │   ├── Decoration.html      # Event decoration management
│   │   └── venues.html          # Venue management
│   │
│   └── User/                    # User-facing modules
│       ├── Bookings/            # User booking management
│       │   ├── userbookings.html # User booking interface
│       │   ├── userbookings.js   # Booking logic
│       │   └── MyBookings.html   # User's booking history
│       │
│       ├── MyBookings/          # Personal booking management
│       │   ├── MYBOOKING.js     # Personal booking logic
│       │   └── MYBOOKINGS.html  # Personal bookings display
│       │
│       ├── login_sign_up.css    # Authentication styles
│       ├── login_signup.html    # Login/signup interface
│       ├── login.js             # Login functionality
│       └── tmc.html            # Terms and conditions
│
├── profiles/                    # User profile management
│   ├── profile.html            # User profile page
│   ├── profile.js              # Profile management logic
│   └── forgot.html            # Password recovery
│
├── index_.html                 # Main landing page
├── pastevent.html             # Past events page
└── tailwind.config.js         # Tailwind CSS configuration
```

***

## API Integration

### Mock API Configuration
**Base URL:** `https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2`

**Data Structure:**
- **Admin Authentication** - Admin login credentials
- **Organizers** - Event organizer accounts and profiles
- **Audience** - User accounts and ticket bookings
- **TicketBookings** - Individual ticket purchase records
- **Venues** - Available venues with pricing and availability
- **Bands** - Musical bands with genres and booking rates
- **Decorations** - Event decoration packages and teams
- **EventsBookings** - Complete event booking records with payments

### API Usage Examples
```javascript
// Fetch all event data
fetch('https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2')
  .then(response => response.json())
  .then(data => console.log(data));

// Update booking status
fetch('https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(updatedData)
});
```

***



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

***

## Usage

**For Users(audience):** Browse events, register/login, book tickets, manage bookings  
**For Organizers:** Create events, manage venues and bands, monitor bookings  
**For Admins:** Monitor system, manage all bookings, generate reports, handle content

***

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **API:** Mock API (mockapi.io)
- **Storage:** LocalStorage + Mock API
- **Architecture:** Modular, Component-based

***

