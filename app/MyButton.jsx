import React from'react';

var styles = {
	marginRight: 0
};

export default class MyButton extends React.Component {
	constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
	onClick() {
		var movieId = this.props.movieId;
		this.props.searchById(movieId);
	}
	render() {
		return (
			<button 
				style={styles}
				onClick={this.onClick}>add to list</button>
		)
	}
	
}

MyButton.propTypes = {
	onClick: React.PropTypes.func.isRequired,
	movieId: React.PropTypes.string.isRequired
}