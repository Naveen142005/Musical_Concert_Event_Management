// Profile data - replace with actual user data
let profileData = {
    firstName: 'Naveen',
    lastName: 'Kumar M',
    email: 'naveen142005m@gmail.com',
    phone: '+91 8144787225',
    dob: '1995-06-15',
    gender: 'male',
    address: '123 Music Street, Entertainment District',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    genres: ['classical', 'rock', 'jazz'],
    notifications: ['new_events', 'booking_updates'],
    memberSince: 'Sep 2025',
    totalBookings: 8,
    upcomingEvents: 2,
    totalSpent: 25400
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    loadProfileData();
});

// Check if user is logged in
function checkLoginStatus() {
    const currentAudienceId = localStorage.getItem('currentaudienceId');
    if (!currentAudienceId) {
        window.location.href = 'userbookings.html';
        return;
    }
    
    // Load user data from localStorage if available
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData && Object.keys(userData).length > 0) {
        profileData = { ...profileData, ...userData };
    }
}

// Load profile data into form
function loadProfileData() {
    // Basic info
    document.getElementById('firstName').value = profileData.firstName || '';
    document.getElementById('lastName').value = profileData.lastName || '';
    document.getElementById('email').value = profileData.email || '';
    document.getElementById('phone').value = profileData.phone || '';
    document.getElementById('dob').value = profileData.dob || '';
    document.getElementById('gender').value = profileData.gender || '';
    
    // Address
    document.getElementById('address').value = profileData.address || '';
    document.getElementById('city').value = profileData.city || '';
    document.getElementById('state').value = profileData.state || '';
    document.getElementById('pincode').value = profileData.pincode || '';
    
    // Update display elements
    updateDisplayInfo();
    
    // Load preferences
    loadPreferences();
}

// Update display information
function updateDisplayInfo() {
    const fullName = `${profileData.firstName} ${profileData.lastName}`.trim() || 'Audience User';
    document.getElementById('displayName').textContent = fullName;
    document.getElementById('displayEmail').textContent = profileData.email || 'user@example.com';
    
    // Update avatar initials
    const initials = (profileData.firstName?.[0] || 'A') + (profileData.lastName?.[0] || 'U');
    document.getElementById('avatarInitials').textContent = initials.toUpperCase();
    
    // Update stats
    document.getElementById('memberSince').textContent = `Member since ${profileData.memberSince || 'Sep 2025'}`;
    document.getElementById('totalBookings').textContent = profileData.totalBookings || '0';
    document.getElementById('upcomingEvents').textContent = profileData.upcomingEvents || '0';
    document.getElementById('totalSpent').textContent = `₹${profileData.totalSpent?.toLocaleString() || '0'}`;
}

// Load user preferences
function loadPreferences() {
    // Load genre preferences
    const genreCheckboxes = document.querySelectorAll('input[name="genres"]');
    genreCheckboxes.forEach(checkbox => {
        checkbox.checked = profileData.genres?.includes(checkbox.value) || false;
    });
    
    // Load notification preferences
    const notificationCheckboxes = document.querySelectorAll('input[name="notifications"]');
    notificationCheckboxes.forEach(checkbox => {
        checkbox.checked = profileData.notifications?.includes(checkbox.value) || false;
    });
}

// Save profile
function saveProfile() {
    const formData = new FormData(document.getElementById('profileForm'));
    
    // Update profile data
    profileData.firstName = formData.get('firstName');
    profileData.lastName = formData.get('lastName');
    profileData.email = formData.get('email');
    profileData.phone = formData.get('phone');
    profileData.dob = formData.get('dob');
    profileData.gender = formData.get('gender');
    profileData.address = formData.get('address');
    profileData.city = formData.get('city');
    profileData.state = formData.get('state');
    profileData.pincode = formData.get('pincode');
    
    // Update preferences
    profileData.genres = Array.from(formData.getAll('genres'));
    profileData.notifications = Array.from(formData.getAll('notifications'));
    
    // Save to localStorage
    localStorage.setItem('userData', JSON.stringify(profileData));
    
    // Update display
    updateDisplayInfo();
    
    // Show success message
    showToast('Profile updated successfully!', 'success');
    
    console.log('Profile saved:', profileData);
}

// Reset form to original data
function resetForm() {
    loadProfileData();
    showToast('Form reset to saved data', 'info');
}

// Change password
function changePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    
    if (!currentPassword || !newPassword) {
        showToast('Please fill in all password fields', 'error');
        return;
    }
    
    if (newPassword.length < 8) {
        showToast('Password must be at least 8 characters long', 'error');
        return;
    }
    
    // Here you would validate current password and update with new one
    // For demo purposes, we'll just show success
    showToast('Password updated successfully!', 'success');
    
    // Clear password fields
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
}

// Navigation
function goBack() {
    window.history.back();
}

// Toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    }`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.remove('translate-x-full'), 100);
    
    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Form validation
document.getElementById('profileForm').addEventListener('input', function(e) {
    if (e.target.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(e.target.value) && e.target.value !== '') {
            e.target.setCustomValidity('Please enter a valid email address');
        } else {
            e.target.setCustomValidity('');
        }
    }
    
    if (e.target.type === 'tel') {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
        if (!phoneRegex.test(e.target.value) && e.target.value !== '') {
            e.target.setCustomValidity('Please enter a valid phone number');
        } else {
            e.target.setCustomValidity('');
        }
    }
});


const redirecting_url = localStorage.getItem('redirecturl');
localStorage.setItem('redirecturl', window.location.href);
function redirect() {
    window.location.href = redirecting_url;
}


