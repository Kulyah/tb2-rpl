// Sample delivery data (can be retrieved from a database or API)
let deliveries = [
    { id: 1, idKendaraan: 101, namaSupir: 'John Doe', noResi: 'R12345', alamatPenerima: '123 Main St', namaPenerima: 'Alice', statusDelivery: 'Pending' },
    { id: 2, idKendaraan: 102, namaSupir: 'Jane Smith', noResi: 'R67890', alamatPenerima: '456 Elm St', namaPenerima: 'Bob', statusDelivery: 'Completed' }
    // Add more delivery data as needed
  ];
  
  // Function to display deliveries in the table
  function displayDeliveries() {
    const tbody = document.querySelector('.delivery-table tbody');
  
    // Clear existing data
    tbody.innerHTML = '';
  
    // Populate the table with delivery data
    deliveries.forEach(delivery => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${delivery.idKendaraan}</td>
        <td>${delivery.namaSupir}</td>
        <td>${delivery.noResi}</td>
        <td>${delivery.alamatPenerima}</td>
        <td>${delivery.namaPenerima}</td>
        <td>${delivery.statusDelivery}</td>
        <td>
          <button class="delete-btn" data-id="${delivery.id}">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Function to add a new delivery
  function addDelivery(newDelivery) {
    deliveries.push(newDelivery);
    displayDeliveries();
  }
  
  // Function to delete a delivery
  function deleteDelivery(deliveryId) {
    deliveries = deliveries.filter(delivery => delivery.id !== deliveryId);
    displayDeliveries();
  }
  
  // Add event listener for the "Add Delivery" button
  const addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', () => {
    const newDelivery = {
      id: deliveries.length + 1, // Generate unique ID
      idKendaraan: 103, // Example value, update with actual data
      namaSupir: 'New Driver', // Example value, update with actual data
      noResi: 'R54321', // Example value, update with actual data
      alamatPenerima: '789 Oak St', // Example value, update with actual data
      namaPenerima: 'Charlie', // Example value, update with actual data
      statusDelivery: 'Pending' // Example value, update with actual data
    };
    addDelivery(newDelivery);
  });
  
  // Add event listener for the "Delete" button (event delegation)
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
      const deliveryId = parseInt(event.target.dataset.id);
      deleteDelivery(deliveryId);
    }
  });
  
  // Display deliveries when the page loads
  displayDeliveries();
  