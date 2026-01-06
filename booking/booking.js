
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("serviceForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    
    const data = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      service: document.getElementById("service").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      notes: document.getElementById("notes").value.trim(),
    };

  
    const required = [data.name, data.email, data.phone, data.service, data.date, data.time];
    if (required.some(v => !v)) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

   
    const fileInput = document.getElementById("fileUpload");
    data.fileName = fileInput.files[0] ? fileInput.files[0].name : "";

   
const bookings = JSON.parse(localStorage.getItem("bookings")) || [];


const bookingEntry = {
  id: "BK-" + Date.now().toString().slice(-4),
  name: data.name,
  email: data.email,
  phone: data.phone,
  service: data.service,
  date: data.date,
  time: data.time,
  notes: data.notes,
  status: "Pending"
};


bookings.push(bookingEntry);


localStorage.setItem("bookings", JSON.stringify(bookings));


window.location.href = "confirmed.html";

  });
});