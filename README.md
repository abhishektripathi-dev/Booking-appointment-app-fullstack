# Booking Appointment App

## Overview
The **Booking Appointment App** is a web-based application designed to streamline appointment scheduling. Users can book, view, update, and delete appointments seamlessly without page refreshes. The app leverages a modern tech stack for efficiency and responsiveness.

## Features
- **User-Friendly Interface:** Built with HTML, CSS, and JavaScript for a clean and intuitive user experience.
- **Dynamic Functionality:** Supports operations like booking, updating, and canceling appointments without page refresh.
- **Backend Integration:** Express.js for server-side logic.
- **Database Management:** MySQL as the database, managed using Sequelize ORM.
- **API Communication:** Axios for making asynchronous HTTP requests.
- **Responsive Design:** Fully responsive for all devices.

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Express.js
- **Database:** MySQL (with Sequelize ORM)
- **HTTP Requests:** Axios

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/abhishektripathi-dev/Booking-appointment-app-fullstack.git
   cd booking-appointment-app
   ```

2. **Install Dependencies:**
   Ensure you have Node.js and npm installed.
   ```bash
   npm install
   ```

3. **Set Up the Database:**
   - Create a MySQL database.
   - Update the database configuration in `config/config.json`:
     ```json
     {
       "development": {
         "username": "root",
         "password": "password",
         "database": "node_complete",
         "host": "127.0.0.1",
         "dialect": "mysql"
       }
     }
     ```
   - Run migrations:
     ```bash
     npx sequelize-cli db:migrate
     ```

4. **Start the Server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

5. **Run the App:**
   Open your browser and navigate to `http://localhost:5000`.

## Project Structure
```
booking-appointment-app/
├── controllers/       # Contains the application controllers
├── models/            # Sequelize models  
├── util/              # Sequelize database
setup
├── routes/            # Express route definitions
├── views/             # HTML and frontend files
├── public/            # Static assets (CSS, JS)
├── config/            # Database configuration
├── app.js             # Main application file
└── package.json       # Project metadata and dependencies
```

## API Endpoints

### Users
- **GET /appointments**: Retrieve all appointments.
- **POST /appointments**: Create a new appointment.
- **PUT /appointments/:id**: Update an existing appointment.
- **DELETE /appointments/:id**: Delete an appointment.

## Features in Action
- **Asynchronous Operations:** Using Axios, all CRUD operations are performed without refreshing the page.
- **Responsive Design:** Ensures usability on desktops, tablets, and smartphones.

## Future Enhancements
- Add user authentication and authorization.
- Include email or SMS notifications for appointment reminders.
- Provide analytics for appointment statistics.

## Contributing
Contributions are welcome! Feel free to submit a pull request or report issues.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Axios](https://axios-http.com/)

---

