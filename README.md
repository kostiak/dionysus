# Dionysus #

## Dionysus is a 'todo list' webapp based on a MEAN stack with user authentication. ##

***

I wrote this application while learning the Mongodb, Express, Angularjs, Node.js Stack. The application has user management and each user has a To-Do list in which he can add, edit and remove items.

#[Demo](https://dionysus-mean.herokuapp.com/)#

You can use the demo user:

email: demo@example.com     
password: Demo12 (capital D, case sensitive)

***

### Before you get started, make sure: ###

* Node.js is installed.   
To test, run `node -v`  

* npm is installed  
To test, run `npm -v`

* MongoDB is installed  
To test, run `mongod --version`

* MongoDB is not running as a service (it does by default)  
To stop it, run `sudo service mongod stop`

* grunt and karma are installed globally
To test, make sure `grunt` and `karma` are recognized commands.
If they are not, install by running `npm install -g grunt-cli` and `npm install -g karma-cli`.

### To get started: ###

* in `\` run `npm install`  
If you get errors, try `sudo npm install`

* in `\src` run `bower install`

***

### To develop: ###

run `grunt`  
open [http://localhost:9000](http://localhost:9000)

### To run: ###

run `grunt build`.  
The files will 'compile' and the database and server will start. By default it will be available at [http://localhost:8081](http://localhost:8081).

***

### Other useful grunt tasks: ###

* `grunt server` will start the public server
* `grunt only-build` will 'compile' the files for the public server without starting the database or the server
* `grunt test` to run karma tests without the rest of the default dev tasks (starting server, database, etc.)