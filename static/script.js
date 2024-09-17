let csvData = []; // This will store the entire CSV data

// Fetch CSV data from Flask backend
function fetchCSVData() {
    fetch('/get-data')
        .then(response => response.json())
        .then(data => {
            csvData = data; // Store the full dataset
            displayCSVData(csvData.slice(0, 20)); // Display only the first 20 rows by default
        })
        .catch(error => console.error('Error fetching CSV data:', error));
}

// Function to display CSV data in the table
function displayCSVData(data) {
    const tableBody = document.querySelector("#csvTable tbody");
    tableBody.innerHTML = ""; // Clear the table before displaying new data

    data.forEach(row => {
        const rowElement = document.createElement("tr");

        row.forEach(cell => {
            const cellElement = document.createElement("td");
            cellElement.textContent = cell;
            rowElement.appendChild(cellElement);
        });

        tableBody.appendChild(rowElement);
    });
}

// Function to search through the entire CSV data
function searchCSV() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const filteredData = csvData.filter(row => {
        return row.join(" ").toLowerCase().includes(input); // Filter rows based on the search input
    });

    displayCSVData(filteredData); // Display the filtered results
}

// Initialize fetching CSV data when the page loads
window.onload = fetchCSVData;
