
const logMe = document.getElementById("signInButton");
const modal = document.getElementById("loginModal");
// kana lang sa di pako kamao
const validUsername = "kingbob123";
const validPassword = "123";

// show the login
function showLoginModal() {
    const modal = document.getElementById("loginModal");
    modal.classList.add("active");
}

// hide the login
function closeLoginModal() {
    const modal = document.getElementById("loginModal");
    modal.classList.remove("active");
}

// Automatically show login on page load
window.onload = function() {
    showLoginModal();
};

logMe.addEventListener('click', function(e) {
    modal.style.display = "block";
})


// Event listener for the login form submission
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    
    // Get user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check if username and password are correct
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        modal.style.display = "none";
        closeLoginModal(); 
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
// Event listener for "Sign In" button click
document.getElementById("signInButton").addEventListener("click", function(event) {
    event.preventDefault();
    showLoginModal();
}); 