// Function to load profile data from localStorage
function loadProfile() {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
        const profileData = JSON.parse(storedProfile);
        document.getElementById("userName").innerText = profileData.name || '......';
        document.getElementById("userEmail").innerText = profileData.email || '......';
        document.getElementById("profilePic").src = profileData.profilePicture || '......';
    }
}

// Function to open the edit profile modal
function editProfile() {
    // Pre-fill the input fields with current profile data
    document.getElementById("newName").value = document.getElementById("userName").innerText;
    document.getElementById("newEmail").value = document.getElementById("userEmail").innerText;

    // Display the modal
    document.getElementById("editModal").style.display = "block";
}

// Function to close the edit profile modal
function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

// Function to update the profile details and store in localStorage
function updateProfile() {
    var newName = document.getElementById("newName").value;
    var newEmail = document.getElementById("newEmail").value;
    var newProfilePic = document.getElementById("profilePicture").files[0];

    if (newName.trim() !== "" && newEmail.trim() !== "") {
        // Create an object to hold the profile data
        const profileData = {
            name: newName,
            email: newEmail,
            profilePicture: ''
        };

        // Update profile picture if a new file is selected
        if (newProfilePic) {
            var reader = new FileReader();
            reader.onload = function(e) {
                profileData.profilePicture = e.target.result;
                localStorage.setItem('userProfile', JSON.stringify(profileData)); // Store updated profile in localStorage
                loadProfile();  // Reload profile data from localStorage
            };
            reader.readAsDataURL(newProfilePic);
        } else {
            // Save profile data without picture
            localStorage.setItem('userProfile', JSON.stringify(profileData));
            loadProfile(); // Reload profile data from localStorage
        }

        // Close the modal after saving changes
        closeModal();
    } else {
        alert("Please fill out all fields.");
    }
}

// Initialize the profile on page load
window.onload = loadProfile;
