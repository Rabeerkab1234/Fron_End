const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

const renderCalendar = () => {
    // Get the first day of the month and the last date of the month
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // Day of the week (0–6)
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // Last date of the month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // Day of the week for the last date
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // Last date of the previous month

    let liTag = "";

    // Add inactive days from the previous month
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // Add active days for the current month
    for (let i = 1; i <= lastDateofMonth; i++) {
        // Highlight the current day
        let isToday = 
            i === date.getDate() && 
            currMonth === new Date().getMonth() && 
            currYear === new Date().getFullYear()
            ? "active"
            : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    // Add inactive days from the next month
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    // Update the current date display
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
};

renderCalendar();

// Add event listeners for previous and next icons
prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        // Update the current month and year
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        // Handle month overflow
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }

        renderCalendar();
    });
});