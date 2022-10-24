# Tournament-Organizer
  Tournament Organizer is a web-based application that provides an easy-to-use platform for creating and organizing sports tournaments. Many amateur sports lack organizations or resources to create, organize, and manage tournaments. Our app aims to make it easier for amateur sports groups to host tournaments, and for participants in those tournaments to have a central hub which contains all relevant information. 
  
  Tournament Organizers can use our application to register teams and their coaches, create tournament structures and team matchups, assign referees, keep track of equipment, create game summaries, and assign fields/athletic parks.  
  
  Players can sign in to see upcoming games, view fields, see other players, view game summaries, and see the tournaments they are participating in.  
  
  Users must sign up, and subsequently log in to use our application. In order to ensure the tournament is properly organized and resistant to tampering, Tournament      Organizers can only add, delete, or alter information relating to tournaments that they have created. Players are restricted to signing up, and viewing information relating to tournaments they are participating in, and thus cannot alter any information concerning those tournaments.  
  
  Tournament Organizer uses the Angular framework for organizing the front-end of our application, which was written in Typescript, HTML, and CSS. A RESTful API was implemented using the ASP.NET Core. This API acts as an indirection layer between our front-end service and our Microsoft SQL Server database. Stored procedures were used in order to prevent SQL injection attacks.  
  
## How To Run Tournament Organizer
First, there is some prerequisite software required. Primarily, you will need NodeJS and Node Package Manager (NPM) installed. Second, you will need Microsoft SQL Server Management Studio. Thirdly, though not strictly required, you should have Visual Studio 2022 installed. Next, you will need to fork this repository, and clone that repository to your local computer. Then, you will need to use NPM to install Bulma by typing:
```
npm install --save bulma
```
At this point, the front-end can be run by typing:
```
ng serve
```
By default, the node app will run on localhost:4200  

Next, use the .sql script found in the repository to create the database, schemas, and stored procedures. After that, launch Microsoft SQL Server Management Studio and connect to the database.  

Then, open the TournamentAPI.sln file with Visual Studio 2022. Open the AppSettings.json file, and configure the DevConnection string to target your SQL Server. Run the solution. This will run the API, which is defaulted to localhost:5131.  

Once all of these components are running, you are free to interact with the application.  
## Tournament Organizer in Action
### Landing Page
![Landing Page](/Images/Landing_Page.png "Landing Page")  
This is the landing page for the application. From here, users can register or login.
#### Tournament Organizer Example
##### Tournament Organizer Registration
![Tournament Organizer Registration Page](/Images/TO_Register.png "Tournament Organizer Registration Page")  
After clicking "Tournament Organizer Registration, the user is directed to this page. Here, they can create a username, password, and provide their first and last names.
##### Tournament Organizer Login
![Tournament Organizer Login Page](/Images/TO_Login.png "Tournament Organizer Login Page")  
After registering, a Tournament Organizer can login by clicking "Tournament Organizer Login", which will direct them to the page shown above. From there, they can provide their username and password to login in. This will direct them to the Tournament Organizer Landing Page.
##### Tournament Organizer Landing Page
![Tournament Organizer Landing Page](/Images/TO_Landing.png "Tournament Organizer Landing Page")  
Here, the Tournament Organizer is presented with a list off all of the functionality they have access to. By clicking any of the options, they will be directed to a subpage, where they can Add, Update, or Delete tuples from the database related to that header. In this example, the Tournament Organizer wishes to add a Tournament, and so clicks the "Tournament" button.  
##### Tournament Organizer - Tournament Page
![Tournament Organizer Tournament Page](/Images/TO_Tournament.png "Tournament Organizer Tournament Page")  
Here, the Tournament Organizer can choose to Add, Delete, or Update a Tournament. We will add a Tournament.
##### Tournament Organizer - Add Tournament Page
![Tournament Organizer Add Tournament Page](/Images/TO_Add_Tournament.png "Tournament Organizer Add Tournament page")
The Tournament Organizer then creates an ID number for the tournament, names the tournament, indicates the sport that will be played, adds start and end dates, supplies their username, which is accessed via a dropdown menu, and the ID of the Athletic Park the tournament will be hosted at, again via a dropdown menu.
##### Tournament Organizer - View Tournaments Page
![Tournament Organizer View Tournament Page](/Images/TO_View_Tournament.png "Tournament Organzier View Tournament Page")
The Tournament Organizer can view their active Tournaments as well. All other functionality the Tournament Organizer has access to is used in a similar manner.
#### Player Example
##### Player Registration
![Player Registration Page](/Images/P_Register.png "Player Registration")
The Player provides a username, password, first and last name, age, jersey number, team name, and position. They are then registered to use the application, and assigned to their specified team.
##### Player Login
![Player Login Page](/Images/P_Login.png "Player Login Page")
The Player then provides their username and password, and is logged in and taken to the Player Landing Page.
##### Player Landing Page
![Player Landing Page](/Images/P_Landing_Page.png "Player Landing Page")
Once at the landing page, the Player has access to a subset of the functionality Tournament Organizers do. In our example, the Player wishes to see the Teams registered in the Tournament they are playing in.
##### Player View Teams Page
![Player View Teams Page](/Images/P_View_Teams.png "Player View Teams Page")
After providing the ID of the Tournament they are interested via a dropdown, the Player is shown all Teams registered in that Tournament. All of other functionality available to the Player is used and accessed in a similar manner.

## More Information
  For a more detailed breakdown of functionality, design, and implementation, as well as a short user guide, please see the "Project Report.pdf" file in the repository.

