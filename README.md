# Dionysus #

## Dionysus is a 'todo list' webapp based on a MEAN stack with user authentication. ##

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

### To get started: ###

* in `\` run `npm install`  
If you get errors, try `sudo npm install`

* in `\public` run `bower install`

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