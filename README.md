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
##Tournament Organizer in Action
  For a more detailed breakdown of functionality, design, and implementation, as well as a short user guide, please see the "Project Report.pdf" file in the repository.

