document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
  
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // Password strength validation (add your own criteria)
    if (password.length < 8) {
      alert('Password should be at least 8 characters long');
      return;
    }
  
    // If all validations pass, show confirmation message
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('confirmationMessage').classList.remove('hidden');
  });
  