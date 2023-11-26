// profile.js
function displayImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector('.profile-picture').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function enableEdit() {
  const inputs = document.querySelectorAll('#profileForm input');
  inputs.forEach(input => {
    input.removeAttribute('disabled');
  });

  document.querySelector('.edit-btn').style.display = 'none';
  document.querySelector('.save-btn').style.display = 'inline-block';
}

function saveChanges() {
  const inputs = document.querySelectorAll('#profileForm input');
  inputs.forEach(input => {
    input.setAttribute('disabled', 'true');
  });

  document.querySelector('.edit-btn').style.display = 'inline-block';
  document.querySelector('.save-btn').style.display = 'none';
}

// Get the user type (admin/user) from your authentication system
const userType = 'Admin'; // Change this based on the logged-in user type

// Update the welcome message based on the user type
document.getElementById('userType').innerText = userType;
