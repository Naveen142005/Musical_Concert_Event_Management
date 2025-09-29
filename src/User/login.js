
// API Configuration
const API_URL =
    "https://68ca895b430c4476c349e4c0.mockapi.io/MusicEvent/EventData/2";

/* -------------------
     DOM Elements
  ------------------- */
const overlay = document.getElementById("modalOverlay");
const container = document.getElementById("modalContainer");
const messageContainer = document.getElementById("messageContainer");
const messageText = document.getElementById("messageText");

// const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const forgotTab = document.getElementById("forgotTab");

const switchToForgot = document.getElementById("switchToForgot");
const backToLogin = document.getElementById("backToLogin");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const forgotForm = document.getElementById("forgotForm");

let currentForm = "login";

/* -------------------
     API Functions
  ------------------- */

// Fetch data from API
async function fetchAPIData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        showMessage("Error connecting to server. Please try again.", "error");
        return null;
    }
}

// Update data in API
async function updateAPIData(data) {
    try {
        const response = await fetch(API_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error("Failed to update data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating data:", error);
        showMessage("Error saving data. Please try again.", "error");
        return null;
    }
}

// Check if email exists in a specific role array
function emailExists(users, email) {
    return users.some(
        (user) => user.email.toLowerCase() === email.toLowerCase()
    );
}

// Find user by email and password in both arrays
function findUser(data, email, password) {
    const organizers = data.Organizers || [];
    const audience = data.Audience || [];
    const admin = data.admin || [];
    console.log(admin);
    
    // Check in Organizers array
    let user = organizers.find(
        (user) =>
            user.email.toLowerCase() === email.toLowerCase() &&
            user.password === password
    );

    if (user) {
        return { user, role: "organizer" };
    }

    // Check in Audience array
    user = audience.find(
        (user) =>
            user.email.toLowerCase() === email.toLowerCase() &&
            user.password === password
    );

    if (user) {
        return { user, role: "audience" };
    }
    
    if(admin[0].email == email, admin[0].password == password) {
        window.location.href='/src/Admin/features/dashboard.html'
         return { user, role: "admin" };
    }
    

    if (user) {
        return { user, role: "admin" };
    }
    return null;
}

/* -------------------
     Message Display
  ------------------- */
function showMessage(message, type = "success") {
    messageText.textContent = message;
    messageContainer.className = `mb-6 p-4 rounded-2xl text-center font-body ${type === "success"
            ? "bg-green-50 border border-green-200 text-green-800"
            : "bg-red-50 border border-red-200 text-red-800"
        }`;
    messageContainer.classList.remove("hidden");

    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageContainer.classList.add("hidden");
    }, 5000);
}

function hideMessage() {
    messageContainer.classList.add("hidden");
}

/* -------------------
     Modal Functions
//   ------------------- */
// function openModal() {
//     overlay.classList.remove("hidden");
//     hideMessage();
//     setTimeout(() => {
//         container.classList.remove("scale-95", "opacity-0");
//         container.classList.add("scale-100", "opacity-100");
//     }, 10);
//     focusFirstInput();
// }

function closeModal() {
    container.classList.remove("scale-100", "opacity-100");
    container.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 300);
}

/* -------------------
     Tab Switching Functions
  ------------------- */

signupTab.addEventListener("click", () => {
    loginTab.classList.remove("bg-white-20");
    loginTab.classList.remove("backdrop-blur");
});
function showForm(type) {
    loginForm.classList.add("hidden");
    signupForm.classList.add("hidden");
    forgotForm.classList.add("hidden");
    hideMessage();
    if (type === "login") loginForm.classList.remove("hidden");
    if (type === "signup") signupForm.classList.remove("hidden");
    if (type === "forgot") forgotForm.classList.remove("hidden");
}

function updateTabStyles(active) {
    [loginTab, signupTab, forgotTab].forEach((tab) =>
        tab.classList.remove("bg-white", "bg-opacity-20")
    );
    if (active === "login") {
        loginTab.classList.add("bg-white", "bg-opacity-20");
        signupTab.classList.remove("bg-white", "bg-opacity-20");
    }
    if (active === "signup") {
        signupTab.classList.add("bg-white", "bg-opacity-20");
        loginTab.classList.remove("bg-white", "bg-opacity-20");
    }
    if (active === "forgot")
        forgotTab.classList.add("bg-white", "bg-opacity-20");
}

