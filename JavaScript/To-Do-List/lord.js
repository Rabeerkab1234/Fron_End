function addTask() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        // Create a new list item
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Add a delete button (span)
        const span = document.createElement("span");
        span.innerHTML = "×";
        li.appendChild(span);

        // Add the new item to the list
        listContainer.appendChild(li);

        // Clear the input box
        inputBox.value = "";
    }

    // Save data to local storage
    saveData();
}

// Event listener for marking tasks as completed or deleting them
document.getElementById("list-container").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the task
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save data to local storage
function saveData() {
    const listContainer = document.getElementById("list-container");
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load data from local storage
function loadData() {
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load saved data when the page loads
loadData();