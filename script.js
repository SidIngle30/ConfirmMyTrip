window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').classList.add('d-none');
    document.getElementById('loginSection').classList.remove('d-none');
  }, 3000);
});

// Google login simulation
document.getElementById('continueBtn').addEventListener('click', () => {
  alert("✅ Google login successful (demo only)");
  showMainApp();
});

// Email login
document.getElementById('emailLoginBtn').addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const otp = document.getElementById('otp').value.trim();

  if (!email || !otp) {
    alert("⚠️ Please enter both Email and OTP.");
    return;
  }

  // Save to localStorage
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userOTP', otp);

  alert("✅ Login successful!");
  showMainApp();
});

function showMainApp() {
  document.getElementById('loginSection').classList.add('d-none');
  document.getElementById('mainApp').classList.remove('d-none');
}

// Ticket Search
document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const from = document.getElementById('from').value.trim();
  const to = document.getElementById('to').value.trim();
  const date = document.getElementById('date').value;
  const type = document.getElementById('type').value;

  if (!from || !to || !date) {
    alert("⚠️ Please fill in all fields to search your trip.");
    return;
  }

  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
  });

  alert(`🔍 Searching for ${type.toUpperCase()} tickets:\nFrom: ${from}\nTo: ${to}\nDate: ${formattedDate}`);
});
