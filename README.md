# SimpleCRUD
CRUD application

MARKDOWN:

If pushing from an existing local folder, copy HTTPS.
In the terminal of the correct folder:  
% git init -b main 
% git remote add origin <HTTPS>
% git add .
% git commit -m 'first commit'
% git push origin main

Create repository on Github. copy SHH KEY. 
In the terminal, make sure you are in the correct folder you want to copy the git repo in, then % git clone <SHH KEY>

In the terminal
1) % touch server.js // To create the server where the express routes will be programmed.
2) % npm init -y // install node modules, and establishes server.js files as main instead of index.js when nodemon is running. 
3) % npm i express // install express to create RESTful routes. RESTful routing is a set of standards used in many different languages to create efficient, reusable routes. It aims to map HTTP methods (GET, POST, PATCH, DELETE) and CRUD actions (Create, Read, Update, Destroy) together in a conventional pattern.
