// Sample delivery status data (can be retrieved from a database or API)
let deliveryStatuses = [
    { noResi: 'R12345', alamatPenerima: '123 Main St', namaPenerima: 'Alice', namaKurir: 'John Doe', noHpKurir: '123-456-7890', tanggalPembelian: '2023-01-15', tanggalSampai: '2023-01-20' },
    { noResi: 'R67890', alamatPenerima: '456 Elm St', namaPenerima: 'Bob', namaKurir: 'Jane Smith', noHpKurir: '456-789-0123', tanggalPembelian: '2023-02-10', tanggalSampai: '2023-02-15' }
    // Add more delivery status data as needed
  ];
  
  // Function to display delivery statuses in the table
  function displayDeliveryStatuses() {
    const tbody = document.querySelector('.status-table tbody');
  
    // Clear existing data
    tbody.innerHTML = '';
  
    // Populate the table with delivery status data
    deliveryStatuses.forEach(status => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${status.noResi}</td>
        <td>${status.alamatPenerima}</td>
        <td>${status.namaPenerima}</td>
        <td>${status.namaKurir}</td>
        <td>${status.noHpKurir}</td>
        <td>${status.tanggalPembelian}</td>
        <td>${status.tanggalSampai}</td>
        <td>
          <button class="delete-btn">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Function to add a new delivery status
  function addDeliveryStatus(newStatus) {
    deliveryStatuses.push(newStatus);
    displayDeliveryStatuses();
  }
  
  // Function to delete a delivery status
  function deleteDeliveryStatus(rowIndex) {
    deliveryStatuses.splice(rowIndex, 1);
    displayDeliveryStatuses();
  }
  
  // Add event listener for the "Add Status" button
  const addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', () => {
    const newStatus = {
      noResi: 'R54321', // Example value, update with actual data
      alamatPenerima: '789 Oak St', // Example value, update with actual data
      namaPenerima: 'Charlie', // Example value, update with actual data
      namaKurir: 'New Courier', // Example value, update with actual data
      noHpKurir: '789-012-3456', // Example value, update with actual data
      tanggalPembelian: '2023-03-05', // Example value, update with actual data
      tanggalSampai: '2023-03-10' // Example value, update with actual data
    };
    addDeliveryStatus(newStatus);
  });
  
  // Add event listener for the "Delete" button (event delegation)
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
      const row = event.target.closest('tr');
      const rowIndex = Array.from(row.parentNode.children).indexOf(row);
      deleteDeliveryStatus(rowIndex);
    }
  });
  
  // Display delivery statuses when the page loads
  displayDeliveryStatuses();
  