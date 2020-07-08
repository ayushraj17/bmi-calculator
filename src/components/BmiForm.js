import React, { Component } from 'react';
import Form from './Form';
import { Grid, Typography, Paper } from '@material-ui/core';

class BmiForm extends Component {
	state = { result: 0 };
	bmiCal = (weight, height) => {
		let result = (weight / (height * height)).toFixed(2);
		this.setState({ result: result });
	};

	renderRange() {
		parseInt(this.state.result);
		if (this.state.result === 0) return 'ENTER NUMBERS ONLY';
		if (this.state.result > 35.0) return 'Severe Obesity';
		if (this.state.result > 30.0) return 'Obesity';
		if (this.state.result > 25.0) return 'OverWeight';
		if (this.state.result > 18.5) return 'Normal Weight';
		if (this.state.result < 18.5) return 'Underweight';
	}
	setResult = () => {
		this.setState({ result: 0 });
	};
	render() {
		return (
			<div>
				<Grid container spacing={0} direction="column" alignItems="center" justify="center">
					<Paper
						outlined
						elevation={2}
						style={{ background: 'whitesmoke', padding: '15px', marginTop: '100px' }}
					>
						<Grid container spacing={0} direction="column" alignItems="center" justify="center">
							<Grid item>
								<Typography variant="h6">Your BMI Index is: {this.state.result}</Typography>
							</Grid>
							<Grid item>
								<Typography variant="button">{this.renderRange()}</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Form bmiCal={this.bmiCal} setResult={this.setResult} />
						</Grid>
					</Paper>
				</Grid>
			</div>
		);
	}
}

export default BmiForm;
