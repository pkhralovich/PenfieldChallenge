
# PenfieldDigital technical challenge

## Results & expected use

I wasn't able to learn how to work with Salesforce Marketing Cloud, so I tried to simulate the desired behaviour with some extra work. The results are a backend with the following endpoints:
   - POST /sale/:customerId: it creates a sale associated with the given customerId. The customerId must exist in the database. In the initialization script, a default user is created with the first ID associated with MySQL (it should be 1).
   - POST /survey: it uploads the survey answer. The survey must be associated with a valid sale that was previously created. Once done, it creates a new Voucher in the database. Each survey object contains 5 numbers representing some questions, the associated saleId and also an optional comment with less than 300 characters.

On the Frontend side, I created one page that contains the entire survey and the business logic. To access the survey you should call an URL with values in some query params (for example http://localhost:4000/?user=pavel&sale=1). The idea was that when a customer receives the first email, it clicks on a button that makes him navigate to this URL. If you don't put values into these params, the URL will show an error. 

After the survey is completed, the voucher is shown on the page. The idea was to trigger a Journey Event that also sends the voucher through email. 


## Work environment

For my local environement I used the following versions:

 - MySQL 8.0.23
 - npm 7.19.0
 - NodeJS 16.4.1

For the development I was working with MySQL Workbench, Visual Studio Code, Postman and Mozilla Firefox.
I also tested the website with Microsoft Edge and Google Chrome. I assume that the final result should work with Safari or Opera, but it shouldn't with Internet Explorer.


## System setup
The steps that should be followed are:

 1. Check the installation of MySQL, NodeJS and npm.
 2. Clone the repo in your local system
 3. Navigate inside the "backend" folder and run `npm install`.
 4. Create a .env file in the folder. You can find an example just below ot this list.
 5. Create a MySQL username with the values that you used in the .env file.
 6. Execute the SQL script in `backend/db_schema.sql`
 7. Run the command `node server.js` and check that the server is able to connect to the database.
 8. Navigate inside the "frontend" and run `npm install`.
 9. Create a .env file in the folder. You can find an example just below ot this list.
 10. Run the command `npm start`. 
 11. Navigate to the URL and port of your frontend an create a user in the signup screen
 12. Execute several POST /sale/1 - This user is defined in the db_schema.sql file, the call is going to create a sale for each call associated to the current user.
 
**Backend env file example** <br>
`PORT = 3001`<br>
`DB_HOST = localhost` <br>
`DB_NAME = penfield` <br>
`DB_USER = penfield` <br>
`DB_PASS = penfield1234` <br>
`SECRET = mostsecurekeyintheworld` <br>

**Frontend env file example** <br>
`REACT_APP_API_PORT = 3001`<br>
`PORT = 3000`<br>

## Database
I choosed **MySQL 8.0** as my DBMS for time reasons, as I already had it installed in my environement.

## Frontend organization
Inside the "src" folder of the frontend, we can find the following folders:

 - **Assets:** contains a general CSS file and a folder with some images used for the development.
 - **Components:** contains the components organized by folders. Each component has its own CSS file.
 - **Pages:** contains the pages available in the system.
 - **Services:** contains some HTTP services, the API config.

## Frontend libraries
I only added one library during the development. It was [**axios**](https://www.npmjs.com/package/axios) to be able to make HTTP calls in a simple way. 
  
## Backend organization

In this case, the organization is the typical one of a Backend project. We can find the following folders:

 - **Controllers:** containing the business logic of the backend.
 - **Routes:** containing the available endpoints configuration.
 - **Models:** containing my database models.
 - **Utilities:** containing several files with helper methods.

## Backend libraries
The libraries used for the backend development are:

 - [**Cors**](https://www.npmjs.com/package/cors): to configure CORS headers in the server.
 - [**Dotenv**](https://www.npmjs.com/package/dotenv): to parse the .env file
 - [**Joi**](https://www.npmjs.com/package/joi): to validate the data received in the API calls.
 - [**Sequelize**](https://www.npmjs.com/package/sequelize): SQL ORM to connect to my database


