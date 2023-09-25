# Hangman
The Classic Game of Wordplay

&nbsp;
  
A web application game created using React.

Utilizes the random word API from 

    https://random-word-api.herokuapp.com/

to select words each round.

The words generated can be any in the English language, so they can be pretty obscure...  

... making this hangman game a challenge!

![image](https://github.com/jmorofsky/hangman/assets/80358703/aee1fa68-2f8a-4a60-bc13-9409d2fc54e2)
![image](https://github.com/jmorofsky/hangman/assets/80358703/d9a38bca-0385-4f4a-bfa7-3a706dfe27f7)
![image](https://github.com/jmorofsky/hangman/assets/80358703/88fe807e-51c2-4024-ab08-82d61ff237c8)

### Development

This project was designed and developed entirely by me, Jason Morofsky.

Before each round, a request is made to the random word API. This word is then used as the word to find in the round.

The current state of the game is saved in state. For example, pre-game, currently in game, and either won or lost. Whenever an event happens which causes the game to move to the next state, conditional rendering allows for new components to be displayed and old ones to disappear.

During play, guesses and strikes are also tracked using state. Once the player either correctly guesses the word or strikes one too many times, the game proceeds into either a success or fail state and the guesses and strikes are reset for the next round.

As for the design, I wanted to emulate an old timey newspaper feel, like something from the 19th century. I leaned towards a more western feel. Overall, I think the colors, font, and design help capture this feeling well. The animations add polish and help make the app feel more alive and like a game, rather than a website.

### Installation

To create a working build on your local machine, first clone the repository to your device.

    git clone https://github.com/jmorofsky/hangman
    
Navigate to the repository.

    cd hangman

Install dependencies.

    npm i
    
Start the development server.

    npm start
    
By default, the dev server is located on port 3000. You can access this server by typing

    localhost:3000

into your desired web browser.
