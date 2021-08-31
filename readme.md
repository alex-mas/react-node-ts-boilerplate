# Project structure 

## /src
Here is where all your source code lies, it will be split between /client and /server

### /src/client
Here is where the source code for the front end lies

### /src/backend
Here is where the source code for the front end lies

## /tasks
Here you can place javascript files to perform tasks on the repo, like cleaning, building, executing, etc.. 

## webpack.config.js
This is the webpack configuration file for the project, it describes how your sources and static resouces get compiled into the actual code that will run

## babel.config.js
Configuration file required for jest to run properly

## .storybook
This folder defines configuration files required for storybook, here you can costumize the folder where the stories live, by default that is /src/client/stories but it can be changed easily.



# Testing
The following testing methods are configured: Storybook and jest. Jest can be used to test anything and Storybook is used to visually test react components
## Jest
Jest will detect any .test.js or .test.ts files and run them, so you are free to place them anywhere you want. However I would stick to one of the following methods
- Keep all test files on the same folder of the code they test
- Kepp all test files on a /tests folder at the root of the project
