import React from 'react';

//Below is the heading  component that consists of the game's title. I've used headerStyles to assign some styling to the heading.

export default function Header() {
	const HeaderStyles = {
		paddingTop: '50px',
		fontSize: '55px',
		position: 'relative',
		lineHeight: '65px',
		color: '#555',
	};

	return (
		<>
			<div>
				<h1 style={HeaderStyles}>Rock-Paper-Scissors game</h1>
			</div>
		</>
	);
}
