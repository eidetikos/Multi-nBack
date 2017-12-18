# multi-N-back SYNOPSIS
Multi-N-back is a game based on the cognitive training game, Dual-N-Back, that has been scientifically proven to improve memory.  In the multi-N-back paradigm, two to five variates (audio, color, number, position, and/or shape)  are presented at the same time. N refers to how many previous stimuli in the sequence must be recalled. 

# MOTIVATION
This project is being created to showcase a full-stack web development.  The motivation behind this app is to affect our memories and fluid-intelligence in a positive manner.  Our hope is that others will share in our journey.

# USER'S ADVENTURE
- The user may visit the Dashboard and About pages at will.
- To play the game, the user will begin by registering an account with a unique name and password.
- He will then be asked to chose a game difficulty level: easy, medium, or hard.
- Next, the user will be asked to chose whether or not he would like to incorporate audio as one of his variates (audio on or off).
- Lastly, he will be asked to chose the number of variates he wishes to be shown during each sequence, between 2-4 (audio off) or 2-5 (audio on).
- Once the user submits his selections, the game begins, and the user is shown a series of variates at a specific rate, based on his selections. 
- At the end of the sequence, the user will be asked to recall the variate combination shown n places back in the overall sequence.
- Should the user answer correctly, he will be presented with his next sequence challenge, and this pattern will continue until he answers incorrectly.
- Should the user answer incorrectly, he will immediately be taken to his personal stats page, showing him a chart of his n-back per game played, his highest n-back achieved, and his average n-back achieved.
-  Once the user is taken to his personal stats, he will also be given the options to replay the game and/or change his chosen settings.

# STYLE
For the frontend development, we are using the React JavaScript library for building our user interface, Redux for our state management, and Promises and async-await to handle our asynchronous code. For the backend, we are using the Node.js extension, .mjs, to support our ES modules, express as our framework, and MongoDB for our database.  We use white space to separate our imports from the rest of the code and to separate grouped blocks of code.  We indent our code using 2 spaces on the frontend and 4 spaces on the backend.

## Requirements

MongoDB, latest stable version of Node.js 

## Installation


1. Clone repository.

    ```
    git clone https://github.com/eidetikos/multi-n-back 
    ```

1. Install dependencies.

    ```
    npm install
    ```

Server to run this app can be found at:

https://github.com/eidetikos/multi-n-back-api

installation of server is the same as above installation.

The default port is 3000.

## Usage

After installation, in the terminal type: `npm start`
After server installation, in the terminal type: `npm run start:watch`

and then open a browser to: `http://localhost:3000/`


# GROUP MEMBERS
Our group is called Eidetikos and we are David, Kate, and Zach.
