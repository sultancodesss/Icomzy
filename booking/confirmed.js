

function bookAnother() {
  window.location.href = "booking.html";
}

function printConfirmation() {
  window.print();
}

window.addEventListener("load", () => {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  if (bookings.length === 0) {
    alert("No booking data found. Redirecting to booking page.");
    window.location.href = "booking.html";
    return;
  }

  // Get latest booking
  const data = bookings[bookings.length - 1];

  document.getElementById("bookingId").textContent = data.id;
  document.getElementById("cName").textContent = data.name || "-";
  document.getElementById("cEmail").textContent = data.email || "-";
  document.getElementById("cPhone").textContent = data.phone || "-";
  document.getElementById("cService").textContent = data.service || "-";
  document.getElementById("cDate").textContent = data.date || "-";
  document.getElementById("cTime").textContent = data.time || "-";
  document.getElementById("cFile").textContent = data.fileName || "No file";
  document.getElementById("cNotes").textContent = data.notes || "-";

  // animation (kept exactly as is)
  const card = document.querySelector(".confirmation-card");
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  setTimeout(() => {
    card.style.transition = "all 0.5s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 100);
});
