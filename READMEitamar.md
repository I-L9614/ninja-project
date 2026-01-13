first command: => install nestjs
npm install -g @nestjs/cli

second command: => create the project
nest new <project name> => to create new project inside the folder
nest new . => create the project on the corent folder

thied command: => get inside the project
cd <project name>

Fourth command: => start the project
code -r .
npm run start:dev

sixed command: => create episode/topics/config module file
nest generate module episodes
nest generate module topics
nest generate module config

Seventh command: => add controller/provider to the modul
nest generate controller <modul name> 
nest generate service <modul name>
both: nest g resource <modul name>

Eighth command: => create controller inside the episode module
nest generate controller episodes

Ninth  command: => create episode service
nest generate service episodes