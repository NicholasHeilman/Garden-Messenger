# GardenHere

A web app used to save and view communication between a a small user group.  This is a work in progress exampple of a message board app design for a mobile platform.




## Create database and table

Create a new database called `solo_garden` and create tables with 

./Database/garden_postgres_create.sql

If you would like to name your database something else, you will need to change `solo_garden` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions 

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecretServerSession
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecretServerSession` with some long random string like  Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Built with 

* React
* React-Redux
* PostgreSQL
* Node.js
* Express
* Material-ui
* SweetAlerts
* Moment.js
* Passport