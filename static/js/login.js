document.readyState === 'complete' ? init() : window.onload = init;

function init() {
    wijmo.setLicenseKey('Hackathon,682396222396697#B0MZtVFdDRNpWU5EkRBdTR9YUbuh4QyJnMqhjQmVmM7UlcMZ6NNlXRZl6dvdke5FGWhVWTQ5WZnlGZFNUVwhmSP96UvNVQ9MWaxJFOupmZ8UVbD3SVHtScJJFdtlTUZ3Uav2kWh5Ee6YDb5YjNRVkWN5Ge8FWS724YjJ7Z8VGUOtmZ7E7Vyc7bkdEMVF5bTRDTshVYvo6KPpUQwdlQyNkSaJXV7FzQiV7MOVWOTpkaGZDM6dGc7k5RYxma0hzQycXTqZzcyATUHlGbrYjR6NGaUZHMsJEWQ9UVrFEaLlkZuBVSEFXZrllcoVzYjdWTVFWTiojITJCLiIjN6gzNCRENiojIIJCL4UTO8kTO9YTM0IicfJye35XX3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTis7W0ICZyBlIsISN5ETM6ADI6ETNwIjMwIjI0ICdyNkIsICNxgDMyIDMyIiOiAHeFJCLi86boRXYrNWYIJiOiEmTDJCLicTO6YTOzIjMyYTOzIDO6IiOiQWSiwSfdtlOicGbmJCLiEjdyIDMyIiOiIXZ6JCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPRtGOWJ4LZpmcMJmakhlZ6g7czEkY7IlNZRkTmh6UV9UT6YldKdXM6ZlcyZmaTJ4Svw4ULpGWi5Gd6NVU7RUQ9Bjeoh4RqxkSoBXYKZHNpFWZYFTeiJVRvl7b8g7NzYGNDFFZLRyT');
    // Array of user names to populate the ComboBox
    var users = 'Chloe Hunt,Patrick Russel,Alisa Malone,Kendal Herbert'.split(',');
    // Creates ComboBox and binds to data
    var theCombo = new wijmo.input.ComboBox('#userDropdown', {
        itemsSource: users,
        placeholder: "User",
        text: "test",
    });
}