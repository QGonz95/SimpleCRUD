# SimpleCRUD
CRUD application

MARKDOWN:

If pushing from an existing local folder, copy HTTPS.
In the terminal of the correct folder:  
1) % git init -b main 
2) % git remote add origin <PASTE HTTPS>
3) % git add .
4) % git commit -m 'first commit'
5) % git push origin main

Create repository on Github. copy SSH KEY. 
In the terminal, make sure you are in the correct folder you want to copy the git repo in, then % git clone <PASTE SSH KEY>

In the terminal

// To create the server where the express routes will be programmed.
- % touch server.js 

// install node modules, and establishes server.js files as main instead of index.js when nodemon is running.  
- % npm init -y

// install express to create RESTful routes. RESTful routing is a set of standards used in many different languages to create efficient, reusable routes. It aims to map HTTP methods (GET, POST, PATCH, DELETE) and CRUD actions (Create, Read, Update, Destroy) together in a conventional pattern.
- % npm i express 

// install mongoose. I am working with mongoose update 7.0.3 so Model.find() functions do not accept call back functions. I am using async functions
- % npm i mongoose 

// install ejs (Embedded JavaScript). After creating views folder, touch .ejs files. Allows you to write JavaScript code in HTML only when placed between what are called Scriptlets (ex. <%js%> <%=js%> <%- js -%>)
- % npm i ejs

Folders created:
- controllers (maybe)
- models
- views
- views/partials
- public(for css)

Files created:
- server.js
- models/clients.js
- views/ edit.ejs
- views/ index.ejs
- views/ new.ejs
- views/ show.ejs