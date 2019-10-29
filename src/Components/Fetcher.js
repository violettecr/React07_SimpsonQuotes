import React from 'react';
import axios from 'axios';

class Fetcher extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: "",
			character: "",
			image: "",
			characterDirection: "",
		};
	}

	componentDidMount = () => {
		axios('https://quests.wilders.dev/simpsons-quotes/quotes')
		.then((response) =>  {
				
				const quotes = response.data[0].quote;
				const characters = response.data[0].character;
				const images = response.data[0].image;
				const charactersDirection = response.data[0].characterDirection;
			

			this.setState({
				quote: quotes,
				character: characters,
				image: images,
				characterDirection: charactersDirection,
			})
		})
	}

	render () {
		return(
			<div id="render">
				<button 
					type="button" 
					onClick={this.componentDidMount}
					>Refresh Page
				</button>
				<p>{this.state.character}</p>
				<img src={this.state.image} alt={this.state.characters} />
				<p>{this.state.quote}</p>
				<p>{this.state.characterDirection}</p>
			</div>
		)}
}


export default Fetcher;