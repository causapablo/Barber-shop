<p align='left'>
    <img src='https://w7.pngwing.com/pngs/761/826/png-transparent-hair-clipper-comb-cosmetologist-hair-cutting-shears-barber-scissors-angle-triangle-technic.png' style="height:64px;" </img>
</p>

# Barber-shop

## Introduction

This is a  group project 

## Project Objetives


## Stack of Technologies

### Front End:
HTML, CSS, Javascript, React, React-Bootstrap, Redux

### Back End:
Node.js, Express, Passport, Json web token authentication, Nodemailer, Sequelize.

### Database:
PostgreSQL

## **Starting Instructions** 

__IMPORTANT:__ Necesary version of node and NPM 

 * __Node__: 12.18.3 or higher
 * __NPM__: 6.14.16 or higher

 
## BoilerPlate

The boilerPlate has two folders: `backend` and `frontend`.

Inside `backend` you must have to create a file called: `.env` 
that has the following form: 

```
DB_USER=postgresuser
DB_PASSWORD=postgrespassword
DB_HOST=localhost

DB_KEY=keyword

TWIT_ID=10hJi7gdjODCavCqGJ08vfYCf
TWIT_SECRET=xgBMzGvj6TPt9Kmb8SxcuFP4WFhZLx3O4jgY7ySleENKhDNpMd
```

You have to replace `postgresuser` and `postgrespassword` with your own credentials to connect to postgres database. This file will be ignored by github, as it contains sensitive information (the credentials).

The DB_KEY is a random security keyword, you can change or keep it.  

The TWIT_ID and TWIT_SECRET info is important to keep it. 

## Next 
### _Connect the data base_

 - Go to your postgres database manager and create a new   database called `development`, this is the name of the database to which we will connect.

### _Install the necesary package to run it_

- Open the project console
    + Inside `backend` folder, run the command line, `npm install`
    + Inside `frontend` folder, run the command line, `npm install` 

### _Run the project_

- Open the project console
    + Inside `backend` folder, run the command line, `npm start`
        
    + Inside `frontend` folder, run the command line, `npm start` (go to http://localhost:3000/) 

# For testing

- You can find in `frontend/index.js`
    + `conn.sync({ force: false })`, switch it between " true " ( if you want reset database in each loaded ) or " false "( if you dont want reset database in each loaded ) 

- You can use a testing admin user with login credentials:
    + username : `admin@cyberfitness.com`
    + password : `masterpass`


# Project Screens 

- Landing-Page
![Landing-ecommerce]()

- Register, we can do it using the ecommerce platform (by form) or authenticate with github, google or twitter.
![register]()

 - Welcome message when we get registered
![mail]()

 - Catalogue with products
![Catalogue-ecommerce]()

 - Products in detail
![Products-detail]()

 - Cart
![cart]()

- Checkout. You can pay using paypal or with a debit/credit card
![Checkout]()

- Profile
![profile]() 

 - We can add reviews to the products that we had purchase
![add-review]()

 - After add a review we can see it in products-detail
![reviews-footer]()

- There is an admin section where we have a CRUD of products, categories, orders and users.
![Admin-panel]()