function switchToLogin() {
    currentForm = "login";
    showForm("login");
    updateTabStyles("login");
}

function switchToSignup() {
    currentForm = "signup";
    showForm("signup");
    updateTabStyles("signup");
}

function switchToForgotForm() {
    currentForm = "forgot";
    showForm("forgot");
    updateTabStyles("forgot");
}

/* -------------------
     Validation Functions
  ------------------- */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + "Error");
    error.textContent = message;
    error.classList.remove("hidden");
    input.classList.add("border-red-500");
}

function hideError(fieldId) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + "Error");
    error.classList.add("hidden");
    input.classList.remove("border-red-500");
}

// Real-time validation
document.querySelectorAll("input, select").forEach((el) => {
    el.addEventListener("blur", () => validateField(el.id));
    el.addEventListener("input", () => validateField(el.id));
});

function validateField(id) {
    const value = document.getElementById(id).value.trim();
    let error = "";

    switch (id) {
        case "loginEmail":
            if (!value) error = "Email is required.";
            else if (!isValidEmail(value)) error = "Invalid email format.";
            break;
        case "loginPassword":
            if (!value) error = "Password is required.";
            break;
        case "signupName":
            if (!value) error = "Full name is required.";
            break;
        case "signupEmail":
            if (!value) error = "Email is required.";
            else if (!isValidEmail(value)) error = "Invalid email format.";
            break;
        case "signupPassword":
            if (!value) error = "Password is required.";
            else if (value.length < 6)
                error = "Password must be at least 6 characters.";
            break;
        case "signupConfirmPassword":
            const pwd = document.getElementById("signupPassword").value;
            if (!value) error = "Please confirm your password.";
            else if (value !== pwd) error = "Passwords do not match.";
            break;
        case "signupRole":
            if (!value) error = "Please select a role.";
            break;
        case "forgotEmail":
            if (!value) error = "Email is required.";
            else if (!isValidEmail(value)) error = "Invalid email format.";
            break;
    }

    if (error) showError(id, error);
    else hideError(id);
}

/* -------------------
     Loading Functions
  ------------------- */
function disableButtonWithLoading(btnId, loadingText) {
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<svg class='w-5 h-5 animate-spin mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'></path></svg> ${loadingText}`;
    }
}

function resetButton(btnId, originalHtml) {
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalHtml;
    }
}

/* -------------------
     Form Submission with API Integration
  ------------------- */

// Login Form
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    validateField("loginEmail");
    validateField("loginPassword");

    if (
        !document
            .getElementById("loginEmailError")
            .classList.contains("hidden") ||
        !document
            .getElementById("loginPasswordError")
            .classList.contains("hidden")
    ) {
        return;
    }

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    disableButtonWithLoading("loginBtn", "Signing In...");

    const data = await fetchAPIData();
    console.log(data);

    if (data) {
        const result = findUser(data, email, password);
        console.log(result);
        
        console.log(result.role);
        if (result.role != 'organizer') {
            localStorage.removeItem('currentorganizerId')
            localStorage.removeItem('currentorganizerEmail')
            localStorage.removeItem('currentorganizerName')
        }
        else {
            localStorage.removeItem('currentaudienceId')
            localStorage.removeItem('currentaudienceEmail')
            localStorage.removeItem('currentaudienceName')
        }

        if (result) {
            const Id = `current${result.role}Id`;
            const name = `current${result.role}name`;
            const email = `current${result.role}email`;

            localStorage.setItem(
                "current" + result.role + "Id",
                result.user.id
            );
            localStorage.setItem(
                "current" + result.role + "Name",
                result.user.name
            );
            localStorage.setItem(
                "current" + result.role + "Email",
                result.user.email
            );

            showMessage(
                `Welcome back, ${result.user.name}! Login successful.`,
                "success"
            );
            console.log("User logged in:", result);

            setTimeout(() => {
                document.getElementById('loginModal').classList.add('hidden');
                const signInBtn = document.getElementById('signInBtn');
                const profileBtn = document.getElementById('profileBtn');
                const profileName = document.getElementById('pname');
                
                if (signInBtn && profileBtn) {
                    signInBtn.classList.add('hidden');
                    profileBtn.classList.remove('hidden');
                    profileName.innerText = localStorage.getItem('currentaudienceName')
                }
                
                location.href = ''
            }, 1500);
        } else {
            showMessage(
                "Invalid email or password. Please try again.",
                "error"
            );
        }
    }

    resetButton(
        "loginBtn",
        `<svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'></path></svg> <span>Sign In to Thigalzhi®</span>`
    );
});

