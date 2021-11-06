import React from 'react';
//import Modal from 'react-bootstrap/Modal';
import { Button, Modal } from 'react-bootstrap';

//Below is my rules modal. A user can click the "Rules of the game" button if they'd to find out how to play the game.
//I've used a React Modal and Button.

class RulesModal extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false,
		};
	}

	handleModal() {
		this.setState({ show: !this.state.show });
	}

	render() {
		return (
			<div>
				<Button
					onClick={() => {
						this.handleModal();
					}}
				>
					RULES OF THE GAME
				</Button>
				<Modal show={this.state.show}>
					<Modal.Header>How to play Rock Paper Scissors</Modal.Header>
					<Modal.Body>
						<ol>
							<li>
								Rock crushes scissors, Scissors cuts paper, Paper wraps rock.
							</li>
							<li>
								During each round, choose the best tool between either rock,
								paper or scissors to win against your opponent ("computer").
							</li>
							<li>
								If you and your opponent choose the same tool then that's a draw
								and no one gets a point.
							</li>
							<li>
								Whoever selects the stronger tool for that round gets a point.
							</li>

							<li>The first player to reach 5 points WINS the game.</li>
							<li>
								Click the "restart game" button at the end of the game to play
								again.
							</li>
						</ol>
					</Modal.Body>
					<Modal.Footer>
						<Button
							onClick={() => {
								this.handleModal();
							}}
						>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default RulesModal;
