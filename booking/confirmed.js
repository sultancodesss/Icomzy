
function generateBookingId() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(Math.random() * 1000);
  return `#BK-${year}-${month}${day}-${random}`;
}

function goToDashboard() {
  alert('Dashboard pe ja rahe hain...');
 
}

function bookAnother() {
  localStorage.removeItem("bookingData");
  window.location.href = "booking.html";
}

function printConfirmation() {
  window.print();
}

window.addEventListener("load", () => {
  
  const raw = localStorage.getItem("bookingData");
  if (!raw) {
    
    alert("No booking data found. Redirecting to booking page.");
    window.location.href = "booking.html";
    return;
  }

  const data = JSON.parse(raw);


  document.getElementById("bookingId").textContent = generateBookingId();
  document.getElementById("cName").textContent = data.name || "-";
  document.getElementById("cEmail").textContent = data.email || "-";
  document.getElementById("cPhone").textContent = data.phone || "-";
  document.getElementById("cService").textContent = data.service || "-";
  document.getElementById("cDate").textContent = data.date || "-";
  document.getElementById("cTime").textContent = data.time || "-";
  document.getElementById("cFile").textContent = data.fileName || "No file";
  document.getElementById("cNotes").textContent = data.notes || "-";

  
  const card = document.querySelector(".confirmation-card");
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  setTimeout(() => {
    card.style.transition = "all 0.5s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 100);
});