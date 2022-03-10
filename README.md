# API-Server
It was created to help you to understand how we can use api testing
## Dependencies
`npm instal`
## Running Server
`npm start`
## To validate the CRUD you can use POSTMAN
Examples:

## `Get: http://localhost:3000/booking/ or http://localhost:3000/booking/{id}`

## `POST: http://localhost:3000/booking`
Json:
{
    "name": "LastName FirstName",
    "country": "USA",
    "phone": "3112334564",
    "active": true
}
## `PUT: http://localhost:3000/booking`
Json:
{
    "name": "Edited FirstName",
    "country": "Japan"
}
## `PUT: http://localhost:3000/booking/{id}`