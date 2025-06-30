window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').classList.add('d-none');
    document.getElementById('loginSection').classList.remove('d-none');
  }, 3000);
});

// Google login simulation
document.getElementById('continueBtn').addEventListener('click', () => {
  alert("✅ Google login successful (demo)");
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

  localStorage.setItem('userEmail', email);
  localStorage.setItem('userOTP', otp);

  alert("✅ Login successful!");
  showMainApp();
});

function showMainApp() {
  document.getElementById('loginSection').classList.add('d-none');
  document.getElementById('mainApp').classList.remove('d-none');
}

// Handle Search
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

  const results = document.getElementById('resultsSection');
  const container = document.getElementById('ticketResults');
  container.innerHTML = '';

  const ticketHTML = `
    <div class="card mb-3">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 class="card-title mb-1">${type === 'flight' ? 'IndiGo 6E-123' : 'VRL Travels'}</h5>
          <p class="card-text mb-0">${from} → ${to}</p>
          <small>${type === 'flight' ? '7:00 AM - 8:10 AM' : '10:00 AM - 3:00 PM'}</small>
        </div>
        <button class="btn btn-main" onclick="showSeatSelection()">Select Your Seat</button>
      </div>
    </div>
    <div id="seatSection" class="mt-4 d-none">
      <h5>Select Seat</h5>
      <div id="seatLayout" class="my-3"></div>
      <button class="btn btn-main" onclick="enterPassengerDetails()">Continue</button>
    </div>
    <div id="passengerSection" class="mt-4 d-none">
      <h5>Passenger Info</h5>
      <input class="form-control my-2" id="passengerName" placeholder="Full Name" />
      <input class="form-control my-2" id="passengerAge" placeholder="Age" type="number" />
      <input class="form-control my-2" id="passengerEmail" placeholder="Email" type="email" />
      <button class="btn btn-main mt-2" onclick="showSummary()">Continue</button>
    </div>
    <div id="summarySection" class="mt-4 d-none">
      <h5>Ticket Summary</h5>
      <p><strong>Seat:</strong> <span id="summarySeat"></span></p>
      <p><strong>Name:</strong> <span id="summaryName"></span></p>
      <p><strong>Email:</strong> <span id="summaryEmail"></span></p>
      <button class="btn btn-main mt-2" onclick="alert('🧾 Redirecting to Razorpay...')">Proceed to Pay ₹999</button>
    </div>
  `;

  container.innerHTML = ticketHTML;
  results.classList.remove('d-none');
});

function showSeatSelection() {
  const seatLayout = document.getElementById('seatLayout');
  seatLayout.innerHTML = '';
  for (let i = 1; i <= 12; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.textContent = i;
    seat.addEventListener('click', () => {
      document.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));
      seat.classList.add('selected');
      seatLayout.setAttribute('data-selected', i);
    });
    seatLayout.appendChild(seat);
  }
  document.getElementById('seatSection').classList.remove('d-none');
}

function enterPassengerDetails() {
  const selectedSeat = document.querySelector('.seat.selected');
  if (!selectedSeat) {
    alert("⚠️ Please select a seat.");
    return;
  }
  document.getElementById('passengerSection').classList.remove('d-none');
}

function showSummary() {
  const name = document.getElementById('passengerName').value.trim();
  const age = document.getElementById('passengerAge').value.trim();
  const email = document.getElementById('passengerEmail').value.trim();
  const selectedSeat = document.querySelector('.seat.selected');

  if (!name || !age || !email) {
    alert("⚠️ Please fill all passenger details.");
    return;
  }

  document.getElementById('summarySeat').textContent = selectedSeat.textContent;
  document.getElementById('summaryName').textContent = name;
  document.getElementById('summaryEmail').textContent = email;

  document.getElementById('summarySection').classList.remove('d-none');
}
