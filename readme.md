make a DB with Mongo DB. 
    
    1. create a user/account  then sign in 
    2. create a cluster as a free user and install the extension in vs code 'MongoDB for VScode'. 
    3. then create a database and seed it will the needed entries by running the files in the following order by pressing the play button in the top right conner of each file
        - 'src/mongoDB_data_entries/create_database.mongodb'         
        - 'src/mongoDB_data_entries/create_users.mongodb'
    4. then create a .env file in the root of the project and fill in the following fields ...
    5. also create you will need to run 'npm init -y' and 'npm i express'

Or run ... file in vscode to seed in terminal

then fill in the atlas DB connection string in the .env file, a sample file has been provided.