// Signup Form
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    [
        "signupName",
        "signupEmail",
        "signupPassword",
        "signupConfirmPassword",
        "signupRole",
    ].forEach(validateField);

    if (
        !document
            .getElementById("signupNameError")
            .classList.contains("hidden") ||
        !document
            .getElementById("signupEmailError")
            .classList.contains("hidden") ||
        !document
            .getElementById("signupPasswordError")
            .classList.contains("hidden") ||
        !document
            .getElementById("signupConfirmPasswordError")
            .classList.contains("hidden") ||
        !document
            .getElementById("signupRoleError")
            .classList.contains("hidden")
    ) {
        return;
    }

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const role = document.getElementById("signupRole").value;

    disableButtonWithLoading("signupBtn", "Signing Up...");

    const data = await fetchAPIData();

    if (data) {
        if (!data.Organizers) data.Organizers = [];
        if (!data.Audience) data.Audience = [];

        const targetArray =
            role === "organizers" ? data.Organizers : data.Audience;

        if (emailExists(targetArray, email)) {
            showMessage(
                `Email already exists for ${role === "organizers" ? "Organizer" : "Audience"
                } role.`,
                "error"
            );
        } else {
            const newUser = {
                id: Date.now().toString(),
                name: name,
                email: email,
                password: password,
            };

            targetArray.push(newUser);

            const updated = await updateAPIData(data);

            if (updated) {
                showMessage(
                    `Account created successfully! Welcome to Thigalzhi®, ${name}!\n Redirecting to Login Page...`,
                    "success"
                );
                setTimeout(() => {
                    switchToLogin();
                }, 3000);
                signupForm.reset();
                console.log("New user created:", newUser);
            }
        }
    }

    resetButton(
        "signupBtn",
        `<svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'></path></svg> <span>Join Thigalzhi® Community</span>`
    );
});

// Forgot Password Form
forgotForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateField("forgotEmail");

    if (
        !document
            .getElementById("forgotEmailError")
            .classList.contains("hidden")
    ) {
        return;
    }

    disableButtonWithLoading("forgotBtn", "Sending...");

    setTimeout(() => {
        document
            .getElementById("resetSuccessMessage")
            .classList.remove("hidden");
        resetButton(
            "forgotBtn",
            `<svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'></path></svg> <span>Send Reset Instructions</span>`
        );
    }, 2000);

    emailjs.init("I6tYBX3EfLe8f1DWQ");

    const userEmail = document.getElementById("forgotEmail").value.trim();
    console.log(userEmail);

    function sendPasswordResetEmail(userEmail) {
        const templateParams = {
            email: userEmail,
            from_name: "Thigalzhi® Support Team",
        };

        emailjs
            .send("service_b67hzma", "template_p0szdc8", templateParams)
            .then(function (response) {
                alert("Password reset email sent successfully!");
            })
            .catch(function (error) {
                alert("Failed to send email: " + error);
            });
    }
    sendPasswordResetEmail(userEmail);
});

/* -------------------
     Password Toggle Functions
  ------------------- */
function togglePasswordVisibility(toggleId, inputId) {
    const toggle = document.getElementById(toggleId);
    const input = document.getElementById(inputId);
    toggle.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            toggle.innerHTML =
                '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path></svg>';
        } else {
            input.type = "password";
            toggle.innerHTML =
                '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>';
        }
    });
}

togglePasswordVisibility("loginPasswordToggle", "loginPassword");
togglePasswordVisibility("signupPasswordToggle", "signupPassword");
togglePasswordVisibility(
    "signupConfirmPasswordToggle",
    "signupConfirmPassword"
);

/* -------------------
     Event Listeners
  ------------------- */
// openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

loginTab.addEventListener("click", switchToLogin);
signupTab.addEventListener("click", switchToSignup);
forgotTab.addEventListener("click", switchToForgotForm);

switchToForgot.addEventListener("click", switchToForgotForm);
backToLogin.addEventListener("click", switchToLogin);

function focusFirstInput() {
    if (currentForm === "login")
        document.getElementById("loginEmail").focus();
    if (currentForm === "signup")
        document.getElementById("signupName").focus();
    if (currentForm === "forgot")
        document.getElementById("forgotEmail").focus();
}

// Close modal when clicking outside
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        closeModal();
    }
});
