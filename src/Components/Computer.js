import React from 'react';
import rock from '../Images/rock.png';
import paper from '../Images/paper.png';
import scissors from '../Images/scissors.png';

//The below component will load the the opponents ("Computer") image. I've used the transform css property to get the image to face the same direction as the other players image so the direction of the hands makes sense more when the game is being played.

const Computer = ({ weapon }) => {
	const computerHand = {
		width: '250px',
		transform: 'rotateY(180deg)',
	};

	return (
		<div style={computerHand}>
			<img
				src={
					weapon === 'rock' ? rock : weapon === 'scissors' ? scissors : paper
				}
				alt="Rock Paper Scissors"
			/>
		</div>
	);
};

export default Computer;
