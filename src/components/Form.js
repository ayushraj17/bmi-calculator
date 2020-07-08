import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import Height from '@material-ui/icons/Height';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1)
	}
}));

const InputWithIcon = (props) => {
	const classes = useStyles();
	const [ height, setHeight ] = useState('');
	const [ weight, setWeight ] = useState('');
	const onFormSubmit = (e) => {
		e.preventDefault();
		props.bmiCal(weight, height / 100);
	};

	const renderButton = (height, weight) => {
		if (!(height && weight)) {
			return (
				<Button variant="contained" fullWidth disabled size="large">
					CALCULATE
				</Button>
			);
		}
		if (height && weight) {
			return (
				<Button type="submit" variant="contained" color="primary" size="large">
					CALCULATE
				</Button>
			);
		}
	};
	const renderDeleteButton = (height, weight) => {
		if (!(height || weight)) {
			return (
				<Button variant="contained" fullWidth disabled size="large">
					RESET
				</Button>
			);
		}
		if (height || weight) {
			return (
				<Button
					type="submit"
					variant="contained"
					color="secondary"
					onClick={() => {
						setWeight('');
						setHeight('');
						props.setResult();
					}}
					size="large"
				>
					RESET
				</Button>
			);
		}
	};
	return (
		<form onSubmit={(e) => onFormSubmit(e)}>
			<div>
				<div className={classes.margin}>
					<Grid container spacing={2} alignItems="flex-end">
						<Grid item>
							<EmojiPeople style={{ fontSize: 45 }} />
						</Grid>
						<Grid item>
							<TextField
								type="number"
								value={weight}
								autoComplete="off"
								id="input-with-icon-grid"
								label="Weight"
								variant="outlined"
								placeholder="55 kg"
								onChange={(e) => setWeight(e.target.value)}
							/>
						</Grid>
					</Grid>
				</div>
				<div className={classes.margin}>
					<Grid container spacing={2} alignItems="flex-end">
						<Grid item>
							<Height style={{ fontSize: 45 }} />
						</Grid>
						<Grid item>
							<TextField
								type="number"
								value={height}
								autoComplete="off"
								id="input-with-icon-grid"
								label="Height"
								variant="outlined"
								placeholder="155 cm"
								onChange={(e) => setHeight(e.target.value)}
							/>
						</Grid>
					</Grid>
				</div>
				<Grid container justify="space-around" spacing={4}>
					<Grid item>{renderButton(weight, height)}</Grid>
					<Grid item>{renderDeleteButton(weight, height)}</Grid>
				</Grid>
			</div>
		</form>
	);
};
export default InputWithIcon;
