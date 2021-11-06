import React from 'react';
import rock from '../Images/rock.png';
import paper from '../Images/paper.png';
import scissors from '../Images/scissors.png';

//The below component will load the the players image.

const Player = ({ weapon }) => {
	const playerHand = {
		width: '250px',
	};
	return (
		<>
			<div style={playerHand}>
				<img
					src={
						weapon === 'rock' ? rock : weapon === 'scissors' ? scissors : paper
					}
					alt="Rock Paper Scissors"
				/>
			</div>
		</>
	);
};

export default Player;
