# Parrot API

This project is an API built for the [Parrot](https://github.com/socorrosans/parrot) social network. The API allows users to register, login, post and view other user's posts. This API was made with the express library, sequelize, in addition to other libraries needed for authentication, such as jsonwebtoken, and bcryptjs.

To run this project, you need:
- Clone this repository;
- npm install to download dependencies;
- Go to the "database" folder;
- Copy sql script "project-parrot" and generate the database (MySQL);
- Still in the database folder, open the index.js and change "cfg" to your database settings;
- npm run dev to run the project;