import React from 'react';

var thumbStyle = {
	paddingLeft: '0',
    width: '20%',
    display: 'inline-block',
    boxSizing: 'border-box',
    marginTop: 0,
    float: 'left'
};
var imgStyle = {
	width: '100%'
};

export default class Thumb extends React.Component {
	render() {
		return (
			<div style={thumbStyle}>
				<img 
					src={this.props.src}
					style={imgStyle} 
					role="poster"
					alt="poster"
				/>
			</div>

		);
	}
}

Thumb.propTypes = {
	src: React.PropTypes.string.isRequired
}