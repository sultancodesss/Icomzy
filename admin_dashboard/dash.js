
const menuLinks = document.querySelectorAll('.nav a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


const searchInput = document.querySelector('.search');
const tableRows = document.querySelectorAll('table tr');

if (searchInput) {
  searchInput.addEventListener('keyup', () => {
    const value = searchInput.value.toLowerCase();

    tableRows.forEach((row, index) => {
      if (index === 0) return; 

      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(value) ? '' : 'none';
    });
  });
}

const addServiceBtn = document.querySelector('.btn-primary');

if (addServiceBtn) {
  addServiceBtn.addEventListener('click', () => {
    alert('Add Service clicked (form can be added later)');
  });
}


const statuses = document.querySelectorAll('.status');

statuses.forEach(status => {
  status.addEventListener('click', () => {
    alert('Current status: ' + status.innerText);
  });
});


const cards = document.querySelectorAll('.stat-card, .card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
    card.style.transition = '0.2s';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});


const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("icomzy_user");
    localStorage.removeItem("icomzy_pass");
    alert("Logged out successfully");
    window.location.href = "/login/login.html";
  });
}
