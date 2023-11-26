// Sample driver data (can be retrieved from a database or API)
const drivers = [
    { name: "John Doe", id: "D123", idkendaraan: "V001" , phone: "123-456-7890", address: "123 Main St" },
    { name: "Jane Smith", id: "D456", idkendaraan: "V002" , phone: "456-789-0123", address: "456 Elm St" }
    // Add more driver data as needed
  ];
  
  // Function to display drivers in the table
  function displayDrivers() {
    const tbody = document.querySelector('.driver-table tbody');
  
    // Clear existing data
    tbody.innerHTML = '';
  
    // Populate the table with driver data
    drivers.forEach(driver => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${driver.name}</td>
        <td>${driver.id}</td>
        <td>${driver.idkendaraan}</td>
        <td>${driver.phone}</td>
        <td>${driver.address}</td>
        <td>
          <button class="delete-btn">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Function to add a new driver
  function addDriver() {
    // Implement logic to add a new driver here or redirect to an add driver page
    alert('Implement logic to add a new driver');
  }
  
  // Add event listener for the "Add Driver" button
  const addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', addDriver);
  
  // Add event listener for the "Delete" button (event delegation)
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
      // Implement logic to delete driver here
      const row = event.target.closest('tr');
      row.remove();
      // Add logic to delete driver from the database or API
    }
  });
  
  // Display drivers when the page loads
  displayDrivers();
  