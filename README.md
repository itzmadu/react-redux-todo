# 📋 React-Redux-ToDo

## 💻 Technologies and Dependencies Used
- Node.js + React + Redux
- MongoDB
- **Express** dependency: API creation to handle ToDo task management
- **Mongoose** dependency: Interaction with MongoDB
- **CORS** dependency: Allows requests from other sources (e.g. the frontend)
- **dotenv** dependency: Loads environment variables

## ❔ How to use
1. Install all dependencies with ``npm install``
2. Configure a ``.env`` file under the ``react-redux-todo/`` folder with the following variable:
    2.1: ``MONGODB_URI``: upload your connection string for MongoDB
3. Run ``node backend/src/Server.js`` to execute the server-side and connect to the database