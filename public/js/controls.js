document.readyState === 'complete' ? init() : window.onload = init;

function init() {
    wijmo.setLicenseKey('Hackathon,682396222396697#B0MZtVFdDRNpWU5EkRBdTR9YUbuh4QyJnMqhjQmVmM7UlcMZ6NNlXRZl6dvdke5FGWhVWTQ5WZnlGZFNUVwhmSP96UvNVQ9MWaxJFOupmZ8UVbD3SVHtScJJFdtlTUZ3Uav2kWh5Ee6YDb5YjNRVkWN5Ge8FWS724YjJ7Z8VGUOtmZ7E7Vyc7bkdEMVF5bTRDTshVYvo6KPpUQwdlQyNkSaJXV7FzQiV7MOVWOTpkaGZDM6dGc7k5RYxma0hzQycXTqZzcyATUHlGbrYjR6NGaUZHMsJEWQ9UVrFEaLlkZuBVSEFXZrllcoVzYjdWTVFWTiojITJCLiIjN6gzNCRENiojIIJCL4UTO8kTO9YTM0IicfJye35XX3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTis7W0ICZyBlIsISN5ETM6ADI6ETNwIjMwIjI0ICdyNkIsICNxgDMyIDMyIiOiAHeFJCLi86boRXYrNWYIJiOiEmTDJCLicTO6YTOzIjMyYTOzIDO6IiOiQWSiwSfdtlOicGbmJCLiEjdyIDMyIiOiIXZ6JCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPRtGOWJ4LZpmcMJmakhlZ6g7czEkY7IlNZRkTmh6UV9UT6YldKdXM6ZlcyZmaTJ4Svw4ULpGWi5Gd6NVU7RUQ9Bjeoh4RqxkSoBXYKZHNpFWZYFTeiJVRvl7b8g7NzYGNDFFZLRyT');
    // Retrieves data from API
    function getData() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'https://mocki.io/v1/1b128feb-d87d-4078-acba-a82372033779', false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.response);
    }
    var data = getData();
    // Creates FlexGrid and binds it to data
    var flexGrid = new wijmo.grid.FlexGrid('#theGrid', {
        autoGenerateColumns: false,
        // Defines the width and numeric format of the columns
        columns: [
            { binding: 'country', header: 'Country', width: '2*' },
            { binding: 'sales', header: 'Sales', width: '*', format: 'c2' },
            { binding: 'expenses', header: 'Expenses', width: '*', format: 'c2' }
        ],
        selectionMode: 'Row',
        itemsSource: data
    });

    // Creates FlexChart and binds it to data
    var flexChart = new wijmo.chart.FlexChart('#theChart', {
        header: 'Sales and Expenses by Country',
        legend: { position: wijmo.chart.Position.Bottom },
        // Binds the X axis of the FlexChart
        bindingX: 'country',
        // Binds the series of data to be displayed
        series: [
            { binding: 'sales', name: 'Sales' },
            { binding: 'expenses', name: 'Expenses' }
        ],
        // Sets the color palette
        palette: ['rgb(22, 186, 208)', 'rgb(62, 207, 142)'],
        itemsSource: data
    });

    //Creates Filter and binds it to FlexGrid
    var filter = new wijmo.grid.filter.FlexGridFilter(flexGrid);

    // Gets the JWT used for Weavy
    function getJWTToken() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'http://localhost:3000/token', false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.response);
    }

    var response = getJWTToken();
    // JSONWebToken for Weavy
    var jwt = response.value;
    var username = response.name;

    document.getElementById('userName').innerText = document.getElementById('userName').innerText + ' ' + username;
}