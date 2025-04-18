// Function to update the calendar with the current date
function updateCalendar() {
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.querySelector('.month').textContent = monthNames[date.getMonth()];
    document.querySelector('.day').textContent = dayNames[date.getDay()];
    document.querySelector('.date').textContent = date.getDate();
    document.querySelector('.year').textContent = date.getFullYear();
}

// Update the calendar immediately and every minute
updateCalendar();
setInterval(updateCalendar, 60000);