# Awesome Project Built with TypeORM

## 🚀 Steps to Run This Project

1. **Install Dependencies:**
   First, install the required dependencies by running:
   ```bash
   npm install
   ```

2. **Set Up Environment Variables:**
   Review the `.env.example` file and create a new file called `.env`. Once created, copy all the contents of the first file into the new one and fill in the corresponding details:

   - `PORT_APP = 3001` 
     - *This is the port where the API runs. No need to change it.*
   
   - `CLIENT_DOMAIN = http://localhost:5173` 
     - *This is the domain of the Next.js client (replace with your own). This is for CORS configuration.*
   
   - `API_DOMAIN = http://localhost:3001`  
     - *This is the API domain for internal communication.*
   
   - `TOKEN_SECRET = 40240919a71b422cd2bc0d638382b0e1accd89f06bc2977a426d30e7aa3b7416` 
     - *This key is for JWT. No need to change it, as it's a test value.*
   
   - `CLIENT_KEY = 6e068911b0e1a23bf78f2878fb8260a5facad07f5f516a240cbc62f0eea50ea0` 
     - *This is for establishing communication between the client and the API. No need to change it.*
   
   - **Database Variables / PostgreSQL:** 
     - Fill in the details for your PostgreSQL database:
     - `HOST = "localhost"`
     - `PORT = 5432`
     - `USER_NAME = "postgres"`
     - `PASSWORD = ***`
     - `DATA_BASE = "todosgamers"`

3. **Run the Project:**
   To start the project, use the following command:
   ```bash
   npm run dev
   ```
   This command compiles TypeScript into the `/build` directory and then runs the API.

4. **You’re All Set!**
   With these steps completed, you should be able to run the project.

## 📋 Project Details:

1. The architecture follows the MVC pattern.
2. Controller functions are used instead of classes.
3. Input data validation is handled with **express-validator**.
4. Middleware such as **cookie-parser**, **body-parser**, **cors**, and **morgan** are utilized for improved data handling.
5. User registration employs JWT with **bcrypt** for password hashing.
6. Errors are managed with a try-catch block, which intercepts and passes the error to the general error handler in `app.js`.
7. **TypeORM** is used for database manipulation through code.
8. **Multer** is implemented for handling images and storing them on the server.
9. The project is developed using **TypeScript**.

## 📱 Running the Project on Mobile:

To run the project on your mobile device, you will need the **Port Forwarding** functionality in Visual Studio Code.

1. Locate the "Port Forward" button in the console area:
   ![Port Forward](https://github.com/user-attachments/assets/d118f7cd-65b8-4d3c-83c6-d80795edf50e)

2. Click the button "Forward a Port" and ensure the port is set to **Public**:
   ![Make Port Public](https://github.com/user-attachments/assets/1473cc31-05da-4c7c-be8f-5a686dc7cd64)
   ![Public Port](https://github.com/user-attachments/assets/adb63f21-ef90-43db-bd38-a04c34511ba7)

3. This setup will allow you to quickly deploy the client and the API.

### 🌐 Update Credentials in `.env` for Mobile Access:
To ensure proper functionality, update the following two credentials in the `.env` file:

```env
CLIENT_DOMAIN = http://localhost:5173 --> https://visualStudioDomainClient.brs.devtunnels.ms
API_DOMAIN = http://localhost:3001  ---> https://visualStudioDomainApi.brs.devtunnels.ms
```
