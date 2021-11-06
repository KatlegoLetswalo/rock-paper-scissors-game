import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Player from './Components/Player';
import Computer from './Components/Computer';
import './App.css';
import ConfettiAnimation from './Components/ConfettiAnimation';
import RulesModal from './Components/RulesModal';

//Below is my Rock paper scissors game.

const App = () => {
	//Setting state for the user choice, computer choice, points and results for the rock, paper scissors game.
	const [userChoice, setUserChoice] = useState('rock'); //Initial image of user choice will be the rock image
	const [computerChoice, setComputerChoice] = useState('rock');
	const [userPoints, setUserPoints] = useState(0); //Points will start at 0 until the game starts.
	const [computerPoints, setComputerPoints] = useState(0);
	const [turnResult, setTurnResult] = useState(null);
	const [result, setResult] = useState('');
	const [gameOver, setGameOver] = useState(false); //For when the game has ended. Set as false until the game ends then the restart button will appear.
	const choices = ['rock', 'paper', 'scissors']; //Choice options.

	//Below will handle the click when user clicks on either the rock, paper or scissors button.
	const handleClick = value => {
		setUserChoice(value);
		generateComputerChoice();
	};

	//The below will select a random choice for the computer.
	const generateComputerChoice = () => {
		const randomChoice = choices[Math.floor(Math.random() * choices.length)];
		setComputerChoice(randomChoice);
	};

	//The below will reload the page when the restart button is clicked after the game has ended.
	const reset = () => {
		window.location.reload();
	};

	//The below Use effect will render all the different states.

	useEffect(() => {
		const comboMoves = userChoice + computerChoice;
		if (userPoints <= 4 && computerPoints <= 4) {
			if (
				comboMoves === 'scissorspaper' ||
				comboMoves === 'rockscissors' ||
				comboMoves === 'paperrock'
			) {
				//If the user wins, they will get a point and a text which lets them know they have won a point.
				const updatedUserPoints = userPoints + 1;
				setUserPoints(updatedUserPoints);
				setTurnResult('You get a point! 😃');
				//If the user gets to 5 points they win the game and will get a text that alerts them.
				if (updatedUserPoints === 5) {
					setResult('You WIN!! 🎉🎉');
					const gameDone = true;
					setGameOver(gameDone);
					const gameText = false;
					setTurnResult(gameText);
				}
			}

			if (
				comboMoves === 'paperscissors' ||
				comboMoves === 'scissorsrock' ||
				comboMoves === 'rockpaper'
			) {
				//If computer wins, they get another point and a text that lets the user know that the computer got a point.
				const updatedComputerPoints = computerPoints + 1;
				setComputerPoints(updatedComputerPoints);
				setTurnResult('Computer gets a point! 🤖');

				//If the computer gets 5 points then it wins the round over the user.
				if (updatedComputerPoints === 5) {
					setResult('Sorry! Computer WON 🤖');
					const gameOff = true;
					setGameOver(gameOff);
					const gameText = false;
					setTurnResult(gameText);
				}
			}

			//If both the user and the computer choose the same item then its a tie and no one gets a point.

			if (
				comboMoves === 'paperpaper' ||
				comboMoves === 'rockrock' ||
				comboMoves === 'scissorsscissors'
			) {
				setTurnResult('Its a tie! No one gets a point 🥲');
			}
		} // eslint-disable-next-line
	}, [computerChoice, userChoice]);

	return (
		<div className="App">
			<div>{gameOver && <ConfettiAnimation />}</div>
			<Header />
			<div className="score">
				<h1> Your Points: {userPoints}</h1>
				<h1>Computer Points: {computerPoints}</h1>
			</div>

			<div className="choice">
				<div>
					<Player weapon={userChoice} />
				</div>
				<div>
					<Computer weapon={computerChoice} />
				</div>
			</div>

			<div className="button-div">
				{choices.map((choice, index) => (
					<button
						className="weaponBtn"
						key={index}
						onClick={() => handleClick(choice)}
						disabled={gameOver}
					>
						{choice}
					</button>
				))}
			</div>
			<div className="result">
				<h1>{turnResult}</h1>
			</div>
			<div className="finalresult">
				{gameOver && <h1>Final Result: {result}</h1>}
			</div>
			<div className="button-div">
				{gameOver && (
					<button className="restartBtn" onClick={() => reset()}>
						RESTART GAME
					</button>
				)}
			</div>
			<RulesModal />
		</div>
	);
};

export default App;
