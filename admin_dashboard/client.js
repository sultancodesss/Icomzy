document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("clientsTable");
  const doneBtn = document.getElementById("doneBtn");

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  // Create a working copy (IMPORTANT)
  let tempBookings = JSON.parse(JSON.stringify(bookings));

  if (tempBookings.length === 0) {
    table.insertAdjacentHTML(
      "beforeend",
      `<tr>
        <td colspan="5" style="text-align:center; padding:1rem; color:#64748b;">
          No clients found.
        </td>
      </tr>`
    );
    return;
  }

  function renderTable() {
    table.querySelectorAll("tr:not(:first-child)").forEach(r => r.remove());

    tempBookings.forEach((b, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${b.id}</td>
        <td>${b.name}</td>
        <td>${b.service}</td>
        <td>
          <select data-index="${index}">
            <option value="Pending" ${b.status === "Pending" ? "selected" : ""}>Pending</option>
            <option value="Confirmed" ${b.status === "Confirmed" ? "selected" : ""}>Confirmed</option>
            <option value="Completed" ${b.status === "Completed" ? "selected" : ""}>Completed</option>
          </select>
        </td>
        <td>
          <button class="btn btn-outline delete" data-index="${index}">
            Delete
          </button>
        </td>
      `;

      table.appendChild(row);
    });
  }

  // Handle status change (TEMP ONLY)
  table.addEventListener("change", (e) => {
    if (e.target.tagName === "SELECT") {
      const index = e.target.dataset.index;
      tempBookings[index].status = e.target.value;
    }
  });

  // Handle delete (TEMP ONLY)
  table.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      const index = e.target.dataset.index;
      if (confirm("Delete this client?")) {
        tempBookings.splice(index, 1);
        renderTable();
      }
    }
  });

  // DONE button → SAVE & GO BACK
  doneBtn.addEventListener("click", () => {
    localStorage.setItem("bookings", JSON.stringify(tempBookings));
    alert("Changes saved successfully");
    window.location.href = "dash.html";
  });

  renderTable();
});
