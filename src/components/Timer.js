import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reset, stop, tick, start } from "../actions/clockActions";

class Timer extends Component {
	formatToClock = () => {
		const { timeLeft } = this.props;
		let minutes = Math.floor(timeLeft / 60);
		let seconds = Math.floor(timeLeft % 60);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		return { minutes, seconds };
	};

	timeout = () => {
		const { timeLeft, stop } = this.props;
		if (timeLeft <= 0) {
			stop();
		}
	};

	render() {
		const {
			timeLeft,
			reset,
			stop,
			tick,
			start,
			isPaused,
			isBreak
		} = this.props;
		let { minutes, seconds } = this.formatToClock();
		return (
			<div className="mx-auto">
				<h1 id="timer-label" className="display-3 text-center">
					Timer
				</h1>
				<h1 id="time-left" className="display-1 text-center">
					{minutes}:{seconds}
				</h1>
				<div className="btn-group w-100">
					<button
						className="btn btn-lg btn-success w-75"
						id="start_stop"
						onClick={isPaused ? start : stop}
					>
						{isPaused ? (
							<i className="fas fa-play" />
						) : (
							<i className="fas fa-pause" />
						)}
					</button>
					<button
						className="btn btn-lg btn-warning w-25"
						id="reset"
						onClick={reset}
					>
						<i className="fas fa-redo-alt" />
					</button>
				</div>
			</div>
		);
	}
}

Timer.propTypes = {
	reset: PropTypes.func.isRequired,
	timeLeft: PropTypes.number.isRequired,
	isPaused: PropTypes.bool.isRequired,
	isBreak: PropTypes.bool.isRequired,
	stop: PropTypes.func.isRequired,
	tick: PropTypes.func.isRequired,
	start: PropTypes.func.isRequired
};

const mapState = state => ({
	timeLeft: state.clock.timeLeft,
	isPaused: state.clock.isPaused,
	isBreak: state.clock.isBreak
});

const mapDispatch = {
	reset,
	stop,
	tick,
	start
};

export default connect(
	mapState,
	mapDispatch
)(Timer);
