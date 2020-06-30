## Assignment Echobot :

## Installation ##

1. Install global npm packages: `npm install --global yarn nodemon`
2. Clone this repository in a folder
3. Install all server project dependencies: `npm install`
4. Install yarn: `npm install yarn --g`
5. Switch to client folder and install those dependencies: `cd echobotclient` and `npm install`


## Running ##
* To run the whole project, use following command in the project directory: `npm run dev`
* To run the server : `npm run server`
* To run the client : `npm run client`

The client is hosted on port `3000`.
Server is hosted on port `5000`


## Brief architectural overview ##
Globally, this project is split up in two separate parts:
* Server code: resident in the root folder: `./`
* Client code: resident in the echobotclient folder:  `.echobotclient/`

These two projects can communicate by means of standard HTTP-endpoints and sockets.

### Server code ###
The server code starts in `Server.js`.
* Express server is running on port `5000`, and web developmentt server API requests are proxied to API server.
* Socket.io is used for the message communication between Front end and backend.
* Socket connects and listen to new message from front end and responds to front end with same message via socket.

### Client code ###
The client just consists of a Single Page web Application (SPA) written using `React.js`.
Standard "create-react-app" is used to build this page.
Utilized 'react-chat-widget' library to build the chat window.

Noteworthy components include:
* `<App />`: This is the main component and functional based component.
It contains a chat widget where a user can send a message and server sends responds the user with same message.
* React application is hosted on default port `3000`, and Express back-end server is used with React.


## Production API
Run production deployment api use : `npm run prod` in the terminal.