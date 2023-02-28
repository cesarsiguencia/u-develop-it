# U Develop It

This is my first back end project using a SQL database. The SQL version of choice is MySQL and the Express package was used to populate and manipulate my database using RESTful APIs through CRUD methods. API endpoints are tested using Insomnia application since this app does not include a front end. 

U Develop It is a make believe web developer community in search of new club president. To select a president, the community decided to make MySQL database titled "election" to facilate the election process. The layout of the database is labeled below:


### Tables
1) Candidates
2) Parties (Candidates may or may not be part of a web development party, ex: "Heroes of HTML")
3) Voters 
4) Votes (Indicates which candidate the voter voted for with the use of primary keys)


### List of built APIs in this application
- GET (ALL candidates, ONE candidate, ALL parties, ONE party, ALL voters, ONE voter, ALL votes, ALL votes that show count per candidate and their affilated party if any)
- POST (ONE candidate, ONE voter, ONE vote) 
- PUT (CHANGE a candidate's affilated party, CHANGE voter's email address)
- DELETE (DELETE a candidate, DELETE a party, DELETE a voter)


### List of Foreign Keys
- Candidates refer to affilated party through the party's primary key
    - If a party is deleted, the candidate's party info will be set to NULL
- Votes refer to voter through the voter's primary key
    - Voters cannot vote more than once
    - If a voter leaves the club (DELETE route), the vote is deleted
- Votes refer to the candidate chosen by the voter through the candidate's primary key
    - If a candidate withdraws from the race (DELETE route), the vote is deleted


### Installation
1) Git clone or download the application and load on VSCode
2) Run 'npm install' in the Terminal, make sure MySQL and Express are installed
    - If this is your first time installing MySQL, please navigate to their documentation for proper installation into your computer and credential creation
3) Change your package.json scripts to your chosing, preferred to include "start" : "node server.js" as one of your scripts
4) Navigate to db/connection.js and include your MySQL user and password in the fields commented
5) Go to the MySQL shell in your terminal and type the following commands to download the original database from 'db'
    - SOURCE db/db.sql
    - SOURCE db/schema.sql
    - SOURCE db/seeds.sql
6) Install Insomnia and manually create the routes you wish to test
7) Quit the MySQl shell and run 'npm start' in the terminal. If port 3010 is in use, kill it or use another port


### Screenshots of Requests through Insomnia

![Screenshot 1](/media/sc-1.jpg) 


![Screenshot 2](/media/sc-2.jpg)