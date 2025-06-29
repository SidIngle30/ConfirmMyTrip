
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
