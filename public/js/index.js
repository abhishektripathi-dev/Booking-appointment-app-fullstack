const form = document.getElementById("myForm");
let updateId = null; // Track ID for updates

console.log(updateId);

// Handle form submission
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (!name || !phone || !email) {
        alert("All fields are required.");
        return;
    }

    try {
        if (updateId) {
            // Update existing user
            console.log(updateId);
            await axios.put(`http://localhost:5000/users/${updateId}`, {
                name,
                phone,
                email,
            });
            updateId = null; // Reset update ID
        } else {
            // Add new user
            await axios.post("http://localhost:5000/add-item", {
                name,
                phone,
                email,
            });
        }

        clearForm();
        getUsers();
    } catch (error) {
        console.error(error);
    }
});

// Fetch and load users on page load
window.addEventListener("DOMContentLoaded", () => {
    getUsers();
});

const getUsers = async () => {
    try {
        const response = await axios.get("http://localhost:5000/users");
        loadData(response.data.users);
    } catch (error) {
        console.error(error);
    }
};

const loadData = (users) => {
    let count = 1;
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = `
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                `;
    users.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                        <td>${count++}</td>
                        <td>${user.name}</td>
                        <td>${user.phone}</td>
                        <td>${user.email}</td>
                        <td>
                            <button onclick="populateForm(${user.id})">Update</button>
                            <button onclick="deleteUser(${user.id})">Delete</button>
                        </td>
                    `;
        tableBody.appendChild(row);
    });
};

const populateForm = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        const user = response.data.user;

        document.getElementById("name").value = user.name;
        document.getElementById("phone").value = user.phone;
        document.getElementById("email").value = user.email;

        updateId = id; // Set ID for updating
    } catch (error) {
        console.error(error);
    }
};

const deleteUser = async (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers(); // Refresh user list after deletion
        } catch (error) {
            console.error(error);
        }
    }
};

const clearForm = () => {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    updateId = null; // Reset update state
};
