# Minaa Server

[server-minaa](https://github.com/jakinyang/server-minaa)

Project contributors: Russel Mueller @Bohjaangles, Jae Chun Yang @jakinyang, Benjamin Meng @Benjamin0203

Minaa is an app that was made as a school final project for proof of concept and demonstation purposes.

server-minaa is a repository that serves as the back-end for the project. The server can take GraphQL queries from the Minaa client and send back efficient responses without overfetching or underfetching.

Minaa's server is built on top of the Prisma Object Relational Mapper and implements a GraphQL API through Apollo Server.

## Requirements
- node v16.18.1
- A relational database

## Installation
- To install all dependencies run: 
```
npm i
```
- To start the server run:
```
npm start
```
- If the server is running on port 4000, to interact with the database open your browser to:
```
http://localhost:4000
```

## Dependencies
- @apollo/server: ^4.3.0
- encoding: ^0.1.13
- graphql: ^16.6.0
- @prisma/client: ^4.8.1
- prisma: ^4.8.1